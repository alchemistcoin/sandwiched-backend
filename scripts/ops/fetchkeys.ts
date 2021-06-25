import * as redis from 'redis';

import { RedisClientAsync } from '../../src/redis';
import { config } from '../../src/config/config';
import { logger } from '../../src/config/logger';

(async () => {
    const redisOptions: {
        tls?: {
            rejectUnauthorized: boolean;
            requestCert: boolean;
        };
    } = {};

    if (config.redis_url.includes('rediss://'))
        redisOptions.tls = {
            rejectUnauthorized: false,
            requestCert: true,
        };

    const r = redis.createClient(config.redis_url, redisOptions);
    const client = new RedisClientAsync(logger, r);
    const keys = await client.keys('sand*');
    console.log(JSON.stringify(keys, null, 2));
    r.end(true);
})();
