import Web3 from 'web3';
import winston from 'winston';
import { utils, BigNumber } from 'ethers';

import { getSwaps, SwapLog, SwapDir } from './getSwaps';

// temp for CLI... eventually this should just return sandwiches as it
// finds them (EventEmitter?) and let the caller do what they want,
// e.g. return to client.
function logWeird(log: winston.Logger, msg: string, txs: Array<string>) {
    log.warn(`Weird: ${msg} ${txs}`);
}

function logSandwich(
    log: winston.Logger,
    open: SwapLog,
    target: SwapLog,
    close: SwapLog,
    profit: BigNumber,
) {
    log.info(
        `Sandwich! open ${open.transactionHash}, target ${
            target.transactionHash
        }, close ${close.transactionHash}, profit ${utils.formatEther(profit)}`,
    );
}

export async function findSandwich(
    web3: Web3,
    log: winston.Logger,
    target: SwapLog,
    window = 10,
): Promise<void> {
    const pool = target.address;
    const breadCandidates = await getSwaps(
        web3,
        log,
        pool,
        null,
        null,
        target.blockNumber,
        target.blockNumber + window,
    );
    const openCandidates = breadCandidates.filter((cand) => {
        return (
            cand.swap.dir == target.swap.dir &&
            cand.blockNumber == target.blockNumber
        );
    });
    for (const open of openCandidates) {
        const closes = breadCandidates.filter((cand) => {
            return (
                cand.swap.dir != open.swap.dir && cand.swap.to == open.swap.to
            );
        });
        if (closes.length == 0) {
            continue;
        }
        if (checkWeirdMultipleClose(log, open, target, closes)) {
            continue;
        }
        const close = closes[0];
        if (checkWeirdMismatched(log, open, target, close)) {
            continue;
        }
        const profit = computeProfit(open, close);
        logSandwich(log, open, target, close, profit);
    }
}

function computeProfit(open: SwapLog, target: SwapLog): BigNumber {
    switch (open.swap.dir) {
        case SwapDir.ZeroToOne:
            return target.swap.amount0Out.sub(open.swap.amount0In);
        case SwapDir.OneToZero:
            return target.swap.amount1Out.sub(open.swap.amount1In);
    }
}

function checkWeirdMultipleClose(
    log: winston.Logger,
    open: SwapLog,
    target: SwapLog,
    closes: SwapLog[],
): boolean {
    if (closes.length > 1) {
        logWeird(log, 'multiple closes for same open', [
            open.transactionHash,
            target.transactionHash,
            ...closes.map((close) => close.transactionHash),
        ]);
        return true;
    }
    return false;
}

function checkWeirdMismatched(
    log: winston.Logger,
    open: SwapLog,
    target: SwapLog,
    close: SwapLog,
): boolean {
    let diff: BigNumber;
    if (open.swap.dir == SwapDir.ZeroToOne) {
        diff = open.swap.amount1Out.sub(close.swap.amount1In);
    } else {
        diff = open.swap.amount0Out.sub(close.swap.amount0In);
    }
    if (!diff.isZero()) {
        logWeird(log, 'sandwich open/close on different amounts', [
            open.transactionHash,
            target.transactionHash,
            close.transactionHash,
            utils.formatEther(diff.abs()),
        ]);
        return true;
    }
    return false;
}
