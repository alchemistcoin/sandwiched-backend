import Web3 from 'web3';
import * as redis from 'redis';
import winston from 'winston';

import { RedisClientAsync } from '../redis';

export function init(
    web3: Web3,
    log: winston.Logger,
    redis: redis.RedisClient,
): void {
    // meh pattern
    BlockCache.init(web3, log, redis);
}

type Block = {
    readonly number: number;
    readonly miner: string;
    readonly timestamp: number | string;
};

export class BlockCache {
    static client: RedisClientAsync;
    static web3: Web3;
    static logger: winston.Logger;
    static init(
        web3: Web3,
        logger: winston.Logger,
        redis: redis.RedisClient,
    ): void {
        BlockCache.client = new RedisClientAsync(logger, redis);
        BlockCache.web3 = web3;
        BlockCache.logger = logger;
    }
    static async lookup(bn: number): Promise<Block | null> {
        const key = BlockCache.key(bn);
        const block = await BlockCache.client.get(key);
        if (block == null) {
            return null;
        }
        return JSON.parse(block);
    }
    static key(bn: number): string {
        return `block:${bn}`;
    }

    static async cache(key: string, block: Block): Promise<string> {
        return await BlockCache.client.set(key, JSON.stringify(block));
    }

    static async lookupOrEnter(bn: number): Promise<Block> {
        const key = BlockCache.key(bn);
        let block = await BlockCache.lookup(bn);
        if (block != null) {
            return block;
        }
        block = await BlockCache.newBlock(bn);
        await BlockCache.cache(key, block);
        return block;
    }

    static async newBlock(blockNumber: number): Promise<Block> {
        BlockCache.logger.debug(`newBlock: ${blockNumber}`);
        const block = await BlockCache.web3.eth.getBlock(blockNumber);

        return {
            number: block.number,
            miner: block.miner,
            timestamp: block.timestamp,
        };
    }
}
