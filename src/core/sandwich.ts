import Web3 from 'web3';
import winston from 'winston';
import { utils, BigNumber } from 'ethers';

import { getSwaps, SwapLog, SwapDir } from './swaps';
import { Pool } from './pools';
import { Block } from './blocks';

// temp for CLI... eventually this should just return sandwiches as it
// finds them (EventEmitter?) and let the caller do what they want,
// e.g. return to client.
function logWeird(log: winston.Logger, msg: string, txs: Array<string>) {
    log.warn(`Weird: ${msg} (txs ${txs}`);
}

interface Profit {
    amount: string;
    currency: string;
}

interface SwapInfo {
    tx: string;
    ts: string;
    amountIn: string;
    currencyIn: string;
    amountOut: string;
    currencyOut: string;
}

async function SwapInfoFromLog(log: SwapLog): Promise<SwapInfo> {
    const pool = await Pool.lookupOrCreate(log.address);
    if (pool === null) {
        throw new Error('null pool');
    }

    const block = await Block.lookupOrCreate(log.blockNumber);
    const ts =
        typeof block.timestamp === 'string'
            ? block.timestamp
            : new Date(block.timestamp * 1000).toUTCString();

    const [amountIn, currencyIn] = log.swap.amount0In.isZero()
        ? [
              utils.formatUnits(log.swap.amount1In, pool.token1.decimals),
              pool.token1.symbol,
          ]
        : [
              utils.formatUnits(log.swap.amount0In, pool.token0.decimals),
              pool.token0.symbol,
          ];

    const [amountOut, currencyOut] = log.swap.amount0Out.isZero()
        ? [
              utils.formatUnits(log.swap.amount1Out, pool.token1.decimals),
              pool.token1.symbol,
          ]
        : [
              utils.formatUnits(log.swap.amount0Out, pool.token0.decimals),
              pool.token0.symbol,
          ];

    return {
        tx: log.transactionHash,
        ts,
        amountIn,
        currencyIn,
        amountOut,
        currencyOut,
    };
}

export interface Sandwich {
    message: string;
    open: SwapInfo;
    target: SwapInfo;
    close: SwapInfo;
    profit: Profit;
    profit2: Profit;
    pool: string;
    mev: boolean;
}

const bundle_limit = 5;

export async function findSandwich(
    web3: Web3,
    log: winston.Logger,
    target: SwapLog,
    window = 10,
): Promise<Sandwich[]> {
    const swaps = await getSwaps(
        web3,
        log,
        target.address,
        null,
        null,
        target.blockNumber,
        target.blockNumber + window,
    );
    const res: Sandwich[] = [];
    const openCandidates = swaps.filter((cand) => {
        return (
            cand.swap.dir == target.swap.dir &&
            cand.blockNumber == target.blockNumber &&
            cand.transactionIndex < target.transactionIndex
        );
    });
    for (const open of openCandidates) {
        const closes = swaps.filter((cand) => {
            return (
                cand.swap.dir != open.swap.dir &&
                cand.swap.to == open.swap.to &&
                (cand.blockNumber > target.blockNumber ||
                    cand.transactionIndex > target.transactionIndex)
            );
        });
        if (closes.length == 0) {
            // not a sandwich open
            continue;
        }
        if (closes.length > 1) {
            logMultipleClose(log, open, target, closes);
            continue;
        }

        const close = closes[0];
        const pool = await Pool.lookupOrCreate(open.address);
        if (pool === null) {
            throw new Error('null pool');
        }
        const profits = computeProfits(open, close, pool);
        let mev = false;
        if (target.transactionIndex <= bundle_limit) {
            const tx = await web3.eth.getTransaction(open.transactionHash);
            if (parseInt(tx.gasPrice) == 0) {
                mev = true;
            }
        }
        const [openSI, targetSI, closeSI] = await Promise.all([
            SwapInfoFromLog(open),
            SwapInfoFromLog(target),
            SwapInfoFromLog(close),
        ]);
        res.push({
            message: 'Sandwich found',
            open: openSI,
            target: targetSI,
            close: closeSI,
            profit: profits[0],
            profit2: profits[1],
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            mev,
        });
    }
    return res;
}

function computeProfits(open: SwapLog, close: SwapLog, pool: Pool): Profit[] {
    // "forward" is the natural profit-taking direction
    // - open "swap x tok1 for n tok2",
    // - (target swap tok1 for tok2)
    // - close "swap n tok2 for y tok1"
    // where y-x is the profit, in tok1. (This makes most sense when tok1 is
    // ETH).
    // But it is also possible to take a profit in the "backward" direction:
    // - open "swap n tok1 for x tok2",
    // - (target swap tok1 for tok2)
    // - close "swap y tok2 for n tok1"
    // where x-y is the profit, in tok2. (This makes most sense when tok2 is ETH, and
    // the transaction being sandwiched is swapExactTokensForEth.)

    let forward: Profit;
    let backward: Profit;
    let p: BigNumber;
    switch (open.swap.dir) {
        case SwapDir.ZeroToOne:
            p = close.swap.amount0Out.sub(open.swap.amount0In);
            forward = {
                amount: utils.formatUnits(p, pool.token0.decimals),
                currency: pool.token0.symbol,
            };
            p = open.swap.amount1Out.sub(close.swap.amount1In);
            backward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
            };
            break;
        case SwapDir.OneToZero:
            p = close.swap.amount1Out.sub(open.swap.amount1In);
            forward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
            };
            p = open.swap.amount0Out.sub(close.swap.amount0In);
            backward = {
                amount: utils.formatUnits(p, pool.token0.decimals),
                currency: pool.token0.symbol,
            };
    }
    if (backward.amount == '0.0') {
        return [forward];
    }
    return [forward, backward];
}

function logMultipleClose(
    log: winston.Logger,
    open: SwapLog,
    target: SwapLog,
    closes: SwapLog[],
): void {
    logWeird(log, 'multiple closes for same open', [
        open.transactionHash,
        target.transactionHash,
        ...closes.map((close) => close.transactionHash),
    ]);
}
