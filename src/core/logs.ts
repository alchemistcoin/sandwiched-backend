import Web3 from 'web3';
import { Log } from 'web3-core';
import winston from 'winston';

import * as blocknumber from './blocknumber';

// this is slow and throws up "request rate exceeded" messages. so probably is using the default backend rather than alchemy. figure it out.
// import {ethers} from 'ethers';
// const provider = ethers.getDefaultProvider(undefined, {alchemy: process.env.WEB3_PROVIDER_URI, quorum: 1})

function sizeExceeded(e: Error): boolean {
    // sadly, the only way to infer that an error is due to response size
    // exceeded is via this crufy provider-specific check.

    // alchemy
    if (e.message.includes('Log response size exceeded')) {
        return true;
    }

    // infura
    if (e.message.includes('query returned more than')) {
        return true;
    }
    return false;
}

// recursive getLogs wrapper to handle calls that go over the event
// limit (some APIs error out on getLogs calls that would return more
// than 10k events).
export async function getLogs(
    web3: Web3,
    log: winston.Logger,
    fromBlock: blocknumber.T,
    toBlock: blocknumber.T,
    address: string,
    topics: Array<string | string[] | null>,
    depth = 4,
): Promise<Log[]> {
    if (!blocknumber.isValid(fromBlock)) {
        throw `invalid fromBlock ${fromBlock}`;
    }
    if (!blocknumber.isValid(toBlock)) {
        throw `invalid toBlock ${toBlock}`;
    }
    if (blocknumber.less(fromBlock, toBlock)) {
        try {
            log.debug(`getLogs: ${address} ${fromBlock} ${toBlock}`);
            return await web3.eth.getPastLogs({
                address,
                topics: topics,
                fromBlock,
                toBlock,
            });
        } catch (error) {
            if (depth == 0) {
                return [];
            }
            if (!sizeExceeded(error)) {
                log.error(error);
                return [];
            }
            const midBlock =
                (blocknumber.toNumber(fromBlock) +
                    blocknumber.toNumber(toBlock)) >>
                1;
            const arr2 =
                (await getLogs(
                    web3,
                    log,
                    midBlock + 1,
                    toBlock,
                    address,
                    topics,
                    depth - 1,
                )) || [];
            const arr1 =
                (await getLogs(
                    web3,
                    log,
                    fromBlock,
                    midBlock,
                    address,
                    topics,
                    depth - 1,
                )) || [];
            return [...arr1, ...arr2];
        }
    }
    return [];
}
