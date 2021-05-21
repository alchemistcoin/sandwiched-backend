import { agent as request } from 'supertest';
import { app } from '../src/app';

type message = { [key: string]: string };

function parseResponse(text: string): message[] {
    return text
        .trim()
        .split(/\r?\n/)
        .map((line) => JSON.parse(line));
}

function sandwiches(messages: message[]): message[] {
    return messages.filter((message) => message.targetTx != undefined);
}

const picker = ({
    message,
    openTx,
    targetTx,
    closeTx,
    pool,
    profit,
    profitCurrency,
    mev,
}: message) => ({
    message,
    openTx,
    targetTx,
    closeTx,
    pool,
    profit,
    profitCurrency,
    mev,
});

describe('sandwiched-wtf API', () => {
    const Oxb1 = '0xb1adceddb2941033a090dd166a462fe1c2029484';
    function url(block: number) {
        return `/sandwiches/${Oxb1}?fromBlock=${block}&toBlock=${block + 1}`;
    }

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
            expect(picker(sws[0])).toEqual({
                message: 'Sandwich found',
                openTx:
                    '0x0bcd7d7fd9895023002c5181d39e5de167ee179813dc63c385d5e64d26758ec1',
                targetTx:
                    '0x320fbc4a1de7324a39278aa8213f392364a6dd0546b62fd45f2ccb84558598bf',
                closeTx:
                    '0x53d2e9170eb2a21330ddbfc5a4e9e02e31de3e76738cd1659946256abcb417f7',
                profit: '1.770266036457971241',
                profitCurrency: 'WETH',
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
            expect(picker(sws[0])).toEqual({
                message: 'Sandwich found',
                openTx:
                    '0x699de2603b40fea219afeccf388ea6c66b36758d89ab1eebb3324239ee442378',
                targetTx:
                    '0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617',
                closeTx:
                    '0x62fedc4df9aebe7cdf7965fe1e35de7d657c94db2c55551c1954eb823a0351b6',
                profit: '14.320954423950744728',
                profitCurrency: 'WETH',
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
            expect(picker(sws[0])).toEqual({
                message: 'Sandwich found',
                openTx:
                    '0xe1f01378c5e9e825bd428cd755e68e01f46314a0d7926c940cd9218578a12139',
                targetTx:
                    '0x68dd28d3ce2a5ef90680f5b4e3b86af2501973d2107b642f0f075d92131a56c5',
                closeTx:
                    '0x5a54f6726c168aedf1171ce686dd5d05d03bb99de212e30d5da05ea316bdec64',
                profit: '1.026020662373103583',
                profitCurrency: 'ibETH',
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
            expect(picker(sws[0])).toEqual({
                message: 'Sandwich found',
                openTx:
                    '0x81702040406fb63a7a1b1ec1a895c9d1357637f5bc2381fed34dba27e7880b18',
                targetTx:
                    '0xef82677d92db48e8285b9541584531e3cd53137213217257c705ce307d0e2a7e',
                closeTx:
                    '0xfcf39b2ac09995aa8cbe8075f5cdbf6d6f37043d5c6f1955966c2d63ae43852f',
                profit: '2599.826136379271345974',
                profitCurrency: 'GYSR',
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
            expect(picker(sws[0]).mev).toEqual(true);
        });

        test('computes correct profit when non-standard (non-18) decimals', async () => {
            const block = 11523126;
            const res = await request(app).get(url(block)).expect(200);
            const messages = parseResponse(res.text);
            const sws = sandwiches(messages);
            expect(sws.length).toEqual(1);
            expect(picker(sws[0]).profit).toEqual('3344.067039');
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
});

// bug fixes:
// - for #10 and #19 (bugs with tx ordering), check that no sandwiches found (where we previously did)

// unit tests:
// - for #14, check  that reading those contracts doesn't crash
