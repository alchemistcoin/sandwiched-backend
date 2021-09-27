import Web3 from 'web3';
import winston from 'winston';
import { utils, BigNumber } from 'ethers';

import { getSwaps, SwapLog, SwapDir, getV3Swaps } from './swaps';
import { Pool, PoolService } from '../services/pools';
import { BlockService } from '../services/blocks';

// temp for CLI... eventually this should just return sandwiches as it
// finds them (EventEmitter?) and let the caller do what they want,
// e.g. return to client.
function logWeird(log: winston.Logger, msg: string, txs: Array<string>) {
    log.warn(`Weird: ${msg} (txs ${txs}`);
}

interface Profit {
    amount: string;
    currency: string;
    cgId: string;
}

interface SwapInfo {
    tx: string;
    ts: string;
    amountIn: string;
    amountInRaw: BigNumber;
    currencyIn: string;
    currencyInAddress: string;
    amountOut: string;
    amountOutRaw: BigNumber;
    currencyOut: string;
    currencyOutAddress: string;
}

async function SwapInfoFromLog(log: SwapLog): Promise<SwapInfo> {
    const pool = await PoolService.lookup(log.address);
    if (pool === null) {
        throw new Error('null pool');
    }

    const block = await BlockService.lookup(log.blockNumber);
    const ts =
        typeof block.timestamp === 'string'
            ? block.timestamp
            : new Date(block.timestamp * 1000).toUTCString();

    const [
        amountIn,
        amountInRaw,
        currencyIn,
        currencyInAddress,
    ] = log.swap.amount0In.isZero()
        ? [
              utils.formatUnits(log.swap.amount1In, pool.token1.decimals),
              log.swap.amount1In,
              pool.token1.symbol,
              pool.token1.address,
          ]
        : [
              utils.formatUnits(log.swap.amount0In, pool.token0.decimals),
              log.swap.amount0In,
              pool.token0.symbol,
              pool.token0.address,
          ];

    const [
        amountOut,
        amountOutRaw,
        currencyOut,
        currencyOutAddress,
    ] = log.swap.amount0Out.isZero()
        ? [
              utils.formatUnits(log.swap.amount1Out, pool.token1.decimals),
              log.swap.amount1Out,
              pool.token1.symbol,
              pool.token1.address,
          ]
        : [
              utils.formatUnits(log.swap.amount0Out, pool.token0.decimals),
              log.swap.amount0Out,
              pool.token0.symbol,
              pool.token0.address,
          ];

    return {
        tx: log.transactionHash,
        ts,
        amountIn,
        amountInRaw,
        currencyIn,
        currencyInAddress,
        amountOut,
        amountOutRaw,
        currencyOut,
        currencyOutAddress,
    };
}

async function SwapV3InfoFromLog(log: SwapLog): Promise<SwapInfo> {
    const pool = await PoolService.lookup(log.address);
    if (pool === null) {
        throw new Error('null pool');
    }

    const block = await BlockService.lookup(log.blockNumber);
    const ts =
        typeof block.timestamp === 'string'
            ? block.timestamp
            : new Date(block.timestamp * 1000).toUTCString();
    const [
        amountIn,
        amountInRaw,
        currencyIn,
        currencyInAddress,
    ] = log.swapV3.amount0.lt(log.swapV3.amount1)
        ? [
              utils.formatUnits(log.swapV3.amount1, pool.token1.decimals),
              log.swapV3.amount1,
              pool.token1.symbol,
              pool.token1.address,
          ]
        : [
              utils.formatUnits(log.swapV3.amount0, pool.token0.decimals),
              log.swapV3.amount0,
              pool.token0.symbol,
              pool.token0.address,
          ];

    const [
        amountOut,
        amountOutRaw,
        currencyOut,
        currencyOutAddress,
    ] = log.swapV3.amount0.gt(log.swapV3.amount1)
        ? [
              utils.formatUnits(
                  log.swapV3.amount1.mul('-1'),
                  pool.token1.decimals,
              ),
              log.swapV3.amount1,
              pool.token1.symbol,
              pool.token1.address,
          ]
        : [
              utils.formatUnits(
                  log.swapV3.amount0.mul('-1'),
                  pool.token0.decimals,
              ),
              log.swapV3.amount0,
              pool.token0.symbol,
              pool.token0.address,
          ];

    return {
        tx: log.transactionHash,
        ts,
        amountIn,
        amountInRaw,
        currencyIn,
        currencyInAddress,
        amountOut,
        amountOutRaw,
        currencyOut,
        currencyOutAddress,
    };
}

