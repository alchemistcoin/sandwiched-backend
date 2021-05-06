export type T = string | number;

export function isValid(b: T): boolean {
    if (typeof b == 'string') {
        return (
            b == 'earliest' || b == 'latest' || b == 'pending' || b == 'genesis'
        );
    }
    return Number.isInteger(b);
}

export function toNumber(b: T): number {
    if (typeof b == 'number') {
        return b;
    }

    if (b == 'latest' || b == 'pending') {
        return Infinity;
    }
    if (b == 'earliest' || b == 'genesis') {
        return 0;
    }
    throw 'block.toNumber: invalid input';
}

// Assume numbers or "earliest" "latest". (Can add support for
// "genesis" "pending" later if nec). In general web3.js accepts block
// numbers in number, BN, string. JSON-RPC api is hex strings.
export function less(b1: T, b2: T): boolean {
    if (!isValid(b1) || !isValid(b2)) {
        throw `blockLess invalid inputs ${b1} ${b2}`;
    }
    if (b1 == b2) {
        return false;
    }
    b1 = toNumber(b1);
    b2 = toNumber(b2);
    return b1 < b2;
}
