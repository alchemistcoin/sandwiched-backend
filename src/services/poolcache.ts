import * as redis from 'redis';
import winston from 'winston';

import { config } from '../config/config';
import { RedisClientAsync } from '../redis';
import { Pool } from './pools';

export class PoolCache {
    static logger: winston.Logger;
    static client: RedisClientAsync;
    static init(logger: winston.Logger, redis: redis.RedisClient): void {
        PoolCache.client = new RedisClientAsync(logger, redis);
        PoolCache.logger = logger;
    }

    static key(address: string): string {
        return `${config.redis_key_prefix}pool:${address}`;
    }

    static async lookup(address: string): Promise<Pool | null> {
        const key = PoolCache.key(address);
        const pool = await PoolCache.client.get(key);
        if (pool == null) {
            return null;
        }
        return JSON.parse(pool);
    }

    static async cache(address: string, pool: Pool): Promise<string> {
        const key = PoolCache.key(address);
        return await PoolCache.client.set(key, JSON.stringify(pool));
    }
}
