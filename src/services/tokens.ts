import Web3 from 'web3';
import * as utils from 'web3-utils';
import winston from 'winston';
import _ from 'lodash';

import { tl } from './token-list';
import { coingecko } from './coinlist';
import { TokenCache } from './tokencache';

const detailedERC20ABI: utils.AbiItem[] = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];
// some ERC20 contracts (such as 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2 or
// 0xfFED56a180f23fD32Bc6A1d8d3c09c283aB594A8) have symbols and name of type
// bytes32 instead of string.
const detailedERC20bytes32ABI = _.cloneDeep(detailedERC20ABI);
detailedERC20bytes32ABI[0].outputs[0].type = 'bytes32';
detailedERC20bytes32ABI[2].outputs[0].type = 'bytes32';

export type Token = {
    readonly address: string;
    readonly symbol: string;
    readonly name: string;
    readonly decimals: number;
    readonly cgId: string;
};

export class TokenService {
    static web3: Web3;
    static logger: winston.Logger;
    static ABI: utils.AbiItem[];
    static cgmap: { [key: string]: string } = {};
    static async init(logger: winston.Logger, web3: Web3): Promise<void> {
        TokenService.web3 = web3;
        TokenService.logger = logger;

        coingecko.forEach((coin) => {
            TokenService.cgmap[coin.addr.toLowerCase()] = coin.id;
        });

        for (const t of tl) {
            await TokenCache.cache(t.address, {
                address: t.address,
                name: t.name,
                symbol: t.symbol,
                decimals: t.decimals,
                cgId: TokenService.cgmap[t.address.toLowerCase()] || 'unknown',
            });
        }
    }

    static async fetch(address: string): Promise<Token> {
        TokenService.logger.debug(`TokenService.fetch: ${address}`);
        const contract = new TokenService.web3.eth.Contract(
            detailedERC20ABI,
            address,
        );
        let name: string, symbol: string, decimals: string;
        [name, symbol, decimals] = await Promise.all([
            contract.methods.name().call(),
            contract.methods.symbol().call(),
            contract.methods.decimals().call(),
        ])
            .catch(async () => {
                const contract = new TokenService.web3.eth.Contract(
                    detailedERC20bytes32ABI,
                    address,
                );
                [name, symbol, decimals] = await Promise.all([
                    contract.methods.name().call(),
                    contract.methods.symbol().call(),
                    contract.methods.decimals().call(),
                ]);
                name = utils.toUtf8(name);
                symbol = utils.toUtf8(symbol);
                return [name, symbol, decimals];
            })
            .catch((err) => {
                if (err.toString().includes('execution reverted')) {
                    // contracts without name/symbol (for example 0xEB9951021698B42e4399f9cBb6267Aa35F82D59D)
                    return ['unknown', 'unknown', '18'];
                }
                throw err;
            });

        if (isNaN(parseInt(decimals))) {
            throw new Error(`token invalid decimals ${decimals}`);
        }

        return {
            address,
            name,
            symbol,
            decimals: parseInt(decimals),
            cgId: TokenService.cgmap[address.toLowerCase()] || 'unknown',
        };
    }

    static async lookup(address: string): Promise<Token> {
        const token = await TokenCache.lookup(address);
        if (token != null) {
            return token;
        }
        try {
            const token = await TokenService.fetch(address);
            await TokenCache.cache(address, token);
            return token;
        } catch (err) {
            TokenService.logger.error('error creating token', err);
            return {
                address,
                name: 'unknown',
                symbol: 'unknown',
                decimals: 18,
                cgId: 'unknown',
            };
        }
    }
}
