import * as redis from 'redis';
import winston from 'winston';

import { config } from '../config/config';
import { RedisClientAsync } from '../redis';
import { Token } from './tokens';

export class TokenCache {
    static client: RedisClientAsync;
    static logger: winston.Logger;
    static init(logger: winston.Logger, redis: redis.RedisClient): void {
        TokenCache.client = new RedisClientAsync(logger, redis);
        TokenCache.logger = logger;
    }

    static key(address: string): string {
        return `${config.redis_key_prefix}token:${address}`;
    }

    static async lookup(address: string): Promise<Token | null> {
        const key = TokenCache.key(address);
        const token = await TokenCache.client.hgetall(key);
        if (token === null) {
            return null;
        }
        return {
            decimals: parseInt(token.decimals),
            address: token.address,
            symbol: token.symbol,
            name: token.name,
            cgId: token.cgId,
        };
    }
    static async cache(address: string, tok: Token): Promise<string> {
        return await TokenCache.client.hmset(TokenCache.key(address), tok);
    }
}
