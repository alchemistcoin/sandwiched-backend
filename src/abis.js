const Web3 = require('web3');
const _ = require('lodash');

let web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

// from ABI
const JSON = {
  Swap: [
    {
      indexed: true,
      internalType: 'address',
      name: 'sender',
      type: 'address',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0In',
      type: 'uint256',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount1In',
      type: 'uint256',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0Out',
      type: 'uint256',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount1Out',
      type: 'uint256',
    },
    {
      indexed: true,
      internalType: 'address',
      name: 'to',
      type: 'address',
    },
  ],
};

const Binary = _.mapValues(JSON, (value, key) =>
  // xxx do we need this mess? Looking at how getTotalWrapped in
  // pull-data, am thinking not.
  web3.eth.abi.encodeEventSignature({
    anonymous: false,
    inputs: value,
    name: key,
    type: 'event',
  }),
);

module.exports = { JSON, Binary };
