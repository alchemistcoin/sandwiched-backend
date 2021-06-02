import Web3 from 'web3';
import winston from 'winston';
import _ from 'lodash';

import { addresses } from './addresses';
import { decodeSwapLog, getSwaps, SwapLog } from './swaps';
import { getTransfers, TransferLog } from './transfers';
import { findSandwich } from './sandwich';
import { PoolCache } from './pools';
import { uniswapPairs } from './uniswap-pair-list';
import * as ABIs from './abis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type messageWriter = (o: any) => void;

export async function detect(
    web3: Web3,
    logger: winston.Logger,
    write: messageWriter,
    wallet: string,
    fromBlock: number,
    toBlock: number,
): Promise<void> {
    const window = 10;
    const swapsP = getSwaps(
        web3,
        logger,
        null, // all pools
        addresses.uniswapV2Router,
        wallet,
        fromBlock,
        toBlock,
    );
    const transfersP = getTransfers(
        web3,
        logger,
        null,
        wallet,
        null,
        fromBlock,
        toBlock,
    );
    let swaps: SwapLog[];
    let transfers: TransferLog[];
    // A little explanation on why we need transfers:
    // SwapExactTokenForEth events have the router in both "to" and "from"
    // fields, unlike the other swap types where "to" has the user address. So the best we can do here is
    // (1) Search for all Transfer logs
    // (2) For each Transfer log that was emitted by a known uniswap pool addr,
    // get the other logs for that transaction, and see if there is a
    // Swap. If so, we can then check this swap like for the others that we
    // found above.
    // Note that checking if it was "emitted by a known pool addr" is an
    // optimization to avoid doing one web3 call per transfer, as some
    // wallets may have many more transfers than swaps. The flipside is that
    // we may miss some swaps.
    try {
        [swaps, transfers] = await Promise.all([swapsP, transfersP]);
    } catch (e) {
        write({ message: 'Error processing request', err: e });
        return;
    }
    let swapsAndTransfers: (SwapLog | TransferLog)[] = (swaps as (
        | SwapLog
        | TransferLog
    )[]).concat(transfers);
    swapsAndTransfers = _.sortBy(swapsAndTransfers, [
        function (o) {
            return o.blockNumber;
        },
        function (o) {
            return o.transactionIndex;
        },
    ]);

    if (swapsAndTransfers.length == 0) {
        write({
            message: `No uniswapV2 swaps found. (are you sure this address has uniswapV2 trades?)`,
        });
        return;
    }
    write({
        message: `Found ${swapsAndTransfers.length} uniswapV2 swaps and transfers. Now searching for sandwiches around these swaps.`,
        count: swapsAndTransfers.length,
    });

    const isTransfer = (o: SwapLog | TransferLog): boolean => 'transfer' in o;

    let count = 0;
    const seen = {};
    for (const log of swapsAndTransfers) {
        const transfer = log as TransferLog;
        let swaps: SwapLog[] = [];
        if (isTransfer(log)) {
            // see if this transfer is to a known uniswap pool, which would
            // be a strong hint that this is a swap. This is an optimization
            // to avoid calling getTransactionreceipt on every transfer we find.
            const maybePool = transfer.transfer.to.toLowerCase();
            if (
                !uniswapPairs.includes(maybePool) &&
                !PoolCache.lookup(maybePool)
            ) {
                continue;
            }
            const receipt = await web3.eth.getTransactionReceipt(
                transfer.transactionHash,
            );
            for (const log of receipt.logs) {
                if (log.topics.length && log.topics[0] == ABIs.Binary.Swap) {
                    swaps.push(decodeSwapLog(web3, log));
                }
            }
        } else {
            swaps = [log as SwapLog];
        }
        for (const swap of swaps) {
            // we need to check and filter out dupes because the Transfers
            // path can flag swaps that we also end up finding
            // directly in the Swap path.
            if (seen[swap.transactionHash] !== undefined) {
                continue;
            }
            seen[swap.transactionHash] = 1;
            const sws = await findSandwich(web3, logger, swap, window);
            count += sws.length;
            sws.forEach(write);
        }
    }
    if (count > 0) {
        write({
            message: `Found ${count} uniswapV2 sandwiches. Yum!`,
            count: count,
        });
    } else {
        write({ message: `Did not find any uniswapV2 sandwiches.` });
    }
}
