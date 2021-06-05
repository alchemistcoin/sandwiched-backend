import { agent as request } from 'supertest';
import { app } from '../src/app';
import { Sandwich } from '../src/core/sandwich';
import { config } from '../src/config/config';

import { SandwichCache } from '../src/services/sandwichcache';

type message = { [key: string]: string };

function parseResponse(text: string): message[] {
    return text
        .trim()
        .split(/\r?\n/)
        .map((line) => JSON.parse(line));
}

function isSandwich(o: any): o is Sandwich {
    return 'profit' in o;
}

function sandwiches(messages: any): Sandwich[] {
    return messages.filter(isSandwich);
}

describe('sandwiched-wtf API', () => {
    const Oxb1 = '0xb1adceddb2941033a090dd166a462fe1c2029484';
    function url(fromBlock: number, toBlock = fromBlock + 1) {
        return `/sandwiches/${Oxb1}?fromBlock=${fromBlock}&toBlock=${toBlock}`;
    }

    afterAll(async () => {
        const redis = SandwichCache.client;
        const testKeys = await redis.keys(`${config.redis_key_prefix}*`);
        for (const k of testKeys) {
            await redis.del(k);
        }
        redis._c.end(true);
        redis._c.end(true);
    });
    describe('bad requests', () => {
        test('returns 400 for bad address', async () => {
            const resp = await request(app).get(`/sandwiches/Ox123456789`);
            expect(resp.status).toEqual(400);
        });

        test('returns 400 for bad to/from block', async () => {
            const resp = await request(app).get(
                `/sandwiches/${Oxb1}?fromBlock=foo&toBlock=200`,
            );
            expect(resp.status).toEqual(400);
        });
    });

    describe('sandwich-finding', () => {
        jest.setTimeout(30000);
        test('finds sandwich around SwapExactETHforTokens (WETH is token0)', async () => {
            const block = 12208431;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0]).toEqual({
                message: 'Sandwich found',
                open: {
                    amountIn: '20.0',
                    amountOut: '8226.342643528036846659',
                    currencyIn: 'WETH',
                    currencyOut: 'B20',
                    ts: 'Fri, 09 Apr 2021 22:46:38 GMT',
                    tx:
                        '0x0bcd7d7fd9895023002c5181d39e5de167ee179813dc63c385d5e64d26758ec1',
                },
                target: {
                    amountIn: '30.0',
                    amountOut: '11331.416153131322048365',
                    currencyIn: 'WETH',
                    currencyOut: 'B20',
                    ts: 'Fri, 09 Apr 2021 22:46:38 GMT',
                    tx:
                        '0x320fbc4a1de7324a39278aa8213f392364a6dd0546b62fd45f2ccb84558598bf',
                },
                close: {
                    amountIn: '8226.342643528036846659',
                    amountOut: '21.770266036457971241',
                    currencyIn: 'B20',
                    currencyOut: 'WETH',
                    ts: 'Fri, 09 Apr 2021 22:47:37 GMT',
                    tx:
                        '0x53d2e9170eb2a21330ddbfc5a4e9e02e31de3e76738cd1659946256abcb417f7',
                },
                profit: { amount: '1.770266036457971241', currency: 'WETH' },
                pool: 'WETH - B20',
                mev: false,
            });
        });

        test('finds sandwich around SwapExactETHforTokens (WETH is token1)', async () => {
            const block = 11908528;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0]).toEqual({
                message: 'Sandwich found',
                open: {
                    amountIn: '220.0',
                    amountOut: '1234.077701279797405074',
                    currencyIn: 'WETH',
                    currencyOut: 'FARM',
                    ts: 'Mon, 22 Feb 2021 18:41:58 GMT',
                    tx:
                        '0x699de2603b40fea219afeccf388ea6c66b36758d89ab1eebb3324239ee442378',
                },
                target: {
                    amountIn: '153.0',
                    amountOut: '782.613521863157224673',
                    currencyIn: 'WETH',
                    currencyOut: 'FARM',
                    ts: 'Mon, 22 Feb 2021 18:41:58 GMT',
                    tx:
                        '0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617',
                },
                close: {
                    amountIn: '1234.077701279797405074',
                    amountOut: '234.320954423950744728',
                    currencyIn: 'FARM',
                    currencyOut: 'WETH',
                    ts: 'Mon, 22 Feb 2021 18:42:35 GMT',
                    tx:
                        '0x62fedc4df9aebe7cdf7965fe1e35de7d657c94db2c55551c1954eb823a0351b6',
                },
                profit: { amount: '14.320954423950744728', currency: 'WETH' },
                pool: 'FARM - WETH',
                mev: false,
            });
        });

        test('finds sandwich around SwapExactTokensForTokens', async () => {
            const block = 11807202;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0]).toEqual({
                message: 'Sandwich found',
                open: {
                    amountIn: '42.0',
                    amountOut: '33327.249924402182844634',
                    currencyIn: 'ibETH',
                    currencyOut: 'ALPHA',
                    ts: 'Sun, 07 Feb 2021 04:48:56 GMT',
                    tx:
                        '0xe1f01378c5e9e825bd428cd755e68e01f46314a0d7926c940cd9218578a12139',
                },
                target: {
                    amountIn: '290.0',
                    amountOut: '225702.625345847900102161',
                    currencyIn: 'ibETH',
                    currencyOut: 'ALPHA',
                    ts: 'Sun, 07 Feb 2021 04:48:56 GMT',
                    tx:
                        '0x68dd28d3ce2a5ef90680f5b4e3b86af2501973d2107b642f0f075d92131a56c5',
                },
                close: {
                    amountIn: '33327.249924402182844634',
                    amountOut: '43.026020662373103583',
                    currencyIn: 'ALPHA',
                    currencyOut: 'ibETH',
                    ts: 'Sun, 07 Feb 2021 04:50:13 GMT',
                    tx:
                        '0x5a54f6726c168aedf1171ce686dd5d05d03bb99de212e30d5da05ea316bdec64',
                },
                profit: { amount: '1.026020662373103583', currency: 'ibETH' },
                pool: 'ibETH - ALPHA',
                mev: false,
            });
        });

        test('finds sandwich around SwapExactTokensForETH', async () => {
            const block = 12316472;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0]).toEqual({
                message: 'Sandwich found',
                open: {
                    amountIn: '28544.179912330024570403',
                    amountOut: '12.061108125344495256',
                    currencyIn: 'GYSR',
                    currencyOut: 'WETH',
                    ts: 'Mon, 26 Apr 2021 14:23:33 GMT',
                    tx:
                        '0x81702040406fb63a7a1b1ec1a895c9d1357637f5bc2381fed34dba27e7880b18',
                },
                target: {
                    amountIn: '65207.951835566551907693',
                    amountOut: '25.671834777932286375',
                    currencyIn: 'GYSR',
                    currencyOut: 'WETH',
                    ts: 'Mon, 26 Apr 2021 14:23:33 GMT',
                    tx:
                        '0xef82677d92db48e8285b9541584531e3cd53137213217257c705ce307d0e2a7e',
                },
                close: {
                    amountIn: '12.021306468530860032',
                    amountOut: '31144.006048709295916377',
                    currencyIn: 'WETH',
                    currencyOut: 'GYSR',
                    ts: 'Mon, 26 Apr 2021 14:24:14 GMT',
                    tx:
                        '0xfcf39b2ac09995aa8cbe8075f5cdbf6d6f37043d5c6f1955966c2d63ae43852f',
                },
                profit: { amount: '2599.826136379271345974', currency: 'GYSR' },
                // By happenstance this one has a backward profit as well as a
                // forward profit. This wasn't explicitly the purpose of this test
                // and was discovered after backward profit was added.
                profit2: {
                    amount: '0.039801656813635224',
                    currency: 'WETH',
                },
                pool: 'GYSR - WETH',
                mev: false,
            });
        });

        test('does not return dupes for sandwiches that are found both via Swap and Transfer', async () => {
            const block = 11907091;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
        });

        test('sets mev flag on bundle sandwich', async () => {
            const block = 12205788;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0].mev).toEqual(true);
        });

        test('computes correct profit when non-standard (non-18) decimals', async () => {
            const block = 11523126;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(sws[0].profit.amount).toEqual('3344.067039');
        });

        test('finds double sandwich (interleaved) and computes backward profit correctly', async () => {
            // It so happened that this tx has two sandwiches that both have
            // backward profits, so we test them together, but this doesn't mean
            // that double-sandwiches and backward profits are otherwise
            // linked...
            const block = 11380276;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(2);

            expect(sws[0].profit).toEqual({ amount: '0.0', currency: 'ROOK' });
            expect(sws[0].profit2).toEqual({
                amount: '0.197375949528145637',
                currency: 'WETH',
            });
            expect(sws[1].profit).toEqual({ amount: '0.0', currency: 'ROOK' });
            expect(sws[1].profit2).toEqual({
                amount: '0.167365394662967763',
                currency: 'WETH',
            });
        });

        test('finds double sandwich (non-interleaved) and computes profits correctly', async () => {
            const block = 11972504;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(2);
            expect(sws[0].profit).toEqual({
                amount: '0.128048512336962075',
                currency: 'WETH',
            });
            expect(sws[1].profit).toEqual({
                amount: '1.21808712279187822',
                currency: 'WETH',
            });
        });

        test('takes into account transaction position in block (bug #19 fix)', async () => {
            //bug fix https://github.com/alchemistcoin/sandwiched-backend/issues/19
            const block = 12343644;
            const wallet = '0x3328f5f2cEcAF00a2443082B657CedEAf70bfAEf';
            const url = `/sandwiches/${wallet}?fromBlock=${block}&toBlock=${
                block + 1
            }`;
            const res = await request(app).get(url).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(0);
        });

        test('takes into account transaction position in block (bug #10 fix)', async () => {
            // bug fix https://github.com/alchemistcoin/sandwiched-backend/issues/10
            const wallet = '0xf6da21e95d74767009accb145b96897ac3630bad';
            const block = 12090562;
            const url = `/sandwiches/${wallet}?fromBlock=${block}&toBlock=${
                block + 1
            }`;
            const res = await request(app).get(url).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(0);
        });
    });

    describe('sandwich-caching', () => {
        jest.setTimeout(30000);
        test('caches sandwiches and block ranges', async () => {
            const block = 12545015;
            {
                const res = await request(app).get(url(block)).expect(200);
                const messages = parseResponse(res.text);
                const sws = sandwiches(messages);
                expect(sws.length).toEqual(0);
                const cached = await SandwichCache.lookup(Oxb1);
                expect(cached.fromBlock).toEqual(block);
                expect(cached.toBlock).toEqual(block + 1);
            }
            {
                const res = await request(app)
                    .get(url(block, block + 10))
                    .expect(200);
                const messages = parseResponse(res.text);
                const sws = sandwiches(messages);
                expect(sws.length).toEqual(0);
                const cached = await SandwichCache.lookup(Oxb1);
                expect(cached.fromBlock).toEqual(block);
                expect(cached.toBlock).toEqual(block + 10);
            }
        });
    });
});

// bug fixes:
// - for #10 and #19 (bugs with tx ordering), check that no sandwiches found (where we previously did)

// unit tests:
// - for #14, check  that reading those contracts doesn't crash
