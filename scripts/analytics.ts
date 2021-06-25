import * as redis from 'redis';

import { RedisClientAsync } from '../src/redis';
import { config } from '../src/config/config';
import { logger } from '../src/config/logger';
import { Sandwich } from '../src/core/sandwich';

function wethProfit(sandwich: Sandwich): number {
    let profit = 0;
    if (sandwich.profit.currency === 'WETH')
        profit += parseFloat(sandwich.profit.amount);
    if (sandwich.profit2 != undefined && sandwich.profit2.currency === 'WETH')
        profit += parseFloat(sandwich.profit2.amount);
    return profit;
}

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
    const keys = await client.keys('sandwiches*');
    let all = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        console.log(key);
        const data = await client.hgetall(key);
        if (data === null) {
            continue;
        }
        let sandwiches: (Sandwich & {
            user: string;
            wethProfit: number;
        })[] = JSON.parse(data.sandwiches);
        sandwiches = sandwiches.map((sw) => {
            sw.user = key;
            sw.wethProfit = wethProfit(sw);
            return sw;
        });
        all = all.concat(sandwiches);
    }

    all.sort(function (a, b) {
        return b.wethProfit - a.wethProfit;
    });
    console.log(`top is ${JSON.stringify(all.slice(0, 10), null, 2)}`);
    r.end(true);
})();
