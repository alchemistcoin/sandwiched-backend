import Web3 from 'web3';
import winston from 'winston';

import { getSwaps, SwapLog } from './getSwaps';

// temp for CLI... eventually this should just return sandwiches as it
// finds them (EventEmitter?) and let the caller do what they want,
// e.g. return to client.
function logWeird(msg: string, txs: Array<string>) {
    console.log(msg, ...txs);
}

function logSandwich(open: SwapLog, target: SwapLog, close: SwapLog) {
    console.log(
        open.transactionHash,
        target.transactionHash,
        close.transactionHash,
    );
}

export async function findSandwich(
    web3: Web3,
    log: winston.Logger,
    userSwap: SwapLog,
    window = 10,
) : Promise<void> {
    const pool = userSwap.address;
    const breadCandidates = await getSwaps(
        web3,
        log,
        pool,
        null,
        null,
        userSwap.blockNumber,
        userSwap.blockNumber + window,
    );
    const openCandidates = breadCandidates.filter((log) => {
        return (
            log.swap.dir == userSwap.swap.dir &&
            log.blockNumber == userSwap.blockNumber
        );
    });
    for (const openCandidate of openCandidates) {
        const close = breadCandidates.filter((log) => {
            // xxx check that amount is same as in open?
            return (
                log.swap.dir != openCandidate.swap.dir &&
                log.swap.to == openCandidate.swap.to
            );
        });
        if (close.length == 0) {
            continue;
        }
        if (close.length > 1) {
            logWeird('multiple closes for same open', [
                openCandidate.transactionHash,
                ...close.map((log) => log.transactionHash),
            ]);
        }
        logSandwich(openCandidate, userSwap, close[0]);
    }
}
