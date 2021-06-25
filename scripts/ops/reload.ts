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

function httpRequest(params) {
    return new Promise(function (resolve, reject) {
        const req = https.request(params, function (res) {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }

            const body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });

            res.on('end', function () {
                resolve(Buffer.concat(body).toString());
            });
        });
        // reject on request error
        req.on('error', function (err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });
        req.end();
    });
}

const temp_file_name = 'temp.out';

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

    let keys: Array<string>;
    try {
        const data = fs.readFileSync('keys.json');
        keys = JSON.parse(data.toString());
    } catch (err) {
        console.error(err);
        return;
    }

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const addr = key.split(':')[1];
        await client.del(key);
        console.log(`${i} done, ${keys.length - i} to go`);
        console.log(`Deleted ${key}`);
        const options = {
            hostname: 'api.sandwiched.wtf',
            port: 443,
            path: `/sandwiches/${addr}?rateBypass=${rateBypass}`,
            method: 'GET',
        };
        await httpRequest(options);
        if (i % 10 === 0) {
            console.log(`dumping keys to ${temp_file_name}`);
            fs.writeFileSync(
                temp_file_name,
                JSON.stringify(keys.slice(i + 1), null, 2),
            );
        }
    }
    r.end(true);
})();
