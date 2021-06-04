import { Logger } from 'winston';
import * as redis from 'redis';
import { promisify } from 'util';

export class RedisClientAsync {
    _c: redis.RedisClient;
    private hgetall_: (key: string) => Promise<{ [key: string]: string }>;
    private hmset_: (
        arg0: string,
        arg1: { [key: string]: number | string },
    ) => Promise<string>;

    private get_: (key: string) => Promise<string>;
    private set_: (key: string, value: string) => Promise<string>;
    private del_: (key: string) => Promise<number>;

    constructor(logger: Logger, client: redis.RedisClient) {
        this.hgetall_ = promisify(client.hgetall).bind(client);
        this.hmset_ = promisify(client.hmset).bind(client);
        this.get_ = promisify(client.get).bind(client);
        this.del_ = promisify(client.del).bind(client);
        this.set_ = promisify(client.set).bind(client);
        this._c = client;
        client.on('error', function (error) {
            logger.error(error);
        });
    }

    public get(key: string): Promise<string> {
        return this.get_(key);
    }

    public del(key: string): Promise<number> {
        return this.del_(key);
    }

    public set(key: string, value: string): Promise<string> {
        return this.set_(key, value);
    }

    public hgetall(key: string): Promise<{ [key: string]: string }> {
        return this.hgetall_(key);
    }

    public hmset(
        key: string,
        vals: { [key: string]: number | string },
    ): Promise<string> {
        return this.hmset_(key, vals);
    }
}
