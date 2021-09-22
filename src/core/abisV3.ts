import Web3 from 'web3';
import _ from 'lodash';

const web3 = new Web3();

// from ABI
export const JSON = {
    Swap: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
          indexed: true,
          internalType: 'address',
          name: 'recipient',
          type: 'address',
      },
      {
          indexed: false,
          internalType: 'int256',
          name: 'amount0',
          type: 'int256',
      },
      {
          indexed: false,
          internalType: 'int256',
          name: 'amount1',
          type: 'int256',
      },
      {
          indexed: false,
          internalType: 'uint160',
          name: 'sqrtPriceX96',
          type: 'uint160',
      },
      {
          indexed: false,
          internalType: 'uint128',
          name: 'liquidity',
          type: 'uint128',
      },
      {
          indexed: false,
          internalType: 'int24',
          name: 'tick',
          type: 'int24',
      },
    ],
    Transfer: [
        {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
        },
        {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
        },
        {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
        },
    ],
};

export const Binary = _.mapValues(JSON, (value, key) =>
    // xxx do we need this mess? Looking at how getTotalWrapped in
    // pull-data, am thinking not.
    web3.eth.abi.encodeEventSignature({
        anonymous: false,
        inputs: value,
        name: key,
        type: 'event',
    }),
);
