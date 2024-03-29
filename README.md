# Backend for sandwiched.wtf 

Finds sandwiches across a wallet's trade history on SushiSwap and UniSwapV2.

### Requirements

1. Node 14 (other versions may work, but this is run/tested on 14).
1. A redis instance. A quick way to get one for test/dev is via docker:

```
docker pull redis:alpine
docker run --name redis -p 6379:6379 -d redis:alpine
```


### Build/test/run

Running the backend requires a redis server to be up.

```sh
npm i
npm run build:watch
npm run dev
npm run test
```


Environment variables: 
- `REDIS_URL` (default `redis://localhost:6379`)
- `WEB3_PROVIDER_URI` (no default, required)


### Running from CLI

There's a little CLI helper that is useful for development and those
who want to search directly without going through an online service.


```sh
$ node dist/scripts/search.js --help
search.js <command>

Commands:
  search.js search <address>  search for sandwiches

Options:
  --web3_url  the web3 URL to use (or set WEB3_PROVIDER_URI env var)    [string]
  --window    search window size (in blocks)              [number] [default: 10]
  --from      search from (block number)                   [number] [default: 0]
  --to        search to (block number)                       [default: "latest"]
  --help, -h  Show help                                                [boolean]



node dist/scripts/search.js --from 11908528 --to 11908540 search 0xb1adceddb2941033a090dd166a462fe1c2029484
info:    Found 1 Uniswap swaps for 0xb1adceddb2941033a090dd166a462fe1c2029484... now searching for sandwiches on these swaps.
info:    Sandwich! open 0x699de2603b40fea219afeccf388ea6c66b36758d89ab1eebb3324239ee442378, target 0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617, close 0x62fedc4df9aebe7cdf7965fe1e35de7d657c94db2c55551c1954eb823a0351b6
```

