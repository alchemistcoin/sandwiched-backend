import express from 'express';
import helmet from 'helmet';
import * as morgan from './config/morgan';
import rateLimit from 'express-rate-limit';
import Web3 from 'web3';

import { config } from './config/config';
import { logger } from './config/logger';
import { getSwaps } from './core/swaps';
import { findSandwich } from './core/sandwich';
import { addresses } from '../src/core/addresses';

export const app: express.Application = express();

const web3 = new Web3(config.web3_url);

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// https://expressjs.com/en/guide/behind-proxies.html
app.enable('trust proxy');

app.use(
    rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        headers: false,
        max: 6,
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
    return JSON.stringify(o, null, 2) + '\n';
}

app.get(
    '/sandwiches/:wallet',
    catchAsync(async function (req, res): Promise<void> {
        const window = 10;
        const from = 0;
        res.set('Content-Type', 'application/x-ndjson');
        res.write(jsonLine({ message: 'fetching transactions' }));
        const to = await web3.eth.getBlockNumber(); // xxx move this out... shouldn't make one request per block
        const wallet = req.params.wallet;
        let swaps = await getSwaps(
            web3,
            logger,
            null, // all pools
            addresses.uniswapV2Router,
            wallet,
            from,
            to,
        );
        res.write(jsonLine({ message: 'found swaps', count: swaps.length }));
        for (const swap of swaps) {
            const sws = await findSandwich(web3, logger, swap, window);
            sws.forEach((sw) => res.write(jsonLine(sw)));
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
