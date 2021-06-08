import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as morgan from './config/morgan';
import * as redis from 'redis';
import rateLimit from 'express-rate-limit';
import Web3 from 'web3';

import { config } from './config/config';
import { logger } from './config/logger';
import { detect } from './core/detector';
import init from './services/init';

export const app: express.Application = express();

const web3 = new Web3(config.web3_url);

for (const item in config) {
    logger.info(`${item}: ${config[item]}`);
}

(async () => {
    try {
        await init(web3, logger, redis.createClient(config.redis_url));
    } catch (e) {
        logger.error('calling init', e);
    }
})();

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

app.use(cors());
app.options('*', cors());

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonLine(o: any): string {
    return JSON.stringify(o) + '\n';
}

app.get(
    '/sandwiches/:wallet',
    catchAsync(async function (req, res, next): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const write = (obj: any) => {
            res.write(jsonLine(obj));
        };
        let wallet = req.params.wallet;
        if (!web3.utils.isAddress(wallet) && !wallet.endsWith('.eth')) {
            res.statusCode = 400;
            return next(new Error('bad wallet'));
        }
        if (wallet.endsWith('.eth')) {
            try {
                wallet = await web3.eth.ens.getAddress(wallet);
                console.log(`got ${wallet}`);
            } catch (error) {
                res.statusCode = 400;
                return next(new Error('bad wallet'));
            }
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
        write({ message: 'Fetching transactions...' });
        await detect(web3, logger, write, wallet, fromBlock, toBlock);

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(((err, _req: express.Request, res: express.Response, _next) => {
    logger.error(err);
    if (res.statusCode !== undefined) {
        if (res.headersSent) {
            res.write(err.toString());
            return;
        }
        res.json(err.toString());
        return;
    }
    err.statusCode = 500;
    if (config.env === 'production') {
        err.message = 'internal server error';
        err.stack = undefined;
    }

    res.status(500).json(err);
}) as express.ErrorRequestHandler);
