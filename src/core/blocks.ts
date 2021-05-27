import Web3 from 'web3';

import winston from 'winston';
import _ from 'lodash';

export function init(web3: Web3, log: winston.Logger): void {
    // meh pattern
    Block.init(web3, log);
}

export class Block {
    static readonly cache: { [index: string]: Block } = {};
    static web3: Web3;
    static logger: winston.Logger;
    static init(web3: Web3, logger: winston.Logger): void {
        Block.web3 = web3;
        Block.logger = logger;
    }

    static lookup(blockNumber: number): Block | undefined {
        return Block.cache[blockNumber];
    }

    static async lookupOrCreate(blockNumber: number): Promise<Block> {
        if (Block.cache[blockNumber] !== undefined) {
            return Block.cache[blockNumber];
        }
        Block.cache[blockNumber] = await Block.newBlock(blockNumber);
        return Block.cache[blockNumber];
    }

    static async newBlock(blockNumber: number): Promise<Block> {
        Block.logger.debug(`newBlock: ${blockNumber}`);
        const block = await Block.web3.eth.getBlock(blockNumber);

        return new Block(block.number, block.miner, block.timestamp);
    }

    readonly number: number;
    readonly miner: string;
    readonly timestamp: number | string;

    constructor(number: number, miner: string, timestamp: number | string) {
        this.number = number;
        this.miner = miner;
        this.timestamp = timestamp;
    }
}
