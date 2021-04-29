function isValid(b) {
  if (typeof b == 'string') {
    return b == 'earliest' || b == 'latest' || b == 'pending' || b == 'genesis';
  }
  return Number.isInteger(b);
}

function toNumber(b) {
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

function infToString(b) {
  if (b == Infinity) {
    return 'latest';
  }
  return b;
}

// Assume numbers or "earliest" "latest". (Can add support for
// "genesis" "pending" later if nec). In general web3.js accepts block
// numbers in number, BN, string. JSON-RPC api is hex strings.
function less(b1, b2) {
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

module.exports = {
  less: less,
  toNumber: toNumber,
  infToString: infToString,
  isValid: isValid,
};
