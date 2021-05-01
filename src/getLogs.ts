import Web3 from 'web3';
import { Log } from 'web3-core';

import * as blocknumber from './blocknumber';

// this is slow and throws up "request rate exceeded" messages. so probably is using the default backend rather than alchemy. figure it out.
// import {ethers} from 'ethers';
// const provider = ethers.getDefaultProvider(undefined, {alchemy: process.env.WEB3_PROVIDER_URI, quorum: 1})

// recursive getLogs wrapper to handle calls that go over the event
// limit (some APIs error out on getLogs calls that would return more
// than 10k events).
export async function getLogs(
    web3: Web3,
    fromBlock: blocknumber.T,
    toBlock: blocknumber.T,
    address: string,
    topics: string[],
): Promise<Log[]> {
    if (!blocknumber.isValid(fromBlock)) {
        throw `invalid fromBlock ${fromBlock}`;
    }
    if (!blocknumber.isValid(toBlock)) {
        throw `invalid toBlock ${toBlock}`;
    }
    if (blocknumber.less(fromBlock, toBlock)) {
        try {
            return await web3.eth.getPastLogs({
                //            return await provider.getLogs({
                address,
                topics: topics,
                fromBlock,
                toBlock,
            });
        } catch (error) {
            console.log('failed!');
            if (!error.message.includes('Log response size exceeded')) {
                console.log(`unexpeted error ${error}`);
                throw error;
            }
            const midBlock =
                (blocknumber.toNumber(fromBlock) +
                    blocknumber.toNumber(toBlock)) >>
                1;
            const arr1 = await getLogs(
                web3,
                fromBlock,
                midBlock,
                address,
                topics,
            );
            const arr2 = await getLogs(
                web3,
                midBlock + 1,
                toBlock,
                address,
                topics,
            );
            return [...arr1, ...arr2];
        }
    }
    return [];
}