export interface Sandwich {
    message: string;
    ts: string;
    target: SwapInfo;
    pool: string;
    dex: string;
    open?: SwapInfo;
    close?: SwapInfo;
    profit?: Profit;
    profit2?: Profit;
    mev?: boolean;
}

const bundle_limit = 5;

export async function findV3Sandwich(
    web3: Web3,
    log: winston.Logger,
    target: SwapLog,
    window = 10,
): Promise<Sandwich[]> {
    const swaps = await getV3Swaps(
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
            cand.swapV3.dir == target.swapV3.dir &&
            cand.blockNumber == target.blockNumber &&
            cand.transactionIndex < target.transactionIndex
        );
    });
    const pool = await PoolService.lookup(target.address);
    const targetSI = await SwapV3InfoFromLog(target);
    for (const open of openCandidates) {
        const closes = swaps.filter((cand) => {
            return (
                cand.swapV3.dir != open.swapV3.dir &&
                cand.swapV3.recipient == open.swapV3.recipient &&
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
        if (checkMismatchedV3(open, close)) {
            continue;
        }

        if (pool === null) {
            throw new Error('null pool');
        }
        const profits = computeProfitsV3(open, close, pool);
        const [openSI, closeSI] = await Promise.all([
            SwapV3InfoFromLog(open),
            SwapV3InfoFromLog(close),
        ]);

        if (checkProfitTooBig(targetSI, profits)) {
            continue;
        }
        let mev = false;
        if (target.transactionIndex <= bundle_limit) {
            const tx = await web3.eth.getTransaction(open.transactionHash);
            if (parseInt(tx.gasPrice) == 0) {
                mev = true;
            }
        }
        const sw: Sandwich = {
            message: 'Sandwich found',
            ts: targetSI.ts,
            open: openSI,
            target: targetSI,
            close: closeSI,
            profit: profits[0],
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            dex: pool.dex,
            mev,
        };
        if (profits[1] != undefined) {
            sw.profit2 = profits[1];
        }
        res.push(sw);
    }
    if (!res.length) {
        const sw: Sandwich = {
            message: 'No sandwich found',
            ts: targetSI.ts,
            target: targetSI,
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            dex: pool.dex,
        };
        res.push(sw);
    }
    return res;
}

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

    const pool = await PoolService.lookup(target.address);
    const targetSI = await SwapInfoFromLog(target);
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
        if (checkMismatched(open, close)) {
            continue;
        }

        if (pool === null) {
            throw new Error('null pool');
        }
        const profits = computeProfits(open, close, pool);
        const [openSI, closeSI] = await Promise.all([
            SwapInfoFromLog(open),
            SwapInfoFromLog(close),
        ]);

        if (checkProfitTooBig(targetSI, profits)) {
            continue;
        }
        let mev = false;
        if (target.transactionIndex <= bundle_limit) {
            const tx = await web3.eth.getTransaction(open.transactionHash);
            if (parseInt(tx.gasPrice) == 0) {
                mev = true;
            }
        }
        const sw: Sandwich = {
            message: 'Sandwich found',
            ts: targetSI.ts,
            open: openSI,
            target: targetSI,
            close: closeSI,
            profit: profits[0],
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            dex: pool.dex,
            mev,
        };
        if (profits[1] != undefined) {
            sw.profit2 = profits[1];
        }
        res.push(sw);
    }
    if (!res.length) {
        const sw: Sandwich = {
            message: 'No sandwich found',
            ts: targetSI.ts,
            target: targetSI,
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            dex: pool.dex,
        };
        res.push(sw);
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
                cgId: pool.token0.cgId,
            };
            p = open.swap.amount1Out.sub(close.swap.amount1In);
            backward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
                cgId: pool.token1.cgId,
            };
            break;
        case SwapDir.OneToZero:
            p = close.swap.amount1Out.sub(open.swap.amount1In);
            forward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
                cgId: pool.token1.cgId,
            };
            p = open.swap.amount0Out.sub(close.swap.amount0In);
            backward = {
                amount: utils.formatUnits(p, pool.token0.decimals),
                currency: pool.token0.symbol,
                cgId: pool.token0.cgId,
            };
    }
    let profits: Profit[] = [];
    if (forward.amount != '0.0') {
        profits.push(forward);
    }
    if (backward.amount != '0.0') {
        profits.push(backward);
    }
    if (profits.length == 0) {
        profits = [
            {
                amount: '0.0',
                currency: 'WETH',
                cgId: 'weth',
            },
        ];
    }
    return profits;
}

