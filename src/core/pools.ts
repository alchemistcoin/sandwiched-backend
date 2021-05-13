import Web3 from 'web3';
import * as utils from 'web3-utils';
import winston from 'winston';
import _ from 'lodash';

type Exchange = 'UniswapV2';

export function init(web3: Web3, log: winston.Logger): void {
    // meh pattern
    Pool.init(web3, log);
    Token.init(web3, log);
}

export class Pool {
    static readonly cache: { [index: string]: Pool } = {};
    static web3: Web3;
    static logger: winston.Logger;
    static init(web3: Web3, logger: winston.Logger): void {
        Pool.web3 = web3;
        Pool.logger = logger;
    }

    static async poolType(address: string): Promise<Exchange | undefined> {
        const ABI: utils.AbiItem[] = [
            {
                type: 'function',
                name: 'factory',
                inputs: [],
                outputs: [{ name: '', type: 'address' }],
                stateMutability: 'view',
                payable: false,
                constant: true, // for backward-compatibility
            },
        ];
        const contract = new Pool.web3.eth.Contract(ABI, address);
        const factory = await contract.methods.factory().call();
        return {
            '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f': 'UniswapV2',
        }[factory];
    }

    static async lookupOrCreate(address: string): Promise<Pool> {
        if (Pool.cache[address] !== undefined) {
            return Pool.cache[address];
        }
        Pool.cache[address] = await Pool.newPool(address);
        return Pool.cache[address];
    }

    static async newPool(address: string): Promise<Pool> {
        Pool.logger.debug(`newPool: ${address}`);
        if ((await Pool.poolType(address)) === undefined) {
            throw new Error(`unknown pool type for address ${address}`);
        }
        // only Uniswapv2 for now.
        const ABI: utils.AbiItem[] = [
            {
                constant: true,
                inputs: [],
                name: 'token0',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'token1',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
        ];
        const contract = new Pool.web3.eth.Contract(ABI, address);
        const [token0, token1] = await Promise.all([
            contract.methods.token0().call().then(Token.lookupOrCreate),
            contract.methods.token1().call().then(Token.lookupOrCreate),
        ]);

        return new Pool(address, 'UniswapV2', token0, token1);
    }

    readonly address: string;
    readonly dex: Exchange;
    readonly token0: Token;
    readonly token1: Token;

    constructor(address: string, dex: Exchange, token0: Token, token1: Token) {
        this.address = address;
        this.dex = dex;
        this.token0 = token0;
        this.token1 = token1;
    }
    toString(): string {
        return `Pool(${this.address.slice(0, 8)}, ${this.token0}-${
            this.token1
        })`;
    }
}

const detailedERC20ABI: utils.AbiItem[] = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];
// some ERC20 contracts (such as 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2 or
// 0xfFED56a180f23fD32Bc6A1d8d3c09c283aB594A8) have symbols and name of type
// bytes32 instead of string.
const detailedERC20bytes32ABI = _.cloneDeep(detailedERC20ABI);
detailedERC20bytes32ABI[0].outputs[0].type = 'bytes32';
detailedERC20bytes32ABI[2].outputs[0].type = 'bytes32';

export class Token {
    static readonly cache: { [index: string]: Token } = {};
    static web3: Web3;
    static logger: winston.Logger;
    static ABI: utils.AbiItem[];
    static init(web3: Web3, logger: winston.Logger): void {
        Token.web3 = web3;
        Token.logger = logger;
    }

    static async lookupOrCreate(address: string): Promise<Token> {
        if (Token.cache[address] !== undefined) {
            return Token.cache[address];
        }
        Token.cache[address] = await Token.newToken(address);
        return Token.cache[address];
    }

    static async newToken(address: string): Promise<Token> {
        Pool.logger.debug(`newToken: ${address}`);
        const contract = new Token.web3.eth.Contract(detailedERC20ABI, address);
        try {
            const [name, symbol, decimals] = await Promise.all([
                contract.methods.name().call(),
                contract.methods.symbol().call(),
                contract.methods.decimals().call(),
            ]);
            return new Token(address, name, symbol, decimals);
        } catch (e) {
            const contract = new Token.web3.eth.Contract(
                detailedERC20bytes32ABI,
                address,
            );
            // eslint-disable-next-line prefer-const
            let [name, symbol, decimals] = await Promise.all([
                contract.methods.name().call(),
                contract.methods.symbol().call(),
                contract.methods.decimals().call(),
            ]);
            name = utils.toUtf8(name);
            symbol = utils.toUtf8(symbol);
            return new Token(address, name, symbol, decimals);
        }
    }

    readonly address: string;
    readonly symbol: string;
    readonly name: string;
    readonly decimals: number;
    constructor(
        address: string,
        name: string,
        symbol: string,
        decimals: number,
    ) {
        this.address = address;
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
    }
    toString(): string {
        return `Token(${this.address.slice(0, 8)}, ${this.symbol})`;
    }
}
