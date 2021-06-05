import * as redis from 'redis';
import winston from 'winston';

import { Block } from './blocks';
import { config } from '../config/config';
import { RedisClientAsync } from '../redis';

export class BlockCache {
    static client: RedisClientAsync;
    static logger: winston.Logger;
    static init(logger: winston.Logger, redis: redis.RedisClient): void {
        BlockCache.client = new RedisClientAsync(logger, redis);
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
        return `${config.redis_key_prefix}block:${bn}`;
    }

    static async cache(bn: number, block: Block): Promise<string> {
        return await BlockCache.client.set(
            BlockCache.key(bn),
            JSON.stringify(block),
        );
    }
}