function computeProfitsV3(open: SwapLog, close: SwapLog, pool: Pool): Profit[] {
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
    switch (open.swapV3.dir) {
        case SwapDir.ZeroToOne:
            p = close.swapV3.amount0.add(open.swapV3.amount0).mul('-1');
            forward = {
                amount: utils.formatUnits(p, pool.token0.decimals),
                currency: pool.token0.symbol,
                cgId: pool.token0.cgId,
            };
            p = open.swapV3.amount1.add(close.swapV3.amount1).mul('-1');
            backward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
                cgId: pool.token1.cgId,
            };
            break;
        case SwapDir.OneToZero:
            p = close.swapV3.amount1.add(open.swapV3.amount1).mul('-1');
            forward = {
                amount: utils.formatUnits(p, pool.token1.decimals),
                currency: pool.token1.symbol,
                cgId: pool.token1.cgId,
            };
            p = open.swapV3.amount0.add(close.swapV3.amount0).mul('-1');
            backward = {
                amount: utils.formatUnits(p, pool.token0.decimals),
                currency: pool.token0.symbol,
                cgId: pool.token0.cgId,
            };
    }
    let profits: Profit[] = [];
    if (forward.amount != '0.0') {
        profits.push(forward);
    }
    if (backward.amount != '0.0') {
        profits.push(backward);
    }
    if (profits.length == 0) {
        profits = [
            {
                amount: '0.0',
                currency: 'WETH',
                cgId: 'weth',
            },
        ];
    }
    return profits;
}

function areClose(a: BigNumber, b: BigNumber): boolean {
    return b.lt(a.mul(96).div(100)) || b.gt(a.mul(104).div(100));
}

// This is a heuristic workaround to discard (at least some) instances of
// sandwiches that have an enlarged profit due to wrapping multiple transactions.
// The 0.5 multiplier is quite arbitrary.
// This can all go away when we move to doing full chain scans.
function checkProfitTooBig(swap: SwapInfo, profits: Profit[]): boolean {
    for (const profit of profits) {
        const pn = parseFloat(profit.amount);
        const swapn =
            profit.currency == swap.currencyIn
                ? parseFloat(swap.amountIn)
                : parseFloat(swap.amountOut);
        if (pn > swapn / 2) {
            return true;
        }
    }
    return false;
}

function checkMismatched(open: SwapLog, close: SwapLog): boolean {
    let a: BigNumber, b: BigNumber, c: BigNumber, d: BigNumber;
    if (open.swap.dir == SwapDir.ZeroToOne) {
        a = open.swap.amount1Out;
        b = close.swap.amount1In;
        c = close.swap.amount0Out;
        d = open.swap.amount0In;
    } else {
        a = open.swap.amount0Out;
        b = close.swap.amount0In;
        c = close.swap.amount1Out;
        d = open.swap.amount1In;
    }
    if (areClose(a, b) && areClose(c, d)) {
        return true;
    }
    return false;
}

function checkMismatchedV3(open: SwapLog, close: SwapLog): boolean {
    const a = open.swapV3.amount1;
    const b = close.swapV3.amount0;
    const c = close.swapV3.amount1;
    const d = open.swapV3.amount0;
    if (
        areClose(a.add(c), BigNumber.from(0)) &&
        areClose(b.add(d), BigNumber.from(0))
    ) {
        return true;
    }
    return false;
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
