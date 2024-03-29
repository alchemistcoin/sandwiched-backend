import Web3 from 'web3';
import winston from 'winston';
import yargs from 'yargs';
import * as redis from 'redis';

import { config } from '../src/config/config';
import { detect } from '../src/core/detector';
import init from '../src/services/init';

const argv = yargs
    .command('search <address>', 'search for sandwiches', {})
    .option('web3_url', {
        description: 'the web3 URL to use (or set WEB3_PROVIDER_URI env var)',
        type: 'string',
    })
    .option('window', {
        description: 'search window size (in blocks)',
        type: 'number',
        default: 10,
    })
    .option('from', {
        description: 'search from (block number)',
        type: 'number',
        default: 0,
    })
    .option('to', {
        description: 'search to (block number)',
        default: 'latest',
    })
    .coerce('to', (to) => {
        if (typeof to == 'number') {
            return to;
        }
        if (to == 'latest') {
            return 'latest';
        }
        throw new Error('bad value for "to"');
    })
    .strict()
    .version(false)
    .help()
    .alias('help', 'h')
    .demandCommand().argv;

const log = winston.createLogger({
    level: config.env === 'development' ? 'debug' : 'info',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports: [new winston.transports.Console()],
});

(async function () {
    const web3 = new Web3(
        argv.web3_url ? argv.web3_url : process.env.WEB3_PROVIDER_URI,
    );
    await init(web3, log, redis.createClient());

    const from = argv.from;
    const to = argv.to == 'latest' ? await web3.eth.getBlockNumber() : argv.to;
    const wallet = argv.address as string;

    await detect(web3, log, (o) => console.log(o), wallet, from, to);
})();
