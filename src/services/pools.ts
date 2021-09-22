import Web3 from 'web3';
import * as utils from 'web3-utils';
import winston from 'winston';

import { Token, TokenService } from './tokens';
import { PoolCache } from './poolcache';

type Exchange = 'UniswapV2' | 'SushiSwapV2';

export type Pool = {
    readonly address: string;
    readonly dex: Exchange;
    readonly token0: Token;
    readonly token1: Token;
};
export class PoolService {
    static logger: winston.Logger;
    static web3: Web3;
    static init(logger: winston.Logger, web3: Web3): void {
        PoolService.logger = logger;
        PoolService.web3 = web3;
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
        const contract = new PoolService.web3.eth.Contract(ABI, address);
        const factory = await contract.methods.factory().call();
        console.log('factory', factory)
        return {
            '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f': 'UniswapV2',
            '0x1F98431c8aD98523631AE4a59f267346ea31F984': 'UniswapV3',
            '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac': 'SushiSwapV2',
        }[factory];
    }

    static async fetch(address: string): Promise<Pool> {
        PoolService.logger.debug(`PoolService.fetch: ${address}`);
        const dex = await PoolService.poolType(address);
        if (dex === undefined) {
            throw new Error(`unknown pool type for address ${address}`);
        }
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
        const contract = new PoolService.web3.eth.Contract(ABI, address);
        const [token0, token1] = await Promise.all([
            contract.methods.token0().call().then(TokenService.lookup),
            contract.methods.token1().call().then(TokenService.lookup),
        ]);

        return { address, dex, token0, token1 };
    }

    static async has(address: string): Promise<boolean> {
        return (await PoolCache.lookup(address)) != null;
    }
    static async lookup(address: string): Promise<Pool | null> {
        let pool = await PoolCache.lookup(address);
        if (pool != null) {
            return pool;
        }
        pool = await PoolService.fetch(address);
        await PoolCache.cache(address, pool);
        return pool;
    }
}
