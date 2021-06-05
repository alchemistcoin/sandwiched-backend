import * as redis from 'redis';
import winston from 'winston';

import { Sandwich } from '../core/sandwich';
import { config } from '../config/config';
import { RedisClientAsync } from '../redis';

type CachedSandwiches = {
    fromBlock: number;
    toBlock: number;
    sandwiches: Sandwich[];
};

// This is slightly dissonant with the existing service/cache pattern
// for no other good reason that it was quicker to implement this
// way. We can refactor later to make it match.
// (The mis-match is src/findsandwich.ts remains standalone and isn't folded into SandwichesService).

export class SandwichCache {
    static client: RedisClientAsync;
    static logger: winston.Logger;
    static init(logger: winston.Logger, redis: redis.RedisClient): void {
        SandwichCache.client = new RedisClientAsync(logger, redis);
        SandwichCache.logger = logger;
    }
    static async lookup(address: string): Promise<CachedSandwiches | null> {
        const key = SandwichCache.key(address);
        const data = await SandwichCache.client.hgetall(key);
        if (data == null) {
            return null;
        }
        const fromBlock = parseInt(data.fromBlock);
        const toBlock = parseInt(data.toBlock);
        const sandwiches = JSON.parse(data.sandwiches);
        return { fromBlock, toBlock, sandwiches };
    }
    static key(address: string): string {
        return `${config.redis_key_prefix}sandwiches:${address}`;
    }

    static async del(address: string): Promise<boolean> {
        return (
            (await SandwichCache.client.del(SandwichCache.key(address))) == 1
        );
    }

    static async cache(
        address: string,
        fromBlock: number,
        toBlock: number,
        sandwiches: Sandwich[],
    ): Promise<string> {
        return await SandwichCache.client.hmset(SandwichCache.key(address), {
            fromBlock: fromBlock,
            toBlock: toBlock,
            sandwiches: JSON.stringify(sandwiches),
        });
    }
}
