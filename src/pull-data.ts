import Web3 from 'web3';
import { Log } from 'web3-core';
import _ from 'lodash';

import { getLogs } from './getLogs';
import * as ABIs from './abis';
import { BigNumber } from 'ethers';

const web3 = new Web3(process.env.WEB3_PROVIDER_URI);

interface SwapParams {
    sender: string;
    amount0In: BigNumber; // switch to bignumber when we switch to ethers
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
    to: string;
    event: string;
}

interface SwapLog extends Log {
    swap: SwapParams;
}

export async function getSwaps(
    pool: string = null,
    router: string = null,
    wallet: string = null,
): Promise<SwapLog[]> {
    //  const fromBlock = 0;
    //  const maxBlock = 99999999;

    //    let bn = await web3.eth.getBlockNumber();
    const topics = [
        ABIs.Binary.Swap,
        web3.eth.abi.encodeParameter('address', router),
        web3.eth.abi.encodeParameter('address', wallet),
    ];

    const all = await getLogs(web3, 11908528, 11908540, pool, topics);

    const mapped = all.map((r) => {
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

        const sigToName = _.invert(ABIs.Binary);
        const sigToJSON = _.chain(sigToName)
            .mapValues((value) => ABIs.JSON[value])
            .value();

        const decoded = web3.eth.abi.decodeLog(
            sigToJSON[r.topics[0]],
            r.data,
            r.topics.slice(1),
        );
        decoded.event = sigToName[r.topics[0]];
        const bignums = _.mapValues(
            _.pick(decoded, [
                'amount0In',
                'amount1In',
                'amount0Out',
                'amount1Out',
            ]),
            BigNumber.from,
        );
        return {
            ...r,
            swap: {
                ...bignums,
                ..._.pick(decoded, ['sender', 'to', 'event']),
            },
        };
    });
    return mapped;
}
