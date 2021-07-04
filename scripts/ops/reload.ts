import * as fs from 'fs';
import * as redis from 'redis';
import * as https from 'https';

import { RedisClientAsync } from '../../src/redis';
import { config } from '../../src/config/config';
import { logger } from '../../src/config/logger';

// Quick script to reload sandwich cache. Works but fragile and slow.

// - fetch keys into keys.json (See fetchkeys script)
// - set rateBypass below (defined in Heroku settings)
// - set REDIS_URL env var

// then run. script will periodically dump temp.out, in case of
// interruption copy that back into keys.json before resuming to avoid
// redo-ing keys

const rateBypass = 'fillmein';
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

function httpRequest(params, key) {
    return new Promise(function (resolve, reject) {
        const req = https.request(params, function (res) {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }

            const body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });

            res.on('error', function (err) {
                resolve(err);
            });

            res.on('end', function () {
                resolve(Buffer.concat(body).toString());
            });
        });
        // reject on request error
        req.on('error', function (err) {
            console.error(
                `${new Date().toISOString()} Request error ${key} ${err}`,
            );
            reject(err);
        });
        req.on('timeout', function () {
            console.error(`${new Date().toISOString()} Request timeout ${key}`);
            req.destroy();
            reject('timeout');
        });
        req.on('end', function () {
            console.error(`${new Date().toISOString()} Request end ${key}`);
            req.destroy();
        });
        req.end();
    });
}

const temp_file_name = 'temp.out';

async function handleOne(key: string): Promise<void> {
    const addr = key.split(':')[1];
    await client.del(key);
    console.log(`${new Date().toISOString()} Deleted ${key}`);
    const options = {
        hostname: 'api.sandwiched.wtf',
        port: 443,
        path: `/sandwiches/${addr}?rateBypass=${rateBypass}`,
        method: 'GET',
        timeout: 30000,
    };
    const start = Date.now();
    await httpRequest(options, key);
    const end = Date.now();
    console.log(
        `${new Date().toISOString()} Completed ${key} in ${
            (end - start) / 1000
        }s`,
    );
}

(async () => {
    let keys: Array<string>;
    try {
        const data = fs.readFileSync('keys.json');
        keys = JSON.parse(data.toString());
    } catch (err) {
        console.error(err);
        return;
    }

    const concurrency = 5;

    for (;;) {
        const batch = keys
            .slice(0, Math.min(concurrency, keys.length))
            .map(handleOne);
        await Promise.allSettled(batch);
        keys = keys.slice(Math.min(concurrency, keys.length));
        if (keys.length === 0) {
            process.exit(0);
        }
        console.log(`dumping ${keys.length} keys to ${temp_file_name}`);
        fs.writeFileSync(temp_file_name, JSON.stringify(keys, null, 2));
    }
    r.end(true);
})();
