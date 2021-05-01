import { getSwaps } from './pull-data';
import _ from 'lodash';

import { addresses } from '../src/addresses';

const wallet = '0xb1adceddb2941033a090dd166a462fe1c2029484';
const pool = '0x56feAccb7f750B997B36A68625C7C596F0B41A58'; // FARM

(async function () {
    const events = await getSwaps(pool, addresses.uniswapV2Router, wallet);
    const sorted = _.sortBy(events, 'blockNumber', 'transactionIndex');
    if (!_.isEqual(sorted, events)) {
        // don't expect this to happen, but check for sanity.
        console.error('Not sorted!');
    }
    console.log(JSON.stringify(sorted, null, 2));
})();
