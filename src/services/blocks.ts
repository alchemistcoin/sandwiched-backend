import Web3 from 'web3';
import winston from 'winston';

import { BlockCache } from './blockcache';

export type Block = {
    readonly number: number;
    readonly miner: string;
    readonly timestamp: number | string;
};

export class BlockService {
    static logger: winston.Logger;
    static web3: Web3;
    static init(logger: winston.Logger, web3: Web3): void {
        BlockService.web3 = web3;
        BlockService.logger = logger;
    }

    static async fetch(blockNumber: number): Promise<Block> {
        const block = await BlockService.web3.eth.getBlock(blockNumber);

        return {
            number: block.number,
            miner: block.miner,
            timestamp: block.timestamp,
        };
    }

    static async lookup(bn: number): Promise<Block> {
        let block = await BlockCache.lookup(bn);
        if (block != null) {
            return block;
        }
        block = await BlockService.fetch(bn);
        await BlockCache.cache(bn, block);
        return block;
    }
}
