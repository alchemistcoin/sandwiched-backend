import * as redis from 'redis';
import winston from 'winston';

import { config } from '../config/config';
import { tl } from './token-list';
import { RedisClientAsync } from '../redis';

type Token = {
    readonly address: string;
    readonly symbol: string;
    readonly name: string;
    readonly decimals: number;
};

export class TokenCache {
    static client: RedisClientAsync;
    static logger: winston.Logger;
    static async init(
        logger: winston.Logger,
        redis: redis.RedisClient,
    ): Promise<void> {
        TokenCache.client = new RedisClientAsync(logger, redis);
        TokenCache.logger = logger;
        for (const t of tl) {
            await TokenCache.cache(t.address, {
                address: t.address,
                name: t.name,
                symbol: t.symbol,
                decimals: t.decimals,
            });
        }
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
        };
    }
    static async cache(address: string, tok: Token): Promise<string> {
        return await TokenCache.client.hmset(TokenCache.key(address), tok);
    }
}
