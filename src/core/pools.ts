import Web3 from 'web3';
import { tl } from './token-list';

import * as utils from 'web3-utils';
import * as redis from 'redis';
import { RedisClientAsync } from '../redis';
import winston from 'winston';
import _ from 'lodash';

type Exchange = 'UniswapV2';

export async function init(
    web3: Web3,
    log: winston.Logger,
    redis: redis.RedisClient,
): Promise<void> {
    // meh pattern
    PoolCache.init(web3, log, redis);
    await TokenCache.init(web3, log, redis);
}

export type Pool = {
    readonly address: string;
    readonly dex: Exchange;
    readonly token0: Token;
    readonly token1: Token;
};
export class PoolCache {
    static client: RedisClientAsync;
    static web3: Web3;
    static logger: winston.Logger;
    static init(
        web3: Web3,
        logger: winston.Logger,
        redis: redis.RedisClient,
    ): void {
        PoolCache.client = new RedisClientAsync(logger, redis);
        PoolCache.web3 = web3;
        PoolCache.logger = logger;
    }

    static async poolType(address: string): Promise<Exchange | undefined> {
        const ABI: utils.AbiItem[] = [
            {
                type: 'function',
                name: 'factory',
                inputs: [],
                outputs: [{ name: '', type: 'address' }],
                stateMutability: 'view',
                payable: false,
                constant: true, // for backward-compatibility
            },
        ];
        const contract = new PoolCache.web3.eth.Contract(ABI, address);
        const factory = await contract.methods.factory().call();
        return {
            '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f': 'UniswapV2',
        }[factory];
    }

    static key(address: string): string {
        return `pool:${address}`;
    }

    static async lookup(address: string): Promise<Pool | null> {
        const key = PoolCache.key(address);
        const pool = await PoolCache.client.get(key);
        if (pool == null) {
            return null;
        }
        return JSON.parse(pool);
    }

    static async lookupOrEnter(address: string): Promise<Pool> {
        const key = PoolCache.key(address);
        let pool = await PoolCache.lookup(address);
        if (pool != null) {
            return pool;
        }
        pool = await PoolCache.newPool(address);
        await PoolCache.cache(key, pool);
        return pool;
    }

    static async cache(key: string, pool: Pool): Promise<string> {
        return await PoolCache.client.set(key, JSON.stringify(pool));
    }

    static async newPool(address: string): Promise<Pool> {
        PoolCache.logger.debug(`newPool: ${address}`);
        if ((await PoolCache.poolType(address)) === undefined) {
            throw new Error(`unknown pool type for address ${address}`);
        }
        // only Uniswapv2 for now.
        const ABI: utils.AbiItem[] = [
            {
                constant: true,
                inputs: [],
                name: 'token0',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'token1',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
        ];
        const contract = new PoolCache.web3.eth.Contract(ABI, address);
        const [token0, token1] = await Promise.all([
            contract.methods.token0().call().then(TokenCache.lookupOrEnter),
            contract.methods.token1().call().then(TokenCache.lookupOrEnter),
        ]);

        return { address, dex: 'UniswapV2', token0, token1 };
    }
}

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

type Token = {
    readonly address: string;
    readonly symbol: string;
    readonly name: string;
    readonly decimals: number;
};

export class TokenCache {
    static client: RedisClientAsync;
    static web3: Web3;
    static logger: winston.Logger;
    static ABI: utils.AbiItem[];
    static async init(
        web3: Web3,
        logger: winston.Logger,
        redis: redis.RedisClient,
    ): Promise<void> {
        TokenCache.client = new RedisClientAsync(logger, redis);
        TokenCache.web3 = web3;
        TokenCache.logger = logger;
        for (const t of tl) {
            await TokenCache.cache(TokenCache.key(t.address), {
                address: t.address,
                name: t.name,
                symbol: t.symbol,
                decimals: t.decimals,
            });
        }
    }

    static key(address: string): string {
        return `token:${address}`;
    }

    static async lookupOrEnter(address: string): Promise<Token> {
        const key = TokenCache.key(address);
        const token = await TokenCache.client.hgetall(key);
        if (token != null) {
            return {
                decimals: parseInt(token.decimals),
                address: token.address,
                symbol: token.symbol,
                name: token.name,
            };
        }
        try {
            const token = await TokenCache.newToken(address);
            await TokenCache.cache(key, token);
            return token;
        } catch (err) {
            TokenCache.logger.error('error creating token', err);
            return {
                address,
                name: 'unknown',
                symbol: 'unknown',
                decimals: 18,
            };
        }
    }

    static async cache(key: string, tok: Token): Promise<string> {
        return await TokenCache.client.hmset(key, tok);
    }

    static async newToken(address: string): Promise<Token> {
        const contract = new TokenCache.web3.eth.Contract(
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
                const contract = new TokenCache.web3.eth.Contract(
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

        return { address, name, symbol, decimals: parseInt(decimals) };
    }
}
