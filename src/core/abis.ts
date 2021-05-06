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
