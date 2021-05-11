import Web3 from 'web3';
import { Log } from 'web3-core';
import _ from 'lodash';
import winston from 'winston';
import { BigNumber } from 'ethers';

import { getLogs } from './logs';
import * as ABIs from './abis';

interface TransferParams {
    from: string;
    to: string;
    value: BigNumber;
}

export interface TransferLog extends Log {
    transfer: TransferParams;
}

export async function getTransfers(
    web3: Web3,
    log: winston.Logger,
    address: string = null,
    from: string = null,
    to: string = null,
    fromBlock = 0,
    toBlock = 99999999,
): Promise<TransferLog[]> {
    const topics = [
        ABIs.Binary.Transfer,
        from ? web3.eth.abi.encodeParameter('address', from) : null,
        to ? web3.eth.abi.encodeParameter('address', to) : null,
    ];

    // raw:
    // {
    //  "address": "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
    //  "blockHash": "0x4860e2b2a6ed53921464484d50b7ffeaffb312e52dde834c8094d4841a4eb0c3",
    //  "blockNumber": 12349369,
    //  "data": "0x0000000000000000000000000000000000000000000004c5e38bb3860f79ed83",
    //  "logIndex": 56,
    //  "removed": false,
    //  "topics": [
    //   "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    //   "0x000000000000000000000000b1adceddb2941033a090dd166a462fe1c2029484",
    //   "0x0000000000000000000000005f0a8554a31d43b4db5f0bdb898b5d2319b6ea48"
    //  ],
    //  "transactionHash": "0xddc952b63d9ad7df5e20ac33ea623d4bdea636d77ad64fa2eb9762336e9dbb23",
    //  "transactionIndex": 59,
    //  "id": "log_31174bbe"
    // }
    // decoded:
    // {
    //  "0": "0xB1AdceddB2941033a090dD166a462fe1c2029484",
    //  "1": "0x5F0A8554A31d43B4DB5F0bdb898b5D2319b6ea48",
    //  "2": "22539870910256101584259",
    //  "__length__": 3,
    //  "from": "0xB1AdceddB2941033a090dD166a462fe1c2029484",
    //  "to": "0x5F0A8554A31d43B4DB5F0bdb898b5D2319b6ea48",
    //  "value": "22539870910256101584259"
    // }

    const all = await getLogs(web3, log, fromBlock, toBlock, address, topics);

    let transferlogs: TransferLog[] | null = all.map((r) => {
        const sigToName = _.invert(ABIs.Binary);
        const sigToJSON = _.chain(sigToName)
            .mapValues((value) => ABIs.JSON[value])
            .value();

        if (r.data == '0x') {
            // some Transfers (ERC721 notably) have no data as their third
            // parameter is indexed. We can skip those.
            return null;
        }

        const decoded = web3.eth.abi.decodeLog(
            sigToJSON[r.topics[0]],
            r.data,
            r.topics.slice(1),
        );

        decoded.event = sigToName[r.topics[0]];
        const value = BigNumber.from(decoded.value);
        return {
            ...r,
            transfer: {
                ..._.pick(decoded, ['from', 'to']),
                value,
            },
        };
    });
    transferlogs = transferlogs.filter((l) => l != null);
    const sorted = _.sortBy(transferlogs, 'blockNumber', 'transactionIndex');
    if (!_.isEqual(sorted, transferlogs)) {
        // don't expect this to happen, but check for sanity.
        throw 'Not sorted!';
    }
    return transferlogs;
}
