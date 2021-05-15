import express from 'express';
import helmet from 'helmet';
import * as morgan from './config/morgan';
import rateLimit from 'express-rate-limit';
import Web3 from 'web3';

import { config } from './config/config';
import { logger } from './config/logger';
import { getSwaps, SwapLog } from './core/swaps';
import { findSandwich } from './core/sandwich';
import { addresses } from '../src/core/addresses';
import { init as initPool } from '../src/core/pools';

export const app: express.Application = express();

const web3 = new Web3(config.web3_url);
initPool(web3, logger);

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// https://expressjs.com/en/guide/behind-proxies.html
app.enable('trust proxy');

const reqsPerInterval = config.env === 'test' ? 100 : 6;
app.use(
    rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        headers: false,
        max: reqsPerInterval,
        onLimitReached: function (req: express.Request) {
            logger.warn(`Limit reached for ${req.ip}`);
        },
    }),
);

app.use(helmet());

app.use(express.urlencoded({ extended: false }));

// enable cors
// app.use(cors());
// app.options('*', cors());

app.get('/', function (_req, res) {
    res.send('hello');
});

const catchAsync = (fn: express.Handler): express.Handler => (
    req,
    res,
    next,
) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

function jsonLine(o: any): string {
    return JSON.stringify(o) + '\n';
}

app.get(
    '/sandwiches/:wallet',
    catchAsync(async function (req, res, next): Promise<void> {
        const window = 10;
        const wallet = req.params.wallet;
        if (!web3.utils.isAddress(wallet)) {
            res.statusCode = 400;
            return next(new Error('bad wallet'));
        }
        let fromBlock = 0;
        let toBlock: number;
        if (req.query.fromBlock !== undefined) {
            const p = parseInt(req.query.fromBlock as string);
            if (isNaN(p)) {
                res.statusCode = 400;
                return next(new Error('bad fromBlock'));
            }
            fromBlock = p;
        }
        if (req.query.toBlock !== undefined) {
            const p = parseInt(req.query.toBlock as string);
            if (isNaN(p)) {
                res.statusCode = 400;
                return next(new Error('bad toBlock'));
            }
            toBlock = p;
        } else {
            toBlock = await web3.eth.getBlockNumber(); // xxx move this out of this handler... shouldn't make one request per block
        }

        res.set('Content-Type', 'application/x-ndjson');
        res.write(jsonLine({ message: 'Fetching transactions...' }));
        let swaps: SwapLog[];
        try {
            swaps = await getSwaps(
                web3,
                logger,
                null, // all pools
                addresses.uniswapV2Router,
                wallet,
                fromBlock,
                toBlock,
            );
        } catch (e) {
            res.write(
                jsonLine({ message: 'Error processing request', err: e }),
            );
            return res.end();
        }
        if (swaps.length == 0) {
            res.write(
                jsonLine({
                    message: `No uniswapV2 swaps found. (are you sure this address has uniswapV2 trades?)`,
                }),
            );
            res.end();
            return;
        }
        res.write(
            jsonLine({
                message: `Found ${swaps.length} uniswapV2 swaps. Now searching for sandwiches around these swaps.`,
                count: swaps.length,
            }),
        );
        let count = 0;
        for (const swap of swaps) {
            const sws = await findSandwich(web3, logger, swap, window);
            count += sws.length;
            sws.forEach((sw) => res.write(jsonLine(sw)));
        }
        if (count > 0) {
            res.write(
                jsonLine({
                    message: `Found ${count} uniswapV2 sandwiches. Yum!`,
                    count: count,
                }),
            );
        } else {
            res.write(
                jsonLine({ message: `Did not find any uniswapV2 sandwiches.` }),
            );
        }
        res.end();
    }),
);
/// catch 404 and forward to error handler
app.use(
    (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        res.status(404);
        next(new Error('Not Found'));
    },
);

app.use(((err, _req: express.Request, res: express.Response) => {
    err.statusCode = 500;
    if (config.env === 'production') {
        err.message = 'internal server error';
        err.stack = undefined;
    }

    if (config.env === 'development') {
        logger.error(err);
    }
    res.status(500).send(err);
}) as express.ErrorRequestHandler);
