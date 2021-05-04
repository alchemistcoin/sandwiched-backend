import Web3 from 'web3';
import winston from 'winston';
import yargs from 'yargs';

import { getSwaps } from '../src/getSwaps';
import { findSandwich } from '../src/findSandwich';
import { addresses } from '../src/addresses';

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
    level: 'info',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            ),
        }),
    ],
});

(async function () {
    const web3 = new Web3(
        argv.web3_url ? argv.web3_url : process.env.WEB3_PROVIDER_URI,
    );
    const from = argv.from;
    const to = argv.to == 'latest' ? await web3.eth.getBlockNumber() : argv.to;
    const wallet = argv.address as string;
    const userSwaps = await getSwaps(
        web3,
        log,
        null, // all pools
        addresses.uniswapV2Router,
        wallet,
        from,
        to,
    );
    log.info(
        `Found ${userSwaps.length} Uniswap swaps for ${wallet}... now searching for sandwiches on these swaps.`,
    );
    for (const userSwap of userSwaps) {
        await findSandwich(web3, log, userSwap, argv.window);
    }
})();
