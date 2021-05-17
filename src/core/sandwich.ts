import Web3 from 'web3';
import winston from 'winston';
import { utils, BigNumber } from 'ethers';

import { getSwaps, SwapLog, SwapDir } from './swaps';
import { Pool, Token } from './pools';

// temp for CLI... eventually this should just return sandwiches as it
// finds them (EventEmitter?) and let the caller do what they want,
// e.g. return to client.
function logWeird(log: winston.Logger, msg: string, txs: Array<string>) {
    log.warn(`Weird: ${msg} (txs ${txs}`);
}

export interface Sandwich {
    message: string;
    openTx: string;
    targetTx: string;
    closeTx: string;
    profit: string;
    profitCurrency: string;
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
        if (checkMismatched(log, open, target, close)) {
            continue;
        }

        const pool = await Pool.lookupOrCreate(open.address);
        if (pool === null) {
            throw new Error('null pool');
        }
        const [profit, tok] = computeProfit(open, close, pool);
        let mev = false;
        if (target.transactionIndex <= bundle_limit) {
            const tx = await web3.eth.getTransaction(open.transactionHash);
            if (parseInt(tx.gasPrice) == 0) {
                mev = true;
            }
        }
        res.push({
            message: 'Sandwich found',
            openTx: open.transactionHash,
            targetTx: target.transactionHash,
            closeTx: close.transactionHash,
            profit: utils.formatUnits(profit, tok.decimals),
            profitCurrency: tok.symbol,
            pool: `${pool.token0.symbol} - ${pool.token1.symbol}`,
            mev,
        });
    }
    return res;
}

function computeProfit(
    open: SwapLog,
    close: SwapLog,
    pool: Pool,
): [BigNumber, Token] {
    let profit: BigNumber;
    let tok: Token;

    switch (open.swap.dir) {
        case SwapDir.ZeroToOne:
            profit = close.swap.amount0Out.sub(open.swap.amount0In);
            tok = pool.token0;
            break;
        case SwapDir.OneToZero:
            profit = close.swap.amount1Out.sub(open.swap.amount1In);
            tok = pool.token1;
    }
    return [profit, tok];
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

function checkMismatched(
    log: winston.Logger,
    open: SwapLog,
    target: SwapLog,
    close: SwapLog,
): boolean {
    let a: BigNumber, b: BigNumber;
    if (open.swap.dir == SwapDir.ZeroToOne) {
        a = open.swap.amount1Out;
        b = close.swap.amount1In;
    } else {
        a = open.swap.amount0Out;
        b = close.swap.amount0In;
    }
    if (b.lt(a.mul(99).div(101)) || b.gt(a.mul(101).div(99))) {
        logWeird(log, 'gap (>5%) in sandwich open/close amounts', [
            open.transactionHash,
            target.transactionHash,
            close.transactionHash,
            utils.formatEther(b.sub(a)), // xxx decimals
        ]);
        return true;
    }
    return false;
}
