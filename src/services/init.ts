import Web3 from 'web3';
import * as redis from 'redis';
import winston from 'winston';
import { BlockCache } from './blockcache';
import { BlockService } from './blocks';
import { PoolCache } from './poolcache';
import { PoolService } from './pools';
import { TokenCache } from './tokencache';
import { TokenService } from './tokens';
import { SandwichCache } from './sandwichcache';

export default async function init(
    web3: Web3,
    log: winston.Logger,
    redis: redis.RedisClient,
): Promise<void> {
    // meh pattern
    BlockCache.init(log, redis);
    BlockService.init(log, web3);

    PoolCache.init(log, redis);
    PoolService.init(log, web3);

    SandwichCache.init(log, redis);

    TokenService.init(log, web3);
    await TokenCache.init(log, redis);
}
