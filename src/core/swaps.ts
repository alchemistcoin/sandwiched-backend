import Web3 from 'web3';
import { Log } from 'web3-core';
import _ from 'lodash';
import winston from 'winston';
import { BigNumber } from 'ethers';

import { getLogs } from './logs';
import * as ABIs from './abis';
import * as V3ABIs from './abisV3';

export enum SwapDir {
    ZeroToOne,
    OneToZero,
}

interface V2SwapParams {
    sender: string;
    amount0In: BigNumber; // switch to bignumber when we switch to ethers
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
    to: string;
    event: string;
    dir: SwapDir;
}

interface V3SwapParams {
    sender: string;
    recipient: string;
    amount0: BigNumber; // switch to bignumber when we switch to ethers
    amount1: BigNumber;
    sqrtPriceX96: BigNumber;
    liquidity: BigNumber;
    tick: BigNumber;
    event: string;
    dir: SwapDir;
}

export interface SwapLog extends Log {
    swap?: V2SwapParams;
    swapV3?: V3SwapParams;
}

export function decodeSwapLog(web3: Web3, log: Log): SwapLog {
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

    // const abi = [
    //     'event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)'
    // ]
    // const iface = new utils.Interface(abi)
    // const logDesc = iface.parseLog({topics: r.topics, data: r.data});
    // console.log("parsed log");
    // console.log(JSON.stringify(logDesc, null, 2));

    // console.log("decoded log");
    // console.log(JSON.stringify(iface.decodeEventLog("Swap", r.data, r.topics), null, 2));

    const decoded = web3.eth.abi.decodeLog(
        sigToJSON[log.topics[0]],
        log.data,
        log.topics.slice(1),
    );
    decoded.event = sigToName[log.topics[0]];
    const bignums = _.mapValues(
        _.pick(decoded, ['amount0In', 'amount1In', 'amount0Out', 'amount1Out']),
        BigNumber.from,
    );
    const dir = bignums.amount0In.isZero()
        ? SwapDir.OneToZero
        : SwapDir.ZeroToOne;

    return {
        ...log,
        swap: {
            ...bignums,
            ..._.pick(decoded, ['sender', 'to', 'event']),
            dir,
        },
    };
}

export function decodeV3SwapLog(web3: Web3, log: Log): SwapLog {
    const sigToName = _.invert(V3ABIs.Binary);
    const sigToJSON = _.chain(sigToName)
        .mapValues((value) => V3ABIs.JSON[value])
        .value();

    const decoded = web3.eth.abi.decodeLog(
        sigToJSON[log.topics[0]],
        log.data,
        log.topics.slice(1),
    );
    decoded.event = sigToName[log.topics[0]];

    const bignums = _.mapValues(
        _.pick(decoded, [
            'amount0',
            'amount1',
            'sqrtPriceX96',
            'liquidity',
            'tick',
        ]),
        BigNumber.from,
    );
    const dir = bignums.amount0.lt(bignums.amount1)
        ? SwapDir.OneToZero
        : SwapDir.ZeroToOne;

    return {
        ...log,
        swapV3: {
            ...bignums,
            ..._.pick(decoded, ['sender', 'recipient', 'event']),
            dir,
        },
    };
}

export async function getSwaps(
    web3: Web3,
    log: winston.Logger,
    pool: string = null,
    routers: string[] = null,
    wallet: string = null,
    fromBlock = 0,
    toBlock = 99999999,
): Promise<SwapLog[]> {
    const topics = [
        ABIs.Binary.Swap, // or with ethers: utils.id('Swap(address,uint256,uint256,uint256,uint256,address)')
        routers
            ? routers.map((router) =>
                  web3.eth.abi.encodeParameter('address', router),
              )
            : null,
        wallet ? web3.eth.abi.encodeParameter('address', wallet) : null,
    ];

    const all = await getLogs(web3, log, fromBlock, toBlock, pool, topics);

    const swaplogs: SwapLog[] = all.map((r) => decodeSwapLog(web3, r));
    const sorted = _.sortBy(swaplogs, 'blockNumber', 'transactionIndex');
    if (!_.isEqual(sorted, swaplogs)) {
        // don't expect this to happen, but check for sanity.
        throw 'Not sorted!';
    }
    return swaplogs;
}

export async function getV3Swaps(
    web3: Web3,
    log: winston.Logger,
    pool: string = null,
    routers: string[] = null,
    wallet: string = null,
    fromBlock = 0,
    toBlock = 99999999,
): Promise<SwapLog[]> {
    const topics = [
        V3ABIs.Binary.Swap, // or with ethers: utils.id('Swap(address,uint256,uint256,uint256,uint256,address)')
        routers
            ? routers.map((router) =>
                  web3.eth.abi.encodeParameter('address', router),
              )
            : null,
        wallet ? web3.eth.abi.encodeParameter('address', wallet) : null,
    ];

    const all = await getLogs(web3, log, fromBlock, toBlock, pool, topics);

    const swaplogs: SwapLog[] = all.map((r) => decodeV3SwapLog(web3, r));
    const sorted = _.sortBy(swaplogs, 'blockNumber', 'transactionIndex');
    if (!_.isEqual(sorted, swaplogs)) {
        // don't expect this to happen, but check for sanity.
        throw 'Not sorted!';
    }
    return swaplogs;
}
