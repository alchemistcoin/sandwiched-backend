const Web3 = require('web3');
const _ = require('lodash');

const getLogs = require('../src/getLogs');
const ABIs = require('../src/abis');
const addresses = require('../src/addresses');

let web3 = new Web3(process.env.WEB3_PROVIDER_URI);

async function getSwaps(wallet) {
  let fromBlock = 0;
  let maxBlock = 99999999;

  //    let bn = await web3.eth.getBlockNumber();
  //    console.log(`block number: ${bn}`);

  let all = await getLogs(web3, 11908528, 11908529, null, [
    ABIs.Binary.Swap,
    web3.eth.abi.encodeParameter('address', addresses.uniswapV2Router),
    web3.eth.abi.encodeParameter('address', wallet),
  ]);

  all = all.map((r) => {
    // raw:
    // {
    //   "address": "0x56feAccb7f750B997B36A68625C7C596F0B41A58",
    //   "blockHash": "0x8005027311cc4fde634c90b6f07dde31ef65137a5264d3dafc010c548e6c05a3",
    //   "blockNumber": 11908528,
    //   "data": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084b4d315f0ac4000000000000000000000000000000000000000000000000002a6cf1c3ab9ee414e10000000000000000000000000000000000000000000000000000000000000000",
    //   "logIndex": 89,
    //   "removed": false,
    //   "topics": [
    //     "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
    //     "0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d",
    //     "0x000000000000000000000000b1adceddb2941033a090dd166a462fe1c2029484"
    //   ],
    //   "transactionHash": "0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617",
    //   "transactionIndex": 62,
    //   "id": "log_56f1d452"
    // }
    // decoded:
    // {
    //   "0": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    //   "1": "0",
    //   "2": "153000000000000000000",
    //   "3": "782613521863157224673",
    //   "4": "0",
    //   "5": "0xB1AdceddB2941033a090dD166a462fe1c2029484",
    //   "__length__": 6,
    //   "sender": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    //   "amount0In": "0",
    //   "amount1In": "153000000000000000000",
    //   "amount0Out": "782613521863157224673",
    //   "amount1Out": "0",
    //   "to": "0xB1AdceddB2941033a090dD166a462fe1c2029484",
    //   "event": "Swap"
    // }

    let sigToName = _.invert(ABIs.Binary);
    let sigToJSON = _(sigToName)
      .mapValues((value) => ABIs.JSON[value])
      .value();

    let decoded = web3.eth.abi.decodeLog(
      sigToJSON[r.topics[0]],
      r.data,
      r.topics.slice(1),
    );
    decoded.event = sigToName[r.topics[0]];
    return {
      ...r,
      decoded: _.pick(decoded, [
        'sender',
        'amount0In',
        'amount1In',
        'amount0Out',
        'amount1Out',
        'to',
        'event',
      ]),
    };
  });
  return all;
}

// Start an IIFE to use `await` at the top level
(async function () {
  let res = {};
  let wallet = '0xb1adceddb2941033a090dd166a462fe1c2029484';
  let events = await getSwaps(wallet);
  res.events = events;
  console.log(JSON.stringify(res, null, 2));
  let sorted = _.sortBy(res.events, 'blockNumber', 'transactionIndex');
  if (!_.isEqual(sorted, res.events)) {
    // don't expect this to happen, but check for sanity.
    console.error('Not sorted!');
  }
})();
