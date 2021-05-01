import Web3 from 'web3';
import { getSwaps } from './getSwaps';
import { findSandwich } from './findSandwich';

import yargs from 'yargs';

import { addresses } from '../src/addresses';


const argv = yargs
    .command('search <address>', 'search sandwiches for a wallet address', {})
    .option('web3_url', {
        description: 'the web3 URL to use (or set WEB3_PROVIDER_URI env var)',
        type: 'string',
    })
    .option('window', {
        description: 'search window size (in blocks)',
        type: 'number',
        default: 10
    })
    .option('from', {
        description: 'search from (block number)',
        type: 'number',
        default: 0
    })
    .option('to', {
        description: 'search to (block number)',
        default: 'latest'
    })
    .coerce('to', to => {
        if (typeof to == 'number') {
            return to;
        }
        if (to == 'latest') {
            return 'latest';
        }
        throw new Error('bad value for "to"');
    })
    .strict()
    .help()
      .alias('help', 'h')
      .demandCommand()
    .argv;


(async function () {
    const web3 = new Web3(argv.web3_url ? argv.web3_url : process.env.WEB3_PROVIDER_URI);
    const from = 0;
    const to = await web3.eth.getBlockNumber();
    const wallet = argv.address as string;
    const userSwaps = await getSwaps(
        web3,
        null, // all pools
        addresses.uniswapV2Router,
        wallet,
        from,
        to,
    );
    console.log(`Got ${userSwaps.length} swaps for ${wallet}`);
    for (const userSwap of userSwaps) {
        await findSandwich(web3, userSwap, argv.window);
    }
})();
