# sandwiched-wtf

Finds sandwiches across a wallet's uniswap trade history. (Other exchanges coming soon).



### Setup

```sh
npm i
npm run build
```

### Running from CLI


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
```

