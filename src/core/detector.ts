import Web3 from 'web3';
import winston from 'winston';
import _ from 'lodash';

import { addresses } from './addresses';
import { decodeSwapLog, getSwaps, SwapLog } from './swaps';
import { getTransfers, TransferLog } from './transfers';
import { Sandwich, findSandwich } from './sandwich';
import { PoolService } from '../services/pools';
import { SandwichCache } from '../services/sandwichcache';
import { uniswapPairs, sushiswapPairs } from './pair-lists';
import * as ABIs from './abis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type messageWriter = (o: any) => void;
const searchWindow = 10; // block range to search for sandwich close

export async function detectTransaction(
    web3: Web3,
    logger: winston.Logger,
    write: messageWriter,
    tx: string,
): Promise<void> {
    const receipt = await web3.eth.getTransactionReceipt(tx);
    if (receipt == null) {
        write({ message: `invalid tx: ${tx}` });
        return;
    }
    let swap: SwapLog;
    for (const log of receipt.logs) {
        if (log.topics.length && log.topics[0] == ABIs.Binary.Swap) {
            swap = decodeSwapLog(web3, log);
            break;
        }
    }
    if (swap == null) {
        write({ message: 'Error: transaction was not a swap?' });
        return;
    }
    let sws: Sandwich[];
    try {
        sws = await findSandwich(web3, logger, swap, searchWindow);
    } catch (e) {
        logger.error(e);
        return;
    }
    if (sws.length > 0) {
        sws.forEach(write);
    } else {
        write({ message: 'No sandwich found' });
    }
}

export async function detect(
    web3: Web3,
    logger: winston.Logger,
    write: messageWriter,
    wallet: string,
    fromBlock: number,
    toBlock: number,
): Promise<void> {
    wallet = wallet.toLowerCase();
    let cachedFromBlock = -1;
    const writeSandwich = (o: any) => {
        write(o);
        sandwiches.push(o);
    };
    const sandwiches = [];
    let cachedSandwiches = await SandwichCache.lookup(wallet);
    if (
        cachedSandwiches != null &&
        (fromBlock != cachedSandwiches.fromBlock ||
            toBlock < cachedSandwiches.toBlock)
    ) {
        // We only try to use the cache if the new range is
        // left-aligned with and wider than the cached range. This
        // covers the regular use case where the user requests "all
        // blocks" which goes from 0 to head. For the general case, we
        // could leverage the cache in situations where the is some
        // overlap between cache range and requested range, but this
        // is not of relevance at this point.
        SandwichCache.del(wallet);
        cachedSandwiches = null;
    }
    if (cachedSandwiches != null) {
        cachedFromBlock = cachedSandwiches.fromBlock;
        fromBlock = cachedSandwiches.toBlock;
        for (const sw of cachedSandwiches.sandwiches) {
            writeSandwich(sw);
        }
    }
    const swapsP = getSwaps(
        web3,
        logger,
        null, // all pools
        [addresses.uniswapV2Router, addresses.sushiswapV2Router],
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

    if (
        cachedSandwiches === null &&
        sandwiches.length + swapsAndTransfers.length == 0
    ) {
        write({
            message: `No uniswapV2 swaps found. (are you sure this address has uniswapV2 trades?)`,
        });
        return;
    }
    if (swapsAndTransfers.length != 0) {
        write({
            message: `Found ${swaps.length} uniswapV2 swaps and ${transfers.length} transfer. Now searching for sandwiches around these swaps.`,
            swaps: swaps.length,
            transfers: transfers.length,
        });
    }
    const isTransfer = (o: SwapLog | TransferLog): boolean => 'transfer' in o;

    const seen = {};
    for (const log of swapsAndTransfers) {
        const transfer = log as TransferLog;
        let swaps: SwapLog[] = [];
        if (isTransfer(log)) {
            // see if this transfer is to a known uniswap/sushiswap
            // pool, which would be a strong hint that this is a
            // swap. This is an optimization to avoid calling
            // getTransactionreceipt on every transfer we find, at the
            // cost of possibly missing sandwiches on extremely
            // obscure/low-volume pools.
            const maybePool = transfer.transfer.to.toLowerCase();
            if (
                !uniswapPairs.includes(maybePool) &&
                !sushiswapPairs.includes(maybePool) &&
                !(await PoolService.has(maybePool))
            ) {
                continue;
            }
            const receipt = await web3.eth.getTransactionReceipt(
                transfer.transactionHash,
            );
            for (const log of receipt.logs) {
                if (log.topics.length && log.topics[0] == ABIs.Binary.Swap) {
                    const swap = decodeSwapLog(web3, log);
                    swaps.push(swap);
                }
            }
        } else {
            swaps = [log as SwapLog];
        }
        for (const swap of swaps) {
            // we need to check and filter out dupes because the Transfers
            // path can flag swaps that we also end up finding
            // directly in the Swap path.
            if (seen[swap.transactionHash]) {
                continue;
            }
            let sws: Sandwich[];
            try {
                sws = await findSandwich(web3, logger, swap, searchWindow);
            } catch (e) {
                logger.error(e);
                continue;
            }
            if (sws.length) seen[swap.transactionHash] = 1;
            sws.forEach(writeSandwich);
        }
    }
    SandwichCache.cache(
        wallet,
        cachedFromBlock < 0 ? fromBlock : cachedFromBlock,
        toBlock,
        sandwiches,
    );

    if (sandwiches.length > 0) {
        write({
            message: `Found ${sandwiches.length} uniswapV2 sandwiches. Yum!`,
            count: sandwiches.length,
        });
    } else {
        write({ message: `Did not find any uniswapV2 sandwiches.` });
    }
}
