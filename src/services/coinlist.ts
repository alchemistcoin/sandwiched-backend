// $ curl -X GET "https://api.coingecko.com/api/v3/coins/list?include_platform=true" -H "accept: application/json" | jq '[.[] | select(.platforms | has("ethereum") ) | select(.platforms.ethereum != "") | {id, symbol, addr: .platforms.ethereum}]'  > coinlist.json

export const coingecko = [
    {
        id: '0chain',
        symbol: 'zcn',
        addr: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
    },
    {
        id: '0x',
        symbol: 'zrx',
        addr: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    },
    {
        id: '0xcert',
        symbol: 'zxc',
        addr: '0x83e2be8d114f9661221384b3a50d24b96a5653f5',
    },
    {
        id: '0xmonero',
        symbol: '0xmr',
        addr: '0x035df12e0f3ac6671126525f1015e47d79dfeddf',
    },
    {
        id: '10x-gg',
        symbol: 'xgg',
        addr: '0x06b179e292f080871825bed5d722162fd96b4c95',
    },
    {
        id: '12ships',
        symbol: 'TSHP',
        addr: '0x525794473f7ab5715c81d06d10f52d11cc052804',
    },
    {
        id: '1ai',
        symbol: '1ai',
        addr: '0x208bbb6bcea22ef2011789331405347394ebaa51',
    },
    {
        id: '1inch',
        symbol: '1inch',
        addr: '0x111111111117dc0aa78b770fa6a738034120c302',
    },
    {
        id: '1million-nfts',
        symbol: '1mil',
        addr: '0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016',
    },
    {
        id: '1million-token',
        symbol: '1mt',
        addr: '0xf0bc1ae4ef7ffb126a8347d06ac6f8add770e1ce',
    },
    {
        id: '1world',
        symbol: '1wo',
        addr: '0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23',
    },
    {
        id: '1x-long-btc-implied-volatility-token',
        symbol: 'bvol',
        addr: '0x81824663353a9d29b01b2de9dd9a2bb271d298cd',
    },
    {
        id: '1x-short-algorand-token',
        symbol: 'algohedge',
        addr: '0xfdc3d57eb7839ca68a2fad7a93799c8e8afa61b7',
    },
    {
        id: '1x-short-bitcoin-cash-token',
        symbol: 'bchhedge',
        addr: '0x02e88a689fdfb920e7aa6174fb7ab72add3c5694',
    },
    {
        id: '1x-short-bitcoin-token',
        symbol: 'hedge',
        addr: '0x1fa3bc860bf823d792f04f662f3aa3a500a68814',
    },
    {
        id: '1x-short-bnb-token',
        symbol: 'bnbhedge',
        addr: '0x2840ad41cf25ad58303ba24c416e79dce4161b4f',
    },
    {
        id: '1x-short-btc-implied-volatility',
        symbol: 'ibvol',
        addr: '0x627e2ee3dbda546e168eaaff25a2c5212e4a95a0',
    },
    {
        id: '1x-short-eos-token',
        symbol: 'eoshedge',
        addr: '0xb38f206615325306dddeb0794a6482486b6b78b8',
    },
    {
        id: '1x-short-ethereum-token',
        symbol: 'ethhedge',
        addr: '0x10e1e953ddba597011f8bfa806ab0cc3415a622b',
    },
    {
        id: '1x-short-exchange-token-index-token',
        symbol: 'exchhedge',
        addr: '0xf8cc67e304f8e1a351ed83b4dbbe6b4076d51376',
    },
    {
        id: '1x-short-litecoin-token',
        symbol: 'ltchedge',
        addr: '0xd0c64d6c0e9aa53fffd8b80313e035f7b83083f3',
    },
    {
        id: '1x-short-okb-token',
        symbol: 'okbhedge',
        addr: '0x889bc62e94bb6902d022bb82b38f7fcd637df28c',
    },
    {
        id: '1x-short-shitcoin-index-token',
        symbol: 'hedgeshit',
        addr: '0x1d9cd2180fd4e9771fca28681034d02390b14e4c',
    },
    {
        id: '1x-short-trx-token',
        symbol: 'trxhedge',
        addr: '0xe58c8df0088cf27b26c7d546a9835deacc29496c',
    },
    {
        id: '1x-short-xrp-token',
        symbol: 'xrphedge',
        addr: '0x55b54d8fb1640d1321d5164590e7b020ba43def2',
    },
    {
        id: '24-genesis-mooncats',
        symbol: 'gmc24',
        addr: '0x06141f60ee56c8ecc869f46568e2cb1e66baaf41',
    },
    {
        id: '2based-finance',
        symbol: '2based',
        addr: '0x168e39f96a653ce0a456560687241b0b2936e5ff',
    },
    {
        id: '2gether-2',
        symbol: '2gt',
        addr: '0xc96c1609a1a45ccc667b2b7fa6508e29617f7b69',
    },
    {
        id: '2key',
        symbol: '2key',
        addr: '0xe48972fcd82a274411c01834e2f031d4377fa2c0',
    },
    {
        id: '300fit',
        symbol: 'fit',
        addr: '0x3c72fca8523686fd9e5740b0826fa4bb376e0241',
    },
    {
        id: '3x-long-algorand-token',
        symbol: 'algobull',
        addr: '0x584936357d68f5143f12e2e64f0089db93814dad',
    },
    {
        id: '3x-long-altcoin-index-token',
        symbol: 'altbull',
        addr: '0xd829664cdbf3195b2ce76047a65de29e7ed0a9a8',
    },
    {
        id: '3x-long-bilira-token',
        symbol: 'trybbull',
        addr: '0xc7038ccf60e48c5b7119e55566a6ad9f2d66c7c2',
    },
    {
        id: '3x-long-bitcoin-cash-token',
        symbol: 'bchbull',
        addr: '0x4c133e081dfb5858e39cca74e69bf603d409e57a',
    },
    {
        id: '3x-long-bitcoin-sv-token',
        symbol: 'bsvbull',
        addr: '0x6e13a9e4ae3d0678e511fb6d2ad531fcf0e247bf',
    },
    {
        id: '3x-long-bitcoin-token',
        symbol: 'bull',
        addr: '0x68eb95dc9934e19b86687a10df8e364423240e94',
    },
    {
        id: '3x-long-bitmax-token-token',
        symbol: 'btmxbull',
        addr: '0x9885ca101dfd8f23d364874f799554c52bfee820',
    },
    {
        id: '3x-long-bnb-token',
        symbol: 'bnbbull',
        addr: '0x9d1a62c2ad99019768b9126fda004a9952853f6e',
    },
    {
        id: '3x-long-cardano-token',
        symbol: 'adabull',
        addr: '0x43de1145cd22f0a9cc99e51c205e6e81161df6b9',
    },
    {
        id: '3x-long-chainlink-token',
        symbol: 'linkbull',
        addr: '0x83ad87c988ac0c6277c0c6234cc8108b20bb5d9b',
    },
    {
        id: '3x-long-cosmos-token',
        symbol: 'atombull',
        addr: '0x75f0038b8fbfccafe2ab9a51431658871ba5182c',
    },
    {
        id: '3x-long-dogecoin-token',
        symbol: 'dogebull',
        addr: '0x7aa6b33fb7f395ddbca7b7a33264a3c799fa626f',
    },
    {
        id: '3x-long-dragon-index-token',
        symbol: 'drgnbull',
        addr: '0x3335f16af9008bfd32f1ee6c2be5d4f84fa0b9da',
    },
    {
        id: '3x-long-eos-token',
        symbol: 'eosbull',
        addr: '0xead7f3ae4e0bb0d8785852cc37cc9d0b5e75c06a',
    },
    {
        id: '3x-long-ethereum-classic-token',
        symbol: 'etcbull',
        addr: '0x974c98bc2e82fa18de92b7e697a1d9bd25682e80',
    },
    {
        id: '3x-long-ethereum-token',
        symbol: 'ethbull',
        addr: '0x871baed4088b863fd6407159f3672d70cd34837d',
    },
    {
        id: '3x-long-exchange-token-index-token',
        symbol: 'exchbull',
        addr: '0x592ef68c18f05a22c5890263dea5d952dd140d2a',
    },
    {
        id: '3x-long-huobi-token-token',
        symbol: 'htbull',
        addr: '0x0d5e2681d2aadc91f7da4146740180a2190f0c79',
    },
    {
        id: '3x-long-leo-token',
        symbol: 'leobull',
        addr: '0xc2685307ef2b8842fbf3def432408c46bd0420fd',
    },
    {
        id: '3x-long-litecoin-token',
        symbol: 'ltcbull',
        addr: '0xdb61354e9cf2217a29770e9811832b360a8daad3',
    },
    {
        id: '3x-long-matic-token',
        symbol: 'maticbull',
        addr: '0x7e03521b9da891ca3f79a8728e2eaeb24886c5f9',
    },
    {
        id: '3x-long-midcap-index-token',
        symbol: 'midbull',
        addr: '0x59db60bd41bbc8ca4c1efee6ea2a97eae1e30cf5',
    },
    {
        id: '3x-long-okb-token',
        symbol: 'okbbull',
        addr: '0x8af785687ee8d75114b028997c9ca36b5cc67bc4',
    },
    {
        id: '3x-long-pax-gold-token',
        symbol: 'paxgbull',
        addr: '0x81f09ed4b98b1c8e99b1fa838b72acb842afe94c',
    },
    {
        id: '3x-long-shitcoin-index-token',
        symbol: 'bullshit',
        addr: '0xd06b25f67a17f12b41f615b34d87ecd716ff55a0',
    },
    {
        id: '3x-long-stellar-token',
        symbol: 'xlmbull',
        addr: '0x3a43a04d80f9881d88080bf9fa8bb720afb6c966',
    },
    {
        id: '3x-long-tether-gold-token',
        symbol: 'xautbull',
        addr: '0xc9287623832668432099cef2ffdef3ced14f4315',
    },
    {
        id: '3x-long-tether-token',
        symbol: 'usdtbull',
        addr: '0x8cce19943a01e78b7c277794fb081816f6151bab',
    },
    {
        id: '3x-long-tezos-token',
        symbol: 'xtzbull',
        addr: '0x8af17a6396c8f315f6b6dbc6aa686c85f9b3e554',
    },
    {
        id: '3x-long-tomochain-token',
        symbol: 'tomobull',
        addr: '0xa38920c00d1a5303db538a3ea08da7a779e1f751',
    },
    {
        id: '3x-long-trx-token',
        symbol: 'trxbull',
        addr: '0xc175e77b04f2341517334ea3ed0b198a01a97383',
    },
    {
        id: '3x-long-xrp-token',
        symbol: 'xrpbull',
        addr: '0x27c1ba4f85b8dc1c150157816623a6ce80b7f187',
    },
    {
        id: '3x-short-algorand-token',
        symbol: 'algobear',
        addr: '0x057fb10e3fec001a40e6b75d3a30b99e23e54107',
    },
    {
        id: '3x-short-altcoin-index-token',
        symbol: 'altbear',
        addr: '0x90b417ab462440cf59767bcf72d0d91ca42f21ed',
    },
    {
        id: '3x-short-bilira-token',
        symbol: 'trybbear',
        addr: '0xa5ddfca8b837ccd0cf80fe6c24e2a9018fb50dba',
    },
    {
        id: '3x-short-bitcoin-cash-token',
        symbol: 'bchbear',
        addr: '0xa9fc65da36064ce545e87690e06f5de10c52c690',
    },
    {
        id: '3x-short-bitcoin-sv-token',
        symbol: 'bsvbear',
        addr: '0xce49c3c92b33a1653f34811a9d7e34502bf12b89',
    },
    {
        id: '3x-short-bitcoin-token',
        symbol: 'bear',
        addr: '0x016ee7373248a80bde1fd6baa001311d233b3cfa',
    },
    {
        id: '3x-short-bitmax-token-token',
        symbol: 'btmxbear',
        addr: '0xdbf637f78624f896b92f801e81f6031b7865ed20',
    },
    {
        id: '3x-short-bnb-token',
        symbol: 'bnbbear',
        addr: '0x6febdfc0a9d9502c45343fce0df08828def44795',
    },
    {
        id: '3x-short-cardano-token',
        symbol: 'adabear',
        addr: '0xb3299d4bab93bf04d5b11bc49cd6dfad1f77d23f',
    },
    {
        id: '3x-short-chainlink-token',
        symbol: 'linkbear',
        addr: '0xa209ba34c01a2713a4453a656630cc9de8a362bc',
    },
    {
        id: '3x-short-cosmos-token',
        symbol: 'atombear',
        addr: '0x3b834a620751a811f65d8f599b3b72617a4418d0',
    },
    {
        id: '3x-short-dogecoin-token',
        symbol: 'dogebear',
        addr: '0xf1d32952e2fbb1a91e620b0fd7fbc8a8879a47f3',
    },
    {
        id: '3x-short-dragon-index-token',
        symbol: 'drgnbear',
        addr: '0x223fb5c14c00cfb70cf56bb63c2eef2d74fe1a78',
    },
    {
        id: '3x-short-eos-token',
        symbol: 'eosbear',
        addr: '0x3d3dd61b0f9a558759a21da42166042b114e12d5',
    },
    {
        id: '3x-short-ethereum-classic-token',
        symbol: 'etcbear',
        addr: '0xa340f0937a8c00db11c83cc16cec12310160f0b6',
    },
    {
        id: '3x-short-ethereum-token',
        symbol: 'ethbear',
        addr: '0x2f5e2c9002c058c063d21a06b6cabb50950130c8',
    },
    {
        id: '3x-short-exchange-token-index-token',
        symbol: 'exchbear',
        addr: '0x6baa91cd8aa07431760ef2eedfedcef662a6b8b3',
    },
    {
        id: '3x-short-huobi-token-token',
        symbol: 'htbear',
        addr: '0x86eb791495be777db763142a2c547d1112554fb8',
    },
    {
        id: '3x-short-leo-token',
        symbol: 'leobear',
        addr: '0x3c955e35b6da1ff623d38d750c85b3aed89a10c1',
    },
    {
        id: '3x-short-litecoin-token',
        symbol: 'ltcbear',
        addr: '0xb422e605fbd765b80d2c4b5d8196c2f94144438b',
    },
    {
        id: '3x-short-midcap-index-token',
        symbol: 'midbear',
        addr: '0xc82abb524257c8ee4790bfdefb452b2d6a395e21',
    },
    {
        id: '3x-short-okb-token',
        symbol: 'okbbear',
        addr: '0x053e5ba7cb9669dcc2feb2d0e1d3d4a0ad6aae39',
    },
    {
        id: '3x-short-pax-gold-token',
        symbol: 'paxgbear',
        addr: '0x3c4a46f0c075a7f191a7459bb51eb1f81ac36f8a',
    },
    {
        id: '3x-short-shitcoin-index-token',
        symbol: 'bearshit',
        addr: '0x48dee19c81b89a9ab473361bae7a19210f2deaa4',
    },
    {
        id: '3x-short-stellar-token',
        symbol: 'xlmbear',
        addr: '0x960efd63ae895f165d874e6cc62501fd0e7dc50a',
    },
    {
        id: '3x-short-tether-gold-token',
        symbol: 'xautbear',
        addr: '0x31cbf205e26ba63296fdbd254a6b1be3ed28ce47',
    },
    {
        id: '3x-short-tether-token',
        symbol: 'usdtbear',
        addr: '0x0cd6c8161f1638485a1a2f5bf1a0127e45913c2f',
    },
    {
        id: '3x-short-tezos-token',
        symbol: 'xtzbear',
        addr: '0xbc41d05287498dec58129560de6bd1b8d4e3ac1d',
    },
    {
        id: '3x-short-tomochain-token',
        symbol: 'tomobear',
        addr: '0xa1653cb37852249e4f18dfbc473a5ce3f88fa6ad',
    },
    {
        id: '3x-short-trx-token',
        symbol: 'trxbear',
        addr: '0x86807da5b92d31f67e128771cacb85f3579646ea',
    },
    {
        id: '3x-short-xrp-token',
        symbol: 'xrpbear',
        addr: '0x94fc5934cf5970e944a67de806eeb5a4b493c6e6',
    },
    {
        id: '3xt',
        symbol: '3xt',
        addr: '0x96cf107e446a6e528ffd045f4eb6dff3cdb6a666',
    },
    {
        id: '484-fund',
        symbol: 'error',
        addr: '0xd3deff001ef67e39212f4973b617c2e684fa436c',
    },
    {
        id: '4artechnologies',
        symbol: '4art',
        addr: '0xff44b5719f0b77a9951636fc5e69d3a1fc9e7d73',
    },
    {
        id: '4new',
        symbol: 'kwatt',
        addr: '0x241ba672574a78a3a604cdd0a94429a73a84a324',
    },
    {
        id: '502-bad-gateway-token',
        symbol: 'z502',
        addr: '0x2cd9324ba13b77554592d453e6364086fbba446a',
    },
    {
        id: '520',
        symbol: '520',
        addr: '0x62d75a2a10f755104bd1024d997141ce793cf585',
    },
    {
        id: '6ix9ine-chain',
        symbol: '69c',
        addr: '0x02fdd6866333d8cd8b1ca022d382080698060bc2',
    },
    {
        id: '7chain',
        symbol: 'vii',
        addr: '0x0d5bb28972e0b2d63732f558b4af265aa5407467',
    },
    {
        id: '7eleven',
        symbol: '7e',
        addr: '0x186a33d4dbcd700086a26188dcb74e69be463665',
    },
    {
        id: '7plus-coin',
        symbol: 'sv7',
        addr: '0x676a32b50e58924effad343f1d4d3c8dd0128889',
    },
    {
        id: '808ta-token',
        symbol: '808ta',
        addr: '0x5b535edfa75d7cb706044da0171204e1c48d00e8',
    },
    {
        id: '88mph',
        symbol: 'mph',
        addr: '0x8888801af4d980682e47f1a9036e589479e835c5',
    },
    {
        id: '8pay',
        symbol: '8pay',
        addr: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
    },
    {
        id: '8x8-protocol',
        symbol: 'exe',
        addr: '0x412d397ddca07d753e3e0c61e367fb1b474b3e7d',
    },
    {
        id: 'aapl',
        symbol: '$aapl',
        addr: '0x41efc0253ee7ea44400abb5f907fdbfdebc82bec',
    },
    {
        id: 'aave',
        symbol: 'aave',
        addr: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
    {
        id: 'aave-bat',
        symbol: 'abat',
        addr: '0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1',
    },
    {
        id: 'aave-bat-v1',
        symbol: 'abat',
        addr: '0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00',
    },
    {
        id: 'aave-busd',
        symbol: 'abusd',
        addr: '0xa361718326c15715591c299427c62086f69923d9',
    },
    {
        id: 'aave-busd-v1',
        symbol: 'abusd',
        addr: '0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8',
    },
    {
        id: 'aave-dai',
        symbol: 'adai',
        addr: '0x028171bca77440897b824ca71d1c56cac55b68a3',
    },
    {
        id: 'aave-dai-v1',
        symbol: 'adai',
        addr: '0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d',
    },
    {
        id: 'aave-enj',
        symbol: 'aenj',
        addr: '0xac6df26a590f08dcc95d5a4705ae8abbc88509ef',
    },
    {
        id: 'aave-enj-v1',
        symbol: 'aenj',
        addr: '0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40',
    },
    {
        id: 'aave-eth-v1',
        symbol: 'aeth',
        addr: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
    },
    {
        id: 'aavegotchi',
        symbol: 'ghst',
        addr: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
    },
    {
        id: 'aave-knc',
        symbol: 'aknc',
        addr: '0x39c6b3e42d6a679d7d776778fe880bc9487c2eda',
    },
    {
        id: 'aave-knc-v1',
        symbol: 'aknc',
        addr: '0x9d91be44c06d373a8a226e1f3b146956083803eb',
    },
    {
        id: 'aave-link',
        symbol: 'alink',
        addr: '0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0',
    },
    {
        id: 'aave-link-v1',
        symbol: 'alink',
        addr: '0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84',
    },
    {
        id: 'aave-mana',
        symbol: 'amana',
        addr: '0xa685a61171bb30d4072b338c80cb7b2c865c873e',
    },
    {
        id: 'aave-mana-v1',
        symbol: 'amana',
        addr: '0x6fce4a401b6b80ace52baaefe4421bd188e76f6f',
    },
    {
        id: 'aave-mkr',
        symbol: 'amkr',
        addr: '0xc713e5e149d5d0715dcd1c156a020976e7e56b88',
    },
    {
        id: 'aave-mkr-v1',
        symbol: 'amkr',
        addr: '0x7deb5e830be29f91e298ba5ff1356bb7f8146998',
    },
    {
        id: 'aave-ren',
        symbol: 'aren',
        addr: '0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a',
    },
    {
        id: 'aave-ren-v1',
        symbol: 'aren',
        addr: '0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c',
    },
    {
        id: 'aave-snx',
        symbol: 'asnx',
        addr: '0x35f6b052c598d933d69a4eec4d04c73a191fe6c2',
    },
    {
        id: 'aave-snx-v1',
        symbol: 'asnx',
        addr: '0x328c4c80bc7aca0834db37e6600a6c49e12da4de',
    },
    {
        id: 'aave-susd',
        symbol: 'asusd',
        addr: '0x6c5024cd4f8a59110119c56f8933403a539555eb',
    },
    {
        id: 'aave-susd-v1',
        symbol: 'asusd',
        addr: '0x625ae63000f46200499120b906716420bd059240',
    },
    {
        id: 'aave-tusd',
        symbol: 'atusd',
        addr: '0x101cc05f4a51c0319f570d5e146a8c625198e636',
    },
    {
        id: 'aave-tusd-v1',
        symbol: 'atusd',
        addr: '0x4da9b813057d04baef4e5800e36083717b4a0341',
    },
    {
        id: 'aave-usdc',
        symbol: 'ausdc',
        addr: '0xbcca60bb61934080951369a648fb03df4f96263c',
    },
    {
        id: 'aave-usdc-v1',
        symbol: 'ausdc',
        addr: '0x9ba00d6856a4edf4665bca2c2309936572473b7e',
    },
    {
        id: 'aave-usdt',
        symbol: 'ausdt',
        addr: '0x3ed3b47dd13ec9a98b44e6204a523e766b225811',
    },
    {
        id: 'aave-usdt-v1',
        symbol: 'ausdt',
        addr: '0x71fc860f7d3a592a4a98740e39db31d25db65ae8',
    },
    {
        id: 'aave-wbtc',
        symbol: 'awbtc',
        addr: '0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656',
    },
    {
        id: 'aave-wbtc-v1',
        symbol: 'awbtc',
        addr: '0xfc4b8ed459e00e5400be803a9bb3954234fd50e3',
    },
    {
        id: 'aave-zrx',
        symbol: 'azrx',
        addr: '0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e',
    },
    {
        id: 'aave-zrx-v1',
        symbol: 'azrx',
        addr: '0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f',
    },
    {
        id: 'aax-token',
        symbol: 'aab',
        addr: '0x686c650dbcfeaa75d09b883621ad810f5952bd5d',
    },
    {
        id: 'abcc-token',
        symbol: 'at',
        addr: '0xbf8fb919a8bbf28e590852aef2d284494ebc0657',
    },
    {
        id: 'abitshadow-token',
        symbol: 'abst',
        addr: '0xa0b207103f764a920b4af9e691f5bd956de14ded',
    },
    {
        id: 'able',
        symbol: 'ablx',
        addr: '0x865bfd8232778f00cae81315bf75ef1fe6e30cdd',
    },
    {
        id: 'abulaba',
        symbol: 'aaa',
        addr: '0xd938137e6d96c72e4a6085412ada2dad78ff89c4',
    },
    {
        id: 'acash-coin',
        symbol: 'aca',
        addr: '0x63d958d765f5bd88efdbd8afd32445393b24907f',
    },
    {
        id: 'ace-casino',
        symbol: 'ace',
        addr: '0xe17e41acd4caa3cec048837bfd1918b3c4141767',
    },
    {
        id: 'acent',
        symbol: 'ace',
        addr: '0xec5483804e637d45cde22fa0869656b64b5ab1ab',
    },
    {
        id: 'ac-exchange-token',
        symbol: 'acxt',
        addr: '0x7be00ed6796b21656732e8f739fc1b8f1c53da0d',
    },
    {
        id: 'acoconut',
        symbol: 'ac',
        addr: '0x9a0aba393aac4dfbff4333b06c407458002c6183',
    },
    {
        id: 'acreage-coin',
        symbol: 'acr',
        addr: '0x76306f029f8f99effe509534037ba7030999e3cf',
    },
    {
        id: 'acute-angle-cloud',
        symbol: 'aac',
        addr: '0xe75ad3aab14e4b0df8c5da4286608dabb21bd864',
    },
    {
        id: 'adappter-token',
        symbol: 'adp',
        addr: '0xc314b0e758d5ff74f63e307a86ebfe183c95767b',
    },
    {
        id: 'adbank',
        symbol: 'adb',
        addr: '0x2baac9330cf9ac479d819195794d79ad0c7616e3',
    },
    {
        id: 'add-xyz-new',
        symbol: 'add',
        addr: '0x635d081fd8f6670135d8a3640e2cf78220787d56',
    },
    {
        id: 'adelphoi',
        symbol: 'adl',
        addr: '0x660e71483785f66133548b10f6926dc332b06e61',
    },
    {
        id: 'adex',
        symbol: 'adx',
        addr: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3',
    },
    {
        id: 'ad-flex-token',
        symbol: 'adf',
        addr: '0x7220e92d418e2eb59d0c25d195fa004bfd3afc42',
    },
    {
        id: 'aditus',
        symbol: 'adi',
        addr: '0x8810c63470d38639954c6b41aac545848c46484a',
    },
    {
        id: 'adshares',
        symbol: 'ads',
        addr: '0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a',
    },
    {
        id: 'adtoken',
        symbol: 'adt',
        addr: '0xd0d6d6c5fe4a677d343cc433536bb717bae167dd',
    },
    {
        id: 'adventure-token',
        symbol: 'twa',
        addr: '0xa2ef2757d2ed560c9e3758d1946d7bcccbd5a7fe',
    },
    {
        id: 'advertise-coin',
        symbol: 'adco',
        addr: '0xb6c3dc857845a713d3531cea5ac546f6767992f4',
    },
    {
        id: 'advertisingcoin',
        symbol: 'advc',
        addr: '0xf8d1254fc324d2e75a5a37f5bd4ca34a20ef460d',
    },
    {
        id: 'aegis',
        symbol: 'ags',
        addr: '0xdb2f2bcce3efa95eda95a233af45f3e0d4f00e2a',
    },
    {
        id: 'aelf',
        symbol: 'elf',
        addr: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
    },
    {
        id: 'aelysir',
        symbol: 'ael',
        addr: '0x0405be40241a2f7822c33c5a3eee238bf2973ba3',
    },
    {
        id: 'aen-smart-token',
        symbol: 'aens',
        addr: '0xd38de88687172bde440755b5237987e4a87c23a7',
    },
    {
        id: 'aergo',
        symbol: 'aergo',
        addr: '0x91af0fbb28aba7e31403cb457106ce79397fd4e6',
    },
    {
        id: 'aeron',
        symbol: 'arnx',
        addr: '0x0c37bcf456bc661c14d596683325623076d7e283',
    },
    {
        id: 'aerotoken',
        symbol: 'aet',
        addr: '0x8c9e4cf756b9d01d791b95bc2d0913ef2bf03784',
    },
    {
        id: 'aeryus',
        symbol: 'aer',
        addr: '0xac4d22e40bf0b8ef4750a99ed4e935b99a42685e',
    },
    {
        id: 'aeternity',
        symbol: 'ae',
        addr: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d',
    },
    {
        id: 'afin-coin',
        symbol: 'afin',
        addr: '0xee9e5eff401ee921b138490d00ca8d1f13f67a72',
    },
    {
        id: 'africa-to-mars',
        symbol: 'atm',
        addr: '0x9b91ef0d78488c5ef4c509eb7a73f7d8ca650ce4',
    },
    {
        id: 'afrodex',
        symbol: 'afrox',
        addr: '0x08130635368aa28b217a4dfb68e1bf8dc525621c',
    },
    {
        id: 'afrodex-labs-token',
        symbol: 'afdlt',
        addr: '0xd8a8843b0a5aba6b030e92b3f4d669fad8a5be50',
    },
    {
        id: 'aga-rewards',
        symbol: 'edc',
        addr: '0x9d5963ba32e877871dff3e2e697283dc64066271',
    },
    {
        id: 'aga-rewards-2',
        symbol: 'agar',
        addr: '0xb453f1f2ee776daf2586501361c457db70e1ca0f',
    },
    {
        id: 'aga-token',
        symbol: 'aga',
        addr: '0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20',
    },
    {
        id: 'agavecoin',
        symbol: 'agvc',
        addr: '0x8b79656fc38a04044e495e22fad747126ca305c4',
    },
    {
        id: 'aggregator-network',
        symbol: 'aggt',
        addr: '0x8028a34ec63678bcb64325f805449beba98c28a8',
    },
    {
        id: 'agoras',
        symbol: 'agrs',
        addr: '0x738865301a9b7dd80dc3666dd48cf034ec42bdda',
    },
    {
        id: 'agrello',
        symbol: 'dlt',
        addr: '0x07e3c70653548b04f0a75970c1f81b4cbbfb606f',
    },
    {
        id: 'agricultural-trade-chain',
        symbol: 'aat',
        addr: '0x9f31fab2405dfba05a487ebce88f3abd26f1cba6',
    },
    {
        id: 'agrolot',
        symbol: 'aglt',
        addr: '0x72c9fb7ed19d3ce51cea5c56b3e023cd918baadf',
    },
    {
        id: 'aichain',
        symbol: 'ait',
        addr: '0x79650799e7899a802cb96c0bc33a6a8d4ce4936c',
    },
    {
        id: 'aicon',
        symbol: 'aico',
        addr: '0xe7fb3559358a99df54466d0350e4ad6dc7093da3',
    },
    {
        id: 'aidcoin',
        symbol: 'aid',
        addr: '0x37e8789bb9996cac9156cd5f5fd32599e6b91289',
    },
    {
        id: 'ai-doctor',
        symbol: 'aidoc',
        addr: '0x584b44853680ee34a0f337b712a8f66d816df151',
    },
    {
        id: 'aidus',
        symbol: 'aidus',
        addr: '0xa957045a12d270e2ee0dca9a3340c340e05d4670',
    },
    {
        id: 'ailink-token',
        symbol: 'ali',
        addr: '0x4289c043a12392f1027307fb58272d8ebd853912',
    },
    {
        id: 'ai-mining',
        symbol: 'aim',
        addr: '0x53352e7d6620cc931c0c9318166ae2a92c1a4666',
    },
    {
        id: 'ai-network',
        symbol: 'ain',
        addr: '0x3a810ff7211b40c4fa76205a14efe161615d0385',
    },
    {
        id: 'aioz-network',
        symbol: 'aioz',
        addr: '0x626e8036deb333b408be468f951bdb42433cbf18',
    },
    {
        id: 'ai-predicting-ecosystem',
        symbol: 'aipe',
        addr: '0x44e4963f9012e7a7aeee05b7f2caae3419557aea',
    },
    {
        id: 'airbloc-protocol',
        symbol: 'abl',
        addr: '0xf8b358b3397a8ea5464f8cc753645d42e14b79ea',
    },
    {
        id: 'aircoins',
        symbol: 'airx',
        addr: '0x8cb1d155a5a1d5d667611b7710920fd9d1cd727f',
    },
    {
        id: 'airswap',
        symbol: 'ast',
        addr: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    },
    {
        id: 'aisf',
        symbol: 'agt',
        addr: '0x8d2fab1ff34f1c545673a816f1438b02d0a2e32d',
    },
    {
        id: 'aitheon',
        symbol: 'acu',
        addr: '0xd536bbd5414a8c2beed82a63737b9327d2fa35a6',
    },
    {
        id: 'aiwork',
        symbol: 'awo',
        addr: '0x68c85b9f78f30a0df5ac5723e4e700037f185415',
    },
    {
        id: 'akita-inu',
        symbol: 'akita',
        addr: '0x3301ee63fb29f863f2333bd4466acb46cd8323e6',
    },
    {
        id: 'akropolis',
        symbol: 'akro',
        addr: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    },
    {
        id: 'akropolis-delphi',
        symbol: 'adel',
        addr: '0x94d863173ee77439e4292284ff13fad54b3ba182',
    },
    {
        id: 'aladiex',
        symbol: 'ala',
        addr: '0x564f45b6bb68aded8b660a0d8a0a948dd6d6e4e8',
    },
    {
        id: 'albos',
        symbol: 'alb',
        addr: '0xf3e70642c28f3f707408c56624c2f30ea9f9fce3',
    },
    {
        id: 'alchemist',
        symbol: 'mist',
        addr: '0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab',
    },
    {
        id: 'alchemix',
        symbol: 'alcx',
        addr: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
    },
    {
        id: 'alchemix-usd',
        symbol: 'alusd',
        addr: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
    },
    {
        id: 'alchemy-dao',
        symbol: 'alch',
        addr: '0x0000a1c00009a619684135b824ba02f7fbf3a572',
    },
    {
        id: 'alchemy-pay',
        symbol: 'ach',
        addr: '0xed04915c23f00a313a544955524eb7dbd823143d',
    },
    {
        id: 'aleph',
        symbol: 'aleph',
        addr: '0x27702a26126e0b3702af63ee09ac4d1a084ef628',
    },
    {
        id: 'alex',
        symbol: 'alex',
        addr: '0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315',
    },
    {
        id: 'algoil',
        symbol: 'agol',
        addr: '0x2fcee080ceb4ff95fcdc8a03052cd85e51ecc69c',
    },
    {
        id: 'algory',
        symbol: 'alg',
        addr: '0x16b0a1a87ae8af5c792fabc429c4fe248834842b',
    },
    {
        id: 'algovest',
        symbol: 'avs',
        addr: '0x94d916873b22c9c1b53695f1c002f78537b9b3b2',
    },
    {
        id: 'alien-worlds',
        symbol: 'tlm',
        addr: '0x888888848b652b3e3a0f34c96e00eec0f3a23f72',
    },
    {
        id: 'alis',
        symbol: 'alis',
        addr: '0xea610b1153477720748dc13ed378003941d84fab',
    },
    {
        id: 'all-best-ico',
        symbol: 'allbi',
        addr: '0xf4e447c390167e5a17a95ab2475b71d4ea785200',
    },
    {
        id: 'alldex-alliance',
        symbol: 'axa',
        addr: '0xf8ed6c51762208ff26f8f3e4efd4e06af2da649c',
    },
    {
        id: 'allianceblock',
        symbol: 'albt',
        addr: '0x00a8b738e453ffd858a7edf03bccfe20412f0eb0',
    },
    {
        id: 'alliance-cargo-direct',
        symbol: 'acd',
        addr: '0xe45fc4290fd3159588f532058592ea327d2e97d4',
    },
    {
        id: 'alligator-fractal-set',
        symbol: 'gator',
        addr: '0xf5c0e24aca5217bcbae662871cae1a86873f02db',
    },
    {
        id: 'all-me',
        symbol: 'me',
        addr: '0x47140a767a861f7a1f3b0dd22a2f463421c28814',
    },
    {
        id: 'allohash',
        symbol: 'alh',
        addr: '0x4c6719bf85903d18c295da44216f862b01b36f43',
    },
    {
        id: 'all-sports',
        symbol: 'soc',
        addr: '0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3',
    },
    {
        id: 'ally',
        symbol: 'aly',
        addr: '0xf2cdf38e24738ba379ffa38d47bc88a941df5627',
    },
    {
        id: 'almace-shards',
        symbol: 'almx',
        addr: '0x25a3dcabbf0070cb8e5baaa62d576cf6643afb5b',
    },
    {
        id: 'aloha',
        symbol: 'aloha',
        addr: '0x455f7ef6d8bcfc35f9337e85aee1b0600a59fabe',
    },
    {
        id: 'alpaca',
        symbol: 'alpa',
        addr: '0x7ca4408137eb639570f8e647d9bd7b7e8717514a',
    },
    {
        id: 'alp-coin',
        symbol: 'alp',
        addr: '0x37d6e7f287200c740012747d2a79295caed2db35',
    },
    {
        id: 'alpha5',
        symbol: 'a5t',
        addr: '0xe8272210954ea85de6d2ae739806ab593b5d9c51',
    },
    {
        id: 'alpha-coin',
        symbol: 'apc',
        addr: '0x15bda08c3afbf5955d6e9b235fd55a1fd0dbc829',
    },
    {
        id: 'alphadex',
        symbol: 'dex',
        addr: '0x3516415161c478df10adbb8bb884cc83fbd5f11a',
    },
    {
        id: 'alpha-finance',
        symbol: 'alpha',
        addr: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    {
        id: 'alpha-impact',
        symbol: 'impact',
        addr: '0xfac3f6391c86004289a186ae0198180fcb4d49ab',
    },
    {
        id: 'alpha-platform',
        symbol: 'a',
        addr: '0xffc63b9146967a1ba33066fb057ee3722221acf0',
    },
    {
        id: 'alpha-quark-token',
        symbol: 'aqt',
        addr: '0x2a9bdcff37ab68b95a53435adfd8892e86084f93',
    },
    {
        id: 'alpha-wolf',
        symbol: 'awf',
        addr: '0x0342ac5dfad866985dde477caa85027a3c01a334',
    },
    {
        id: 'alphr',
        symbol: 'alphr',
        addr: '0xaa99199d1e9644b588796f3215089878440d58e0',
    },
    {
        id: 'alrightcoin',
        symbol: 'alc',
        addr: '0x95d82ba91256db995c80bed690d0a779191af62b',
    },
    {
        id: 'alt-estate',
        symbol: 'alt',
        addr: '0x419b8ed155180a8c9c64145e76dad49c0a4efb97',
    },
    {
        id: 'aludra-network',
        symbol: 'ald',
        addr: '0xb339fca531367067e98d7c4f9303ffeadff7b881',
    },
    {
        id: 'aluna',
        symbol: 'aln',
        addr: '0x8185bc4757572da2a610f887561c32298f1a5748',
    },
    {
        id: 'amaten',
        symbol: 'ama',
        addr: '0x2509ee05b8df07ec75046e24bbf1cfcdb8b2a183',
    },
    {
        id: 'amber',
        symbol: 'amb',
        addr: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',
    },
    {
        id: 'amepay',
        symbol: 'ame',
        addr: '0x12513335ffd5dafc2334e98625d27c1ca84bff86',
    },
    {
        id: 'american-akita',
        symbol: 'uskita',
        addr: '0xc18e7a03f8986798323658dd8645f93aa79ac5c9',
    },
    {
        id: 'americanhorror-finance',
        symbol: 'AHF',
        addr: '0xd6d3608f2d770d0a8d0da62d7afe21ea1da86d9c',
    },
    {
        id: 'american-shiba',
        symbol: 'ushiba',
        addr: '0xb893a8049f250b57efa8c62d51527a22404d7c9a',
    },
    {
        id: 'amino-network',
        symbol: 'amio',
        addr: '0x2e68dfb3f50ea302c88f8db74096d57565d9970a',
    },
    {
        id: 'amis',
        symbol: 'amis',
        addr: '0x949bed886c739f1a3273629b3320db0c5024c719',
    },
    {
        id: 'amix',
        symbol: 'amix',
        addr: '0x564393b8d6deaea8f3d739a3f6d9b441d8ee6198',
    },
    {
        id: 'ammbr',
        symbol: 'amr',
        addr: '0xd3fb5cabd07c85395667f83d20b080642bde66c7',
    },
    {
        id: 'ammyi-coin',
        symbol: 'ami',
        addr: '0x72c14bc8e28f18e91a2e9551802d3fb2cb80e712',
    },
    {
        id: 'amo',
        symbol: 'amo',
        addr: '0x38c87aa89b2b8cd9b95b736e1fa7b612ea972169',
    },
    {
        id: 'amon',
        symbol: 'amn',
        addr: '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c',
    },
    {
        id: 'amond',
        symbol: 'amon',
        addr: '0x00059ae69c1622a7542edc15e8d17b060fe307b6',
    },
    {
        id: 'ampleforth',
        symbol: 'ampl',
        addr: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    {
        id: 'ampleforth-governance-token',
        symbol: 'forth',
        addr: '0x77fba179c79de5b7653f68b5039af940ada60ce0',
    },
    {
        id: 'ampnet',
        symbol: 'aapx',
        addr: '0xbfd815347d024f449886c171f78fa5b8e6790811',
    },
    {
        id: 'amp-token',
        symbol: 'amp',
        addr: '0xff20817765cb7f73d4bde2e66e067e58d11095c2',
    },
    {
        id: 'anchor',
        symbol: 'anct',
        addr: '0x5456bc77dd275c45c3c15f0cf936b763cf57c3b5',
    },
    {
        id: 'anchor-neural-world-token',
        symbol: 'anw',
        addr: '0x7dbdd9dafdc4c1c03d67925a4f85daa398af32b0',
    },
    {
        id: 'anchor-protocol',
        symbol: 'anc',
        addr: '0x0f3adc247e91c3c50bc08721355a41037e89bc20',
    },
    {
        id: 'android-chain',
        symbol: 'adc',
        addr: '0x1e41a55030e0d0794abfb6dced22e6c7d18d8247',
    },
    {
        id: 'anj',
        symbol: 'anj',
        addr: '0xcd62b1c403fa761baadfc74c525ce2b51780b184',
    },
    {
        id: 'ankr',
        symbol: 'ankr',
        addr: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
    },
    {
        id: 'ankreth',
        symbol: 'aeth',
        addr: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
    },
    {
        id: 'anonymous-coin',
        symbol: 'amc',
        addr: '0x9e5a64943f9f48463f07cc0578bbf9e2e67f0f61',
    },
    {
        id: 'anrkey-x',
        symbol: '$anrx',
        addr: '0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0',
    },
    {
        id: 'antiample',
        symbol: 'xamp',
        addr: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
    },
    {
        id: 'anti-fraud-chain',
        symbol: 'afc',
        addr: '0x14dffd4f515d4c43493c6c512c78fbc59a8af254',
    },
    {
        id: 'anti-lockdown',
        symbol: 'free',
        addr: '0xc2bd7a597391f31d2e36c2cb769fce0e5bd6d482',
    },
    {
        id: 'antimatter',
        symbol: 'matter',
        addr: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
    },
    {
        id: 'antique-zombie-shards',
        symbol: 'zomb',
        addr: '0x78175901e9b04090bf3b3d3cb7f91ca986fb1af6',
    },
    {
        id: 'any-blocknet',
        symbol: 'ablock',
        addr: '0xe692c8d72bd4ac7764090d54842a305546dd1de5',
    },
    {
        id: 'anysale',
        symbol: 'sale',
        addr: '0xc28a4162e3cc1838bad6dfaec83d57a0d62c80f3',
    },
    {
        id: 'anyswap',
        symbol: 'any',
        addr: '0xf99d58e463a2e07e5692127302c20a191861b4d6',
    },
    {
        id: 'apehaven',
        symbol: 'apes',
        addr: '0x14dd7ebe6cb084cb73ef377e115554d47dc9d61e',
    },
    {
        id: 'apenft',
        symbol: 'nft',
        addr: '0xef40b859d21e4d566a3d713e756197c021bffaaa',
    },
    {
        id: 'ape-punk',
        symbol: 'ape$',
        addr: '0x26ea1f595f6567b7050fbba24f6a66e19db4d560',
    },
    {
        id: 'apeusd-aave-synthetic-usd-dec-2021',
        symbol: 'apeUSD-AAVE-DEC21',
        addr: '0xec6a5d88bf56fd3f96957ae65916c69f29db35c5',
    },
    {
        id: 'apeusd-link-synthetic-usd-dec-2021',
        symbol: 'apeUSD-LINK-DEC21',
        addr: '0x0f775ad69e3c93d599d3315a130bd82a0cdda397',
    },
    {
        id: 'apeusd-snx-synthetic-usd-dec-2021',
        symbol: 'apeUSD-SNX-DEC21',
        addr: '0x5c6af72cbd740b90528c8fe226125413b6bd7e5a',
    },
    {
        id: 'apeusd-uma-synthetic-usd-dec-2021',
        symbol: 'apeUSD-UMA-DEC21',
        addr: '0xfa5e27893aee4805283d86e4283da64f8c72dd56',
    },
    {
        id: 'apeusd-uni-synthetic-usd-dec-2021',
        symbol: 'apeUSD-UNI-DEC21',
        addr: '0xfbb6b34dd77274a06ea2e5462a5e0b9e23ce478e',
    },
    {
        id: 'api3',
        symbol: 'api3',
        addr: '0x0b38210ea11411557c13457d4da7dc6ea731b88a',
    },
    {
        id: 'apiary-fund-coin',
        symbol: 'afc',
        addr: '0xf576ff0d7e4c1e8f27dbd50321e95e36a965985f',
    },
    {
        id: 'apix',
        symbol: 'apix',
        addr: '0xf51ebf9a26dbc02b13f8b3a9110dac47a4d62d78',
    },
    {
        id: 'apm-coin',
        symbol: 'APM',
        addr: '0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c',
    },
    {
        id: 'app-alliance-association',
        symbol: 'aaa',
        addr: '0x6aba1623ea906d1164cbb007e764ebde2514a2ba',
    },
    {
        id: 'appcoins',
        symbol: 'appc',
        addr: '0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db',
    },
    {
        id: 'apple-finance',
        symbol: 'aplp',
        addr: '0x69275ac5477f3a9dc051180bc559140bc647f8e9',
    },
    {
        id: 'apple-network',
        symbol: 'ank',
        addr: '0x3c45b24359fb0e107a4eaa56bd0f2ce66c99a0e5',
    },
    {
        id: 'apple-protocol-token',
        symbol: 'aapl',
        addr: '0xd059c8a4c7f53c4352d933b059349ba492294ac9',
    },
    {
        id: 'apron',
        symbol: 'apn',
        addr: '0xd4342a57ecf2fe7ffa37c33cb8f63b1500e575e6',
    },
    {
        id: 'apwine',
        symbol: 'apw',
        addr: '0x4104b135dbc9609fc1a9490e61369036497660c8',
    },
    {
        id: 'apy-finance',
        symbol: 'apy',
        addr: '0x95a4492f028aa1fd432ea71146b433e7b4446611',
    },
    {
        id: 'apyswap',
        symbol: 'apys',
        addr: '0xf7413489c474ca4399eee604716c72879eea3615',
    },
    {
        id: 'apy-vision',
        symbol: 'vision',
        addr: '0xf406f7a9046793267bc276908778b29563323996',
    },
    {
        id: 'aqua',
        symbol: 'aqua',
        addr: '0x7e32c8727cc19dd59a7a4d01b95ae1cbfc8f4c77',
    },
    {
        id: 'aquila-protocol',
        symbol: 'aux',
        addr: '0x423f3da166470030a86fa76280b2d688fce1f722',
    },
    {
        id: 'aragon',
        symbol: 'ant',
        addr: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
    },
    {
        id: 'aragon-china-token',
        symbol: 'anc',
        addr: '0xbbe319b73744db9d54f5d29df7d8256b7e43995c',
    },
    {
        id: 'ara-token',
        symbol: 'ara',
        addr: '0xa92e7c82b11d10716ab534051b271d2f6aef7df5',
    },
    {
        id: 'araw-token',
        symbol: 'araw',
        addr: '0x30680ac0a8a993088223925265fd7a76beb87e7f',
    },
    {
        id: 'arbidex',
        symbol: 'abx',
        addr: '0x9a794dc1939f1d78fa48613b89b8f9d0a20da00e',
    },
    {
        id: 'arbiswap',
        symbol: 'aswap',
        addr: '0xad0887734461af8c6033068bde4047dbe84074cc',
    },
    {
        id: 'arbitragect',
        symbol: 'arct',
        addr: '0x1245ef80f4d9e02ed9425375e8f649b9221b31d8',
    },
    {
        id: 'arcane-bear',
        symbol: 'bear',
        addr: '0xaf162491c0b21900c01f4cc0f7110238aacdebe7',
    },
    {
        id: 'arcblock',
        symbol: 'abt',
        addr: '0xb98d4c97425d9908e66e53a6fdf673acca0be986',
    },
    {
        id: 'arc-governance',
        symbol: 'arcx',
        addr: '0x1321f1f1aa541a56c31682c57b80ecfccd9bb288',
    },
    {
        id: 'arc-governance-old',
        symbol: 'arcx',
        addr: '0xed30dd7e50edf3581ad970efc5d9379ce2614adb',
    },
    {
        id: 'archer-dao-governance-token',
        symbol: 'arch',
        addr: '0x1f3f9d3068568f8040775be2e8c03c103c61f3af',
    },
    {
        id: 'archetypal-network',
        symbol: 'actp',
        addr: '0x7b2df125567815ac9b57da04b620f50bc93b320c',
    },
    {
        id: 'arcona',
        symbol: 'arcona',
        addr: '0x0f71b8de197a1c84d31de0f1fa7926c365f052b3',
    },
    {
        id: 'arcs',
        symbol: 'arx',
        addr: '0x7d8daff6d70cead12c6f077048552cf89130a2b1',
    },
    {
        id: 'ardcoin',
        symbol: 'ardx',
        addr: '0xb8e2e2101ed11e9138803cd3e06e16dd19910647',
    },
    {
        id: 'ares-protocol',
        symbol: 'ares',
        addr: '0x358aa737e033f34df7c54306960a38d09aabd523',
    },
    {
        id: 'argenpeso',
        symbol: 'argp',
        addr: '0x29917c3b1c2b4779a7b61f08d98b3da0fcf3b6a4',
    },
    {
        id: 'argo',
        symbol: 'argo',
        addr: '0x28cca76f6e8ec81e4550ecd761f899110b060e97',
    },
    {
        id: 'arianee',
        symbol: 'aria20',
        addr: '0xedf6568618a00c6f0908bf7758a16f76b6e04af9',
    },
    {
        id: 'arix',
        symbol: 'arix',
        addr: '0x1cceed434a7a64d1d8f9bb719fe0d29cbba9f120',
    },
    {
        id: 'arke',
        symbol: 'arke',
        addr: '0xa9248f8e40d4b9c3ca8ebd8e07e9bcb942c616d8',
    },
    {
        id: 'armor',
        symbol: 'armor',
        addr: '0x1337def16f9b486faed0293eb623dc8395dfe46a',
    },
    {
        id: 'armor-nxm',
        symbol: 'arnxm',
        addr: '0x1337def18c680af1f9f45cbcab6309562975b1dd',
    },
    {
        id: 'armours',
        symbol: 'arm',
        addr: '0xa9ff725189fe00da9c5f27a580dc67fea61e3fb2',
    },
    {
        id: 'arpa-chain',
        symbol: 'arpa',
        addr: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    },
    {
        id: 'arteon',
        symbol: 'arteon',
        addr: '0x897abf83f0c44b86cb67ec56c006c00d56659517',
    },
    {
        id: 'artfinity-token',
        symbol: 'at',
        addr: '0xe54b3458c47e44c37a267e7c633afef88287c294',
    },
    {
        id: 'arthur-chain',
        symbol: 'arc',
        addr: '0xfee2fa52de307316d9d47ffe3781d4cba2c4f6fd',
    },
    {
        id: 'artista',
        symbol: 'arts',
        addr: '0xf013e0ea26cb386b3021783a3201bf2652778f93',
    },
    {
        id: 'artx',
        symbol: 'artx',
        addr: '0x741b0428efdf4372a8df6fb54b018db5e5ab7710',
    },
    {
        id: 'asac-coin',
        symbol: 'asac',
        addr: '0x6913ccabbc337f0ea7b4109dd8200d61c704d332',
    },
    {
        id: 'asd',
        symbol: 'asd',
        addr: '0xcca0c9c383076649604ee31b20248bc04fdf61ca',
    },
    {
        id: 'asec-frontier',
        symbol: 'asec',
        addr: '0x75b02aa1084a12b8729f5acbe1078bd450abe552',
    },
    {
        id: 'ash',
        symbol: 'ash',
        addr: '0x64d91f12ece7362f91a6f8e7940cd55f05060b92',
    },
    {
        id: 'asian-dragon',
        symbol: 'ad',
        addr: '0xf6dbe88ba55f1793ff0773c9b1275300f830914f',
    },
    {
        id: 'askobar-network',
        symbol: 'asko',
        addr: '0xeeee2a622330e6d2036691e983dee87330588603',
    },
    {
        id: 'assemble-protocol',
        symbol: 'asm',
        addr: '0x2565ae0385659badcada1031db704442e1b69982',
    },
    {
        id: 'assy-index',
        symbol: 'assy',
        addr: '0xfa2562da1bba7b954f26c74725df51fb62646313',
    },
    {
        id: 'aston',
        symbol: 'atx',
        addr: '0x1a0f2ab46ec630f9fd638029027b552afa64b94c',
    },
    {
        id: 'astro',
        symbol: 'astro',
        addr: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88',
    },
    {
        id: 'astroelon',
        symbol: 'elonone',
        addr: '0x97b65710d03e12775189f0d113202cc1443b0aa2',
    },
    {
        id: 'astrotools',
        symbol: 'astro',
        addr: '0xcbd55d4ffc43467142761a764763652b48b969ff',
    },
    {
        id: 'asyagro',
        symbol: 'asy',
        addr: '0x017b584acfd16d767541ae9e80cdc702f4527b0b',
    },
    {
        id: 'atari',
        symbol: 'atri',
        addr: '0xdacd69347de42babfaecd09dc88958378780fb62',
    },
    {
        id: 'atd',
        symbol: 'atd',
        addr: '0x8052327f1baf94a9dc8b26b9100f211ee3774f54',
    },
    {
        id: 'atlant',
        symbol: 'atl',
        addr: '0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05',
    },
    {
        id: 'atlantic-coin',
        symbol: 'atc',
        addr: '0x72b2b8e42a10d785abf85f3044223db8c9167bd6',
    },
    {
        id: 'atlantic-finance',
        symbol: 'atfi',
        addr: '0x8c680d0de5a9a3f6a99649d0a000225054934742',
    },
    {
        id: 'atlantis-token',
        symbol: 'atis',
        addr: '0x821144518dfe9e7b44fcf4d0824e15e8390d4637',
    },
    {
        id: 'atn',
        symbol: 'atn',
        addr: '0x461733c17b0755ca5649b6db08b3e213fcf22546',
    },
    {
        id: 'atomic-wallet-coin',
        symbol: 'awc',
        addr: '0xad22f63404f7305e4713ccbd4f296f34770513f4',
    },
    {
        id: 'attila',
        symbol: 'att',
        addr: '0x89fb927240750c1b15d4743cd58440fc5f14a11c',
    },
    {
        id: 'auction',
        symbol: 'auction',
        addr: '0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096',
    },
    {
        id: 'auctus',
        symbol: 'auc',
        addr: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    },
    {
        id: 'audius',
        symbol: 'audio',
        addr: '0x18aaa7115705e8be94bffebde57af9bfc265b998',
    },
    {
        id: 'augur',
        symbol: 'rep',
        addr: '0x221657776846890989a759ba2973e427dff5c9bb',
    },
    {
        id: 'aura-protocol',
        symbol: 'aura',
        addr: '0x6417e8673dedd7a0471a87804bf85a559fd8bcc2',
    },
    {
        id: 'aureus-nummus-gold',
        symbol: 'ang',
        addr: '0x130914e1b240a7f4c5d460b7d3a2fd3846b576fa',
    },
    {
        id: 'auric-network',
        symbol: 'auscm',
        addr: '0x1c7bbadc81e18f7177a95eb1593e5f5f35861b10',
    },
    {
        id: 'aurix',
        symbol: 'aur',
        addr: '0x6e98e5401adcb0d76f4debfc3d794b3031f48790',
    },
    {
        id: 'aurora',
        symbol: 'aoa',
        addr: '0x9ab165d795019b6d8b3e971dda91071421305e5a',
    },
    {
        id: 'aurora-dao',
        symbol: 'idex',
        addr: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
    },
    {
        id: 'auruscoin',
        symbol: 'awx',
        addr: '0x1efdfc6146cad8909817284ae99325ef1caf623e',
    },
    {
        id: 'aurusgold',
        symbol: 'awg',
        addr: '0x696acc2de564b48682d71d0847b3632f87c9a402',
    },
    {
        id: 'aurus-silver',
        symbol: 'aws',
        addr: '0xb89903dde3899f0280b99913168ee833a7896b93',
    },
    {
        id: 'auscoin',
        symbol: 'ausc',
        addr: '0x59f1b6d0f5105cf025a3de58858a9363f4fef084',
    },
    {
        id: 'automata',
        symbol: 'ata',
        addr: '0xa2120b9e674d3fc3875f415a7df52e382f141225',
    },
    {
        id: 'autonio',
        symbol: 'niox',
        addr: '0xc813ea5e3b48bebeedb796ab42a30c5599b01740',
    },
    {
        id: 'avaluse',
        symbol: 'aval',
        addr: '0xbcf9dbf8b14ed096b2ba08b7269356197fdd1b5d',
    },
    {
        id: 'aventus',
        symbol: 'avt',
        addr: '0x0d88ed6e74bbfd96b831231638b66c05571e824f',
    },
    {
        id: 'axia',
        symbol: 'axiav3',
        addr: '0x793786e2dd4cc492ed366a94b88a3ff9ba5e7546',
    },
    {
        id: 'axial',
        symbol: 'axl',
        addr: '0x4fac0ccd9e2ed9fd462d42b66fb81ba9a1f6f25e',
    },
    {
        id: 'axie-infinity',
        symbol: 'axs',
        addr: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
    },
    {
        id: 'axioms',
        symbol: 'axi',
        addr: '0x73ee6d7e6b203125add89320e9f343d65ec7c39a',
    },
    {
        id: 'axion',
        symbol: 'axn',
        addr: '0x71f85b2e46976bd21302b64329868fd15eb0d127',
    },
    {
        id: 'axis-defi',
        symbol: 'axis',
        addr: '0xecc0f1f860a82ab3b442382d93853c02d6384389',
    },
    {
        id: 'axpire',
        symbol: 'axpr',
        addr: '0xdd0020b1d5ba47a54e2eb16800d73beb6546f91a',
    },
    {
        id: 'ayfi',
        symbol: 'ayfi',
        addr: '0x12e51e77daaa58aa0e9247db7510ea4b46f9bead',
    },
    {
        id: 'azbit',
        symbol: 'az',
        addr: '0xaaaaaaaba2ea3daab0a6c05f1b962c78c9836d99',
    },
    {
        id: 'az-fundchain',
        symbol: 'azt',
        addr: '0xef7f1aae6f60de9f353dc170a35b8f7c7814e32b',
    },
    {
        id: 'azuki',
        symbol: 'azuki',
        addr: '0x910524678c0b1b23ffb9285a81f99c29c11cbaed',
    },
    {
        id: 'azuma-coin',
        symbol: 'azum',
        addr: '0xd26a9c3437f7d121098c8c05c7413f5cc70bb070',
    },
    {
        id: 'azuras',
        symbol: 'uzz',
        addr: '0x66e5d4063219a54a8244078affb49e23982d9640',
    },
    {
        id: 'b20',
        symbol: 'b20',
        addr: '0xc4de189abf94c57f396bd4c52ab13b954febefd8',
    },
    {
        id: 'b21',
        symbol: 'b21',
        addr: '0x6faa826af0568d1866fca570da79b318ef114dab',
    },
    {
        id: 'b26',
        symbol: 'b26',
        addr: '0x481de76d5ab31e28a33b0ea1c1063adcb5b1769a',
    },
    {
        id: 'b2u-coin',
        symbol: 'b2u',
        addr: '0x350758e4a1256561fd0ee142dc7e0545f561fadc',
    },
    {
        id: 'b360',
        symbol: 'b360',
        addr: '0xa870879e2872f9f2dc3a33933a9af3345b00fd14',
    },
    {
        id: 'baasid',
        symbol: 'baas',
        addr: '0x3e65e1eefde5ea7ccfc9a9a1634abe90f32262f8',
    },
    {
        id: 'babb',
        symbol: 'bax',
        addr: '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb',
    },
    {
        id: 'baby-akita',
        symbol: 'bkita',
        addr: '0x0d6f6a130c3046713cba425f41a65c17205df6b5',
    },
    {
        id: 'baby-shiba',
        symbol: 'bhiba',
        addr: '0x4a6be56a211a4c4e0dd4474d524138933c17f3e3',
    },
    {
        id: 'baby-token',
        symbol: 'baby',
        addr: '0xdb13fb60d3fddabc41743d9d603ce3f42c17d057',
    },
    {
        id: 'baconcoin',
        symbol: 'bak',
        addr: '0x3b5f11dbac1476af17957c6e5991f21c826743dd',
    },
    {
        id: 'baconswap',
        symbol: 'bacon',
        addr: '0x175ab41e2cedf3919b2e4426c19851223cf51046',
    },
    {
        id: 'badger-dao',
        symbol: 'badger',
        addr: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
    },
    {
        id: 'badger-sett-badger',
        symbol: 'bbadger',
        addr: '0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28',
    },
    {
        id: 'badger-sett-digg',
        symbol: 'bdigg',
        addr: '0x7e7e112a68d8d2e221e11047a72ffc1065c38e1a',
    },
    {
        id: 'baepay',
        symbol: 'baepay',
        addr: '0x6bffa07a1b0cebc474ce6833eaf2be6326252449',
    },
    {
        id: 'baguette-token',
        symbol: 'bgtt',
        addr: '0x7a545ed3863221a974f327199ac22f7f12535f11',
    },
    {
        id: 'balancer',
        symbol: 'bal',
        addr: '0xba100000625a3754423978a60c9317c58a424e3d',
    },
    {
        id: 'balloon-coin',
        symbol: 'balo',
        addr: '0x6523203bd28d399068acc14db6b7f31d9bf43f1a',
    },
    {
        id: 'ballswap',
        symbol: 'bsp',
        addr: '0xa1454f9c704af96636f3a7532b9a04c411f85680',
    },
    {
        id: 'balpha',
        symbol: 'balpha',
        addr: '0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6',
    },
    {
        id: 'bamboo-defi',
        symbol: 'bamboo',
        addr: '0xf56842af3b56fd72d17cb103f92d027bba912e89',
    },
    {
        id: 'banana-finance',
        symbol: 'banana',
        addr: '0x21f54372c07b930b79c5c2d9bb0eaaca86c3b298',
    },
    {
        id: 'bananatok',
        symbol: 'bna',
        addr: '0x20910e5b5f087f6439dfcb0dda4e27d1014ac2b8',
    },
    {
        id: 'banana-token',
        symbol: 'bnana',
        addr: '0x07ef9e82721ac16809d24dafbe1792ce01654db4',
    },
    {
        id: 'banca',
        symbol: 'banca',
        addr: '0x998b3b82bc9dba173990be7afb772788b5acb8bd',
    },
    {
        id: 'bancor',
        symbol: 'bnt',
        addr: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    },
    {
        id: 'bancor-governance-token',
        symbol: 'vbnt',
        addr: '0x48fb253446873234f2febbf9bdeaa72d9d387f94',
    },
    {
        id: 'band-protocol',
        symbol: 'band',
        addr: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    },
    {
        id: 'bankcoincash',
        symbol: 'bcash',
        addr: '0xb5bb48567bfd0bfe9e4b08ef8b7f91556cc2a112',
    },
    {
        id: 'bankera',
        symbol: 'bnk',
        addr: '0xc80c5e40220172b36adee2c951f26f2a577810c5',
    },
    {
        id: 'bankex',
        symbol: 'bkx',
        addr: '0x45245bc59219eeaaf6cd3f382e078a461ff9de7b',
    },
    {
        id: 'bankless-dao',
        symbol: 'bank',
        addr: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
    },
    {
        id: 'banklife',
        symbol: 'lib',
        addr: '0x3fd2e747cea0e8a78f1827ea2ffd3334628a600b',
    },
    {
        id: 'bankroll-vault',
        symbol: 'vlt',
        addr: '0x6b785a0322126826d8226d77e173d75dafb84d11',
    },
    {
        id: 'banksocial',
        symbol: 'bsocial',
        addr: '0x26a79bd709a7ef5e5f747b8d8f83326ea044d8cc',
    },
    {
        id: 'bao-finance',
        symbol: 'bao',
        addr: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
    },
    {
        id: 'baooka-token',
        symbol: 'bazt',
        addr: '0xb020ed54651831878e5c967e0953a900786178f9',
    },
    {
        id: 'barnbridge',
        symbol: 'bond',
        addr: '0x0391d2021f89dc339f60fff84546ea23e337750f',
    },
    {
        id: 'baroin',
        symbol: 'bri',
        addr: '0x4893a1938df49f4178c37e4e965cc8a1b3882173',
    },
    {
        id: 'barter',
        symbol: 'brtr',
        addr: '0xf0acf8949e705e0ebb6cb42c2164b0b986454223',
    },
    {
        id: 'bartertrade',
        symbol: 'bart',
        addr: '0x54c9ea2e9c9e8ed865db4a4ce6711c2a0d5063ba',
    },
    {
        id: 'based-loans-ownership',
        symbol: 'blo',
        addr: '0x68481f2c02be3786987ac2bc3327171c5d05f9bd',
    },
    {
        id: 'based-money',
        symbol: '$based',
        addr: '0x68a118ef45063051eac49c7e647ce5ace48a68a5',
    },
    {
        id: 'base-protocol',
        symbol: 'base',
        addr: '0x07150e919b4de5fd6a63de1f9384828396f25fdc',
    },
    {
        id: 'basic',
        symbol: 'basic',
        addr: '0xf25c91c87e0b1fd9b4064af0f427157aab0193a7',
    },
    {
        id: 'basic-attention-token',
        symbol: 'bat',
        addr: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    },
    {
        id: 'basid-coin',
        symbol: 'basid',
        addr: '0xe33f363351186e185470f35f6deb94aba44347d8',
    },
    {
        id: 'basis-bond',
        symbol: 'bab',
        addr: '0xc36824905dff2eaaee7ecc09fcc63abc0af5abc5',
    },
    {
        id: 'basis-cash',
        symbol: 'bac',
        addr: '0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a',
    },
    {
        id: 'basis-coin-cash',
        symbol: 'bcc',
        addr: '0xae17f4f5ca32f77ea8e3786db7c0b2fe877ac176',
    },
    {
        id: 'basiscoin-share',
        symbol: 'bcs',
        addr: '0x03066da434e5264ef0b32f787923f974a5726fdc',
    },
    {
        id: 'basis-dollar',
        symbol: 'bsd',
        addr: '0x003e0af2916e598fa5ea5cb2da4edfda9aed9fde',
    },
    {
        id: 'basis-dollar-share',
        symbol: 'bsds',
        addr: '0xe7c9c188138f7d70945d420d75f8ca7d8ab9c700',
    },
    {
        id: 'basis-gold',
        symbol: 'bsg',
        addr: '0xb34ab2f65c6e4f764ffe740ab83f982021faed6d',
    },
    {
        id: 'basis-gold-share',
        symbol: 'bsgs',
        addr: '0xa9d232cc381715ae791417b624d7c4509d2c28db',
    },
    {
        id: 'basis-share',
        symbol: 'bas',
        addr: '0x106538cc16f938776c7c180186975bca23875287',
    },
    {
        id: 'basketcoin',
        symbol: 'bskt',
        addr: '0xc03841b5135600312707d39eb2af0d2ad5d51a91',
    },
    {
        id: 'basketdao',
        symbol: 'bask',
        addr: '0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb',
    },
    {
        id: 'basketdao-defi-index',
        symbol: 'bdi',
        addr: '0x0309c98b1bffa350bcb3f9fb9780970ca32a5060',
    },
    {
        id: 'bast',
        symbol: 'bast',
        addr: '0x47eb79217f42f92dbd741add1b1a6783a2c873cf',
    },
    {
        id: 'bastonet',
        symbol: 'bsn',
        addr: '0xed5a55797caecca39811ac3cc0ee085cafc05953',
    },
    {
        id: 'bavala',
        symbol: 'bva',
        addr: '0x10d88d7495ca381df1391229bdb82d015b9ad17d',
    },
    {
        id: 'bcat',
        symbol: 'bcat',
        addr: '0xfdeaa4ab9fea519afd74df2257a21e5bca0dfd3f',
    },
    {
        id: 'bchnrbtc-synthetic',
        symbol: 'bchnrbtc-jan-2021',
        addr: '0x506de580ecdba535eb0a7e61d3fa3dd8f7c8b6b9',
    },
    {
        id: 'b-cube-ai',
        symbol: 'bcube',
        addr: '0x93c9175e26f57d2888c7df8b470c9eea5c0b0a93',
    },
    {
        id: 'bcv',
        symbol: 'bcv',
        addr: '0x1014613e2b3cbc4d575054d4982e580d9b99d7b1',
    },
    {
        id: 'beast-dao',
        symbol: 'beast',
        addr: '0xdbb2f12cb89af05516768c2c69a771d92a25d17c',
    },
    {
        id: 'beautyk',
        symbol: 'btkc',
        addr: '0x6682195e2a0048ce38b727a3711802d58244606e',
    },
    {
        id: 'beaxy-exchange',
        symbol: 'bxy',
        addr: '0x827d53c8170af52625f414bde00326fc8a085e86',
    },
    {
        id: 'beechat',
        symbol: 'chat',
        addr: '0x442bc47357919446eabc18c7211e57a13d983469',
    },
    {
        id: 'bee-coin',
        symbol: 'bee',
        addr: '0x1763ad73694d4d64fb71732b068e32ac72a345b1',
    },
    {
        id: 'beekan',
        symbol: 'bkbt',
        addr: '0x6a27348483d59150ae76ef4c0f3622a78b0ca698',
    },
    {
        id: 'be-gaming-coin',
        symbol: 'bgc',
        addr: '0xd34c9281585866a9fb2af0931adb1fa35ed44039',
    },
    {
        id: 'beholder',
        symbol: 'eye',
        addr: '0x155ff1a85f440ee0a382ea949f24ce4e0b751c65',
    },
    {
        id: 'belacoin',
        symbol: 'bela',
        addr: '0x2e98a6804e4b6c832ed0ca876a943abd3400b224',
    },
    {
        id: 'believer',
        symbol: 'blvr',
        addr: '0xd1ef9a7310d0806855c672288ef5a1bab62cef33',
    },
    {
        id: 'belifex',
        symbol: 'befx',
        addr: '0xfbcecb002177e530695b8976638fbd18d2038c3c',
    },
    {
        id: 'bella-protocol',
        symbol: 'bel',
        addr: '0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14',
    },
    {
        id: 'benative',
        symbol: 'bnv',
        addr: '0xbbdce056cbe561ee004094c75099172e7e3b34df',
    },
    {
        id: 'benchmark-protocol',
        symbol: 'mark',
        addr: '0x67c597624b17b16fb77959217360b7cd18284253',
    },
    {
        id: 'benepit',
        symbol: 'bnp',
        addr: '0xd27d76a1ba55ce5c0291ccd04febbe793d22ebf4',
    },
    {
        id: 'benscoin',
        symbol: 'bsc',
        addr: '0xcfad57a67689809cda997f655802a119838c9cec',
    },
    {
        id: 'beowulf',
        symbol: 'bwf',
        addr: '0xf7e04d8a32229b4ca63aa51eea9979c7287fea48',
    },
    {
        id: 'berrypic',
        symbol: 'bpc',
        addr: '0xe865a04fb0d565107eaf9049ef22c27dd0c4bbef',
    },
    {
        id: 'bestay',
        symbol: 'bsy',
        addr: '0x7a647637e75d34a7798ba06bd1adf5c084bb5dd5',
    },
    {
        id: 'bet-chips',
        symbol: 'betc',
        addr: '0x83d6a2171f78e8ffe4dfe7680983effc49cff7a0',
    },
    {
        id: 'betherchip',
        symbol: 'bec',
        addr: '0x59c033ec65e6b9c501c1ee34fb42f2575da4b517',
    },
    {
        id: 'bethereum',
        symbol: 'bether',
        addr: '0x14c926f2290044b647e1bf2072e67b495eff1905',
    },
    {
        id: 'betnomi-2',
        symbol: 'bni',
        addr: '0x4981553e8ccf6df916b36a2d6b6f8fc567628a51',
    },
    {
        id: 'bet-protocol',
        symbol: 'bepro',
        addr: '0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a',
    },
    {
        id: 'better-money',
        symbol: 'better',
        addr: '0xa7925aa2a6e4575ab0c74d169f3bc3e03d4c319a',
    },
    {
        id: 'beyond-finance',
        symbol: 'byn',
        addr: '0x4bb3205bf648b7f59ef90dee0f1b62f6116bc7ca',
    },
    {
        id: 'bezant',
        symbol: 'bznt',
        addr: '0xe1aee98495365fc179699c1bb3e761fa716bee62',
    },
    {
        id: 'bezoge-earth',
        symbol: 'bezoge',
        addr: '0xdc349913d53b446485e98b76800b6254f43df695',
    },
    {
        id: 'bezop',
        symbol: 'bez',
        addr: '0x3839d8ba312751aa0248fed6a8bacb84308e20ed',
    },
    {
        id: 'bgogo',
        symbol: 'bgg',
        addr: '0xea54c81fe0f72de8e86b6dc78a9271aa3925e3b5',
    },
    {
        id: 'bgt',
        symbol: 'bgt',
        addr: '0x5cbb89b03534d82692b183882c2a2a9ff7fdeb44',
    },
    {
        id: 'bibox-token',
        symbol: 'bix',
        addr: '0x009c43b42aefac590c719e971020575974122803',
    },
    {
        id: 'bidao',
        symbol: 'bid',
        addr: '0x25e1474170c4c0aa64fa98123bdc8db49d7802fa',
    },
    {
        id: 'bidesk',
        symbol: 'bdk',
        addr: '0xbfc1502ebc37475b940ced8f036b91018a73c8f6',
    },
    {
        id: 'bidipass',
        symbol: 'bdp',
        addr: '0x593114f03a0a575aece9ed675e52ed68d2172b8c',
    },
    {
        id: 'bifi',
        symbol: 'bifi',
        addr: '0x2791bfd60d232150bff86b39b7146c0eaaa2ba81',
    },
    {
        id: 'bifrost',
        symbol: 'bfc',
        addr: '0x0c7d5ae016f806603cb1782bea29ac69471cab9c',
    },
    {
        id: 'bigbang-game',
        symbol: 'bbgc',
        addr: '0x4fbb0b4cd8f960ac3428194f1c94c805d5b35836',
    },
    {
        id: 'bigbom-eco',
        symbol: 'bbo',
        addr: '0x84f7c44b6fed1080f647e354d552595be2cc602f',
    },
    {
        id: 'bigboys-industry',
        symbol: 'bbi',
        addr: '0x336c21557185079f42f6ffc098ab572c87ae9435',
    },
    {
        id: 'bigcash',
        symbol: 'bgc',
        addr: '0xd043f70ff0634167db1149b15e5668f5be52d72c',
    },
    {
        id: 'big-coin',
        symbol: 'big',
        addr: '0x56c64e280ef1262da370d2c5862bb61c6dc3dbb4',
    },
    {
        id: 'big-data-protocol',
        symbol: 'bdp',
        addr: '0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e',
    },
    {
        id: 'bigo-token',
        symbol: 'bigo',
        addr: '0xa6e7dc135bdf4b3fee7183eab2e87c0bb9684783',
    },
    {
        id: 'biido',
        symbol: 'bion',
        addr: '0x9b1b1e109ff130b298cf1d47389c47569f5c2932',
    },
    {
        id: 'biki',
        symbol: 'biki',
        addr: '0x70debcdab2ef20be3d1dbff6a845e9ccb6e46930',
    },
    {
        id: 'bilaxy-token',
        symbol: 'bia',
        addr: '0x40d52577830e01aaefa80659aa90ee8b34685f4e',
    },
    {
        id: 'bilira',
        symbol: 'tryb',
        addr: '0x2c537e5624e4af88a7ae4060c022609376c8d0eb',
    },
    {
        id: 'bimcoin',
        symbol: 'bim',
        addr: '0x9e7ce36dbd1a9a6c6e80d08e38077745855edd3a',
    },
    {
        id: 'binance-usd',
        symbol: 'busd',
        addr: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    },
    {
        id: 'binance-wrapped-btc',
        symbol: 'bbtc',
        addr: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
    },
    {
        id: 'bincentive',
        symbol: 'bcnt',
        addr: '0x9669890e48f330acd88b78d63e1a6b3482652cd9',
    },
    {
        id: 'bintex-futures',
        symbol: 'bntx',
        addr: '0x86d1d12523b65203851c571fcc029bf90903fb6d',
    },
    {
        id: 'biocrypt',
        symbol: 'bio',
        addr: '0xf18432ef894ef4b2a5726f933718f5a8cf9ff831',
    },
    {
        id: 'biokkoin',
        symbol: 'bkkg',
        addr: '0x8af22fbdefe01b4dc7960ec04ec73e8502f4a6b0',
    },
    {
        id: 'biopassport',
        symbol: 'biot',
        addr: '0xc07a150ecadf2cc352f5586396e344a6b17625eb',
    },
    {
        id: 'bios',
        symbol: 'bios',
        addr: '0xaaca86b876ca011844b5798eca7a67591a9743c8',
    },
    {
        id: 'biotron',
        symbol: 'btrn',
        addr: '0x03c780cd554598592b97b7256ddaad759945b125',
    },
    {
        id: 'bird-money',
        symbol: 'bird',
        addr: '0x70401dfd142a16dc7031c56e862fc88cb9537ce0',
    },
    {
        id: 'bispex',
        symbol: 'bpx',
        addr: '0x2aa4a3e8bb72be68a31c9c3c98ca7bec723c6222',
    },
    {
        id: 'bistroo',
        symbol: 'bist',
        addr: '0x6e8908cfa881c9f6f2c64d3436e7b80b1bf0093f',
    },
    {
        id: 'bitball',
        symbol: 'btb',
        addr: '0x06e0feb0d74106c7ada8497754074d222ec6bcdf',
    },
    {
        id: 'bitball-treasure',
        symbol: 'btrs',
        addr: '0x73c9275c3a2dd84b5741fd59aebf102c91eb033f',
    },
    {
        id: 'bitberry-token',
        symbol: 'bbr',
        addr: '0x7671904eed7f10808b664fc30bb8693fd7237abf',
    },
    {
        id: 'bitbook-gambling',
        symbol: 'bxk',
        addr: '0xeb6985acd6d0cbff60b88032b0b29ac1d9d66a1b',
    },
    {
        id: 'bitboost',
        symbol: 'bbt',
        addr: '0x1500205f50bf3fd976466d0662905c9ff254fc9c',
    },
    {
        id: 'bitbot-protocol',
        symbol: 'bbp',
        addr: '0xbb0a009ba1eb20c5062c790432f080f6597662af',
    },
    {
        id: 'bitcashpay',
        symbol: 'bcp',
        addr: '0xe047705117eb07e712c3d684f5b18e74577e83ac',
    },
    {
        id: 'bitceo',
        symbol: 'bceo',
        addr: '0x19ca83a13b4c4be43fa82c5e415e16f1d86f57f7',
    },
    {
        id: 'bitcherry',
        symbol: 'bchc',
        addr: '0x2ab05b915c30093679165bcdba9c26d8cd8bee99',
    },
    {
        id: 'bitclave',
        symbol: 'cat',
        addr: '0x1234567461d3f8db7496581774bd869c83d51c93',
    },
    {
        id: 'bitcloud-pro',
        symbol: 'bpro',
        addr: '0x197e6bca6bc2f488ec760a6ce46b1399cd2954b0',
    },
    {
        id: 'bitcoffeen',
        symbol: 'bff',
        addr: '0x708aa4e8aaeaad6074dd09cc4e5c52a70452eb39',
    },
    {
        id: 'bitcoinbrand',
        symbol: 'btcb',
        addr: '0xf2cee90309418353a57717eca26c4f8754f0d84e',
    },
    {
        id: 'bitcoin-bull',
        symbol: 'bitb',
        addr: '0x0a2a86bb0bee386a11291d5d01e89cdfb565df5d',
    },
    {
        id: 'bitcoin-company-network',
        symbol: 'bitn',
        addr: '0x41ad4093349c8a60de591a3c37dcd184558eaae3',
    },
    {
        id: 'bitcoin-galaxy-warp',
        symbol: 'btcgw',
        addr: '0x305f8157c1f841fbd378f636abf390c5b4c0e330',
    },
    {
        id: 'bitcoinhedge',
        symbol: 'btchg',
        addr: '0x5547136b913b68881596275ace01e9a589c5b16b',
    },
    {
        id: 'bitcoin-network-demand-set',
        symbol: 'byte3',
        addr: '0xff32b6dc663e9aa3ef61117749c6ccc168100b99',
    },
    {
        id: 'bitcoin-one',
        symbol: 'btcone',
        addr: '0x87f5e8c3425218837f3cb67db941af0c01323e56',
    },
    {
        id: 'bitcoin-platinum',
        symbol: 'bcp',
        addr: '0xd26fb114401ec86887cd09f62eccd95fcf20b571',
    },
    {
        id: 'bitcoin-pro',
        symbol: 'btcp',
        addr: '0x723cbfc05e2cfcc71d3d89e770d32801a5eef5ab',
    },
    {
        id: 'bitcoin-red',
        symbol: 'btcred',
        addr: '0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11',
    },
    {
        id: 'bitcoinregular',
        symbol: 'btrl',
        addr: '0x388fd8a5145d6ef85aae14d494f93df9d1c7c00c',
    },
    {
        id: 'bitcoin-silver',
        symbol: 'btcs',
        addr: '0xd96b9fd7586d9ea24c950d24399be4fb65372fdd',
    },
    {
        id: 'bitcoinsov',
        symbol: 'bsov',
        addr: '0x26946ada5ecb57f3a1f91605050ce45c482c9eb1',
    },
    {
        id: 'bitcoin-true',
        symbol: 'BTCT',
        addr: '0x820a8481451e893bc66dce50c84d45617cac3705',
    },
    {
        id: 'bitcoin-unicorn',
        symbol: 'btcui',
        addr: '0x5f2ec9cf1ec1c0e2c880b6584921e812a4225395',
    },
    {
        id: 'bitcoinus',
        symbol: 'bits',
        addr: '0xc38f1fb49acdf2f1213caf3319f6eb3ea2cb7527',
    },
    {
        id: 'bitcoinvend',
        symbol: 'bcvt',
        addr: '0x8d717ab5eac1016b64c2a7fd04720fd2d27d1b86',
    },
    {
        id: 'bitcoiva',
        symbol: 'bca',
        addr: '0xc222e5b89309fab5faf55a3b3bd9082be834916c',
    },
    {
        id: 'bitcomo',
        symbol: 'bm',
        addr: '0xe2fe5e7e206e7b46cad6a5146320e5b4b9a18e97',
    },
    {
        id: 'bitcratic',
        symbol: 'bct',
        addr: '0x9ec251401eafb7e98f37a1d911c0aea02cb63a80',
    },
    {
        id: 'bitcratic-revenue',
        symbol: 'bctr',
        addr: '0x579353231f3540b218239774422962c64a3693e7',
    },
    {
        id: 'bitcurate',
        symbol: 'btcr',
        addr: '0x0371f7b219fff864b437bcfb564810f323fffcca',
    },
    {
        id: 'bitdefi',
        symbol: 'bfi',
        addr: '0x2b2b0559081c41e962777b5049632fdb30f7e652',
    },
    {
        id: 'bitdegree',
        symbol: 'bdg',
        addr: '0x1961b3331969ed52770751fc718ef530838b6dee',
    },
    {
        id: 'bitdns',
        symbol: 'dns',
        addr: '0x17c090f9a17e4e5a8ceb23bbe7e7e28e3c4ca196',
    },
    {
        id: 'bitenium-token',
        symbol: 'bt',
        addr: '0x997507cc49fbf0cd6ce5e1ee543218556fafdebc',
    },
    {
        id: 'bitex-global',
        symbol: 'xbx',
        addr: '0x57c09a8de0b0f471f8567609777addffb5c46a08',
    },
    {
        id: 'bitfarmings',
        symbol: 'bfi',
        addr: '0xc980be019f2ac10a1c96f964b971a5f44551d318',
    },
    {
        id: 'bitfex',
        symbol: 'bfx',
        addr: '0x25901f2a5a4bb0aaabe2cdb24e0e15a0d49b015d',
    },
    {
        id: 'bit_financial',
        symbol: 'bfc',
        addr: '0x4d31200e6d7854c2f664af7fc38a21600960f74d',
    },
    {
        id: 'bitforex',
        symbol: 'bf',
        addr: '0x5b71bee9d961b1b848f8485eec8d8787f80217f5',
    },
    {
        id: 'bitfxt-coin',
        symbol: 'bxt',
        addr: '0x24d77c210a014b1e123a0878f6c903df74a2317b',
    },
    {
        id: 'bitgear',
        symbol: 'gear',
        addr: '0x1b980e05943de3db3a459c72325338d327b6f5a9',
    },
    {
        id: 'bitget-defi-token',
        symbol: 'bft',
        addr: '0x3779d960261f882750b39c622527822c88c98e13',
    },
    {
        id: 'bithachi',
        symbol: 'bith',
        addr: '0x8811e4dd5ec5eb8764b97cc814b1339089717ada',
    },
    {
        id: 'bithash-token',
        symbol: 'bt',
        addr: '0x6628606c321faf52b7230a57b26c01b19aa68e82',
    },
    {
        id: 'bithercash',
        symbol: 'bicas',
        addr: '0xa7d10ff962eda41f3b037e3af1d8b4037eba4b86',
    },
    {
        id: 'bitica-coin',
        symbol: 'bdcc',
        addr: '0x3a3547d62e9f9e76f99d51d5ab4f07aae0db2dbb',
    },
    {
        id: 'bitifex',
        symbol: 'bitx',
        addr: '0xa0ed4c4acbf07c03365d6bbe28150a819aff700f',
    },
    {
        id: 'bitjob',
        symbol: 'stu',
        addr: '0x0371a82e4a9d0a4312f3ee2ac9c6958512891372',
    },
    {
        id: 'bitkam',
        symbol: 'kam',
        addr: '0xbdbb0ee6144544ec814d417b0ad41f16fc8b858e',
    },
    {
        id: 'bitmart-token',
        symbol: 'bmx',
        addr: '0x986ee2b944c42d017f52af21c4c69b84dbea35d8',
    },
    {
        id: 'bitminutes',
        symbol: 'bmt',
        addr: '0x86c2752f8fe2c6679a942c8ee6c785c28f42cd55',
    },
    {
        id: 'bitnautic',
        symbol: 'btnt',
        addr: '0xd9964e1306dda055f5284c52048712c35ddb61fd',
    },
    {
        id: 'bitnorm',
        symbol: 'bn',
        addr: '0x42edc1c5ff57ff5240c90e2d8dfa269d77d68013',
    },
    {
        id: 'bito-coin',
        symbol: 'bito',
        addr: '0x93b1e78a3e652cd2e71c4a767595b77282344932',
    },
    {
        id: 'bitonyx-token',
        symbol: 'btnyx',
        addr: '0x8fb6c8a44a4e23fd1f5a936818b39083b4cdc865',
    },
    {
        id: 'bitpakcointoken',
        symbol: 'bpakc',
        addr: '0xdf22da9a8c1d80095175ae601d182a734923f01a',
    },
    {
        id: 'bitpanda-ecosystem-token',
        symbol: 'best',
        addr: '0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f',
    },
    {
        id: 'bitplayer-token',
        symbol: 'bpt',
        addr: '0x283669123bd83da2536bb534e20512101c18e5d8',
    },
    {
        id: 'bitpower',
        symbol: 'bpp',
        addr: '0x52d904eff2605463c2f0b338d34abc9b7c3e3b08',
    },
    {
        id: 'bit-public-talent-network',
        symbol: 'bptn',
        addr: '0x6c22b815904165f3599f0a4a092d458966bd8024',
    },
    {
        id: 'bitrent',
        symbol: 'rntb',
        addr: '0x1fe70be734e473e5721ea57c8b5b01e6caa52686',
    },
    {
        id: 'bitrewards',
        symbol: 'xbrt',
        addr: '0xb35e9ad7e9ebf731e04c73845f1bf75e55828700',
    },
    {
        id: 'bitrewards-token',
        symbol: 'bit',
        addr: '0x47da42696a866cdc61a4c809a515500a242909c1',
    },
    {
        id: 'bitriver',
        symbol: 'btr',
        addr: '0xcce63fd31e9053c110c74cebc37c8e358a6aa5bd',
    },
    {
        id: 'bitrue-token',
        symbol: 'btr',
        addr: '0xd433138d12beb9929ff6fd583dc83663eea6aaa5',
    },
    {
        id: 'bitscoin',
        symbol: 'btcx',
        addr: '0x9388f54fa978aa9e24395a8b69033304eccea4df',
    },
    {
        id: 'bitscreener',
        symbol: 'bitx',
        addr: '0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007',
    },
    {
        id: 'bitsong',
        symbol: 'btsg',
        addr: '0x05079687d35b93538cbd59fe5596380cae9054a9',
    },
    {
        id: 'bitsonic-token',
        symbol: 'bsc',
        addr: '0xe541504417670fb76b612b41b4392d967a1956c7',
    },
    {
        id: 'bitsou',
        symbol: 'btu',
        addr: '0x3c76ef53be46ed2e9be224e8f0b92e8acbc24ea0',
    },
    {
        id: 'bitstash-marketplace',
        symbol: 'stash',
        addr: '0xe4f356ecce6fbda81ecdea2e38527e59422861c2',
    },
    {
        id: 'bitsten-token',
        symbol: 'bst',
        addr: '0xd4f6f9ae14399fd5eb8dfc7725f0094a1a7f5d80',
    },
    {
        id: 'bit-storage-box-token',
        symbol: 'bsbt',
        addr: '0xde8607ccad60814c8d9cd6f5ce8e9031e4675c8f',
    },
    {
        id: 'bitto-exchange',
        symbol: 'BITTO',
        addr: '0x55a290f08bb4cae8dcf1ea5635a3fcfd4da60456',
    },
    {
        id: 'bittoken',
        symbol: 'bitt',
        addr: '0x9f9913853f749b3fe6d6d4e16a1cc3c1656b6d51',
    },
    {
        id: 'bittup',
        symbol: 'btu',
        addr: '0x2b04dadd412f7281d3ccabfb8425fd9c9e841588',
    },
    {
        id: 'bittwatt',
        symbol: 'bwt',
        addr: '0xca3ea3061d638e02113aa960340c98343b5acd62',
    },
    {
        id: 'bitup-token',
        symbol: 'but',
        addr: '0xb2e260f12406c401874ecc960893c0f74cd6afcd',
    },
    {
        id: 'bitwell-token',
        symbol: 'well',
        addr: '0x1b06b43f3b0bbad73784d858c782e029f3f5af14',
    },
    {
        id: 'bit-z-token',
        symbol: 'bz',
        addr: '0x4375e7ad8a01b8ec3ed041399f62d9cd120e0063',
    },
    {
        id: 'bixcpro',
        symbol: 'bixcpro',
        addr: '0x3e9e371f8d2e9fca315fb0a747533ced8a3fcbcb',
    },
    {
        id: 'bizzcoin',
        symbol: 'bizz',
        addr: '0x7a8ca2f815a260660158a38c34ca321a3605ecfe',
    },
    {
        id: 'bkex-token',
        symbol: 'bkk',
        addr: '0x1df7aa5551e801e280007dc0fc0454e2d06c1a89',
    },
    {
        id: 'black-diamond-rating',
        symbol: 'hzt',
        addr: '0x78a5b382b9a83fe042a4f7eb2399d563fda931c3',
    },
    {
        id: 'blackdragon-token',
        symbol: 'BDT',
        addr: '0x4efe8665e564bf454ccf5c90ee16817f7485d5cf',
    },
    {
        id: 'blackfisk',
        symbol: 'blfi',
        addr: '0x417ffdbc285dd2c4dc00937798ab901634137caa',
    },
    {
        id: 'blackhole-protocol',
        symbol: 'black',
        addr: '0xd714d91a169127e11d8fab3665d72e8b7ef9dbe2',
    },
    {
        id: 'blackholeswap-compound-dai-usdc',
        symbol: 'bhsc',
        addr: '0x35101c731b1548b5e48bb23f99edbc2f5c341935',
    },
    {
        id: 'black-kishu-inu',
        symbol: 'bishu',
        addr: '0x99043bb680ab9262c7b2ac524e00b215efb7db9b',
    },
    {
        id: 'blackmoon-crypto',
        symbol: 'bmc',
        addr: '0xdf6ef343350780bf8c3410bf062e0c015b1dd671',
    },
    {
        id: 'blackpearl-chain',
        symbol: 'bplc',
        addr: '0x426fc8be95573230f6e6bc4af91873f0c67b21b4',
    },
    {
        id: 'blackpool-token',
        symbol: 'bpt',
        addr: '0x0ec9f76202a7061eb9b3a7d6b59d36215a7e37da',
    },
    {
        id: 'blank',
        symbol: 'blank',
        addr: '0xaec7e1f531bb09115103c53ba76829910ec48966',
    },
    {
        id: 'blaze-defi',
        symbol: 'bnfi',
        addr: '0x68e0a48d3bff6633a31d1d100b70f93c3859218b',
    },
    {
        id: 'blaze-network',
        symbol: 'BLZN',
        addr: '0x70efdc485a10210b056ef8e0a32993bc6529995e',
    },
    {
        id: 'blind-boxes',
        symbol: 'bles',
        addr: '0xe796d6ca1ceb1b022ece5296226bf784110031cd',
    },
    {
        id: 'bliss-2',
        symbol: 'bliss',
        addr: '0x50d2de5397d7c657c3d424634a2ddf4e0d73d789',
    },
    {
        id: 'blitzpredict',
        symbol: 'xbp',
        addr: '0x28dee01d53fed0edf5f6e310bf8ef9311513ae40',
    },
    {
        id: 'blocery',
        symbol: 'bly',
        addr: '0xf8ad7dfe656188a23e89da09506adf7ad9290d5d',
    },
    {
        id: 'block-18',
        symbol: '18c',
        addr: '0x5a9bf6badcd24fe0d58e1087290c2fe2c728736a',
    },
    {
        id: 'block-array',
        symbol: 'ary',
        addr: '0xa5f8fc0921880cb7342368bd128eb8050442b1a1',
    },
    {
        id: 'blockbank',
        symbol: 'bbank',
        addr: '0xf4b5470523ccd314c6b9da041076e7d79e0df267',
    },
    {
        id: 'blockburn',
        symbol: 'burn',
        addr: '0x8515cd0f00ad81996d24b9a9c35121a3b759d6cd',
    },
    {
        id: 'blockcdn',
        symbol: 'bcdn',
        addr: '0x1e797ce986c3cff4472f7d38d5c4aba55dfefe40',
    },
    {
        id: 'blockchain-adventurers-guild',
        symbol: 'bag',
        addr: '0xf33121a2209609cadc7349acc9c40e41ce21c730',
    },
    {
        id: 'blockchain-certified-data-token',
        symbol: 'bcdt',
        addr: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
    },
    {
        id: 'block-chain-com',
        symbol: 'bc',
        addr: '0x2ecb13a8c458c379c4d9a7259e202de03c8f3d19',
    },
    {
        id: 'blockchain-cuties-universe',
        symbol: 'cute',
        addr: '0x047686fb287e7263a23873dea66b4501015a2226',
    },
    {
        id: 'blockchain-cuties-universe-governance',
        symbol: 'bcug',
        addr: '0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af',
    },
    {
        id: 'blockchain-exchange-alliance',
        symbol: 'bxa',
        addr: '0x98d8d146e644171cd47ff8588987b7bdeef72a87',
    },
    {
        id: 'blockchainpoland',
        symbol: 'bcp',
        addr: '0x72e203a17add19a3099137c9d7015fd3e2b7dba9',
    },
    {
        id: 'blockchain-quotations-index-token',
        symbol: 'bqt',
        addr: '0x5eb87caa0105a63aa87a36c7bd2573bd13e84fae',
    },
    {
        id: 'blockcloud',
        symbol: 'bloc',
        addr: '0x6f919d67967a97ea36195a2346d9244e60fe0ddb',
    },
    {
        id: 'blockclout',
        symbol: 'clout',
        addr: '0xa10ae543db5d967a73e9abcc69c81a18a7fc0a78',
    },
    {
        id: 'block-collider',
        symbol: 'emb',
        addr: '0xdb0acc14396d108b3c5574483acb817855c9dc8d',
    },
    {
        id: 'block-duelers',
        symbol: 'bdt',
        addr: '0x7bce667ef12023dc5f8577d015a2f09d99a5ef58',
    },
    {
        id: 'blocklancer',
        symbol: 'lnc',
        addr: '0x63e634330a20150dbb61b15648bc73855d6ccf07',
    },
    {
        id: 'blockmason-credit-protocol',
        symbol: 'bcpt',
        addr: '0x1c4481750daa5ff521a2a7490d9981ed46465dbd',
    },
    {
        id: 'blockmason-link',
        symbol: 'blink',
        addr: '0x42bedd647e387dabec65a7dc3a3babcc68bb664d',
    },
    {
        id: 'blockmax',
        symbol: 'ocb',
        addr: '0x466912baa9430a4a460b141ee8c580d817441449',
    },
    {
        id: 'blockmesh-2',
        symbol: 'bmh',
        addr: '0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f',
    },
    {
        id: 'blocknotex',
        symbol: 'bnox',
        addr: '0x8752bf7ad53d25a4165b9370f2becc22dd8ae838',
    },
    {
        id: 'blockpass',
        symbol: 'pass',
        addr: '0xee4458e052b533b1aabd493b5f8c4d85d7b263dc',
    },
    {
        id: 'blockswap-network',
        symbol: 'cbsn',
        addr: '0x7d4b1d793239707445305d8d2456d2c735f6b25b',
    },
    {
        id: 'blocktix',
        symbol: 'tix',
        addr: '0xea1f346faf023f974eb5adaf088bbcdf02d761f4',
    },
    {
        id: 'blockv',
        symbol: 'vee',
        addr: '0x340d2bde5eb28c1eed91b2f790723e3b160613b7',
    },
    {
        id: 'blocsport-one',
        symbol: 'bs1',
        addr: '0xaeaf14ce56b052dfc2a2eb0654136ecf87821fbf',
    },
    {
        id: 'blood',
        symbol: 'blood',
        addr: '0xd2727e4259bba31955fd582986334aea4fba8c52',
    },
    {
        id: 'bloody-token',
        symbol: 'bloody',
        addr: '0x892f5a0b08bb7b1eecccc63ef3916ff201c93664',
    },
    {
        id: 'bloom',
        symbol: 'blt',
        addr: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    },
    {
        id: 'bloomzed-token',
        symbol: 'blct',
        addr: '0x6d2c508fc4a588a41713ff59212f85489291d244',
    },
    {
        id: 'blox',
        symbol: 'cdt',
        addr: '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af',
    },
    {
        id: 'blucon',
        symbol: 'bep',
        addr: '0xd8ef149b4e1e8f050d52925f9c68d3a296e77227',
    },
    {
        id: 'blue',
        symbol: 'blue',
        addr: '0x539efe69bcdd21a83efd9122571a64cc25e0282b',
    },
    {
        id: 'bluechips-token',
        symbol: 'bchip',
        addr: '0x5ef227f7ce4e96c9ce90e32d4850545a6c5d099b',
    },
    {
        id: 'blue-eyes-white-doge',
        symbol: 'bdoge',
        addr: '0x37092dbf8c26da9cc805683b4cc0b942e92de2fd',
    },
    {
        id: 'blueshare-token',
        symbol: 'bst1',
        addr: '0x336492a0601cc85e08c14d390bf07d960328aaf4',
    },
    {
        id: 'blue-whale',
        symbol: 'bwx',
        addr: '0xce5114d7fa8361f0c088ee26fa3a5446c4a1f50b',
    },
    {
        id: 'bluewizard',
        symbol: 'wiz',
        addr: '0x33d20575f20c6a1881f8ab08e69f6fbaffaeedf2',
    },
    {
        id: 'bluzelle',
        symbol: 'blz',
        addr: '0x5732046a883704404f284ce41ffadd5b007fd668',
    },
    {
        id: 'bmchain-token',
        symbol: 'bmt',
        addr: '0xf028adee51533b1b47beaa890feb54a457f51e89',
    },
    {
        id: 'bmining-token',
        symbol: 'bmt',
        addr: '0xf205d2d65205711b6f6aae3fcb7ebdbc8573f192',
    },
    {
        id: 'bmj-coin',
        symbol: 'bmj',
        addr: '0x25ce333b325f02c9720da526a01b5f5be889b4e3',
    },
    {
        id: 'bmj-master-nodes',
        symbol: 'bmj',
        addr: '0x5913d0f34615923552ee913dbe809f9f348e706e',
    },
    {
        id: 'bnktothefuture',
        symbol: 'bft',
        addr: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
    },
    {
        id: 'bnoincoin',
        symbol: 'bnc',
        addr: '0xbe5b336ef62d1626940363cf34be079e0ab89f20',
    },
    {
        id: 'bnsd-finance',
        symbol: 'bnsd',
        addr: '0x668dbf100635f593a3847c0bdaf21f0a09380188',
    },
    {
        id: 'bns-token',
        symbol: 'bns',
        addr: '0x695106ad73f506f9d0a9650a78019a93149ae07c',
    },
    {
        id: 'bnx',
        symbol: 'bnx',
        addr: '0x40c836982788dca47d11024b1fa3e01fd4661766',
    },
    {
        id: 'boa',
        symbol: 'boa',
        addr: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
    },
    {
        id: 'boatpilot',
        symbol: 'navy',
        addr: '0xc15a399c4ea7815fe36857c9e290ee452a5d6b21',
    },
    {
        id: 'boboo-token',
        symbol: 'bobt',
        addr: '0x0602121722642936150f12ea1e07d62a8bb2aa71',
    },
    {
        id: 'bobs_repair',
        symbol: 'bob',
        addr: '0xdf347911910b6c9a4286ba8e2ee5ea4a39eb2134',
    },
    {
        id: 'boldman-capital',
        symbol: 'bold',
        addr: '0x2d4de3c744d43cf77cb12399921faf0d78b7415b',
    },
    {
        id: 'bolt',
        symbol: 'bolt',
        addr: '0xd5930c307d7395ff807f2921f12c5eb82131a789',
    },
    {
        id: 'boltt-coin',
        symbol: 'boltt',
        addr: '0xbb340a2eaf55c5e67a5a05fe5ceed9b9702d76f4',
    },
    {
        id: 'bomb',
        symbol: 'bomb',
        addr: '0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714',
    },
    {
        id: 'bond-appetite-usd',
        symbol: 'usdap',
        addr: '0x9a1997c130f4b2997166975d9aff92797d5134c2',
    },
    {
        id: 'bondappetit-gov-token',
        symbol: 'bag',
        addr: '0x28a06c02287e657ec3f8e151a13c36a1d43814b0',
    },
    {
        id: 'bonded-finance',
        symbol: 'bond',
        addr: '0x5dc02ea99285e17656b8350722694c35154db1e8',
    },
    {
        id: 'bondly',
        symbol: 'bondly',
        addr: '0xd2dda223b2617cb616c1580db421e4cfae6a8a85',
    },
    {
        id: 'bone',
        symbol: 'BONE',
        addr: '0x5c84bc60a796534bfec3439af0e6db616a966335',
    },
    {
        id: 'b-one-payment',
        symbol: 'b1p',
        addr: '0x4b742b5bdb1d252907ae7f399a891d4a178dbc24',
    },
    {
        id: 'bonezyard',
        symbol: 'bnz',
        addr: '0x014a543f767b3b06e31a811b0a75483ee8dfd72d',
    },
    {
        id: 'bonfi',
        symbol: 'bnf',
        addr: '0x1de5e000c41c8d35b9f1f4985c23988f05831057',
    },
    {
        id: 'bonk-token',
        symbol: 'bonk',
        addr: '0x6d6506e6f438ede269877a0a720026559110b7d5',
    },
    {
        id: 'bonpay',
        symbol: 'bon',
        addr: '0xcc34366e3842ca1bd36c1f324d15257960fcc801',
    },
    {
        id: 'bonuscloud',
        symbol: 'bxc',
        addr: '0xdecf7be29f8832e9c2ddf0388c9778b8ba76af43',
    },
    {
        id: 'boobank',
        symbol: 'boob',
        addr: '0xa9c44135b3a87e0688c41cf8c27939a22dd437c9',
    },
    {
        id: 'boobanker-research-association',
        symbol: 'bbra',
        addr: '0x70460c3bb9abcc0aa51f922c00d37816d6ede4d7',
    },
    {
        id: 'boolean',
        symbol: 'bool',
        addr: '0x6c929cde908481f3d1d775008791f42b1b89dbb0',
    },
    {
        id: 'boom-token',
        symbol: 'boom',
        addr: '0xdb7eab9ba6be88b869f738f6deeba96d49fe13fd',
    },
    {
        id: 'boosted-finance',
        symbol: 'boost',
        addr: '0x3e780920601d61cedb860fe9c4a90c9ea6a35e78',
    },
    {
        id: 'boosto',
        symbol: 'bst',
        addr: '0xdf0041891bda1f911c4243f328f7cf61b37f965b',
    },
    {
        id: 'bootleg-nft',
        symbol: 'boot',
        addr: '0xc8ce75f643ecad864fc625902a6a07371f38320d',
    },
    {
        id: 'bora',
        symbol: 'bora',
        addr: '0x26fb86579e371c7aedc461b2ddef0a8628c93d3b',
    },
    {
        id: 'boringdao',
        symbol: 'bor',
        addr: '0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
    },
    {
        id: 'boringdao-btc',
        symbol: 'obtc',
        addr: '0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68',
    },
    {
        id: 'bor-protocol',
        symbol: 'brp',
        addr: '0xe5b998f63e7022664d3c36c56d1798cca7751573',
    },
    {
        id: 'bosagora',
        symbol: 'boa',
        addr: '0x746dda2ea243400d5a63e0700f190ab79f06489e',
    },
    {
        id: 'boson-protocol',
        symbol: 'boson',
        addr: '0xc477d038d5420c6a9e0b031712f61c5120090de9',
    },
    {
        id: 'bot-ocean',
        symbol: 'bots',
        addr: '0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8',
    },
    {
        id: 'bottos',
        symbol: 'bto',
        addr: '0x36905fc93280f52362a1cbab151f25dc46742fb5',
    },
    {
        id: 'botxcoin',
        symbol: 'botx',
        addr: '0xef19f4e48830093ce5bc8b3ff7f903a0ae3e9fa1',
    },
    {
        id: 'bounty0x',
        symbol: 'bnty',
        addr: '0xd2d6158683aee4cc838067727209a0aaf4359de3',
    },
    {
        id: 'bountymarketcap',
        symbol: 'bmc',
        addr: '0xd945d2031b4c63c0e363304fb771f709b502dc0a',
    },
    {
        id: 'boutspro',
        symbol: 'bouts',
        addr: '0x139d9397274bb9e2c29a9aa8aa0b5874d30d62e3',
    },
    {
        id: 'bowl-a-coin',
        symbol: 'bac',
        addr: '0x062e3be6a7c56a395b1881a0cd69a4923ade4fa2',
    },
    {
        id: 'boxaxis',
        symbol: 'baxs',
        addr: '0xacf3d402e5e2c3edd5b8129e966017d293f12a4c',
    },
    {
        id: 'box-token',
        symbol: 'box',
        addr: '0xe1a178b681bd05964d3e3ed33ae731577d9d96dd',
    },
    {
        id: 'boxx',
        symbol: 'boxx',
        addr: '0x780116d91e5592e58a3b3c76a351571b39abcec6',
    },
    {
        id: 'bpop',
        symbol: 'bpop',
        addr: '0x0452aed878805514e28fb5bd0b56bef92176e32a',
    },
    {
        id: 'b-protocol',
        symbol: 'bpro',
        addr: '0xbbbbbbb5aa847a2003fbc6b5c16df0bd1e725f61',
    },
    {
        id: 'brapper-token',
        symbol: 'brap',
        addr: '0x56ed2f7dac19243df100bac10364c56df20cb1e9',
    },
    {
        id: 'braziliexs-token',
        symbol: 'brzx',
        addr: '0xda5180086461ff6eeb09580181ac160522dcdcd4',
    },
    {
        id: 'brcp-token',
        symbol: 'brcp',
        addr: '0x73484a262730d1d422610729e828346f9b2ff480',
    },
    {
        id: 'bread',
        symbol: 'brd',
        addr: '0x558ec3152e2eb2174905cd19aea4e34a23de9ad6',
    },
    {
        id: 'breezecoin',
        symbol: 'brze',
        addr: '0x77c07555af5ffdc946fb47ce15ea68620e4e7170',
    },
    {
        id: 'bribe-token',
        symbol: 'bribe',
        addr: '0x679fa6dc913acab6def33ec469fc6e421bc794f5',
    },
    {
        id: 'brickblock',
        symbol: 'bbk',
        addr: '0x4a6058666cf1057eac3cd3a5a614620547559fc9',
    },
    {
        id: 'bridge-finance',
        symbol: 'bfr',
        addr: '0x244c5276ea5bb927575417156038d7381b44ab2c',
    },
    {
        id: 'bridge-mutual',
        symbol: 'bmi',
        addr: '0x725c263e32c72ddc3a19bea12c5a0479a81ee688',
    },
    {
        id: 'brilliancex',
        symbol: 'brilx',
        addr: '0x1de6cb5b085ac84bd247b8176c781e913166aa6b',
    },
    {
        id: 'brmv-token',
        symbol: 'brmv',
        addr: '0x501e8726d06cdef66f3e0cb67f54924cca1cc894',
    },
    {
        id: 'brother',
        symbol: 'brat',
        addr: '0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891',
    },
    {
        id: 'brother-music-platform',
        symbol: 'bmp',
        addr: '0x01b23286ff60a543ec29366ae8d6b6274ca20541',
    },
    {
        id: 'brz',
        symbol: 'brz',
        addr: '0x420412e765bfa6d85aaac94b4f7b708c89be2e2b',
    },
    {
        id: 'bsys',
        symbol: 'bsys',
        addr: '0x3004cf8b4e28d60f4e305df25a57cd5faf37b8d5',
    },
    {
        id: 'bta-protocol',
        symbol: 'btap',
        addr: '0x270371c58d9d775ed73971dd414656107384f235',
    },
    {
        id: 'btc-2x-flexible-leverage-index',
        symbol: 'BTC2x-FLI',
        addr: '0x0b498ff89709d3838a063f1dfa463091f9801c2b',
    },
    {
        id: 'btc-alpha-token',
        symbol: 'bac',
        addr: '0x7dc59729b0adf4ae34721a1e06ef82a19e690b04',
    },
    {
        id: 'btc-eth-75-25-weight-set',
        symbol: 'btceth7525',
        addr: '0xa35fc5019c4dc509394bd4d74591a0bf8852c195',
    },
    {
        id: 'btc-eth-equal-weight-set',
        symbol: 'btceth5050',
        addr: '0xc06aec5191be16b94ffc97b6fc01393527367365',
    },
    {
        id: 'btc-fund-active-trading-set',
        symbol: 'btcfund',
        addr: '0x2409d6059e2a8130c099e49f3cb418fd6c3d9aff',
    },
    {
        id: 'btc-lite',
        symbol: 'btcl',
        addr: '0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50',
    },
    {
        id: 'btc-long-only-alpha-portfolio',
        symbol: 'bloap',
        addr: '0xe6404a4472e5222b440f8fafb795553046000841',
    },
    {
        id: 'btcmoon',
        symbol: 'btcm',
        addr: '0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd',
    },
    {
        id: 'btc-network-demand-set-ii',
        symbol: 'byte',
        addr: '0xac8ea871e2d5f4be618905f36f73c760f8cfdc8e',
    },
    {
        id: 'btc-on-chain-beta-portfolio-set',
        symbol: 'bocbp',
        addr: '0xc39835d32428728cbde6903f84c76750976c0323',
    },
    {
        id: 'btc-rsi-crossover-yield-set',
        symbol: 'btcrsiapy',
        addr: '0x924e26fee8e10c20726006cc2bd307a538b0ebe5',
    },
    {
        id: 'btecoin',
        symbol: 'bte',
        addr: '0xfd62247943f94c3910a4922af2c62c2d3fac2a8f',
    },
    {
        id: 'bt-finance',
        symbol: 'bt',
        addr: '0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a',
    },
    {
        id: 'btour-chain',
        symbol: 'btour',
        addr: '0xfaa965d80d956de59808974e33ada054f7696de5',
    },
    {
        id: 'btse-token',
        symbol: 'btse',
        addr: '0x666d875c600aa06ac1cf15641361dec3b00432ef',
    },
    {
        id: 'btu-protocol',
        symbol: 'btu',
        addr: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
    },
    {
        id: 'bubble-network',
        symbol: 'bbl',
        addr: '0xac00797df10e825589d8b53e715393be4e617459',
    },
    {
        id: 'buckhath-coin',
        symbol: 'bhig',
        addr: '0x996229d0c6a485c7f4b52e092eaa907cb2def5c6',
    },
    {
        id: 'budbo',
        symbol: 'bubo',
        addr: '0xccbf21ba6ef00802ab06637896b799f7101f54a2',
    },
    {
        id: 'buddy',
        symbol: 'bud',
        addr: '0x57652fc91f522f9eff0b38cdf1d51f5fb5764215',
    },
    {
        id: 'buff-doge',
        symbol: 'buffdoge',
        addr: '0x0a7e4d70e10b63fef9f8dd19fba3818d15154d2f',
    },
    {
        id: 'build-finance',
        symbol: 'build',
        addr: '0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739',
    },
    {
        id: 'buildin',
        symbol: 'bin',
        addr: '0x75230d7d86b59213773d47103b96a0e7133c8621',
    },
    {
        id: 'buildup',
        symbol: 'bup',
        addr: '0xb04dfdb8271ed2d5e13858562c44a77d3ceb9e57',
    },
    {
        id: 'bulk-network',
        symbol: 'bulk',
        addr: '0xa143ac515dca260a46c742c7251ef3b268639593',
    },
    {
        id: 'bullbearbitcoin-set-ii',
        symbol: 'bbb',
        addr: '0x58723c7afcd33a2db6ae06c37521725d65f0cc15',
    },
    {
        id: 'bullbearethereum-set-ii',
        symbol: 'bbe',
        addr: '0xf43b2f981efc5a611a97951ce4fd7d3bd87f4902',
    },
    {
        id: 'bulldog-token',
        symbol: 'bdog',
        addr: '0x92416e32042c9e67b0771a1b00bcdf92ecb64950',
    },
    {
        id: 'bulleon',
        symbol: 'bul',
        addr: '0x0775c81a273b355e6a5b76e240bf708701f00279',
    },
    {
        id: 'bullers-coin',
        symbol: 'blcc',
        addr: '0x3f2d8861e8ca9a7649d211dbaa3f3d998c6a254a',
    },
    {
        id: 'bullionschain',
        symbol: 'blc',
        addr: '0x326caf6980d4e9161cfb3c55f195b3d825c266d4',
    },
    {
        id: 'bullswap-protocol',
        symbol: 'bvl',
        addr: '0xe7d324b2677440608fb871981b220eca062c3fbf',
    },
    {
        id: 'bundles',
        symbol: 'bund',
        addr: '0x8d3e855f3f55109d473735ab76f753218400fe96',
    },
    {
        id: 'bunnytoken',
        symbol: 'bunny',
        addr: '0x755eb14d2feff2939eb3026f5cad9d03775b9ff4',
    },
    {
        id: 'burency',
        symbol: 'buy',
        addr: '0x31fdd1c6607f47c14a2821f599211c67ac20fa96',
    },
    {
        id: 'burnx',
        symbol: 'burnx',
        addr: '0x106238737b85b4220c7a7ddfd5c4caf8597281fe',
    },
    {
        id: 'burn-yield-burn',
        symbol: 'xyx',
        addr: '0x5cc737a37a02a1b34ba8edf899aa6441765232a0',
    },
    {
        id: 'business-credit-substitute',
        symbol: 'bcs',
        addr: '0x31274db8b609df99e5988ee527071643b5160fc3',
    },
    {
        id: 'busy-dao',
        symbol: 'busy',
        addr: '0x5cb3ce6d081fb00d5f6677d196f2d70010ea3f4a',
    },
    {
        id: 'butterfly-protocol-2',
        symbol: 'bfly',
        addr: '0xf680429328caaacabee69b7a9fdb21a71419c063',
    },
    {
        id: 'buypay',
        symbol: 'wbpc',
        addr: '0xbaa2c10ea6409b58870b5c773c0ff429af7c6f20',
    },
    {
        id: 'buy-sell',
        symbol: 'bse',
        addr: '0xa30189d8255322a2f8b2a77906b000aeb005570c',
    },
    {
        id: 'buzcoin',
        symbol: 'buz',
        addr: '0xae8488e75493b89a0e1488bf91542208c416f486',
    },
    {
        id: 'buzzshow',
        symbol: 'gldy',
        addr: '0x594207c791afd06a8d087d84d99d1da53ccbd45f',
    },
    {
        id: 'bxiot',
        symbol: 'bxiot',
        addr: '0x5c4ac68aac56ebe098d621cd8ce9f43270aaa355',
    },
    {
        id: 'bytus',
        symbol: 'byts',
        addr: '0x87f14e9460cecb789f1b125b2e3e353ff8ed6fcd',
    },
    {
        id: 'byzbit',
        symbol: 'byt',
        addr: '0xb089db4cebbf0618b295d9defc7feb00f56da033',
    },
    {
        id: 'bzx-protocol',
        symbol: 'bzrx',
        addr: '0x56d811088235f11c8920698a204a5010a788f4b3',
    },
    {
        id: 'cache-gold',
        symbol: 'cgt',
        addr: '0xf5238462e7235c7b62811567e63dd17d12c2eaa0',
    },
    {
        id: 'cad-coin',
        symbol: 'cadc',
        addr: '0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef',
    },
    {
        id: 'cajutel',
        symbol: 'caj',
        addr: '0x3c6a7ab47b5f058be0e7c7fe1a4b7925b8aca40e',
    },
    {
        id: 'calicoin',
        symbol: 'cali',
        addr: '0xb8fa12f8409da31a4fc43d15c4c78c33d8213b9b',
    },
    {
        id: 'camp',
        symbol: 'camp',
        addr: '0xe9e73e1ae76d17a16cc53e3e87a9a7da78834d37',
    },
    {
        id: 'candela-coin',
        symbol: 'cla',
        addr: '0xf7269a10e85d4aa8282529516cf86847748da2bf',
    },
    {
        id: 'candy-box',
        symbol: 'candybox',
        addr: '0x8bb95734f5011088fd228c8060b3e02ca53e3c0d',
    },
    {
        id: 'candy-protocol',
        symbol: 'cad',
        addr: '0x2029017f38128bfefaa6c7b9cdd1b680ce8e5c03',
    },
    {
        id: 'cap',
        symbol: 'cap',
        addr: '0x43044f861ec040db59a7e324c40507addb673142',
    },
    {
        id: 'capital-finance',
        symbol: 'cap',
        addr: '0xeda6efe5556e134ef52f2f858aa1e81c84cda84b',
    },
    {
        id: 'capitalsharetoken',
        symbol: 'csto',
        addr: '0x2466ba59e474c46639ceb4eb9b7248638443560d',
    },
    {
        id: 'cappasity',
        symbol: 'capp',
        addr: '0x11613b1f840bb5a40f8866d857e24da126b79d73',
    },
    {
        id: 'carat',
        symbol: 'carat',
        addr: '0x19ea630bcbc1a511a16e65b6ecd447c92e1c087c',
    },
    {
        id: 'carbon',
        symbol: 'crbn',
        addr: '0xcdeee767bed58c5325f68500115d4b722b3724ee',
    },
    {
        id: 'carboneum',
        symbol: 'c8',
        addr: '0xd42debe4edc92bd5a3fbb4243e1eccf6d63a4a5d',
    },
    {
        id: 'carbon-gems',
        symbol: 'gems',
        addr: '0xe74ac81b14021d0cfb835f269f48f25918c5cae6',
    },
    {
        id: 'carbon-utility-token',
        symbol: 'cut',
        addr: '0xe2da716381d7e0032cecaa5046b34223fc3f218d',
    },
    {
        id: 'cardstack',
        symbol: 'card',
        addr: '0x954b890704693af242613edef1b603825afcd708',
    },
    {
        id: 'cardstarter',
        symbol: 'cards',
        addr: '0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9',
    },
    {
        id: 'cargo-gems',
        symbol: 'gem',
        addr: '0x30b1efb052205e6ca3c4888c3c50c5b339cc0602',
    },
    {
        id: 'cargox',
        symbol: 'cxo',
        addr: '0xb6ee9668771a79be7967ee29a63d4184f8097143',
    },
    {
        id: 'carlive-chain',
        symbol: 'iov',
        addr: '0x0e69d0a2bbb30abcb7e5cfea0e4fde19c00a8d47',
    },
    {
        id: 'carnomaly',
        symbol: 'carr',
        addr: '0x884ddbb5dc6c2cef77d3e74c6ccca315797d655b',
    },
    {
        id: 'carry',
        symbol: 'cre',
        addr: '0x115ec79f1de567ec68b7ae7eda501b406626478e',
    },
    {
        id: 'cartesi',
        symbol: 'ctsi',
        addr: '0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d',
    },
    {
        id: 'carvertical',
        symbol: 'cv',
        addr: '0x50bc2ecc0bfdf5666640048038c1aba7b7525683',
    },
    {
        id: 'cashbackpro',
        symbol: 'cbp',
        addr: '0x6f4ee03ca6c942c9397d2ba5f8f83ea58f918f47',
    },
    {
        id: 'cashbet-coin',
        symbol: 'cbc',
        addr: '0x26db5439f651caf491a87d48799da81f191bdb6b',
    },
    {
        id: 'cash-global-coin',
        symbol: 'cgc',
        addr: '0xcbb20d755abad34cb4a9b5ff6dd081c76769f62e',
    },
    {
        id: 'cash-tech',
        symbol: 'cate',
        addr: '0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c',
    },
    {
        id: 'caspian',
        symbol: 'csp',
        addr: '0xa6446d655a0c34bc4f05042ee88170d056cbaf45',
    },
    {
        id: 'castweet',
        symbol: 'ctt',
        addr: '0x1a4743cf1af4c289351390a2b3fe7c13d2f7c235',
    },
    {
        id: 'catex-token',
        symbol: 'catt',
        addr: '0x6e605c269e0c92e70beeb85486f1fc550f9380bd',
    },
    {
        id: 'cat-token',
        symbol: 'cat',
        addr: '0x56015bbe3c01fe05bc30a8a9a9fd9a88917e7db3',
    },
    {
        id: 'cat-trade-protocol',
        symbol: 'catx',
        addr: '0xc7743bf0b300ec041e704cc34d4f43050942099e',
    },
    {
        id: 'cavapoo',
        symbol: 'cava',
        addr: '0x456d8f0d25a4e787ee60c401f8b963a465148f70',
    },
    {
        id: 'cbdao',
        symbol: 'bree',
        addr: '0x4639cd8cd52ec1cf2e496a606ce28d8afb1c792f',
    },
    {
        id: 'cbi-index-7',
        symbol: 'cbix7',
        addr: '0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2',
    },
    {
        id: 'cc',
        symbol: 'cc',
        addr: '0x15c9dd08fb16331b9749a8d7d16bcd71c985f190',
    },
    {
        id: 'ccomp',
        symbol: 'ccomp',
        addr: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
    },
    {
        id: 'ccore',
        symbol: 'cco',
        addr: '0x679badc551626e01b23ceecefbc9b877ea18fc46',
    },
    {
        id: 'ccswap',
        symbol: 'cc',
        addr: '0xb7fbff4ce5200215c690cc95855e5d6c5236ee9f',
    },
    {
        id: 'cctcoin',
        symbol: 'cctc',
        addr: '0x659635905891a08f23d2cc7e000bc452ea5ee074',
    },
    {
        id: 'cdai',
        symbol: 'cdai',
        addr: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    },
    {
        id: 'cedars',
        symbol: 'ceds',
        addr: '0xf256f3ac4176126f55af7c6e25fa5f3cdf518b38',
    },
    {
        id: 'ceek',
        symbol: 'ceek',
        addr: '0xb056c38f6b7dc4064367403e26424cd2c60655e1',
    },
    {
        id: 'celcoin',
        symbol: 'celc',
        addr: '0x19b58d95929586ad750893caad43e77aa6e8ce9e',
    },
    {
        id: 'celer-network',
        symbol: 'celr',
        addr: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
    },
    {
        id: 'celeum',
        symbol: 'clx',
        addr: '0x9f8f7ea504588a58b8b24b832b5d25a4aeb4706f',
    },
    {
        id: 'celletf',
        symbol: 'ecell',
        addr: '0x9b62ec1453cea5dde760aaf662048ca6eeb66e7f',
    },
    {
        id: 'cellframe',
        symbol: 'cell',
        addr: '0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099',
    },
    {
        id: 'celsius-degree-token',
        symbol: 'cel',
        addr: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    },
    {
        id: 'cenfura-token',
        symbol: 'xcf',
        addr: '0x010d14d36c3ea6570d240ae3ac9d660398f7c48e',
    },
    {
        id: 'centaur',
        symbol: 'cntr',
        addr: '0x03042482d64577a7bdb282260e2ea4c8a89c064b',
    },
    {
        id: 'centralex',
        symbol: 'cenx',
        addr: '0x504cde95dbc5d90d09b802f43b371971adbecf79',
    },
    {
        id: 'centrality',
        symbol: 'cennz',
        addr: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
    },
    {
        id: 'cexlt',
        symbol: 'clt',
        addr: '0xa69f7a10df90c4d6710588bc18ad9bf08081f545',
    },
    {
        id: 'cezo',
        symbol: 'cez',
        addr: '0xfebc25f4c5fc3e90a7efae0b4d436a77c9e131b3',
    },
    {
        id: 'cfx-quantum',
        symbol: 'cfxq',
        addr: '0x0557e0d15aec0b9026dd17aa874fdf7d182a2ceb',
    },
    {
        id: 'chad-link-set',
        symbol: 'chadlink',
        addr: '0x19f4a2f8e21915376f1429c26a3a9b9b1db5ff5a',
    },
    {
        id: 'chads-vc',
        symbol: 'chads',
        addr: '0x69692d3345010a207b759a7d1af6fc7f38b35c5e',
    },
    {
        id: 'chai',
        symbol: 'chai',
        addr: '0x06af07097c9eeb7fd685c692751d5c66db49c215',
    },
    {
        id: 'chain-games',
        symbol: 'chain',
        addr: '0xc4c2614e694cf534d407ee49f8e44d125e4681c4',
    },
    {
        id: 'chain-guardians',
        symbol: 'cgg',
        addr: '0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43',
    },
    {
        id: 'chainium',
        symbol: 'chx',
        addr: '0x1460a58096d80a50a2f1f956dda497611fa4f165',
    },
    {
        id: 'chainlink',
        symbol: 'link',
        addr: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    {
        id: 'chainlink-trading-set',
        symbol: 'cts',
        addr: '0x57e83505827788c9f92bcfd398a51a7b0c83dd8e',
    },
    {
        id: 'chainsquare',
        symbol: 'chs',
        addr: '0xb41380174d0b06181513a5677b60200b93b5efb4',
    },
    {
        id: 'chainswap',
        symbol: 'token',
        addr: '0x3b73c1b2ea59835cbfcadade5462b6ab630d9890',
    },
    {
        id: 'chalice-finance',
        symbol: 'chal',
        addr: '0x1cc0744c5106bb47a61c4e41f517cb6f1c49b547',
    },
    {
        id: 'change',
        symbol: 'cag',
        addr: '0x7d4b8cce0591c9044a22ee543533b72e976e36c3',
    },
    {
        id: 'changenow',
        symbol: 'now',
        addr: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
    },
    {
        id: 'charg-coin',
        symbol: 'chg',
        addr: '0xc4a86561cb0b7ea1214904f26e6d50fd357c7986',
    },
    {
        id: 'charged-particles',
        symbol: 'ionx',
        addr: '0x02d3a27ac3f55d5d91fb0f52759842696a864217',
    },
    {
        id: 'charli3',
        symbol: 'c3',
        addr: '0xf1a91c7d44768070f711c68f33a7ca25c8d30268',
    },
    {
        id: 'chartex',
        symbol: 'chart',
        addr: '0x1d37986f252d0e349522ea6c3b98cb935495e63e',
    },
    {
        id: 'cherry',
        symbol: 'cherry',
        addr: '0x4ecb692b0fedecd7b486b4c99044392784877e8c',
    },
    {
        id: 'cherry-token',
        symbol: 'yt',
        addr: '0x5c89736e9454200141b80c37eb28eaceca2ce8cb',
    },
    {
        id: 'chess-coin',
        symbol: 'chess',
        addr: '0x5f75112bbb4e1af516fbe3e21528c63da2b6a1a5',
    },
    {
        id: 'chicken',
        symbol: 'kfc',
        addr: '0xe63684bcf2987892cefb4caa79bd21b34e98a291',
    },
    {
        id: 'chi-gastoken',
        symbol: 'chi',
        addr: '0x0000000000004946c0e9f43f4dee607b0ef1fa1c',
    },
    {
        id: 'chihua-token',
        symbol: 'chihua',
        addr: '0x26ff6d16549a00ba8b36ce3159b5277e6e798d18',
    },
    {
        id: 'chiliz',
        symbol: 'chz',
        addr: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
    },
    {
        id: 'chimaera',
        symbol: 'chi',
        addr: '0x6dc02164d75651758ac74435806093e421b64605',
    },
    {
        id: 'chonk',
        symbol: 'chonk',
        addr: '0x84679bc467dc6c2c40ab04538813aff3796351f1',
    },
    {
        id: 'chow-chow-finance',
        symbol: 'chow',
        addr: '0x925f2c11b99c1a4c46606898ee91ed3d450cfeda',
    },
    {
        id: 'chromaway',
        symbol: 'chr',
        addr: '0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2',
    },
    {
        id: 'chronobank',
        symbol: 'time',
        addr: '0x485d17a6f1b8780392d53d64751824253011a260',
    },
    {
        id: 'chronologic',
        symbol: 'day',
        addr: '0xe814aee960a85208c3db542c53e7d4a6c8d5f60f',
    },
    {
        id: 'chubby-inu',
        symbol: 'chinu',
        addr: '0x910985ffa7101bf5801dd2e91555c465efd9aab3',
    },
    {
        id: 'chunghoptoken',
        symbol: 'chc',
        addr: '0x24810d836f6d60a7ee499622b7103ec769e81e3b',
    },
    {
        id: 'cifculation',
        symbol: 'clc',
        addr: '0x951301a2bbce3d357785ba1e13ec8f42322252b8',
    },
    {
        id: 'cindicator',
        symbol: 'cnd',
        addr: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
    },
    {
        id: 'cipher',
        symbol: 'cpr',
        addr: '0x20ae0ca9d42e6ffeb1188f341a7d63450452def6',
    },
    {
        id: 'cipher-core-token',
        symbol: 'ciphc',
        addr: '0x83eb94cb563146a42fe0a8b3d051f2387a7fb81f',
    },
    {
        id: 'circleex',
        symbol: 'cx',
        addr: '0x3f4e02741b155f5ce8d6190d294d4f916125b896',
    },
    {
        id: 'circuits-of-value',
        symbol: 'coval',
        addr: '0x3d658390460295fb963f54dc0899cfb1c30776df',
    },
    {
        id: 'citios',
        symbol: 'r2r',
        addr: '0x688ff43c3c19e4714f0beb76df8ee394207ab411',
    },
    {
        id: 'civic',
        symbol: 'cvc',
        addr: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    },
    {
        id: 'civitas-protocol',
        symbol: 'cvt',
        addr: '0x88930072f583936f506ce1f1d5fe69290c2d6a2a',
    },
    {
        id: 'clap-clap-token',
        symbol: 'cct',
        addr: '0x0f00c8dd21da51bc6a6ac07f491a7dbe69746f16',
    },
    {
        id: 'clash-token',
        symbol: 'sct',
        addr: '0x6fa0952355607dfb2d399138b7fe10eb90f245e4',
    },
    {
        id: 'clearpoll',
        symbol: 'poll',
        addr: '0x705ee96c1c160842c92c1aecfcffccc9c412e3d9',
    },
    {
        id: 'clever-defi',
        symbol: 'clva',
        addr: '0xc52e23194476b1dd39408cb0b9d935da8e6db3d6',
    },
    {
        id: 'clintex-cti',
        symbol: 'cti',
        addr: '0x8c18d6a985ef69744b9d57248a45c0861874f244',
    },
    {
        id: 'clover',
        symbol: 'clv',
        addr: '0x22222c03318440305ac3e8a7820563d6a9fd777f',
    },
    {
        id: 'cmdx',
        symbol: 'cmdx',
        addr: '0xb2c19ba4d5246d4c587a62f0dfe9f78083568455',
    },
    {
        id: 'cmgcoin',
        symbol: 'cmg',
        addr: '0x5fd1ffa1d817e2bc1e594081a9f883a8707e959c',
    },
    {
        id: 'cmitcoin',
        symbol: 'cmit',
        addr: '0xe11609b9a51caf7d32a55896386ac52ed90e66f1',
    },
    {
        id: 'cng-casino',
        symbol: 'cng',
        addr: '0x883a158c9b28f8d626acfcfbe1028f49e70c9d75',
    },
    {
        id: 'cnn',
        symbol: 'cnn',
        addr: '0x8713d26637cf49e1b6b4a7ce57106aabc9325343',
    },
    {
        id: 'cnns',
        symbol: 'cnns',
        addr: '0x6c3be406174349cfa4501654313d97e6a31072e1',
    },
    {
        id: 'cnyq-stablecoin-by-q-dao-v1',
        symbol: 'cnyq',
        addr: '0xc541b907478d5cd334c0cbfcb9603b6dac6e9ee3',
    },
    {
        id: 'cny-tether',
        symbol: 'cnyt',
        addr: '0x91b7ed3b352aa3502f94e58eac930ae1f5b5ebcd',
    },
    {
        id: 'cobak-token',
        symbol: 'cbk',
        addr: '0xd85a6ae55a7f33b0ee113c234d2ee308edeaf7fd',
    },
    {
        id: 'cobinhood',
        symbol: 'cob',
        addr: '0xb2f7eb1f2c37645be61d73953035360e768d81e6',
    },
    {
        id: 'cocaine-cowboy-shards',
        symbol: 'coke',
        addr: '0xa3a3f076413a362bb0d69eea1dc5b0e79c831edc',
    },
    {
        id: 'cocktailbar',
        symbol: 'coc',
        addr: '0x22b6c31c2beb8f2d0d5373146eed41ab9ede3caf',
    },
    {
        id: 'cocos-bcx',
        symbol: 'cocos',
        addr: '0xc4c7ea4fab34bd9fb9a5e1b1a98df76e26e6407c',
    },
    {
        id: 'codeo-token',
        symbol: 'codeo',
        addr: '0x46b4a7d906f1a943b7744df23625e63726d79035',
    },
    {
        id: 'cofinex',
        symbol: 'cnx',
        addr: '0xe0b7e882c194881c690924cb46154b8241f9145e',
    },
    {
        id: 'cofix',
        symbol: 'cofi',
        addr: '0x1a23a6bfbadb59fa563008c0fb7cf96dfcf34ea1',
    },
    {
        id: 'coil-crypto',
        symbol: 'coil',
        addr: '0x3936ad01cf109a36489d93cabda11cf062fd3d48',
    },
    {
        id: 'coinanalyst',
        symbol: 'coy',
        addr: '0xa2c1e04aca801da92fa95af161040d37f103d69d',
    },
    {
        id: 'coin-artist',
        symbol: 'coin',
        addr: '0x87b008e57f640d94ee44fd893f0323af933f9195',
    },
    {
        id: 'coinbene-future-token',
        symbol: 'cft',
        addr: '0x9b683d81b8334325bcc1802d47de65571993fe89',
    },
    {
        id: 'coinbene-token',
        symbol: 'coni',
        addr: '0x695db6508d66bf111d8d96adaffc5356b7f4581f',
    },
    {
        id: 'coin-capsule',
        symbol: 'caps',
        addr: '0x03be5c903c727ee2c8c4e9bc0acc860cca4715e2',
    },
    {
        id: 'coinclaim',
        symbol: 'clm',
        addr: '0x0b4c2708f052dca413600e237675e4d6778a9375',
    },
    {
        id: 'coindeal-token',
        symbol: 'cdl',
        addr: '0xcb17cd357c7acd594717d899ecb9df540f633f27',
    },
    {
        id: 'coinex-token',
        symbol: 'cet',
        addr: '0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f',
    },
    {
        id: 'coinfi',
        symbol: 'cofi',
        addr: '0x3136ef851592acf49ca4c825131e364170fa32b3',
    },
    {
        id: 'coinfirm-amlt',
        symbol: 'amlt',
        addr: '0xca0e7269600d353f70b14ad118a49575455c0f2f',
    },
    {
        id: 'coinhe-token',
        symbol: 'cht',
        addr: '0x3277dd536471a3cbeb0c9486acad494c95a31e73',
    },
    {
        id: 'coinjanitor',
        symbol: 'jan',
        addr: '0xaf80e6612d9c2e883122e7f2292ee6c34176ad4f',
    },
    {
        id: 'coinlancer',
        symbol: 'cl',
        addr: '0xe81d72d14b1516e68ac3190a46c93302cc8ed60f',
    },
    {
        id: 'coinlion',
        symbol: 'lion',
        addr: '0x2167fb82309cf76513e83b25123f8b0559d6b48f',
    },
    {
        id: 'coinloan',
        symbol: 'clt',
        addr: '0x2001f2a0cf801ecfda622f6c28fb6e10d803d969',
    },
    {
        id: 'coinmeet',
        symbol: 'meet',
        addr: '0xf77f4810e7521298a6e2a04f82a6c3492706d74f',
    },
    {
        id: 'coinmetro',
        symbol: 'xcm',
        addr: '0x36ac219f90f5a6a3c77f2a7b660e3cc701f68e25',
    },
    {
        id: 'coinnec',
        symbol: 'coi',
        addr: '0x8a1a9477a710d470575b1da335e524b27e8091ab',
    },
    {
        id: 'coinpoker',
        symbol: 'chp',
        addr: '0xf3db7560e820834658b590c96234c333cd3d5e5e',
    },
    {
        id: 'coinsbit-token',
        symbol: 'cnb',
        addr: '0xc538143202f3b11382d8606aae90a96b042a19db',
    },
    {
        id: 'coinshares-gold-and-cryptoassets-index-lite',
        symbol: 'cgi',
        addr: '0xada0a1202462085999652dc5310a7a9e2bf3ed42',
    },
    {
        id: 'coinstarter',
        symbol: 'stc',
        addr: '0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4',
    },
    {
        id: 'coinstox',
        symbol: 'csx',
        addr: '0x3aadc3bce49724ce299fd9f3850211211c399c8c',
    },
    {
        id: 'coinsuper-ecosystem-network',
        symbol: 'cen',
        addr: '0x0bc61dded5f6710c637cf8288eb6058766ce1921',
    },
    {
        id: 'cointorox',
        symbol: 'orox',
        addr: '0x1c5b760f133220855340003b43cc9113ec494823',
    },
    {
        id: 'coinus',
        symbol: 'cnus',
        addr: '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308',
    },
    {
        id: 'coinvest',
        symbol: 'coin',
        addr: '0xe61fdaf474fac07063f2234fb9e60c1163cfa850',
    },
    {
        id: 'coinwaycoin',
        symbol: 'can',
        addr: '0x917fd2f7378ff479419dcb56c5cbb445fbbf902a',
    },
    {
        id: 'coinwind',
        symbol: 'cow',
        addr: '0x34965f73cfa05bf8d8af37cb4af64fa950605ea8',
    },
    {
        id: 'coinxclub',
        symbol: 'cpx',
        addr: '0x52ceefc5f5c64a6d3dc6e4fde5f2d7810bccde49',
    },
    {
        id: 'coinzoom-token',
        symbol: 'zoom',
        addr: '0x69cf3091c91eb72db05e45c76e58225177dea742',
    },
    {
        id: 'coinzo-token',
        symbol: 'cnz',
        addr: '0xc1965d7d18f37062b18ab3d5d1fe7f69873b30dd',
    },
    {
        id: 'coldstack',
        symbol: 'cls',
        addr: '0x675bbc7514013e2073db7a919f6e4cbef576de37',
    },
    {
        id: 'collateral-pay',
        symbol: 'coll',
        addr: '0x957891c11616d3e0b0a76a76fb42724c382e0ef3',
    },
    {
        id: 'collective',
        symbol: 'co2',
        addr: '0x75739d5944534115d7c54ee8c73f186d793bae02',
    },
    {
        id: 'color',
        symbol: 'clr',
        addr: '0x2396fbc0e2e3ae4b7206ebdb5706e2a5920349cb',
    },
    {
        id: 'combine-finance',
        symbol: 'comb',
        addr: '0x7d36cce46dd2b0d28dde12a859c2ace4a21e3678',
    },
    {
        id: 'combo-2',
        symbol: 'comb',
        addr: '0x7c81542ed859a2061538fee22b6544a235b9557d',
    },
    {
        id: 'commons-earth',
        symbol: 'com',
        addr: '0xcae838187c1f813fc3bfae6387bf34aeacb5bef6',
    },
    {
        id: 'communication-development-resources-token',
        symbol: 'cdr',
        addr: '0x5a9f5992085e8a25a45716cb6f8ff5b57a05d332',
    },
    {
        id: 'community-business-token',
        symbol: 'cbt',
        addr: '0xfa93660c3f6a848556bb8e265f994160a1f2b289',
    },
    {
        id: 'community-chain',
        symbol: 'comc',
        addr: '0xa5e99ad202bdd71d3518306cf4dd163261981af1',
    },
    {
        id: 'community-token',
        symbol: 'com',
        addr: '0x1b4052d98fb1888c2bf3b8d3b930e0aff8a910df',
    },
    {
        id: 'complifi',
        symbol: 'comfi',
        addr: '0x752efadc0a7e05ad1bcccda22c141d01a75ef1e4',
    },
    {
        id: 'component',
        symbol: 'cmp',
        addr: '0x9f20ed5f919dc1c1695042542c13adcfc100dcab',
    },
    {
        id: 'compound-0x',
        symbol: 'czrx',
        addr: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    },
    {
        id: 'compound-augur',
        symbol: 'crep',
        addr: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1',
    },
    {
        id: 'compound-basic-attention-token',
        symbol: 'cbat',
        addr: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e',
    },
    {
        id: 'compounder',
        symbol: 'cp3r',
        addr: '0x7ef1081ecc8b5b5b130656a41d4ce4f89dbbcc8c',
    },
    {
        id: 'compound-ether',
        symbol: 'ceth',
        addr: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    },
    {
        id: 'compound-governance-token',
        symbol: 'comp',
        addr: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    {
        id: 'compound-sai',
        symbol: 'csai',
        addr: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
    },
    {
        id: 'compound-uniswap',
        symbol: 'cuni',
        addr: '0x35a18000230da775cac24873d00ff85bccded550',
    },
    {
        id: 'compound-usd-coin',
        symbol: 'cusdc',
        addr: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    },
    {
        id: 'compound-usdt',
        symbol: 'cusdt',
        addr: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
    },
    {
        id: 'compound-wrapped-btc',
        symbol: 'cwbtc',
        addr: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
    },
    {
        id: 'compound-wrapped-btc-legacy',
        symbol: 'cwbtc',
        addr: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
    },
    {
        id: 'comsa',
        symbol: 'cms',
        addr: '0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a',
    },
    {
        id: 'concentrated-voting-power',
        symbol: 'cvp',
        addr: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
    },
    {
        id: 'connect',
        symbol: 'cnct',
        addr: '0x54a9ed327f2614316914c3f3a782a77d0aa47aee',
    },
    {
        id: 'connect-coin',
        symbol: 'xcon',
        addr: '0x015df42d36bc851c7f15f80bd1d4e8dbf02aed0c',
    },
    {
        id: 'connect-financial',
        symbol: 'cnfi',
        addr: '0xeabb8996ea1662cad2f7fb715127852cd3262ae9',
    },
    {
        id: 'connectjob',
        symbol: 'cjt',
        addr: '0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17',
    },
    {
        id: 'connect-mining-coin',
        symbol: 'xcmg',
        addr: '0xe60b3fcbd8f400a38476adeb01fcac861ccd2e42',
    },
    {
        id: 'connectome',
        symbol: 'cntm',
        addr: '0x0e5f00da8aaef196a719d045db89b5da8f371b32',
    },
    {
        id: 'consentium',
        symbol: 'csm',
        addr: '0xd8698a985b89650d0a70f99ad2909bd0c0b4b51c',
    },
    {
        id: 'contentbox',
        symbol: 'box',
        addr: '0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f',
    },
    {
        id: 'content-value-network',
        symbol: 'cvnt',
        addr: '0x6400b5522f8d448c0803e6245436dd1c81df09ce',
    },
    {
        id: 'contracoin',
        symbol: 'ctcn',
        addr: '0xfd6c31bb6f05fc8db64f4b740ab758605c271fd8',
    },
    {
        id: 'contraction-dynamic-set-dollar',
        symbol: 'cdsd',
        addr: '0xde25486ccb4588ce5d9fb188fb6af72e768a466a',
    },
    {
        id: 'contribute',
        symbol: 'trib',
        addr: '0xe09216f1d343dd39d6aa732a08036fee48555af0',
    },
    {
        id: 'conun',
        symbol: 'con',
        addr: '0x4dd672e77c795844fe3a464ef8ef0faae617c8fb',
    },
    {
        id: 'convergence',
        symbol: 'conv',
        addr: '0xc834fa996fa3bec7aad3693af486ae53d8aa8b50',
    },
    {
        id: 'convex-crv',
        symbol: 'cvxcrv',
        addr: '0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7',
    },
    {
        id: 'convex-finance',
        symbol: 'cvx',
        addr: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
    },
    {
        id: 'cook',
        symbol: 'cook',
        addr: '0xff75ced57419bcaebe5f05254983b013b0646ef5',
    },
    {
        id: 'coomcoin',
        symbol: 'coom',
        addr: '0x2f3e054d233c93c59140c0905227c7c607c70cbb',
    },
    {
        id: 'cops-finance',
        symbol: 'cops',
        addr: '0x14dfa5cfaafe89d81d7bf3df4e11eaeda0416618',
    },
    {
        id: 'cord-defi-eth',
        symbol: 'cord',
        addr: '0x74fb9da15d4f9a34d8c825798da0fa5c400dade1',
    },
    {
        id: 'coreto',
        symbol: 'cor',
        addr: '0x9c2dc0c3cc2badde84b0025cf4df1c5af288d835',
    },
    {
        id: 'corgi-inu',
        symbol: 'corgi',
        addr: '0xe50006781f435ae43096288334afd9ae5ba50065',
    },
    {
        id: 'corionx',
        symbol: 'corx',
        addr: '0x26a604dffe3ddab3bee816097f81d3c4a2a4cf97',
    },
    {
        id: 'cornichon',
        symbol: 'corn',
        addr: '0xa456b515303b2ce344e9d2601f91270f8c2fea5e',
    },
    {
        id: 'corra-finance',
        symbol: 'cora',
        addr: '0x0077d27cb82ff12322987b225bfce0bb6e8931b4',
    },
    {
        id: 'cortex',
        symbol: 'ctxc',
        addr: '0xea11755ae41d889ceec39a63e6ff75a02bc1c00d',
    },
    {
        id: 'coshi-inu',
        symbol: 'coshi',
        addr: '0x668c50b1c7f46effbe3f242687071d7908aab00a',
    },
    {
        id: 'cosmo-coin',
        symbol: 'cosm',
        addr: '0xd1e10c37a27d95d95720291b1dc6f12f74c71443',
    },
    {
        id: 'cosplay-token',
        symbol: 'cot',
        addr: '0xed64142f7d0a4d94ce0e7fe45d12f712fe360bd0',
    },
    {
        id: 'cost-coin',
        symbol: 'akm',
        addr: '0x5f02cf3c7ada49dfc4a3645fc85c8ae86808dd9b',
    },
    {
        id: 'cotrader',
        symbol: 'cot',
        addr: '0x5c872500c00565505f3624ab435c222e558e9ff8',
    },
    {
        id: 'couchain',
        symbol: 'cou',
        addr: '0xf091cf09c51811819db705710e9634b8bf18f164',
    },
    {
        id: 'covalent-cova',
        symbol: 'cova',
        addr: '0xb37a769b37224449d92aac57de379e1267cd3b00',
    },
    {
        id: 'cover-protocol',
        symbol: 'cover',
        addr: '0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713',
    },
    {
        id: 'covesting',
        symbol: 'cov',
        addr: '0xada86b1b313d1d5267e3fc0bb303f0a2b66d0ea7',
    },
    {
        id: 'covir',
        symbol: 'cvr',
        addr: '0x2578a20a07e8761d91d0961d3ea92e14510885aa',
    },
    {
        id: 'cowboy-finance',
        symbol: 'cow',
        addr: '0xf0be50ed0620e0ba60ca7fc968ed14762e0a5dd3',
    },
    {
        id: 'coweye',
        symbol: 'cow',
        addr: '0xc3d6dda603fc15fd4bf9303150fe11c7cd6059dc',
    },
    {
        id: 'cpchain',
        symbol: 'cpc',
        addr: '0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090',
    },
    {
        id: 'cprop',
        symbol: 'cprop',
        addr: '0x0fb843d37aa2a99db8d81af9fe2f0a6485c7c002',
    },
    {
        id: 'cps-coin',
        symbol: 'cps',
        addr: '0xb5a52519426ec6d88784cc80e621062498306734',
    },
    {
        id: 'cpucoin',
        symbol: 'cpu',
        addr: '0x6d52dfefb16bb9cdc78bfca09061e44574886626',
    },
    {
        id: 'cr-coin',
        symbol: 'crc',
        addr: '0xfb19c03a02a519a44542343803f3d42578cbc243',
    },
    {
        id: 'crd-network',
        symbol: 'crd',
        addr: '0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc',
    },
    {
        id: 'crdt',
        symbol: 'CRDT',
        addr: '0xdaab5e695bb0e8ce8384ee56ba38fa8290618e52',
    },
    {
        id: 'cream-2',
        symbol: 'cream',
        addr: '0x2ba592f78db6436527729929aaf6c908497cb200',
    },
    {
        id: 'cream-eth2',
        symbol: 'creth2',
        addr: '0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd',
    },
    {
        id: 'credit-2',
        symbol: 'CREDIT',
        addr: '0xc4cb5793bd58bad06bf51fb37717b86b02cbe8a4',
    },
    {
        id: 'creditcoin-2',
        symbol: 'ctc',
        addr: '0xa3ee21c306a700e682abcdfe9baa6a08f3820419',
    },
    {
        id: 'creed-finance',
        symbol: 'creed',
        addr: '0x675e7d927af7e6d0082e0153dc3485b687a6f0ad',
    },
    {
        id: 'crespo',
        symbol: 'cso',
        addr: '0x5ecb025e51415dba9fd272c551076357cf4069f5',
    },
    {
        id: 'cribnb',
        symbol: 'crb',
        addr: '0x6767615a97a8204298bbac44c57ef1a615eed244',
    },
    {
        id: 'crowd-machine',
        symbol: 'cmct',
        addr: '0x47bc01597798dcd7506dcca36ac4302fc93a8cfb',
    },
    {
        id: 'crowd-one',
        symbol: 'crd',
        addr: '0x4760e7a401558aa59639161454bb2a41a3c5a90b',
    },
    {
        id: 'crowdwiz',
        symbol: 'wiz',
        addr: '0x2f9b6779c37df5707249eeb3734bbfc94763fbe2',
    },
    {
        id: 'crown-finance',
        symbol: 'crwn',
        addr: '0x72a56f7bbee939a8c441c891e1754bb795ee0b21',
    },
    {
        id: 'crowns',
        symbol: 'cws',
        addr: '0xac0104cca91d167873b8601d2e71eb3d4d8c33e0',
    },
    {
        id: 'crowny-token',
        symbol: 'crwny',
        addr: '0xdbddf072d7aae7b9288e31a4eebe6c54e3a143b1',
    },
    {
        id: 'crust-network',
        symbol: 'cru',
        addr: '0x32a7c02e79c4ea1008dd6564b35f131428673c41',
    },
    {
        id: 'crust-storage-market',
        symbol: 'csm',
        addr: '0x2620638eda99f9e7e902ea24a285456ee9438861',
    },
    {
        id: 'crybet',
        symbol: 'cbt',
        addr: '0xaf5f584d79701d5bdc9ca045e66ae130b67a68ad',
    },
    {
        id: 'crycash',
        symbol: 'crc',
        addr: '0xf41e5fbc2f6aac200dd8619e121ce1f05d150077',
    },
    {
        id: 'cryptassist',
        symbol: 'ctat',
        addr: '0xf7461c8d8e469e9c41a9013dc09ba8abed66ef65',
    },
    {
        id: 'cryptaur',
        symbol: 'cpt',
        addr: '0x88d50b466be55222019d71f9e8fae17f5f45fca1',
    },
    {
        id: 'crypterium',
        symbol: 'crpt',
        addr: '0x08389495d7456e1951ddf7c3a1314a4bfb646d8b',
    },
    {
        id: 'cryptex-finance',
        symbol: 'ctx',
        addr: '0x321c2fe4446c7c963dc41dd58879af648838f98d',
    },
    {
        id: 'cryptid',
        symbol: 'cid',
        addr: '0x4599836c212cd988eaccc54c820ee9261cdaac71',
    },
    {
        id: 'cryption-network',
        symbol: 'cnt',
        addr: '0x429876c4a6f89fb470e92456b8313879df98b63c',
    },
    {
        id: 'crypto20',
        symbol: 'c20',
        addr: '0x26e75307fc0c021472feb8f727839531f112f317',
    },
    {
        id: 'crypto-accept',
        symbol: 'acpt',
        addr: '0xcad2d4c4469ff09ab24d02a63bcedfcd44be0645',
    },
    {
        id: 'cryptoads-marketplace',
        symbol: 'crad',
        addr: '0x608f006b6813f97097372d0d31fb0f11d1ca3e4e',
    },
    {
        id: 'crypto-application-token',
        symbol: 'capp',
        addr: '0x2e9c861713a8cbd4aca72a832f347b9520edbb90',
    },
    {
        id: 'crypto-bank',
        symbol: 'cbank',
        addr: '0xa5e412ba6fca1e07b15defcaa4236ff7b5a7f086',
    },
    {
        id: 'cryptobet',
        symbol: 'cbet',
        addr: '0x35dd2ebf20746c6e658fac75cd80d4722fae62f6',
    },
    {
        id: 'cryptobexchange',
        symbol: 'cbex',
        addr: '0x280daacbd812725baf46e273b84426b1e10ab410',
    },
    {
        id: 'crypto-bits',
        symbol: 'cbs3',
        addr: '0xd4a80224350528b7c0ae8c325a0b5778d92fd86e',
    },
    {
        id: 'cryptobosscoin',
        symbol: 'cbc',
        addr: '0x790bfacae71576107c068f494c8a6302aea640cb',
    },
    {
        id: 'cryptobrl',
        symbol: 'cbrl',
        addr: '0xa6fa6531acdf1f9f96eddd66a0f9481e35c2e42a',
    },
    {
        id: 'cryptobucks',
        symbol: 'CBUCKS',
        addr: '0x0d2bb9d68dd4451a09ec94c05e20bd395022bd8e',
    },
    {
        id: 'cryptobuyer-token',
        symbol: 'xpt',
        addr: '0x08aa0ed0040736dd28d4c8b16ab453b368248d19',
    },
    {
        id: 'crypto-candy',
        symbol: 'candy',
        addr: '0x540d3087b21f31f9a810385c94627a067cfd0b08',
    },
    {
        id: 'cryptocart',
        symbol: 'cc',
        addr: '0x9e547061a345015869d26c7b6ee4ab5b63424441',
    },
    {
        id: 'cryptochrome',
        symbol: 'chm',
        addr: '0x538a151dd910c1d1227719bd400d6c4f99ea06d0',
    },
    {
        id: 'crypto-com-chain',
        symbol: 'cro',
        addr: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
    },
    {
        id: 'cryptocricketclub',
        symbol: '3cs',
        addr: '0x4f56221252d117f35e2f6ab937a3f77cad38934d',
    },
    {
        id: 'cryptocurrency-business-token',
        symbol: 'cbt',
        addr: '0x3ca6b185285684e14f925179992387fb4ef90ac7',
    },
    {
        id: 'cryptocurrency-top-10-tokens-index',
        symbol: 'cc10',
        addr: '0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3',
    },
    {
        id: 'crypto-dash',
        symbol: 'cdash',
        addr: '0x86b300ef935284a99fa5d148a9a6ccc5103b21a8',
    },
    {
        id: 'cryptoenergy',
        symbol: 'cnrg',
        addr: '0xc21dbee65d62770953035f0434c532d578a666c9',
    },
    {
        id: 'crypto-excellence',
        symbol: 'ce',
        addr: '0x8f12dfc7981de79a8a34070a732471f2d335eece',
    },
    {
        id: 'cryptofranc',
        symbol: 'xchf',
        addr: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
    },
    {
        id: 'crypto-global-bank',
        symbol: 'cgb',
        addr: '0x2858ed0225e9aa0638ccd9b552bee2712426fa24',
    },
    {
        id: 'crypto-holding-frank-token',
        symbol: 'chft',
        addr: '0x58002a6b6e659a16de9f02f529b10536e307b0d9',
    },
    {
        id: 'cryptoindex-io',
        symbol: 'cix100',
        addr: '0x6393e822874728f8afa7e1c9944e417d37ca5878',
    },
    {
        id: 'cryptokek',
        symbol: 'kek',
        addr: '0x3fa400483487a489ec9b1db29c4129063eec4654',
    },
    {
        id: 'crypto-kombat',
        symbol: 'kombat',
        addr: '0x878cf148ccbb50426043a9affe54ba408221c7fa',
    },
    {
        id: 'cryptolandy',
        symbol: 'crypl',
        addr: '0x1062fdf250b44697216d07e41df93824519f47aa',
    },
    {
        id: 'cryptonewsnet',
        symbol: 'news',
        addr: '0x94b593002a327f2a3f1b190c50d3bcc8b869b5f5',
    },
    {
        id: 'cryptonia-poker',
        symbol: 'cnp',
        addr: '0x0809bd190c94f4408e691c410e67bff0df5d225d',
    },
    {
        id: 'cryptonits',
        symbol: 'crt',
        addr: '0x36a28c7c9b3dea22f07f4df67833cbe764feeeb4',
    },
    {
        id: 'cryptonovae',
        symbol: 'yae',
        addr: '0x4ee438be38f8682abb089f2bfea48851c5e71eaf',
    },
    {
        id: 'cryptopay',
        symbol: 'cpay',
        addr: '0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e',
    },
    {
        id: 'cryptoping',
        symbol: 'ping',
        addr: '0x21cd6af01383651ed10554394c0497f9db5e5dbc',
    },
    {
        id: 'crypto-price-index',
        symbol: 'cpi',
        addr: '0x2b67d1a87a8d8b280a23e97bc55095215ee0ec53',
    },
    {
        id: 'cryptoprofile',
        symbol: 'cp',
        addr: '0x06a6fc23e6ec8a2b2aeeefd70d772dc3d6b45010',
    },
    {
        id: 'crypto-puzzles',
        symbol: 'cpte',
        addr: '0xe0bdfe2ce51f44556309665d59818ccb541ff067',
    },
    {
        id: 'cryptorewards',
        symbol: 'crs',
        addr: '0xec7d3e835da3f6118079fa9a236b267d044fd7ca',
    },
    {
        id: 'cryptorg-token',
        symbol: 'ctg',
        addr: '0xc760721eb65aa6b0a634df6a008887c48813ff63',
    },
    {
        id: 'cryptosoul',
        symbol: 'soul',
        addr: '0xbb1f24c0c1554b9990222f036b0aad6ee4caec29',
    },
    {
        id: 'cryptotask-2',
        symbol: 'ctask',
        addr: '0x196c81385bc536467433014042788eb707703934',
    },
    {
        id: 'cryptotipsfr',
        symbol: 'crts',
        addr: '0x94ca37d108e89775dc8ae65f51ae28c2d9599f9a',
    },
    {
        id: 'crypto-user-base',
        symbol: 'cub',
        addr: '0xa8892bfc33fa44053a9e402b1839966f4fec74a4',
    },
    {
        id: 'crypto-village-accelerator',
        symbol: 'cva',
        addr: '0x78a52e12c7b63d05c12f9608307587cf654ec3d0',
    },
    {
        id: 'cryptowater',
        symbol: 'c2o',
        addr: '0x13ca8eb6405cfbe2eae5d00207651002083fbc9d',
    },
    {
        id: 'cryptoworld-vip',
        symbol: 'cwv',
        addr: '0xed494c9e2f8e34e53bdd0ea9b4d80305cb15c5c2',
    },
    {
        id: 'cryptrust',
        symbol: 'ctrt',
        addr: '0x8606a8f28e1e2fd50b9074d65c01548b1f040b32',
    },
    {
        id: 'crystal-clear',
        symbol: 'cct',
        addr: '0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22',
    },
    {
        id: 'crystal-token',
        symbol: 'cyl',
        addr: '0x26cb3641aaa43911f1d4cb2ce544eb652aac7c47',
    },
    {
        id: 'csc-jackpot',
        symbol: 'cscj',
        addr: '0xd375eed3549cbc8243358ef3bd6026e2c2dc8e53',
    },
    {
        id: 'csp-dao-network',
        symbol: 'nebo',
        addr: '0x7f0c8b125040f707441cad9e5ed8a8408673b455',
    },
    {
        id: 'cube',
        symbol: 'auto',
        addr: '0x622dffcc4e83c64ba959530a5a5580687a57581b',
    },
    {
        id: 'cubiex',
        symbol: 'cbix',
        addr: '0x122f96d596384885b54bccdddf2125018c421d83',
    },
    {
        id: 'cudos',
        symbol: 'cudos',
        addr: '0x817bbdbc3e8a1204f3691d14bb44992841e3db35',
    },
    {
        id: 'cultiplan',
        symbol: 'ctpl',
        addr: '0xaa55ac677abffa4af9b798b6c138d830820d49e6',
    },
    {
        id: 'cuminu',
        symbol: 'cuminu',
        addr: '0xd6327ce1fb9d6020e8c2c0e124a1ec23dcab7536',
    },
    {
        id: 'curadai',
        symbol: 'cura',
        addr: '0x0a4b2d4b48a63088e0897a3f147ba37f81a27722',
    },
    {
        id: 'curate',
        symbol: 'xcur',
        addr: '0xe1c7e30c42c24582888c758984f6e382096786bd',
    },
    {
        id: 'cure-farm',
        symbol: 'cure',
        addr: '0x089a502032166e07ae83eb434c16790ca2fa4661',
    },
    {
        id: 'curio',
        symbol: 'cur',
        addr: '0x13339fd07934cd674269726edf3b5ccee9dd93de',
    },
    {
        id: 'curio-governance',
        symbol: 'cgt',
        addr: '0xf56b164efd3cfc02ba739b719b6526a6fa1ca32a',
    },
    {
        id: 'currentcoin',
        symbol: 'cur',
        addr: '0x347a29ea126a746c70e1ead570fddf438e66231a',
    },
    {
        id: 'curryswap',
        symbol: 'curry',
        addr: '0xc2d3ae29c8309c14994d02ecd228cf86f3efde77',
    },
    {
        id: 'curve-dao-token',
        symbol: 'crv',
        addr: '0xd533a949740bb3306d119cc777fa900ba034cd52',
    },
    {
        id: 'curve-fi-ydai-yusdc-yusdt-ytusd',
        symbol: 'yCurve',
        addr: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8',
    },
    {
        id: 'custody-token',
        symbol: 'cust',
        addr: '0xf6abff616043c2da572573dcc583b656297b30e7',
    },
    {
        id: 'custom-contract-network',
        symbol: 'ccn',
        addr: '0x17b26400621695c2d8c2d8869f6259e82d7544c4',
    },
    {
        id: 'cvault-finance',
        symbol: 'core',
        addr: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
    },
    {
        id: 'cvp-token',
        symbol: 'cvp',
        addr: '0x19fd4c760a7d4a38aee9f226035cbc9fdf434ffe',
    },
    {
        id: 'cxn-network',
        symbol: 'CXN',
        addr: '0xb48e0f69e6a3064f5498d495f77ad83e0874ab28',
    },
    {
        id: 'cybercoin',
        symbol: 'CBR',
        addr: '0x4ba012f6e411a1be55b98e9e62c3a4ceb16ec88b',
    },
    {
        id: 'cyber-doge',
        symbol: 'cyberd',
        addr: '0x481578423221a35b9358cfe5400d202d2bdc66f1',
    },
    {
        id: 'cybereits',
        symbol: 'cre',
        addr: '0x61f33da40594cec1e3dc900faf99f861d01e2e7d',
    },
    {
        id: 'cyberfi',
        symbol: 'cfi',
        addr: '0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4',
    },
    {
        id: 'cyberfm',
        symbol: 'cyfm',
        addr: '0x4a621d9f1b19296d1c0f87637b3a8d4978e9bf82',
    },
    {
        id: 'cybermiles',
        symbol: 'cmt',
        addr: '0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f',
    },
    {
        id: 'cyber-movie-chain',
        symbol: 'cmct',
        addr: '0x7abc60b3290f68c85f495fd2e0c3bd278837a313',
    },
    {
        id: 'cybermusic',
        symbol: 'cymt',
        addr: '0x78c292d1445e6b9558bf42e8bc369271ded062ea',
    },
    {
        id: 'cybertronchain',
        symbol: 'ctc',
        addr: '0x00b7db6b4431e345eee5cc23d21e8dbc1d5cada3',
    },
    {
        id: 'cybervein',
        symbol: 'cvt',
        addr: '0xbe428c3867f05dea2a89fc76a102b544eac7f772',
    },
    {
        id: 'cyclops-treasure',
        symbol: 'cytr',
        addr: '0xbd05cee8741100010d8e93048a80ed77645ac7bf',
    },
    {
        id: 'cy-finance',
        symbol: 'cyf',
        addr: '0xdb33d49b5a41a97d296b7242a96ebd8ac77b3bb8',
    },
    {
        id: 'dacc',
        symbol: 'dacc',
        addr: '0xf8c595d070d104377f58715ce2e6c93e49a87f3c',
    },
    {
        id: 'dacsee',
        symbol: 'dacs',
        addr: '0xa31108e5bab5494560db34c95492658af239357c',
    },
    {
        id: 'daex',
        symbol: 'dax',
        addr: '0x0b4bdc478791897274652dc15ef5c135cae61e60',
    },
    {
        id: 'dafi-protocol',
        symbol: 'dafi',
        addr: '0xfc979087305a826c2b2a0056cfaba50aad3e6439',
    },
    {
        id: 'dai',
        symbol: 'dai',
        addr: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    {
        id: 'dain-token',
        symbol: 'dain',
        addr: '0xd7d706ed3598a354a4adfce5d8c5383df99a4461',
    },
    {
        id: 'daiquilibrium',
        symbol: 'daiq',
        addr: '0x73d9e335669462cbdd6aa3adafe9efee86a37fe9',
    },
    {
        id: 'dalecoin',
        symbol: 'dalc',
        addr: '0x07d9e49ea402194bf48a8276dafb16e4ed633317',
    },
    {
        id: 'danat-coin',
        symbol: 'dnc',
        addr: '0x0fbe9cc858d7ad6e246fe9d01aed22abd2a66f0b',
    },
    {
        id: 'dandy',
        symbol: 'dandy',
        addr: '0x9dfc4b433d359024eb3e810d77d60fbe8b0d9b82',
    },
    {
        id: 'dao1',
        symbol: 'dao1',
        addr: '0xce3f6f6672616c39d8b6858f8dac9902eca42c84',
    },
    {
        id: 'dao-casino',
        symbol: 'bet',
        addr: '0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2',
    },
    {
        id: 'daofi',
        symbol: 'daofi',
        addr: '0xd82bb924a1707950903e2c0a619824024e254cd1',
    },
    {
        id: 'daohaus',
        symbol: 'haus',
        addr: '0xf2051511b9b121394fa75b8f7d4e7424337af687',
    },
    {
        id: 'dao-maker',
        symbol: 'dao',
        addr: '0x0f51bb10119727a7e5ea3538074fb341f56b09ad',
    },
    {
        id: 'daostack',
        symbol: 'gen',
        addr: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    },
    {
        id: 'daoventures',
        symbol: 'dvg',
        addr: '0x51e00a95748dbd2a3f47bc5c3b3e7b3f0fea666c',
    },
    {
        id: 'dapp-com',
        symbol: 'dappt',
        addr: '0x96184d9c811ea0624fc30c80233b1d749b9e485b',
    },
    {
        id: 'dappstore',
        symbol: 'dappx',
        addr: '0x00d8318e44780edeefcf3020a5448f636788883c',
    },
    {
        id: 'darkbuild',
        symbol: 'dark',
        addr: '0x3108ccfd96816f9e663baa0e8c5951d229e8c6da',
    },
    {
        id: 'darkbundles',
        symbol: 'dbund',
        addr: '0xc6d19a604fbdb5c2eeb363255fd63c9eea29288e',
    },
    {
        id: 'dark-matter',
        symbol: 'dmt',
        addr: '0x79126d32a86e6663f3aaac4527732d0701c1ae6c',
    },
    {
        id: 'dart-insurance',
        symbol: 'dart',
        addr: '0x5a4623f305a8d7904ed68638af3b4328678eddbf',
    },
    {
        id: 'darwinia-commitment-token',
        symbol: 'kton',
        addr: '0x9f284e1337a815fe77d2ff4ae46544645b20c5ff',
    },
    {
        id: 'darwinia-network-native-token',
        symbol: 'ring',
        addr: '0x9469d013805bffb7d3debe5e7839237e535ec483',
    },
    {
        id: 'data',
        symbol: 'dta',
        addr: '0x69b148395ce0015c13e36bffbad63f49ef874e03',
    },
    {
        id: 'databroker-dao',
        symbol: 'dtx',
        addr: '0x765f0c16d1ddc279295c1a7c24b0883f62d33f75',
    },
    {
        id: 'datakyc',
        symbol: 'dkyc',
        addr: '0x38d1b0d157529bd5d936719a8a5f8379afb24faa',
    },
    {
        id: 'datamine',
        symbol: 'dam',
        addr: '0xf80d589b3dbe130c270a69f1a69d050f268786df',
    },
    {
        id: 'datarius-cryptobank',
        symbol: 'dtrc',
        addr: '0xc20464e0c373486d2b3335576e83a218b1618a5e',
    },
    {
        id: 'data-trade-on-demand-platform',
        symbol: 'dtop',
        addr: '0x54ad74edeab48e09ccc43ee324f2603071dad72b',
    },
    {
        id: 'datbit',
        symbol: 'dbt',
        addr: '0xc28d4341ad8224e1a424558074ef0b4515f424d5',
    },
    {
        id: 'datum',
        symbol: 'dat',
        addr: '0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c',
    },
    {
        id: 'datx',
        symbol: 'datx',
        addr: '0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab',
    },
    {
        id: 'dav',
        symbol: 'dav',
        addr: '0xd82df0abd3f51425eb15ef7580fda55727875f14',
    },
    {
        id: 'davecoin',
        symbol: 'DDTG',
        addr: '0x56cdbbeec9828962cecb3f1b69517d430295d952',
    },
    {
        id: 'davies',
        symbol: 'dvs',
        addr: '0xdcbcffeee34eb128336fd45ed62fe8f420c8857d',
    },
    {
        id: 'davinci-coin',
        symbol: 'dac',
        addr: '0xaad54c9f27b876d2538455dda69207279ff673a5',
    },
    {
        id: 'dawn-protocol',
        symbol: 'dawn',
        addr: '0x580c8520deda0a441522aeae0f9f7a5f29629afa',
    },
    {
        id: 'daxhund',
        symbol: 'dxh',
        addr: '0x42891d10b550d0c5c4ac2e17bcd7e2a19c7230f0',
    },
    {
        id: 'day',
        symbol: 'day',
        addr: '0xe26668cc7ce5239304b5af8f54b4bd57d11084d2',
    },
    {
        id: 'dbx-2',
        symbol: 'dbx',
        addr: '0x3cbc780d2934d55a06069e837fabd3e6fc23dab0',
    },
    {
        id: 'd-community',
        symbol: 'dili',
        addr: '0x37f74e99794853777a10ea1dc08a64c86958f06a',
    },
    {
        id: 'dctdao',
        symbol: 'dctd',
        addr: '0xb566e883555aebf5b1db211070b530ab00a4b18a',
    },
    {
        id: 'dds-store',
        symbol: 'dds',
        addr: '0xf9fbaefde7112f78fa9bfe813341f0f49f888cb3',
    },
    {
        id: 'dea',
        symbol: 'dea',
        addr: '0x80ab141f324c3d6f2b18b030f1c4e95d4d658778',
    },
    {
        id: 'deapcoin',
        symbol: 'dep',
        addr: '0x1a3496c18d558bd9c6c8f609e1b129f67ab08163',
    },
    {
        id: 'debase',
        symbol: 'debase',
        addr: '0x9248c485b0b80f76da451f167a8db30f33c70907',
    },
    {
        id: 'debitcoin',
        symbol: 'dbtc',
        addr: '0x95408930d6323ac7aa69e6c2cbfe58774d565fa8',
    },
    {
        id: 'debitum-network',
        symbol: 'deb',
        addr: '0x151202c9c18e495656f372281f493eb7698961d5',
    },
    {
        id: 'debunk',
        symbol: 'dbnk',
        addr: '0xacbed9726ffd232b59d3ca86a0f5c856e2abef29',
    },
    {
        id: 'decash',
        symbol: 'desh',
        addr: '0x95ba34760ac3d7fbe98ee8b2ab33b4f1a6d18878',
    },
    {
        id: 'decentbet',
        symbol: 'dbet',
        addr: '0x9b68bfae21df5a510931a262cecf63f41338f264',
    },
    {
        id: 'decentr',
        symbol: 'dec',
        addr: '0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3',
    },
    {
        id: 'decentraland',
        symbol: 'mana',
        addr: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    },
    {
        id: 'decentral-games',
        symbol: 'dg',
        addr: '0xee06a81a695750e71a662b51066f2c74cf4478a0',
    },
    {
        id: 'decentralized-advertising',
        symbol: 'dad',
        addr: '0x5b322514ff727253292637d9054301600c2c81e8',
    },
    {
        id: 'decentralized-asset-trading-platform',
        symbol: 'datp',
        addr: '0x813b428af3920226e059b68a62e4c04933d4ea7a',
    },
    {
        id: 'decentralized-bitcoin',
        symbol: 'dbtc',
        addr: '0x0c7e25e15e9f6818fa2770107b3ba565470bc8c5',
    },
    {
        id: 'decentralized-crypto-token',
        symbol: 'dcto',
        addr: '0x9ccbd05d4d25c745d49f5e6bf17e09113eb4c769',
    },
    {
        id: 'decentralized-currency-assets',
        symbol: 'dca',
        addr: '0x18aa7c90d3ae4c5bb219d0a2813f441704084625',
    },
    {
        id: 'decentralized-data-assets-management',
        symbol: 'ddam',
        addr: '0xd5dc8921a5c58fb0eba6db6b40eab40283dc3c01',
    },
    {
        id: 'decentralized-machine-learning',
        symbol: 'dml',
        addr: '0xbcdfe338d55c061c084d81fd793ded00a27f226d',
    },
    {
        id: 'decentralized-oracle',
        symbol: 'deor',
        addr: '0x63726dae7c57d25e90ec829ce9a5c745ffd984d3',
    },
    {
        id: 'decentralized-vulnerability-platform',
        symbol: 'dvp',
        addr: '0x8e30ea2329d95802fd804f4291220b0e2f579812',
    },
    {
        id: 'decenturion',
        symbol: 'dcnt',
        addr: '0x0ce6d5a093d4166237c7a9ff8e0553b0293214a1',
    },
    {
        id: 'decore',
        symbol: 'dcore',
        addr: '0xb944b46bbd4ccca90c962ef225e2804e46691ccf',
    },
    {
        id: 'decraft-finance',
        symbol: 'craft',
        addr: '0xa09ff006c652496e72d648cef2f4ee6777efdf6f',
    },
    {
        id: 'decurian',
        symbol: 'ecu',
        addr: '0xd3cdc4e75750dc1e59f8342200742b6b29490e70',
    },
    {
        id: 'deepcloud-ai',
        symbol: 'deep',
        addr: '0x6cbedec4f1ac9d874987d2769596544e0d9161ab',
    },
    {
        id: 'deeper-network',
        symbol: 'dpr',
        addr: '0xf3ae5d769e153ef72b4e3591ac004e89f48107a1',
    },
    {
        id: 'defhold',
        symbol: 'defo',
        addr: '0xe481f2311c774564d517d015e678c2736a25ddd3',
    },
    {
        id: 'defiat',
        symbol: 'dft',
        addr: '0xb6ee603933e024d8d53dde3faa0bf98fe2a3d6f1',
    },
    {
        id: 'defiato',
        symbol: 'dfo',
        addr: '0x1640bd2898eee4c36f369836a067dea8725ac0cc',
    },
    {
        id: 'defi-bids',
        symbol: 'bid',
        addr: '0x1da01e84f3d4e6716f274c987ae4bee5dc3c8288',
    },
    {
        id: 'deficliq',
        symbol: 'cliq',
        addr: '0x0def8d8adde14c9ef7c2a986df3ea4bd65826767',
    },
    {
        id: 'defidollar',
        symbol: 'dusd',
        addr: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
    },
    {
        id: 'defidollar-dao',
        symbol: 'dfd',
        addr: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
    },
    {
        id: 'defi-factory-token',
        symbol: 'deft',
        addr: '0xdef1fac7bf08f173d286bbbdcbeeade695129840',
    },
    {
        id: 'defi-gold',
        symbol: 'dfgl',
        addr: '0xe3a64a3c4216b83255b53ec7ea078b13f21a7dad',
    },
    {
        id: 'defiking',
        symbol: 'dfk',
        addr: '0xa17de0ab0a97bc5e56fa8b39ebfc81cc3f1f349e',
    },
    {
        id: 'defi-nation-signals-dao',
        symbol: 'dsd',
        addr: '0x1e3a2446c729d34373b87fd2c9cbb39a93198658',
    },
    {
        id: 'definer',
        symbol: 'fin',
        addr: '0x054f76beed60ab6dbeb23502178c52d6c5debe40',
    },
    {
        id: 'definex',
        symbol: 'dswap',
        addr: '0x3f344c88d823f180fb8b44a3c7cfc4edc92dfa35',
    },
    {
        id: 'defini',
        symbol: 'dfni',
        addr: '0xdf276a2442ccbbdf0707427668434d6d130b75eb',
    },
    {
        id: 'definitex',
        symbol: 'dfx',
        addr: '0xf1f5de69c9c8d9be8a7b01773cc1166d4ec6ede2',
    },
    {
        id: 'definity',
        symbol: 'defx',
        addr: '0x5f474906637bdcda05f29c74653f6962bb0f8eda',
    },
    {
        id: 'defi-omega',
        symbol: 'dfio',
        addr: '0xee3b9b531f4c564c70e14b7b3bb7d516f33513ff',
    },
    {
        id: 'defi-on-mcw',
        symbol: 'dfm',
        addr: '0x0ccd5dd52dee42b171a623478e5261c1eaae092a',
    },
    {
        id: 'defipie',
        symbol: 'PIE',
        addr: '0x607c794cda77efb21f8848b7910ecf27451ae842',
    },
    {
        id: 'defipulse-index',
        symbol: 'dpi',
        addr: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
    },
    {
        id: 'defire',
        symbol: 'cwap',
        addr: '0xe74dc43867e0cbeb208f1a012fc60dcbbf0e3044',
    },
    {
        id: 'defiscale',
        symbol: 'dfc',
        addr: '0x1b2a76da77d03b7fc21189d9838f55bd849014af',
    },
    {
        id: 'defi-shopping-stake',
        symbol: 'dss',
        addr: '0x213c53c96a01a89e6dcc5683cf16473203e17513',
    },
    {
        id: 'defisocial',
        symbol: 'dfsocial',
        addr: '0x54ee01beb60e745329e6a8711ad2d6cb213e38d7',
    },
    {
        id: 'defit',
        symbol: 'defit',
        addr: '0x84cffa78b2fbbeec8c37391d2b12a04d2030845e',
    },
    {
        id: 'defi-top-5-tokens-index',
        symbol: 'defi5',
        addr: '0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41',
    },
    {
        id: 'defiville-island',
        symbol: 'isla',
        addr: '0x20a68f9e34076b2dc15ce726d7eebb83b694702d',
    },
    {
        id: 'defi-wizard',
        symbol: 'dwz',
        addr: '0x7dee45dff03ec7137979586ca20a2f4917bac9fa',
    },
    {
        id: 'defi-yield-protocol',
        symbol: 'dyp',
        addr: '0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17',
    },
    {
        id: 'defla',
        symbol: 'defla',
        addr: '0xbc6819294c554f46bee6f5eb5260089a03e270a2',
    },
    {
        id: 'deflect',
        symbol: 'deflct',
        addr: '0x3aa5f749d4a6bcf67dac1091ceb69d1f5d86fa53',
    },
    {
        id: 'degate',
        symbol: 'dg',
        addr: '0x53c8395465a84955c95159814461466053dedede',
    },
    {
        id: 'degen-arts',
        symbol: 'dac',
        addr: '0x8281ee37f164c0e26e6b6f87e7695baac256df07',
    },
    {
        id: 'degenerate-platform',
        symbol: 'sbx',
        addr: '0x2579bb08387f0de7ab135edd6c2a985a3f577b6b',
    },
    {
        id: 'degenerator',
        symbol: 'meme',
        addr: '0xd5525d397898e5502075ea5e830d8914f6f0affe',
    },
    {
        id: 'degen-index',
        symbol: 'degen',
        addr: '0x126c121f99e1e211df2e5f8de2d96fa36647c855',
    },
    {
        id: 'degens',
        symbol: 'degens',
        addr: '0xdd039990bd551ce7437d3bf54d155220b7988b71',
    },
    {
        id: 'degenvc',
        symbol: 'dgvc',
        addr: '0x26e43759551333e57f073bb0772f50329a957b30',
    },
    {
        id: 'dego-finance',
        symbol: 'dego',
        addr: '0x88ef27e69108b2633f8e1c184cc37940a075cc02',
    },
    {
        id: 'degov',
        symbol: 'degov',
        addr: '0x469e66e06fec34839e5eb1273ba85a119b8d702f',
    },
    {
        id: 'dehive',
        symbol: 'dhv',
        addr: '0x62dc4817588d53a056cbbd18231d91ffccd34b2a',
    },
    {
        id: 'deipool',
        symbol: 'dip',
        addr: '0xd1517663883e2acc154178fb194e80e8bbc29730',
    },
    {
        id: 'deligence',
        symbol: 'ira',
        addr: '0xade7b5f4a421d81ddad8ce86f77a0efe8921e9cc',
    },
    {
        id: 'deli-of-thrones',
        symbol: 'dotx',
        addr: '0xfab5a05c933f1a2463e334e011992e897d56ef0a',
    },
    {
        id: 'delphy',
        symbol: 'dpy',
        addr: '0x6c2adc2073994fb2ccc5032cc2906fa221e9b391',
    },
    {
        id: 'deltachain',
        symbol: 'delta',
        addr: '0xde1e0ae6101b46520cf66fdc0b1059c5cc3d106c',
    },
    {
        id: 'delta-exchange-token',
        symbol: 'deto',
        addr: '0xab93df617f51e1e415b5b4f8111f122d6b48e55c',
    },
    {
        id: 'deltaexcoin',
        symbol: 'dltx',
        addr: '0x0435316b3ab4b999856085c98c3b1ab21d85cd4d',
    },
    {
        id: 'delta-financial',
        symbol: 'delta',
        addr: '0x9ea3b5b4ec044b70375236a281986106457b20ef',
    },
    {
        id: 'deltahub-community',
        symbol: 'DHC',
        addr: '0x152687bc4a7fcc89049cf119f9ac3e5acf2ee7ef',
    },
    {
        id: 'dent',
        symbol: 'dent',
        addr: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
    },
    {
        id: 'dentacoin',
        symbol: 'dcn',
        addr: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6',
    },
    {
        id: 'deonex-token',
        symbol: 'don',
        addr: '0x50ae0bc7e167c96b46f58063b2a7a27a26ad63bc',
    },
    {
        id: 'depay',
        symbol: 'depay',
        addr: '0xa0bed124a09ac2bd941b10349d8d224fe3c955eb',
    },
    {
        id: 'deri-protocol',
        symbol: 'deri',
        addr: '0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9',
    },
    {
        id: 'derivadao',
        symbol: 'ddx',
        addr: '0x3a880652f47bfaa771908c07dd8673a787daed3a',
    },
    {
        id: 'derivex',
        symbol: 'dvx',
        addr: '0x975769557510167d25beed6e32806537173e292c',
    },
    {
        id: 'design',
        symbol: 'dsgn',
        addr: '0x537a9095b78517597b5f2058edcd6e1978095909',
    },
    {
        id: 'dessfi',
        symbol: 'dess',
        addr: '0x5a80b50a0420a2507e33508a93e0aa037fc90636',
    },
    {
        id: 'destorage',
        symbol: 'ds',
        addr: '0xb67beb26ebeb0dceec354ae0942256d03c01771b',
    },
    {
        id: 'dether',
        symbol: 'DTH',
        addr: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
    },
    {
        id: 'deus-finance',
        symbol: 'deus',
        addr: '0x3b62f3820e0b035cc4ad602dece6d796bc325325',
    },
    {
        id: 'deus-synthetic-coinbase-iou',
        symbol: 'wcoinbase-iou',
        addr: '0x4185cf99745b2a20727b37ee798193dd4a56cdfa',
    },
    {
        id: 'deva-token',
        symbol: 'deva',
        addr: '0x7ed621d37e30214d5e197454f08b1c5c9558517a',
    },
    {
        id: 'devery',
        symbol: 'eve',
        addr: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c',
    },
    {
        id: 'dev-protocol',
        symbol: 'dev',
        addr: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26',
    },
    {
        id: 'dexe',
        symbol: 'dexe',
        addr: '0xde4ee8057785a7e8e800db58f9784845a5c2cbd6',
    },
    {
        id: 'dexfin',
        symbol: 'dxf',
        addr: '0x15eabb7500e44b7fdb6e4051ca8deca430cf9fb8',
    },
    {
        id: 'dexkit',
        symbol: 'kit',
        addr: '0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4',
    },
    {
        id: 'dexmex',
        symbol: 'dexm',
        addr: '0x0020d80229877b495d2bf3269a4c13f6f1e1b9d3',
    },
    {
        id: 'dexter',
        symbol: 'dxr',
        addr: '0xfff3ada5a2555a2b59bff4f44dfad90146cce8cb',
    },
    {
        id: 'dextf',
        symbol: 'dextf',
        addr: '0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0',
    },
    {
        id: 'dextoken-governance',
        symbol: 'dexg',
        addr: '0xb81d70802a816b5dacba06d708b5acf19dcd436d',
    },
    {
        id: 'dex-trade-coin',
        symbol: 'dxc',
        addr: '0xb0e99627bc29adef1178f16117bf495351e81997',
    },
    {
        id: 'dextrust',
        symbol: 'dets',
        addr: '0xd379700999f4805ce80aa32db46a94df64561108',
    },
    {
        id: 'dfe-finance',
        symbol: 'dfe',
        addr: '0xd35ce4fd815522ff52243eb587020d557617f4db',
    },
    {
        id: 'dfinance',
        symbol: 'xfi',
        addr: '0xe4e822c0d5b329e8bb637972467d2e313824efa0',
    },
    {
        id: 'dfohub',
        symbol: 'buidl',
        addr: '0x7b123f53421b1bf8533339bfbdc7c98aa94163db',
    },
    {
        id: 'dforce-token',
        symbol: 'df',
        addr: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
    },
    {
        id: 'dfund',
        symbol: 'dfnd',
        addr: '0xd2adc1c84443ad06f0017adca346bd9b6fc52cab',
    },
    {
        id: 'dfx-finance',
        symbol: 'dfx',
        addr: '0x888888435fde8e7d4c54cab67f206e4199454c60',
    },
    {
        id: 'dfyn-network',
        symbol: 'dfyn',
        addr: '0x9695e0114e12c0d3a3636fab5a18e6b737529023',
    },
    {
        id: 'dgl-coin',
        symbol: 'dgl',
        addr: '0x842c2b97772b4528589ed243f6bda3381ef0261f',
    },
    {
        id: 'dgpayment',
        symbol: 'dgp',
        addr: '0x927159670c50042109d7c0f4aed0cee89452433e',
    },
    {
        id: 'dhd-coin',
        symbol: 'dhd',
        addr: '0x20b4b41ddaecd180798bd4322ba971fa1a54e512',
    },
    {
        id: 'dhedge-dao',
        symbol: 'dht',
        addr: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
    },
    {
        id: 'dhedge-top-index',
        symbol: 'dtop',
        addr: '0x0f4c00139602ab502bc7c1c0e71d6cb72a9fb0e7',
    },
    {
        id: 'dia-data',
        symbol: 'DIA',
        addr: '0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419',
    },
    {
        id: 'diagon',
        symbol: 'dgn',
        addr: '0x7ace84ac394e41f1c01711ed134d9bbcfa770ce7',
    },
    {
        id: 'diamond-platform-token',
        symbol: 'dpt',
        addr: '0x10c71515602429c19d53011ea7040b87a4894838',
    },
    {
        id: 'die',
        symbol: 'die',
        addr: '0x15f5f5f29a819bf7b4b80bf55352e1e42707c94e',
    },
    {
        id: 'difo-network',
        symbol: 'dfn',
        addr: '0xc8ba3cf103e5a1658209c366153197ac7fa9c9b1',
    },
    {
        id: 'dify-finance',
        symbol: 'yfiii',
        addr: '0x4be40bc9681d0a7c24a99b4c92f85b9053fc2a45',
    },
    {
        id: 'digex',
        symbol: 'digex',
        addr: '0x763f8b4fb067190e739ed6acb12f40f2f3890840',
    },
    {
        id: 'digg',
        symbol: 'digg',
        addr: '0x798d1be841a82a273720ce31c822c61a67a601c3',
    },
    {
        id: 'digible',
        symbol: 'digi',
        addr: '0x3cbf23c081faa5419810ce0f6bc1ecb73006d848',
    },
    {
        id: 'digicol-token',
        symbol: 'dgcl',
        addr: '0x63b8b7d4a3efd0735c4bffbd95b332a55e4eb851',
    },
    {
        id: 'digidinar-stabletoken',
        symbol: 'ddrst',
        addr: '0x3ef36d53a168c44ed2ec7a98129ca0308bc1ae45',
    },
    {
        id: 'digidinar-token',
        symbol: 'ddrt',
        addr: '0x94501b6a153c8973fd1f321fcc8188d40dc5d72d',
    },
    {
        id: 'digifinextoken',
        symbol: 'dft',
        addr: '0xa2a54f1ec1f09316ef12c1770d32ed8f21b1fb6a',
    },
    {
        id: 'digimax',
        symbol: 'dgmt',
        addr: '0x0d4b4da5fb1a7d55e85f8e22f728701ceb6e44c9',
    },
    {
        id: 'digipharm',
        symbol: 'dph',
        addr: '0x875353da48c4f9627c4d0b8b8c37b162fc43ce67',
    },
    {
        id: 'digital-antares-dollar',
        symbol: 'dant',
        addr: '0xbe3c393fb670f0a29c3f3e660ffb113200e36676',
    },
    {
        id: 'digitalbits',
        symbol: 'xdb',
        addr: '0xb9eefc4b0d472a44be93970254df4f4016569d27',
    },
    {
        id: 'digital-fantasy-sports',
        symbol: 'dfs',
        addr: '0xcec38306558a31cdbb2a9d6285947c5b44a24f3e',
    },
    {
        id: 'digital-rand',
        symbol: 'dzar',
        addr: '0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c',
    },
    {
        id: 'digital-reserve-currency',
        symbol: 'drc',
        addr: '0xa150db9b1fa65b44799d4dd949d922c0a33ee606',
    },
    {
        id: 'digital-ticks',
        symbol: 'dtx',
        addr: '0x82fdedfb7635441aa5a92791d001fa7388da8025',
    },
    {
        id: 'digital-wallet',
        symbol: 'dwc',
        addr: '0xc626c9e2247c8a0c863ad6daa97ed939e12786de',
    },
    {
        id: 'digitex-futures-exchange',
        symbol: 'dgtx',
        addr: '0xc666081073e8dff8d3d1c2292a29ae1a2153ec09',
    },
    {
        id: 'digiwill',
        symbol: 'dgw',
        addr: '0x87b87a7583d8d8f15b58bdd290318386ac8ee174',
    },
    {
        id: 'digixdao',
        symbol: 'dgd',
        addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
    },
    {
        id: 'digix-gold',
        symbol: 'dgx',
        addr: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    },
    {
        id: 'dipper',
        symbol: 'dip',
        addr: '0x786448439d9401e0a8427acf7ca66a5114eb2368',
    },
    {
        id: 'direwolf',
        symbol: 'direwolf',
        addr: '0xbdea5bb640dbfc4593809deec5cdb8f99b704cd2',
    },
    {
        id: 'dirham',
        symbol: 'dah',
        addr: '0xb9e6bdcba653b5f768dd2e2faf6288df9054e554',
    },
    {
        id: 'dirham-crypto',
        symbol: 'dhs',
        addr: '0x30365ed4ca8173013ad948b9842f34ac71d01f7c',
    },
    {
        id: 'dirty-finance',
        symbol: 'dirty',
        addr: '0x4fab740779c73aa3945a5cf6025bf1b0e7f6349c',
    },
    {
        id: 'disbalancer',
        symbol: 'ddos',
        addr: '0x7fbec0bb6a7152e77c30d005b5d49cbc08a602c3',
    },
    {
        id: 'disciplina-project-by-teachmeplease',
        symbol: 'dscp',
        addr: '0xdece0f6864c1511369ae2c30b90db9f5fe92832c',
    },
    {
        id: 'distributed-energy-coin',
        symbol: 'dec',
        addr: '0x58379bf685ea2e251ae63d3ee26269c7c3848a17',
    },
    {
        id: 'district0x',
        symbol: 'dnt',
        addr: '0x0abdace70d3790235af448c88547603b945604ea',
    },
    {
        id: 'distx',
        symbol: 'distx',
        addr: '0x4b4701f3f827e1331fb22ff8e2beac24b17eb055',
    },
    {
        id: 'divert-finance',
        symbol: 'deve',
        addr: '0xfdb615d6a15f929ddabc6b83a4f1cf9d361b064e',
    },
    {
        id: 'divo-token',
        symbol: 'divo',
        addr: '0xff1beda5ca92a83d05323e338d0534410858b6a2',
    },
    {
        id: 'dixt-finance',
        symbol: 'dixt',
        addr: '0x43e6228b5bf22eab754486082ca91fdd8585521a',
    },
    {
        id: 'dkargo',
        symbol: 'dka',
        addr: '0x5dc60c4d5e75d22588fa17ffeb90a63e535efce0',
    },
    {
        id: 'dlp-duck-token',
        symbol: 'duck',
        addr: '0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f',
    },
    {
        id: 'dmarket',
        symbol: 'dmt',
        addr: '0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1',
    },
    {
        id: 'dmme-app',
        symbol: 'dmme',
        addr: '0x9556f8ee795d991ff371f547162d5efb2769425f',
    },
    {
        id: 'dmm-governance',
        symbol: 'dmg',
        addr: '0xed91879919b71bb6905f23af0a68d231ecf87b14',
    },
    {
        id: 'dmst',
        symbol: 'dmst',
        addr: '0xf29992d7b589a0a6bd2de7be29a97a6eb73eaf85',
    },
    {
        id: 'dmtc-token',
        symbol: 'dmtc',
        addr: '0x3be6e7bf2cd8e1a0a95597e72ca6d3709bbeff76',
    },
    {
        id: 'dobermann',
        symbol: 'dobe',
        addr: '0xe7ab45162f5979f09b0bda1cc7dfc97c270ea3d5',
    },
    {
        id: 'dobuy',
        symbol: 'dby',
        addr: '0x7c82a76db0166b0e153a66b1a4c331970b2b0ee2',
    },
    {
        id: 'doch-coin',
        symbol: 'dch',
        addr: '0x4a73e60adbb8575500ffc6aaea6128954011c8af',
    },
    {
        id: 'dock',
        symbol: 'dock',
        addr: '0xe5dada80aa6477e85d09747f2842f7993d0df71c',
    },
    {
        id: 'dodo',
        symbol: 'dodo',
        addr: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
    },
    {
        id: 'dodreamchain',
        symbol: 'drm',
        addr: '0x89551b940e2a8ed8eccf509935bac9213fe30584',
    },
    {
        id: 'dogdeficoin',
        symbol: 'dogdefi',
        addr: '0x80bb277f4355a43cdbb86a82f9876c946476d9eb',
    },
    {
        id: 'dogefi',
        symbol: 'dogefi',
        addr: '0x9b9087756eca997c5d595c840263001c9a26646d',
    },
    {
        id: 'dogelon-mars',
        symbol: 'elon',
        addr: '0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
    },
    {
        id: 'dogen-finance',
        symbol: 'dogen',
        addr: '0x17eb50fdd2995696ee82912a80a9766fcbb0ecca',
    },
    {
        id: 'doge-of-woof-street',
        symbol: 'wsdoge',
        addr: '0xcbdf1deb934e945a70b7289bb98e97013777f820',
    },
    {
        id: 'dogeswap',
        symbol: 'doges',
        addr: '0xb4fbed161bebcb37afb1cb4a6f7ca18b977ccb25',
    },
    {
        id: 'dogeyield',
        symbol: 'dogy',
        addr: '0x9c405acf8688afb61b3197421cdeec1a266c6839',
    },
    {
        id: 'dogg-token',
        symbol: 'dogg',
        addr: '0x559efe1d7a54fb1c7f25a036952f8498cdf02edb',
    },
    {
        id: 'dogira',
        symbol: 'dogira',
        addr: '0x4b86e0295e7d32433ffa6411b82b4f4e56a581e1',
    },
    {
        id: 'dogz',
        symbol: 'dogz',
        addr: '0x82a77710495a35549d2add797412b4a4497d33ef',
    },
    {
        id: 'doki-doki-chainbinders',
        symbol: 'bnd',
        addr: '0x84cd68c3e470ecee4b8b6212efcb8c6bcb38da1d',
    },
    {
        id: 'doki-doki-finance',
        symbol: 'doki',
        addr: '0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544',
    },
    {
        id: 'dola-usd',
        symbol: 'dola',
        addr: '0x865377367054516e17014ccded1e7d814edc9ce4',
    },
    {
        id: 'dollars',
        symbol: 'usdx',
        addr: '0x2f6081e3552b1c86ce4479b80062a1dda8ef23e3',
    },
    {
        id: 'dolphin-token-2',
        symbol: 'dse',
        addr: '0x136bced3af8530b81e4c7ff45c9228376726d173',
    },
    {
        id: 'domraider',
        symbol: 'drt',
        addr: '0x9af4f26941677c706cfecf6d3379ff01bb85d5ab',
    },
    {
        id: 'donkey',
        symbol: 'donk',
        addr: '0xe4f6d46c244bb7cf3e218cdfb5c35cf9a4d9c920',
    },
    {
        id: 'don-key',
        symbol: 'don',
        addr: '0x217ddead61a42369a266f1fb754eb5d3ebadc88a',
    },
    {
        id: 'donut',
        symbol: 'donut',
        addr: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
    },
    {
        id: 'dora-factory',
        symbol: 'dora',
        addr: '0xbc4171f45ef0ef66e76f979df021a34b46dcc81d',
    },
    {
        id: 'dos-network',
        symbol: 'dos',
        addr: '0x0a913bead80f321e7ac35285ee10d9d922659cb7',
    },
    {
        id: 'dotify',
        symbol: 'dfy',
        addr: '0x7ccc863ece2e15bc45ac0565d410da7a3340ad98',
    },
    {
        id: 'dotmoovs',
        symbol: 'moov',
        addr: '0x24ec2ca132abf8f6f8a6e24a1b97943e31f256a7',
    },
    {
        id: 'double-ace',
        symbol: 'daa',
        addr: '0x9f4f1c679fc8479cd71482a8d8c88dc60c1403f9',
    },
    {
        id: 'dovu',
        symbol: 'dov',
        addr: '0xac3211a5025414af2866ff09c23fc18bc97e79b1',
    },
    {
        id: 'dowcoin',
        symbol: 'dow',
        addr: '0x76974c7b79dc8a6a109fd71fd7ceb9e40eff5382',
    },
    {
        id: 'dprating',
        symbol: 'rating',
        addr: '0xe8663a64a96169ff4d95b4299e7ae9a76b905b31',
    },
    {
        id: 'dracula-token',
        symbol: 'drc',
        addr: '0xb78b3320493a4efaa1028130c5ba26f0b6085ef8',
    },
    {
        id: 'dragonbit',
        symbol: 'drgb',
        addr: '0x9d3e0892d11f19f5181d4a4c5d04187a9e0d7032',
    },
    {
        id: 'dragonchain',
        symbol: 'drgn',
        addr: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
    },
    {
        id: 'dragon-coin',
        symbol: 'drg',
        addr: '0x814f67fa286f7572b041d041b1d99b432c9155ee',
    },
    {
        id: 'dragonereum-gold',
        symbol: 'gold',
        addr: '0x150b0b96933b75ce27af8b92441f8fb683bf9739',
    },
    {
        id: 'dragonfly-protocol',
        symbol: 'dfly',
        addr: '0x70a6d0d1561ba98711e935a76b1c167c612978a2',
    },
    {
        id: 'dragon-network',
        symbol: 'dgnn',
        addr: '0xee87b220d9b0e762f0643c501fadefd6d9cc5b7e',
    },
    {
        id: 'dragonvein',
        symbol: 'dvc',
        addr: '0x5e6ffe7b174a50c81ff3f3c54c04fd3c11e20830',
    },
    {
        id: 'drakoin',
        symbol: 'drk',
        addr: '0x2369686fc9fb6e1fdc46541891568c2f341906ef',
    },
    {
        id: 'dray',
        symbol: 'dray',
        addr: '0x86642d169db9f57a02c65052049cbbbfb3e3b08c',
    },
    {
        id: 'drc-mobility',
        symbol: 'drc',
        addr: '0xd7f5cabdf696d7d1bf384d7688926a4bdb092c67',
    },
    {
        id: 'dream21',
        symbol: 'dmc',
        addr: '0x6673b317c45f490cd8342120a7c02e2ace7cbdd9',
    },
    {
        id: 'dream-swap',
        symbol: 'dream',
        addr: '0xa93d5cfaa41193b13321c035b4bdd2b534172762',
    },
    {
        id: 'dreamteam',
        symbol: 'dream',
        addr: '0x82f4ded9cec9b5750fbff5c2185aee35afc16587',
    },
    {
        id: 'drep-new',
        symbol: 'drep',
        addr: '0x3ab6ed69ef663bd986ee59205ccad8a20f98b4c2',
    },
    {
        id: 'dripper-finance',
        symbol: 'drip',
        addr: '0x239119c43e3cac84c8a2d45bcba0e46f528e5f77',
    },
    {
        id: 'drops-ownership-power',
        symbol: 'dop',
        addr: '0x6bb61215298f296c55b19ad842d3df69021da2ef',
    },
    {
        id: 'dscvr-finance',
        symbol: 'dscvr',
        addr: '0x3ee6e46f52c475c52040b934745501f2a0cea252',
    },
    {
        id: 'dsys',
        symbol: 'dsys',
        addr: '0x10a34bbe9b3c5ad536ca23d5eefa81ca448e92ff',
    },
    {
        id: 'dtube-coin',
        symbol: 'dtube',
        addr: '0xd2be3722b17b616c51ed9b8944a227d1ce579c24',
    },
    {
        id: 'ducato-protocol-token',
        symbol: 'ducato',
        addr: '0xa117ea1c0c85cef648df2b6f40e50bb5475c228d',
    },
    {
        id: 'duckdaodime',
        symbol: 'ddim',
        addr: '0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20',
    },
    {
        id: 'duet-protocol',
        symbol: 'duet',
        addr: '0xd69ae79b01c4af7f19b9a824e5643363b202b3a1',
    },
    {
        id: 'dukascoin',
        symbol: 'duk+',
        addr: '0x73f2651ea38d48b3b808ffddbd398fd600ab5ba7',
    },
    {
        id: 'duo',
        symbol: 'duo',
        addr: '0x56e0b2c7694e6e10391e870774daa45cf6583486',
    },
    {
        id: 'dusk-network',
        symbol: 'dusk',
        addr: '0x940a2db1b7008b6c776d4faaca729d6d4a4aa551',
    },
    {
        id: 'dust-token',
        symbol: 'dust',
        addr: '0xbca3c97837a39099ec3082df97e28ce91be14472',
    },
    {
        id: 'dvision-network',
        symbol: 'dvi',
        addr: '0x10633216e7e8281e33c86f02bf8e565a635d9770',
    },
    {
        id: 'dws',
        symbol: 'dws',
        addr: '0xf4b54874cd8a6c863e3a904c18fda964661ec363',
    },
    {
        id: 'dxchain',
        symbol: 'dx',
        addr: '0x973e52691176d36453868d9d86572788d27041a9',
    },
    {
        id: 'dxdao',
        symbol: 'dxd',
        addr: '0xa1d65e8fb6e87b60feccbc582f7f97804b725521',
    },
    {
        id: 'dxiot',
        symbol: 'dxiot',
        addr: '0x8b6dd24bcb2d0aea92c3abd4eb11103a5db6d714',
    },
    {
        id: 'dxsale-network',
        symbol: 'sale',
        addr: '0xf063fe1ab7a291c5d06a86e14730b00bf24cb589',
    },
    {
        id: 'dxy-finance',
        symbol: 'dxy',
        addr: '0x39fa206c1648944f92e8f7b626e1cbdf78d7e9db',
    },
    {
        id: 'dymmax',
        symbol: 'dmx',
        addr: '0xf058501585023d040ea9493134ed72c083553eed',
    },
    {
        id: 'dynamic-set-dollar',
        symbol: 'dsd',
        addr: '0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3',
    },
    {
        id: 'dynamic-supply',
        symbol: 'morc',
        addr: '0x236ecfb32c2b496f942c86d43b8ca4f6bd931e30',
    },
    {
        id: 'dynamic-supply-tracker',
        symbol: 'mort',
        addr: '0x970b596ea3cb9864397f799902f0a579cdc3377b',
    },
    {
        id: 'dynamite',
        symbol: 'dyt',
        addr: '0x740623d2c797b7d8d1ecb98e9b4afcf99ec31e14',
    },
    {
        id: 'dynamite-token',
        symbol: 'dynmt',
        addr: '0x3b7f247f21bf3a07088c2d3423f64233d4b069f7',
    },
    {
        id: 'e1337',
        symbol: '1337',
        addr: '0x35872fea6a4843facbcdbce99e3b69596a3680b8',
    },
    {
        id: 'e2p-group',
        symbol: 'e2p',
        addr: '0xa0b84460a1e78339692c7463009c35f0b9a6ae4c',
    },
    {
        id: 'eanto',
        symbol: 'ean',
        addr: '0xb4742e2013f96850a5cef850a3bb74cf63b9a5d5',
    },
    {
        id: 'earnbase',
        symbol: 'ENB',
        addr: '0xa6fb1df483b24eeab569e19447e0e107003b9e15',
    },
    {
        id: 'earn-network',
        symbol: 'earn$',
        addr: '0x31e92324ef7185c65dd4d154cfa4f6326b489c55',
    },
    {
        id: 'easticoin',
        symbol: 'esti',
        addr: '0xf3924df14812b3d3db29124aa9da4353ed5e04a3',
    },
    {
        id: 'easyfi',
        symbol: 'ez',
        addr: '0x00aba6fe5557de1a1d565658cbddddf7c710a1eb',
    },
    {
        id: 'easymine',
        symbol: 'emt',
        addr: '0x9501bfc48897dceeadf73113ef635d2ff7ee4b97',
    },
    {
        id: 'easyswap',
        symbol: 'eswa',
        addr: '0xa0471cdd5c0dc2614535fd7505b17a651a8f0dab',
    },
    {
        id: 'eauric',
        symbol: 'eauric',
        addr: '0xc36c65693ea9e207ad35d4ee2fb6c5f6f43bdec8',
    },
    {
        id: 'eautocoin',
        symbol: 'ato',
        addr: '0xb551d08d2189ef67b4788be2c35c0743693625ca',
    },
    {
        id: 'ebakus',
        symbol: 'ebk',
        addr: '0xbddab785b306bcd9fb056da189615cc8ece1d823',
    },
    {
        id: 'ebitcoin',
        symbol: 'ebtc',
        addr: '0xeb7c20027172e5d143fb030d50f91cece2d1485d',
    },
    {
        id: 'ebsp-token',
        symbol: 'ebsp',
        addr: '0x6f063c0fcda0ea6dcc01d5a7cb3066ed4f90d1a8',
    },
    {
        id: 'e-chat',
        symbol: 'echt',
        addr: '0x1a2277c83930b7a64c3e3d5544eaa8c4f946b1b7',
    },
    {
        id: 'echoin',
        symbol: 'ec',
        addr: '0x12fd19dac0fab61bed5e0f09091b470c452d4d61',
    },
    {
        id: 'echolink',
        symbol: 'eko',
        addr: '0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee',
    },
    {
        id: 'echo-token',
        symbol: 'echo',
        addr: '0x171706b7d113c68f2cc68a6ce63b1dbdcdf7b233',
    },
    {
        id: 'eclipseum',
        symbol: 'ecl',
        addr: '0x08e411220e47e3fc43bfb832186aba95108f2861',
    },
    {
        id: 'ecoball',
        symbol: 'aba',
        addr: '0x7c2af3a86b4bf47e6ee63ad9bde7b3b0ba7f95da',
    },
    {
        id: 'ecofi',
        symbol: 'eco',
        addr: '0xc242eb8e4e27eae6a2a728a41201152f19595c83',
    },
    {
        id: 'ecog9coin',
        symbol: 'egc',
        addr: '0xc0ec8caec55f37d47fbfa595727418868a21fd48',
    },
    {
        id: 'ecoreal-estate',
        symbol: 'ecoreal',
        addr: '0xb052f8a33d8bb068414eade06af6955199f9f010',
    },
    {
        id: 'ecoscu',
        symbol: 'ecu',
        addr: '0x8fc9b6354e839ab1c8b31f4afa53607092b8c2e5',
    },
    {
        id: 'eco-value-coin',
        symbol: 'evc',
        addr: '0xaa843f65872a25d6e9552ea0b360fb1d5e333124',
    },
    {
        id: 'ecpntoken',
        symbol: 'ecpn',
        addr: '0xb55732a15b3dc5d6e8d4adf40634f37470da71fa',
    },
    {
        id: 'ecp-technology',
        symbol: 'ecp',
        addr: '0x8b8a8a91d7b8ec2e6ab37ed8ffbacee062c6f3c7',
    },
    {
        id: 'eddaswap',
        symbol: 'edda',
        addr: '0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9',
    },
    {
        id: 'edenchain',
        symbol: 'edn',
        addr: '0x89020f0d5c5af4f3407eb5fe185416c457b0e93e',
    },
    {
        id: 'edgeless',
        symbol: 'edg',
        addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
    },
    {
        id: 'educare',
        symbol: 'ekt',
        addr: '0xbab165df9455aa0f2aed1f2565520b91ddadb4c8',
    },
    {
        id: 'education-ecosystem',
        symbol: 'ledu',
        addr: '0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765',
    },
    {
        id: 'educoin',
        symbol: 'edu',
        addr: '0xf263292e14d9d8ecd55b58dad1f1df825a874b7c',
    },
    {
        id: 'edumetrix-coin',
        symbol: 'emc',
        addr: '0x0a425122852ed351946a828b348bfdcda51effd8',
    },
    {
        id: 'efficient-transaction-token',
        symbol: 'ett',
        addr: '0x1212b68d8555cf0b08f3371b926b3e1148b520f1',
    },
    {
        id: 'egold',
        symbol: 'egold',
        addr: '0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e',
    },
    {
        id: 'egretia',
        symbol: 'egt',
        addr: '0x8e1b448ec7adfc7fa35fc2e885678bd323176e34',
    },
    {
        id: 'ehash',
        symbol: 'ehash',
        addr: '0x2942e3b38e33123965bfbc21e802be943a76bbc6',
    },
    {
        id: 'elamachain',
        symbol: 'elama',
        addr: '0xfb444c1f2b718ddfc385cb8fd9f2d1d776b24668',
    },
    {
        id: 'elanausd',
        symbol: 'use',
        addr: '0x147e3d644d53adadd18a28201b91e2b98aeb7f94',
    },
    {
        id: 'elastic-bitcoin',
        symbol: 'xbt',
        addr: '0x64fb96d0395f6bf105f35233911e3df2c5bf4ce8',
    },
    {
        id: 'elastic-dao',
        symbol: 'egt',
        addr: '0x2aa5ce395b00cc486159adbdd97c55b535cf2cf9',
    },
    {
        id: 'eldorado-token',
        symbol: 'erd',
        addr: '0x12dc767728105aa415dd720dfbd0ea1d85841172',
    },
    {
        id: 'electric-token',
        symbol: 'etr',
        addr: '0x71e5fb8793b5a2fb0c4918930180f8b36500cbb8',
    },
    {
        id: 'electric-vehicle-zone',
        symbol: 'evz',
        addr: '0x7a939bb714fd2a48ebeb1e495aa9aaa74ba9fa68',
    },
    {
        id: 'electrify-asia',
        symbol: 'elec',
        addr: '0xd49ff13661451313ca1553fd6954bd1d9b6e02b9',
    },
    {
        id: 'electronic-move-pay',
        symbol: 'emp',
        addr: '0x9b639486f4a40c1a7a6728114f2413973f5fa4c6',
    },
    {
        id: 'electrum-dark',
        symbol: 'eld',
        addr: '0x796e47b85a0d759f300f1de96a3583004235d4d8',
    },
    {
        id: 'elena-protocol',
        symbol: 'elena',
        addr: '0x6f0f28ceee6ae686ee0f939375674c01b156365a',
    },
    {
        id: 'elevate',
        symbol: 'ele',
        addr: '0x48be867b240d2ffaff69e0746130f2c027d8d3d2',
    },
    {
        id: 'elevation-token',
        symbol: 'evt',
        addr: '0x5aaa2182459377b6ca18b10712f9f602140764af',
    },
    {
        id: 'elis',
        symbol: 'xls',
        addr: '0x6c862f803ff42a97d4a483ab761256ad8c90f4f8',
    },
    {
        id: 'elite-swap',
        symbol: 'elt',
        addr: '0x380291a9a8593b39f123cf39cc1cc47463330b1f',
    },
    {
        id: 'elitium',
        symbol: 'eum',
        addr: '0x6ab4a7d75b0a42b6bc83e852dab9e121f9c610aa',
    },
    {
        id: 'elon-diamond-hands',
        symbol: 'edh',
        addr: '0x3b046fde911d3b6f9caa4759dbcfb034a87648ba',
    },
    {
        id: 'elongate-duluxe',
        symbol: 'elongd',
        addr: '0x348b7f3106b5da47405332534d06069ff9ce4d1b',
    },
    {
        id: 'eltcoin',
        symbol: 'eltcoin',
        addr: '0x44197a4c44d6a059297caf6be4f7e172bd56caaf',
    },
    {
        id: 'elynet-token',
        symbol: 'elyx',
        addr: '0x881a7e25d44591c467a37da96adf3c3705e7251b',
    },
    {
        id: 'elysia',
        symbol: 'el',
        addr: '0x2781246fe707bb15cee3e5ea354e2154a2877b16',
    },
    {
        id: 'elysian',
        symbol: 'ely',
        addr: '0xa95592dcffa3c080b4b40e459c5f5692f67db7f8',
    },
    {
        id: 'eminer',
        symbol: 'em',
        addr: '0x35b08722aa26be119c1608029ccbc976ac5c1082',
    },
    {
        id: 'emirex-token',
        symbol: 'emrx',
        addr: '0xbdbc2a5b32f3a5141acd18c39883066e4dab9774',
    },
    {
        id: 'emojis-farm',
        symbol: 'emoji',
        addr: '0xcbd380c2d84deafed09f79863705353505764f26',
    },
    {
        id: 'e-money',
        symbol: 'ngm',
        addr: '0xed0d5747a9ab03a75fbfec3228cd55848245b75d',
    },
    {
        id: 'employment-coin',
        symbol: 'ec2',
        addr: '0x3ff426ca07a9f589a80f18cccc759e84cf06f0eb',
    },
    {
        id: 'empty-set-dollar',
        symbol: 'esd',
        addr: '0x36f3fd68e7325a35eb768f1aedaae9ea0689d723',
    },
    {
        id: 'empty-set-gold',
        symbol: 'esg',
        addr: '0x5cf9242493be1411b93d064ca2e468961bbb5924',
    },
    {
        id: 'enceladus-network',
        symbol: 'encx',
        addr: '0x20211ab9388781532fece6c57347a0004a420f16',
    },
    {
        id: 'encrypgen',
        symbol: 'dna',
        addr: '0xef6344de1fcfc5f48c30234c16c1389e8cdc572c',
    },
    {
        id: 'endor',
        symbol: 'edr',
        addr: '0xc528c28fec0a90c083328bc45f587ee215760a0f',
    },
    {
        id: 'energo',
        symbol: 'tsl',
        addr: '0x03806ce5ef69bd9780edfb04c29da1f23db96294',
    },
    {
        id: 'energoncoin',
        symbol: 'tfg1',
        addr: '0x666a64f5567c3145fba7ca9ef73648cd4fa2008f',
    },
    {
        id: 'energy-ledger',
        symbol: 'elx',
        addr: '0x9048c33c7bae0bbe9ad702b17b4453a83900d154',
    },
    {
        id: 'enex',
        symbol: 'enx',
        addr: '0xd0d7a9f2021958e51d60d6966b7bbed9d1cb22b5',
    },
    {
        id: 'engine',
        symbol: 'egcc',
        addr: '0xaf8a215e81faea7c180ce22b72483525121813bd',
    },
    {
        id: 'enigma',
        symbol: 'eng',
        addr: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    },
    {
        id: 'enjincoin',
        symbol: 'enj',
        addr: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    },
    {
        id: 'enkronos',
        symbol: 'enk',
        addr: '0x92b914f1ddcbb1d117a718e83c9ed7eb32fc44d1',
    },
    {
        id: 'enreachdao',
        symbol: 'nrch',
        addr: '0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51',
    },
    {
        id: 'en-tan-mo',
        symbol: 'etm',
        addr: '0x6020da0f7c1857dbe4431ec92a15cc318d933eaa',
    },
    {
        id: 'entercoin',
        symbol: 'entrc',
        addr: '0xd9d01d4cb824219a8f482a0fad479cb971fd0628',
    },
    {
        id: 'entherfound',
        symbol: 'etf',
        addr: '0xc2b58812c24020ea924c3d7c241c441605f12e75',
    },
    {
        id: 'entone',
        symbol: 'entone',
        addr: '0xec1a718d1a6f8f8d94ecec6fe91465697bb2b88c',
    },
    {
        id: 'enumivo',
        symbol: 'enu',
        addr: '0x275b69aa7c8c1d648a0557656bce1c286e69a29d',
    },
    {
        id: 'envion',
        symbol: 'evn',
        addr: '0xd780ae2bf04cd96e577d3d014762f831d97129d0',
    },
    {
        id: 'eosdac',
        symbol: 'eosdac',
        addr: '0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba',
    },
    {
        id: 'eos-trust',
        symbol: 'eost',
        addr: '0x87210f1d3422ba75b6c40c63c78d79324dabcd55',
    },
    {
        id: 'epacoin',
        symbol: 'epc',
        addr: '0xd0c4ad14f872bcdf7c3cc2bae99279ab5cdead30',
    },
    {
        id: 'epanus',
        symbol: 'eps',
        addr: '0x50ec35d1e18d439f02fa895746fc3e1bef311780',
    },
    {
        id: 'epic',
        symbol: 'epic',
        addr: '0xbcd9e216200369803ed059b7744f6fb4cf3887c7',
    },
    {
        id: 'epik-protocol',
        symbol: 'epk',
        addr: '0xdaf88906ac1de12ba2b1d2f7bfc94e9638ac40c4',
    },
    {
        id: 'epluscoin',
        symbol: 'eplus',
        addr: '0x02e3083a51e8632e571fbd6a62ac396c10c653ba',
    },
    {
        id: 'equalizer',
        symbol: 'eqz',
        addr: '0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0',
    },
    {
        id: 'equos-origin',
        symbol: 'eqo',
        addr: '0x46e9fe43470fafd690100c86037f9e566e24d480',
    },
    {
        id: 'equus-mining-token',
        symbol: 'eqmt',
        addr: '0xa462d0e6bb788c7807b1b1c96992ce1f7069e195',
    },
    {
        id: 'e-radix',
        symbol: 'exrd',
        addr: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414',
    },
    {
        id: 'era-swap-token',
        symbol: 'es',
        addr: '0x72108a8cc3254813c6be2f1b77be53e185abfdd9',
    },
    {
        id: 'erc20',
        symbol: 'erc20',
        addr: '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
    },
    {
        id: 'erc223',
        symbol: 'erc223',
        addr: '0xf8f237d074f637d777bcd2a4712bde793f94272b',
    },
    {
        id: 'ercaux',
        symbol: 'raux',
        addr: '0x68496ee825dafe1cf66d4083f776b9eaab31e447',
    },
    {
        id: 'eristica',
        symbol: 'ert',
        addr: '0x92a5b04d0ed5d94d7a193d1d334d3d16996f4e13',
    },
    {
        id: 'erotica-2',
        symbol: 'erotica',
        addr: '0xc1fa06e8596c3fa98ccd2113c38b6b60b6efa00d',
    },
    {
        id: 'escobar',
        symbol: 'qusd',
        addr: '0xd6875274b000462f59e9327cbde2cef637914569',
    },
    {
        id: 'escoin-token',
        symbol: 'elg',
        addr: '0xa2085073878152ac3090ea13d1e41bd69e60dc99',
    },
    {
        id: 'escroco',
        symbol: 'esce',
        addr: '0x49614661737efbfc6a102efaeefdc8e197f7cc0e',
    },
    {
        id: 'escx-token',
        symbol: 'escx',
        addr: '0xa8ebb13b9895e52ab7d815ce7f63591402581624',
    },
    {
        id: 'esports',
        symbol: 'ert',
        addr: '0xe29c5b523590165795bbd7d52369c2895b18841f',
    },
    {
        id: 'esportspro',
        symbol: 'espro',
        addr: '0x7495d89d347ae9ddc95942938b58e933ab3bf7d1',
    },
    {
        id: 'essek-tov',
        symbol: 'eto',
        addr: '0x4526dc4ac8f692535ed9bf235a3a20a2b9ff3328',
    },
    {
        id: 'essentia',
        symbol: 'ess',
        addr: '0xfc05987bd2be489accf0f509e44b0145d68240f7',
    },
    {
        id: 'eterbase',
        symbol: 'xbase',
        addr: '0x5bdc00b6676579b301b276198db1ea9affb94329',
    },
    {
        id: 'etg-finance',
        symbol: 'etgf',
        addr: '0x74603e780545d02c4257e7d2be19c74de7be1952',
    },
    {
        id: 'eth-12-day-ema-crossover-set',
        symbol: 'eth12emaco',
        addr: '0x2c5a9980b41861d91d30d0e0271d1c093452dca5',
    },
    {
        id: 'eth_20_day_ma_crossover_set',
        symbol: 'eth20smaco',
        addr: '0x9ea463ec4ce9e9e5bc9cfd0187c4ac3a70dd951d',
    },
    {
        id: 'eth-20-day-ma-crossover-yield-set',
        symbol: 'ethmacoapy',
        addr: '0xef0fda1d4bd73ddc2f93a4e46e2e5adbc2d668f4',
    },
    {
        id: 'eth-20-ma-crossover-yield-set-ii',
        symbol: 'eth20macoapy',
        addr: '0xb647a1d7633c6c4d434e22ee9756b36f2b219525',
    },
    {
        id: 'eth-26-day-ema-crossover-set',
        symbol: 'eth26emaco',
        addr: '0x614857c755739354d68ae0abd53849cf45d6a41d',
    },
    {
        id: 'eth-26-ema-crossover-yield-set',
        symbol: 'ethemaapy',
        addr: '0x316b13b951efe25aad1cb565385b23869a7d4c48',
    },
    {
        id: 'eth-26-ma-crossover-yield-ii',
        symbol: 'ethemaapy',
        addr: '0x54e8371c1ec43e58fb53d4ef4ed463c17ba8a6be',
    },
    {
        id: 'eth-2x-flexible-leverage-index',
        symbol: 'ETH2x-FLI',
        addr: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd',
    },
    {
        id: 'eth-50-day-ma-crossover-set',
        symbol: 'eth50smaco',
        addr: '0xa360f2af3f957906468c0fd7526391aed08ae3db',
    },
    {
        id: 'etha-lend',
        symbol: 'etha',
        addr: '0x59e9261255644c411afdd00bd89162d09d862e38',
    },
    {
        id: 'ethanol',
        symbol: 'enol',
        addr: '0x63d0eea1d7c0d1e89d7e665708d7e8997c0a9ed6',
    },
    {
        id: 'ethart',
        symbol: 'arte',
        addr: '0x34612903db071e888a4dadcaa416d3ee263a87b9',
    },
    {
        id: 'ethbnt',
        symbol: 'ethbnt',
        addr: '0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533',
    },
    {
        id: 'ethbox-token',
        symbol: 'ebox',
        addr: '0x33840024177a7daca3468912363bed8b425015c5',
    },
    {
        id: 'eth-btc-75-25-weight-set',
        symbol: 'ethbtc7525',
        addr: '0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad',
    },
    {
        id: 'eth-btc-ema-ratio-trading-set',
        symbol: 'ethbtcemaco',
        addr: '0xb9ffe0b8ee2d1af94202ffed366520300748a4d8',
    },
    {
        id: 'eth-btc-long-only-alpha-portfolio',
        symbol: 'ebloap',
        addr: '0x253444bd9ecf11e5516d6d00974e91c9f0857ccb',
    },
    {
        id: 'eth-btc-rsi-ratio-trading-set',
        symbol: 'ethbtcrsi',
        addr: '0xbf70a33a13fbe8d0106df321da0cf654d2e9ab50',
    },
    {
        id: 'etheal',
        symbol: 'heal',
        addr: '0xf6fd82dedbbe0ffadb5e1ecc2a283ab52b9ed2b0',
    },
    {
        id: 'ether-1',
        symbol: 'ETHO',
        addr: '0x99676c9fa4c77848aeb2383fcfbd7e980dc25027',
    },
    {
        id: 'etherbone',
        symbol: 'ethbn',
        addr: '0x96b52b5bf8d902252d0714a1bd2651a785fd2660',
    },
    {
        id: 'etheremontoken',
        symbol: 'emont',
        addr: '0x95daaab98046846bf4b2853e23cba236fa394a31',
    },
    {
        id: 'ethereum-apex',
        symbol: 'eapex',
        addr: '0x1caa202df9240d7b464d9486a6f1542768ef0d30',
    },
    {
        id: 'ethereum-cash',
        symbol: 'ecash',
        addr: '0x5d21ef5f25a985380b65c8e943a0082feda0db84',
    },
    {
        id: 'ethereum-erush',
        symbol: 'eer',
        addr: '0x3cc5eb07e0e1227613f1df58f38b549823d11cb9',
    },
    {
        id: 'ethereum-gold',
        symbol: 'etg',
        addr: '0x28c8d01ff633ea9cd8fc6a451d7457889e698de6',
    },
    {
        id: 'ethereum-gold-project',
        symbol: 'etgp',
        addr: '0xa96f31f1c187c28980176c3a27ba7069f48abde4',
    },
    {
        id: 'ethereum-lite',
        symbol: 'elite',
        addr: '0x0a76aad21948ea1ef447d26dee91a54370e151e0',
    },
    {
        id: 'ethereummax',
        symbol: 'emax',
        addr: '0x15874d65e649880c2614e7a480cb7c9a55787ff6',
    },
    {
        id: 'ethereum-message-search',
        symbol: 'ems',
        addr: '0x17e6616c45d267bc20a9892b58a01621c592b72d',
    },
    {
        id: 'ethereum-meta',
        symbol: 'ethm',
        addr: '0xfd957f21bd95e723645c07c48a2d8acb8ffb3794',
    },
    {
        id: 'ethereum-money',
        symbol: 'ethmny',
        addr: '0xbf4a2ddaa16148a9d0fa2093ffac450adb7cd4aa',
    },
    {
        id: 'ethereumpay',
        symbol: 'epay',
        addr: '0x2b5ca2f9510cf1e3595ff219f24d75d4244585ea',
    },
    {
        id: 'ethereum-pro',
        symbol: 'epro',
        addr: '0xba630d3ba20502ba07975b15c719beecc8e4ebb0',
    },
    {
        id: 'ethereum-push-notification-service',
        symbol: 'push',
        addr: '0xf418588522d5dd018b425e472991e52ebbeeeeee',
    },
    {
        id: 'ethereumsc',
        symbol: 'ethsc',
        addr: '0xcfd069247bd5f01a17f1ca76424c9e424256908d',
    },
    {
        id: 'ethereum-stake',
        symbol: 'ethys',
        addr: '0xd0d3ebcad6a20ce69bc3bc0e1ec964075425e533',
    },
    {
        id: 'ethereum-supreme',
        symbol: 'esupreme',
        addr: '0x1ebe1e64dd249c6fdb600d05a927a7d26a4a895f',
    },
    {
        id: 'ethereum-vault',
        symbol: 'ethv',
        addr: '0x058349297672b6cc7ccb6e59a679c5add74a6898',
    },
    {
        id: 'ethereum-yield',
        symbol: 'ethy',
        addr: '0xd1afbccc9a2c2187ea544363b986ea0ab6ef08b5',
    },
    {
        id: 'etherisc',
        symbol: 'dip',
        addr: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
    },
    {
        id: 'ether-kingdoms-token',
        symbol: 'imp',
        addr: '0x48ff53777f747cfb694101222a944de070c15d36',
    },
    {
        id: 'etherland',
        symbol: 'eland',
        addr: '0x33e07f5055173cf8febede8b21b12d1e2b523205',
    },
    {
        id: 'ether-legends',
        symbol: 'elet',
        addr: '0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43',
    },
    {
        id: 'ethermon',
        symbol: 'emon',
        addr: '0xd6a5ab46ead26f49b03bbb1f9eb1ad5c1767974a',
    },
    {
        id: 'ethernity-chain',
        symbol: 'ern',
        addr: '0xbbc2ae13b23d715c30720f079fcd9b4a74093505',
    },
    {
        id: 'etheroll',
        symbol: 'dice',
        addr: '0x2e071d2966aa7d8decb1005885ba1977d6038a65',
    },
    {
        id: 'etherparty',
        symbol: 'fuel',
        addr: '0xea38eaa3c86c8f9b751533ba2e562deb9acded40',
    },
    {
        id: 'etherpay',
        symbol: 'ethpy',
        addr: '0x601938988f0fdd937373ea185c33751462b1d194',
    },
    {
        id: 'ethersocks',
        symbol: 'sox',
        addr: '0x300a902513815028e97fc79e92082ce6a98d3b74',
    },
    {
        id: 'ethersportz',
        symbol: 'esz',
        addr: '0xe8a1df958be379045e2b46a31a98b93a2ecdfded',
    },
    {
        id: 'ethichub',
        symbol: 'ethix',
        addr: '0xfd09911130e6930bf87f2b0554c44f400bd80d3e',
    },
    {
        id: 'ethlend',
        symbol: 'lend',
        addr: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    {
        id: 'eth-limited',
        symbol: 'eld',
        addr: '0xf0c6521b1f8ad9c33a99aaf056f6c6247a3862ba',
    },
    {
        id: 'eth-link-price-action-candlestick-set',
        symbol: 'linkethpa',
        addr: '0x542156d51d10db5accb99f9db7e7c91b74e80a2c',
    },
    {
        id: 'eth-long-only-alpha-portfolio',
        symbol: 'eloap',
        addr: '0xc19216eea17b2f4dd677f1024cda59c7d142f189',
    },
    {
        id: 'eth-momentum-trigger-set',
        symbol: 'ethmo',
        addr: '0x98a25ba4c3793b9029652cbc1a8875cbe223df13',
    },
    {
        id: 'eth-moonshot-x-set',
        symbol: 'ethmoonx',
        addr: '0x73104e9d3da91e410a6c211068f7bffabbbd3e26',
    },
    {
        id: 'eth-moonshot-x-yield-set',
        symbol: 'ethmoonx',
        addr: '0xb1ca7e6714263a64659a3a89e1c313af30fd660a',
    },
    {
        id: 'ethopt',
        symbol: 'opt',
        addr: '0x7d25d9f10cd224ecce0bc824a2ec800db81c01d7',
    },
    {
        id: 'ethorse',
        symbol: 'horse',
        addr: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b',
    },
    {
        id: 'ethos',
        symbol: 'vgx',
        addr: '0x5af2be193a6abca9c8817001f45744777db30756',
    },
    {
        id: 'ethplode',
        symbol: 'ethplo',
        addr: '0xe0c6ce3e73029f201e5c0bedb97f67572a93711c',
    },
    {
        id: 'ethplus',
        symbol: 'ethp',
        addr: '0xeed736b2b809550d89a941c2005de93588c628e2',
    },
    {
        id: 'eth-price-action-candlestick-set',
        symbol: 'ethpa',
        addr: '0x09e4bdfb273245063ef5e800d891eff7d04f9b83',
    },
    {
        id: 'eth-rsi-60-40-crossover-set',
        symbol: 'ethrsi6040',
        addr: '0x93e01899c10532d76c0e864537a1d26433dbbddb',
    },
    {
        id: 'eth-rsi-60-40-yield-set',
        symbol: 'ethrsiapy',
        addr: '0x136fae4333ea36a24bb751e2d505d6ca4fd9f00b',
    },
    {
        id: 'eth-rsi-60-40-yield-set-ii',
        symbol: 'ethrsiapy',
        addr: '0x9f49ed43c90a540d1cf12f6170ace8d0b88a14e6',
    },
    {
        id: 'eth-trending-alpha-st-set-ii',
        symbol: 'etas',
        addr: '0x856c4388c56c2a613c60507a4701af627157fed6',
    },
    {
        id: 'ethusd-adl-4h-set',
        symbol: 'ethusdadl4',
        addr: '0xb8243b4eeca27a4191e879760b88fe2270561796',
    },
    {
        id: 'ethverse',
        symbol: 'ethv',
        addr: '0xeeeeeeeee2af8d0e1940679860398308e0ef24d6',
    },
    {
        id: 'etor',
        symbol: 'etor',
        addr: '0x32163c2d2d313c73279e87398e7f84bb9f537e9d',
    },
    {
        id: 'etoro-euro',
        symbol: 'eurx',
        addr: '0x05ac103f68e05da35e78f6165b9082432fe64b58',
    },
    {
        id: 'etoro-pound-sterling',
        symbol: 'gbpx',
        addr: '0xf85ef57fcdb36d628d063fa663e61e44d35ae661',
    },
    {
        id: 'etrade',
        symbol: 'ett',
        addr: '0x952b65d976e8669c4ce92a17cce5b2586912adb5',
    },
    {
        id: 'eub-chain',
        symbol: 'eubc',
        addr: '0xc37e8a31ba2d110c12f09f0239954a68b00bc599',
    },
    {
        id: 'eunomia',
        symbol: 'ents',
        addr: '0x0f612a09ead55bb81b6534e80ed5a21bf0a27b16',
    },
    {
        id: 'eup-chain',
        symbol: 'eup',
        addr: '0xe532a2a37b0707b4306b21b412d2e8c22f9824ec',
    },
    {
        id: 'eurbase',
        symbol: 'ebase',
        addr: '0xa689dcea8f7ad59fb213be4bc624ba5500458dc6',
    },
    {
        id: 'eurocoinpay',
        symbol: 'ecte',
        addr: '0xe9fa21e671bcfb04e6868784b89c19d5aa2424ea',
    },
    {
        id: 'eurxb',
        symbol: 'eurxb',
        addr: '0x0bead9a1bcc1b84d06e3f2df67e3549fd55ab054',
    },
    {
        id: 'evacash',
        symbol: 'evc',
        addr: '0xba14b245d449965bdbeb630ebe135b569474f5b1',
    },
    {
        id: 'eva-coin',
        symbol: 'eva',
        addr: '0x70126bd012e39038792366c9115bb64407d5cbe1',
    },
    {
        id: 'evai',
        symbol: 'evai',
        addr: '0x50f09629d0afdf40398a3f317cc676ca9132055c',
    },
    {
        id: 'evan',
        symbol: 'evan',
        addr: '0x89e3ac6dd69c15e9223be7649025d6f68dab1d6a',
    },
    {
        id: 'evedo',
        symbol: 'eved',
        addr: '0x5aaefe84e0fb3dd1f0fcff6fa7468124986b91bd',
    },
    {
        id: 'evencoin',
        symbol: 'evn',
        addr: '0x68909e586eeac8f47315e84b4c9788dd54ef65bb',
    },
    {
        id: 'eventchain',
        symbol: 'evc',
        addr: '0xb62d18dea74045e822352ce4b3ee77319dc5ff2f',
    },
    {
        id: 'everex',
        symbol: 'evx',
        addr: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8',
    },
    {
        id: 'everid',
        symbol: 'id',
        addr: '0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83',
    },
    {
        id: 'everipedia',
        symbol: 'iq',
        addr: '0x579cea1889991f68acc35ff5c3dd0621ff29b0c9',
    },
    {
        id: 'everus',
        symbol: 'evr',
        addr: '0x3137619705b5fc22a3048989f983905e456b59ab',
    },
    {
        id: 'everycoin',
        symbol: 'evy',
        addr: '0xeed3ae7b0f8b5b9bb8c035a9941382b1822671cd',
    },
    {
        id: 'everyonescrypto',
        symbol: 'eoc',
        addr: '0xa8006e3ac1bd94e54e3136b8e5dd75db0163e6f4',
    },
    {
        id: 'every-original',
        symbol: 'eveo',
        addr: '0x6b40d317bc1de4b0938519ac707ae36464f49171',
    },
    {
        id: 'evimeria',
        symbol: 'evi',
        addr: '0x920db6c38cf5a2a12554e812d4b3ac2daa8eba4d',
    },
    {
        id: 'evny-token',
        symbol: 'evny',
        addr: '0x9a24b8e8a6d4563c575a707b1275381119298e60',
    },
    {
        id: 'evolution-finance',
        symbol: 'evn',
        addr: '0x9af15d7b8776fa296019979e70a5be53c714a7ec',
    },
    {
        id: 'excavo-finance',
        symbol: 'cavo',
        addr: '0x24ea9c1cfd77a8db3fb707f967309cf013cc1078',
    },
    {
        id: 'exchangen',
        symbol: 'exn',
        addr: '0x0766e79a6fd74469733e8330b3b461c0320ff059',
    },
    {
        id: 'exchange-payment-coin',
        symbol: 'exp',
        addr: '0x5330a5805b9db68ebcf5247bbc9097163c1c2442',
    },
    {
        id: 'exchange-union',
        symbol: 'xuc',
        addr: '0xc324a2f6b05880503444451b8b27e6f9e63287cb',
    },
    {
        id: 'exciting-japan-coin',
        symbol: 'xjp',
        addr: '0x604026696fdb3c6720ae3049c46d59ac604dea0a',
    },
    {
        id: 'exeedme',
        symbol: 'xed',
        addr: '0xee573a945b01b788b9287ce062a0cfc15be9fd86',
    },
    {
        id: 'exgold',
        symbol: 'exg',
        addr: '0x2a1174d1cd4348cb1eaec3f00310908ca289e5be',
    },
    {
        id: 'exmo-coin',
        symbol: 'exm',
        addr: '0x83869de76b9ad8125e22b857f519f001588c0f62',
    },
    {
        id: 'exmr-monero',
        symbol: 'exmr',
        addr: '0x331fa6c97c64e47475164b9fc8143b533c5ef529',
    },
    {
        id: 'exnce',
        symbol: 'xnc',
        addr: '0x8317b216d7c3f9a5b8401e4b6814d13a7be390ec',
    },
    {
        id: 'exnetwork-token',
        symbol: 'exnt',
        addr: '0xd6c67b93a7b248df608a653d82a100556144c5da',
    },
    {
        id: 'experty',
        symbol: 'exy',
        addr: '0x5c743a35e903f6c584514ec617acee0611cf44f3',
    },
    {
        id: 'experty-wisdom-token',
        symbol: 'wis',
        addr: '0xdecade1c6bf2cd9fb89afad73e4a519c867adcf5',
    },
    {
        id: 'exrnchain',
        symbol: 'exrn',
        addr: '0xe469c4473af82217b30cf17b10bcdb6c8c796e75',
    },
    {
        id: 'exrt-network',
        symbol: 'exrt',
        addr: '0xb20043f149817bff5322f1b928e89abfc65a9925',
    },
    {
        id: 'extradna',
        symbol: 'xdna',
        addr: '0x8e57c27761ebbd381b0f9d09bb92ceb51a358abb',
    },
    {
        id: 'eyes-protocol',
        symbol: 'eyes',
        addr: '0x2dca19e944453e46d9130950ca135461b3bc0c30',
    },
    {
        id: 'ezoow',
        symbol: 'ezw',
        addr: '0x78a2a1029e3168b49d3a276c787050ff5106dcf2',
    },
    {
        id: 'ezystayz',
        symbol: 'ezy',
        addr: '0xa6d5c720a9af5a405dfb6b9f44fc44fab5d4a58d',
    },
    {
        id: 'face',
        symbol: 'face',
        addr: '0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672',
    },
    {
        id: 'facts',
        symbol: 'bkc',
        addr: '0x34bdf48a8f753de4822a6cfb1fee275f9b4d662e',
    },
    {
        id: 'fairgame',
        symbol: 'fair',
        addr: '0x9b20dabcec77f6289113e61893f7beefaeb1990a',
    },
    {
        id: 'fairum',
        symbol: 'fai',
        addr: '0xcda2f16c6aa895d533506b426aff827b709c87f5',
    },
    {
        id: 'faithcoin',
        symbol: 'faith',
        addr: '0xe531642e9bb5d027e9c20e03284287b97919a9a5',
    },
    {
        id: 'falcon-token',
        symbol: 'fnt',
        addr: '0xdc5864ede28bd4405aa04d93e05a0531797d9d59',
    },
    {
        id: 'famous-coin',
        symbol: 'famous',
        addr: '0x4838903d6319e483ab82ae3f09a1ec36489a4193',
    },
    {
        id: 'fanbi-token',
        symbol: 'fbt',
        addr: '0x7a9716685f852ee268feb86dffa562d214cc13db',
    },
    {
        id: 'fanstime',
        symbol: 'fti',
        addr: '0x943ed852dadb5c3938ecdc6883718df8142de4c8',
    },
    {
        id: 'fantom',
        symbol: 'ftm',
        addr: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    },
    {
        id: 'fanzy',
        symbol: 'fx1',
        addr: '0xed0e2041bfb5a426e5ed426a73765624e08bbb75',
    },
    {
        id: 'farm-defi',
        symbol: 'pfarm',
        addr: '0x6a8c66cab4f766e5e30b4e9445582094303cc322',
    },
    {
        id: 'farming-bad',
        symbol: 'meth',
        addr: '0x11003e410ca3fcd220765b3d2f343433a0b2bffd',
    },
    {
        id: 'farmland-protocol',
        symbol: 'far',
        addr: '0xaae3cf9968d26925bdb73ce3864e0084a20f4687',
    },
    {
        id: 'fastswap',
        symbol: 'fast',
        addr: '0xc888a0ab4831a29e6ca432babf52e353d23db3c2',
    },
    {
        id: 'fatcoin',
        symbol: 'fat',
        addr: '0x2ec95b8eda549b79a1248335a39d299d00ed314c',
    },
    {
        id: 'fat-doge',
        symbol: 'foge',
        addr: '0x76851a93977bea9264c32255b6457882035c7501',
    },
    {
        id: 'fear',
        symbol: 'fear',
        addr: '0x88a9a52f944315d5b4e917b9689e65445c401e83',
    },
    {
        id: 'fear-greed-sentiment-set-ii',
        symbol: 'greed',
        addr: '0x15822a64c8cb27d7828c45e0aafc3e6c5decd172',
    },
    {
        id: 'feast-finance',
        symbol: 'feast',
        addr: '0xf2df8458130f00c94bcde2dd3f288cf608187f87',
    },
    {
        id: 'fee-active-collateral-token',
        symbol: 'fact',
        addr: '0x23aeff664c1b2bba98422a0399586e96cc8a1c92',
    },
    {
        id: 'feellike',
        symbol: 'fll',
        addr: '0x9235bda06b8807161b8fbb1e102cb654555b212f',
    },
    {
        id: 'feg-token',
        symbol: 'feg',
        addr: '0x389999216860ab8e0175387a0c90e5c52522c945',
    },
    {
        id: 'fei-protocol',
        symbol: 'fei',
        addr: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
    },
    {
        id: 'fera',
        symbol: 'fera',
        addr: '0x539f3615c1dbafa0d008d87504667458acbd16fa',
    },
    {
        id: 'ferrum-network',
        symbol: 'frm',
        addr: '0xe5caef4af8780e59df925470b050fb23c43ca68c',
    },
    {
        id: 'fess-chain',
        symbol: 'fess',
        addr: '0xe09394f8ba642430ed448ca20f342ec7aa1ba2e1',
    },
    {
        id: 'fetch-ai',
        symbol: 'fet',
        addr: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
    },
    {
        id: 'fetish-coin',
        symbol: 'fetish',
        addr: '0xefcec6d87e3ce625c90865a49f2b7482963d73fe',
    },
    {
        id: 'feyorra',
        symbol: 'fey',
        addr: '0xe8e06a5613dc86d459bc8fb989e173bb8b256072',
    },
    {
        id: 'fidex-exchange',
        symbol: 'fex',
        addr: '0x1c1c14a6b5074905ce5d367b0a7e098b58ebfd47',
    },
    {
        id: 'finance-vote',
        symbol: 'fvt',
        addr: '0x45080a6531d671ddff20db42f93792a489685e32',
    },
    {
        id: 'financex-exchange',
        symbol: 'fnx',
        addr: '0x5515950f7bf8d6acdf4ae98c33bf996bd0ed6f6f',
    },
    {
        id: 'financex-exchange-token',
        symbol: 'fnxs',
        addr: '0x05919a3915462abbdf2cd3c5b42213cc8f596102',
    },
    {
        id: 'finexbox-token',
        symbol: 'fnb',
        addr: '0xe6d2c3cb986db66818c14c7032db05d1d2a6ee74',
    },
    {
        id: 'fingerprint',
        symbol: 'fgp',
        addr: '0xd9a8cfe21c232d485065cb62a96866799d4645f7',
    },
    {
        id: 'finminity',
        symbol: 'fmt',
        addr: '0x99c6e435ec259a7e8d65e1955c9423db624ba54c',
    },
    {
        id: 'finnexus',
        symbol: 'fnx',
        addr: '0xef9cd7882c067686691b6ff49e650b43afbbcc6b',
    },
    {
        id: 'finple',
        symbol: 'fpt',
        addr: '0x9d5e6b92ba3f75589943372df82dbd3a8a802e80',
    },
    {
        id: 'finswap',
        symbol: 'fnsp',
        addr: '0x3b78dc5736a49bd297dd2e4d62daa83d35a22749',
    },
    {
        id: 'fintab',
        symbol: 'fntb',
        addr: '0xbd4b60a138b3fce3584ea01f50c0908c18f9677a',
    },
    {
        id: 'fintrux',
        symbol: 'ftx',
        addr: '0xd559f20296ff4895da39b5bd9add54b442596a61',
    },
    {
        id: 'finxflo',
        symbol: 'fxf',
        addr: '0x8a40c222996f9f3431f63bf80244c36822060f12',
    },
    {
        id: 'fiola',
        symbol: 'fla',
        addr: '0x7be5901f679bde8202a123c84c19bbce2cf3449b',
    },
    {
        id: 'firdaos',
        symbol: 'fdo',
        addr: '0x361887c1d1b73557018c47c8001711168128cf69',
    },
    {
        id: 'fireants',
        symbol: 'ants',
        addr: '0xa9fbb83a2689f4ff86339a4b96874d718673b627',
    },
    {
        id: 'fireball',
        symbol: 'fire',
        addr: '0x3f8a2f7bcd70e7f7bdd3fbb079c11d073588dea2',
    },
    {
        id: 'fire-lotto',
        symbol: 'flot',
        addr: '0x049399a6b048d52971f7d122ae21a1532722285f',
    },
    {
        id: 'fire-protocol',
        symbol: 'fire',
        addr: '0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43',
    },
    {
        id: 'firmachain',
        symbol: 'fct',
        addr: '0xe1bad922f84b198a08292fb600319300ae32471b',
    },
    {
        id: 'fisco',
        symbol: 'fscc',
        addr: '0x0789dbae94fb18e5789b8e4489bcb7a1adb58622',
    },
    {
        id: 'fiscus-fyi',
        symbol: 'ffyi',
        addr: '0xca76baa777d749de63ca044853d22d56bc70bb47',
    },
    {
        id: 'fission-cash',
        symbol: 'fcx',
        addr: '0x0b66015bc42601d5986b540373b4e02d7383c7c1',
    },
    {
        id: 'fk-coin',
        symbol: 'fk',
        addr: '0x903d78ca7d892e4518586d0b64f418bd4ca9a82d',
    },
    {
        id: 'flama',
        symbol: 'fma',
        addr: '0x0f8794f66c7170c4f9163a8498371a747114f6c4',
    },
    {
        id: 'flapp',
        symbol: 'flap',
        addr: '0xcfb72ed3647cc8e7fa52e4f121ecdabefc305e7f',
    },
    {
        id: 'flash-stake',
        symbol: 'flash',
        addr: '0x20398ad62bb2d930646d45a6d4292baa0b860c1f',
    },
    {
        id: 'flashswap',
        symbol: 'fsp',
        addr: '0x0128e4fccf5ef86b030b28f0a8a029a3c5397a94',
    },
    {
        id: 'fleta',
        symbol: 'fleta',
        addr: '0x40897c872214303b6f479a37e549ee1516b264a2',
    },
    {
        id: 'flex-coin',
        symbol: 'flex',
        addr: '0xfcf8eda095e37a41e002e266daad7efc1579bc0a',
    },
    {
        id: 'flexeth-btc-set',
        symbol: 'flexethbtc',
        addr: '0xdbf5c7d8ac5007667617a15db2c1b1d616c9d302',
    },
    {
        id: 'flex-usd',
        symbol: 'flexusd',
        addr: '0xa774ffb4af6b0a91331c084e1aebae6ad535e6f3',
    },
    {
        id: 'flit-token',
        symbol: 'flt',
        addr: '0xb351da6ffebd5dddd1da037929fcf334d6b4a8d5',
    },
    {
        id: 'flixxo',
        symbol: 'flixx',
        addr: '0xf04a8ac553fcedb5ba99a64799155826c136b0be',
    },
    {
        id: 'float-protocol',
        symbol: 'bank',
        addr: '0x24a6a37576377f63f194caa5f518a60f45b42921',
    },
    {
        id: 'float-protocol-float',
        symbol: 'float',
        addr: '0xb05097849bca421a3f51b249ba6cca4af4b97cb9',
    },
    {
        id: 'florafic',
        symbol: 'fic',
        addr: '0x0dd83b5013b2ad7094b1a7783d96ae0168f82621',
    },
    {
        id: 'flowchaincoin',
        symbol: 'flc',
        addr: '0x32c4adb9cf57f972bc375129de91c897b4f364f1',
    },
    {
        id: 'flux',
        symbol: 'flux',
        addr: '0x469eda64aed3a3ad6f868c44564291aa415cb1d9',
    },
    {
        id: 'flux-protocol',
        symbol: 'flux',
        addr: '0x7645ddfeeceda57e41f92679c4acd83c56a81d14',
    },
    {
        id: 'flynnjamm',
        symbol: 'jamm',
        addr: '0x56687cf29ac9751ce2a4e764680b6ad7e668942e',
    },
    {
        id: 'flypme',
        symbol: 'fyp',
        addr: '0x8f0921f30555624143d427b340b1156914882c10',
    },
    {
        id: 'fme',
        symbol: 'fme',
        addr: '0x947938339bf61c84669e303bc39c794d65a525d0',
    },
    {
        id: 'fm-gallery',
        symbol: 'fmg',
        addr: '0x2991341d28eaea277785d20e1d878d478c7ba4c7',
    },
    {
        id: 'fnb-protocol',
        symbol: 'fnb',
        addr: '0x47b28f365bf4cb38db4b6356864bde7bc4b35129',
    },
    {
        id: 'fnkcom',
        symbol: 'fnk',
        addr: '0xb5fe099475d3030dde498c3bb6f3854f762a48ad',
    },
    {
        id: 'foam-protocol',
        symbol: 'foam',
        addr: '0x4946fcea7c692606e8908002e55a582af44ac121',
    },
    {
        id: 'folder-protocol',
        symbol: 'fol',
        addr: '0xa8580f3363684d76055bdc6660caefe8709744e1',
    },
    {
        id: 'fompound',
        symbol: 'fomp',
        addr: '0x05385abd2a95a8cd9b696f738aed73f1afbc12e0',
    },
    {
        id: 'font',
        symbol: 'font',
        addr: '0x4c25bdf026ea05f32713f00f73ca55857fbf6342',
    },
    {
        id: 'force-dao',
        symbol: 'force',
        addr: '0x2c31b10ca416b82cec4c5e93c615ca851213d48d',
    },
    {
        id: 'force-for-fast',
        symbol: 'fff',
        addr: '0x22f098f08c4eda4be4ad6b4ba59866f3e98cef92',
    },
    {
        id: 'force-protocol',
        symbol: 'for',
        addr: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
    },
    {
        id: 'forefront',
        symbol: 'ff',
        addr: '0x7e9d8f07a64e363e97a648904a89fb4cd5fb94cd',
    },
    {
        id: 'foresight',
        symbol: 'fors',
        addr: '0xb1ec548f296270bc96b8a1b3b3c8f3f04b494215',
    },
    {
        id: 'foresterx',
        symbol: 'fex',
        addr: '0x002f2264aeec71041ae5739ecf0a2c80c5ea30fa',
    },
    {
        id: 'foresting',
        symbol: 'pton',
        addr: '0x4946583c5b86e01ccd30c71a05617d06e3e73060',
    },
    {
        id: 'forexcoin',
        symbol: 'forex',
        addr: '0xa4e9584daa093cb1205e17ba737c3fd015748087',
    },
    {
        id: 'formation-finance',
        symbol: 'form',
        addr: '0x21381e026ad6d8266244f2a583b35f9e4413fa2a',
    },
    {
        id: 'formula',
        symbol: 'fml',
        addr: '0xde522a2778e4554707e6a8df36a4871ce9967bb5',
    },
    {
        id: 'forte-coin',
        symbol: 'fotc',
        addr: '0xd9a1fe8b4d6de4f41c8a1b6ad3b6457916e546b4',
    },
    {
        id: 'fortknoxter',
        symbol: 'fkx',
        addr: '0x16484d73ac08d2355f466d448d2b79d2039f6ebb',
    },
    {
        id: 'fortuna',
        symbol: 'fota',
        addr: '0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c',
    },
    {
        id: 'forty-seven-bank',
        symbol: 'fsbt',
        addr: '0x1ed7ae1f0e2fa4276dd7ddc786334a3df81d50c0',
    },
    {
        id: 'foundrydao-logistics',
        symbol: 'fry',
        addr: '0x6c972b70c533e2e045f333ee28b9ffb8d717be69',
    },
    {
        id: 'fountain',
        symbol: 'ftn',
        addr: '0x66d9c4d19b4c8e23a54c6dc4ceed141f66b8111c',
    },
    {
        id: 'fox-token',
        symbol: 'fox',
        addr: '0xc770eefad204b5180df6a14ee197d99d808ee52d',
    },
    {
        id: 'fox-trading-token',
        symbol: 'foxt',
        addr: '0xfbe878ced08132bd8396988671b450793c44bc12',
    },
    {
        id: 'fractal',
        symbol: 'fcl',
        addr: '0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3',
    },
    {
        id: 'franklin',
        symbol: 'fly',
        addr: '0x85f6eb2bd5a062f5f8560be93fb7147e16c81472',
    },
    {
        id: 'frax',
        symbol: 'frax',
        addr: '0x853d955acef822db058eb8505911ed77f175b99e',
    },
    {
        id: 'frax-share',
        symbol: 'fxs',
        addr: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
    },
    {
        id: 'fred-energy-erc20',
        symbol: 'fredx',
        addr: '0xd8e2b153e94daec5fe657a49ff59bb68fa67f126',
    },
    {
        id: 'free-coin',
        symbol: 'free',
        addr: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    },
    {
        id: 'freedom-reserve',
        symbol: 'fr',
        addr: '0xc626e0619ac79afea9281c8eb9b1a9f9d3fab532',
    },
    {
        id: 'freela',
        symbol: 'frel',
        addr: '0x29ceddcf0da3c1d8068a7dfbd0fb06c2e438ff70',
    },
    {
        id: 'freeliquid',
        symbol: 'fl',
        addr: '0xffed56a180f23fd32bc6a1d8d3c09c283ab594a8',
    },
    {
        id: 'free-tool-box',
        symbol: 'ftb',
        addr: '0x1e71034c89dd191accb27dc35f18a3d8b6f91311',
    },
    {
        id: 'freeway-token',
        symbol: 'fwt',
        addr: '0xf151980e7a781481709e8195744bf2399fb3cba4',
    },
    {
        id: 'freight-trust-network',
        symbol: 'edi',
        addr: '0x79c5a1ae586322a07bfb60be36e1b31ce8c84a1e',
    },
    {
        id: 'french-ico-coin',
        symbol: 'fico',
        addr: '0x7e442206da059905050ba02be63cbb85c559eb04',
    },
    {
        id: 'frenzy',
        symbol: 'fzy',
        addr: '0x8720c8429b78df262360b0f39917a03f9b894746',
    },
    {
        id: 'freq-set-dollar',
        symbol: 'fsd',
        addr: '0xd27af03cb73a29ee2f37194c70c4ee13b68fe8cb',
    },
    {
        id: 'friends-with-benefits-pro',
        symbol: 'fwb',
        addr: '0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8',
    },
    {
        id: 'friendz',
        symbol: 'fdz',
        addr: '0x23352036e911a22cfc692b5e2e196692658aded9',
    },
    {
        id: 'frmx-token',
        symbol: 'frmx',
        addr: '0xf6832ea221ebfdc2363729721a146e6745354b14',
    },
    {
        id: 'frogdao-dime',
        symbol: 'fdd',
        addr: '0x14cfc7aeaa468e8c789785c39e0b753915aeb426',
    },
    {
        id: 'froge-finance',
        symbol: 'froge',
        addr: '0x29502fe4d233ef0b45c3647101fa1252ce0634bd',
    },
    {
        id: 'frontier-token',
        symbol: 'front',
        addr: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
    },
    {
        id: 'frozencoin-network',
        symbol: 'fz',
        addr: '0xe5aee163513119f4f750376c718766b40fa37a5f',
    },
    {
        id: 'fruits',
        symbol: 'frts',
        addr: '0x229b239b7d00aa2a41c8b74b1db50a821f58d31a',
    },
    {
        id: 'fsw-token',
        symbol: 'fsw',
        addr: '0xfffffffff15abf397da76f1dcc1a1604f45126db',
    },
    {
        id: 'ftx-token',
        symbol: 'ftt',
        addr: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
    },
    {
        id: 'fudfinance',
        symbol: 'fud',
        addr: '0x2688213fedd489762a281a67ae4f2295d8e17ecc',
    },
    {
        id: 'fundamenta',
        symbol: 'fmta',
        addr: '0xaa9d866666c2a3748d6b23ff69e63e52f08d9ab4',
    },
    {
        id: 'fundchains',
        symbol: 'fund',
        addr: '0xd20bcbd56d9d551cac10a6bc2a83635bfb72f3f4',
    },
    {
        id: 'funder-one',
        symbol: 'fundx',
        addr: '0x30d862bbbef3b75f700d6ba7d323b95708eaafaa',
    },
    {
        id: 'fundum',
        symbol: 'fnd',
        addr: '0xbe6c01a67bd0160fe3e731555ad014895b225dfa',
    },
    {
        id: 'funfair',
        symbol: 'fun',
        addr: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
    },
    {
        id: 'funkeypay',
        symbol: 'fnk',
        addr: '0x06404399e748cd83f25ab163711f9f4d61cfd0e6',
    },
    {
        id: 'furucombo',
        symbol: 'combo',
        addr: '0xffffffff2ba8f66d4e51811c5190992176930278',
    },
    {
        id: 'fuse-network-token',
        symbol: 'fuse',
        addr: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
    },
    {
        id: 'futurax',
        symbol: 'ftxt',
        addr: '0x41875c2332b0877cdfaa699b641402b7d4642c32',
    },
    {
        id: 'future1coin',
        symbol: 'f1c',
        addr: '0xb0a0a070640b450eb136dc377208469ee4f49fbc',
    },
    {
        id: 'future-cash-digital',
        symbol: 'fcd',
        addr: '0x74db83feba1574fec860413eb509d1ddfb1b730b',
    },
    {
        id: 'future-of-finance-fund',
        symbol: 'fff',
        addr: '0xabafa52d3d5a2c18a4c1ae24480d22b831fc0413',
    },
    {
        id: 'futureswap',
        symbol: 'fst',
        addr: '0x0e192d382a36de7011f795acc4391cd302003606',
    },
    {
        id: 'fuupay',
        symbol: 'fpt',
        addr: '0x084da5a9c0e3f086532b98d8568432349b89d9df',
    },
    {
        id: 'fuze-token',
        symbol: 'fuze',
        addr: '0x187d1018e8ef879be4194d6ed7590987463ead85',
    },
    {
        id: 'fuzex',
        symbol: 'fxt',
        addr: '0x1829aa045e21e0d59580024a951db48096e01782',
    },
    {
        id: 'fuzzy-inu',
        symbol: 'fuzzy',
        addr: '0x4bcddfcfa8cb923952bcf16644b36e5da5ca3184',
    },
    {
        id: 'fx-coin',
        symbol: 'fx',
        addr: '0x8c15ef5b4b21951d50e53e4fbda8298ffad25057',
    },
    {
        id: 'fxpay',
        symbol: 'fxp',
        addr: '0x14ddda446688b73161aa1382f4e4343353af6fc8',
    },
    {
        id: 'fxt-token',
        symbol: 'fxt',
        addr: '0xf83bf320a4a3f4bf365c3114b6f19fc3f6b1228c',
    },
    {
        id: 'fyeth-finance',
        symbol: 'yeth',
        addr: '0xd387f0e62e3f123a54ae486056a5d859affed0c8',
    },
    {
        id: 'fyooz',
        symbol: 'fyz',
        addr: '0x6bff2fe249601ed0db3a87424a2e923118bb0312',
    },
    {
        id: 'fyznft',
        symbol: 'fyznft',
        addr: '0x19a2cf2a1b2f76e52e2b0c572bd80a95b4fa8643',
    },
    {
        id: 'gains',
        symbol: 'gains',
        addr: '0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9',
    },
    {
        id: 'gains-farm',
        symbol: 'gfarm2',
        addr: '0x831091da075665168e01898c6dac004a867f1e1b',
    },
    {
        id: 'gala',
        symbol: 'gala',
        addr: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
    },
    {
        id: 'galaxy-pool-coin',
        symbol: 'gpo',
        addr: '0x5cf501e64786444e025c5b24025f98399538ea5d',
    },
    {
        id: 'galaxy-wallet',
        symbol: 'gc',
        addr: '0x486a72811ae65c4c814ba929d6da35497d21296f',
    },
    {
        id: 'gallery-finance',
        symbol: 'glf',
        addr: '0x47fd85128312ee72aa0e0382a531a8f848b8b2cb',
    },
    {
        id: 'gamb',
        symbol: 'gmb',
        addr: '0xa0008f510fe9ee696e7e320c9e5cbf61e27791ee',
    },
    {
        id: 'game',
        symbol: 'gtc',
        addr: '0xb70835d7822ebb9426b56543e391846c107bd32c',
    },
    {
        id: 'game-city',
        symbol: 'gmci',
        addr: '0x5dc74029509752f4ed9a609c2bb52216275e4c1d',
    },
    {
        id: 'gamecredits',
        symbol: 'game',
        addr: '0x63f88a2298a5c4aee3c216aa6d926b184a4b2437',
    },
    {
        id: 'gamee',
        symbol: 'gmee',
        addr: '0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373',
    },
    {
        id: 'game-fanz',
        symbol: 'gfn',
        addr: '0x3930e4ddb4d24ef2f4cb54c1f009a3694b708428',
    },
    {
        id: 'gameflip',
        symbol: 'flp',
        addr: '0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3',
    },
    {
        id: 'gamercoin',
        symbol: 'ghx',
        addr: '0x728f30fa2f100742c7949d1961804fa8e0b1387d',
    },
    {
        id: 'game-stars',
        symbol: 'gst',
        addr: '0x67a9099f0008c35c61c00042cd9fb03684451097',
    },
    {
        id: 'gamestop-finance',
        symbol: 'gme',
        addr: '0x9eb6be354d88fd88795a04de899a57a77c545590',
    },
    {
        id: 'gameswap-org',
        symbol: 'gswap',
        addr: '0xaac41ec512808d64625576eddd580e7ea40ef8b2',
    },
    {
        id: 'game-x-coin',
        symbol: 'gxc',
        addr: '0x953e22945b416730bad05009af05b420e598e412',
    },
    {
        id: 'gamyfi-token',
        symbol: 'gfx',
        addr: '0xe4fa3c576c31696322e8d7165c5965d5a1f6a1a5',
    },
    {
        id: 'ganesha-token',
        symbol: 'gnsh',
        addr: '0x7c5ff719a6c76fe643e9ecd0f11f146a2de05f14',
    },
    {
        id: 'gapp-network',
        symbol: 'gap',
        addr: '0x9570ec7ab05d61877ff7eb180f837c7c079c4844',
    },
    {
        id: 'gas-cash-back',
        symbol: 'gcbn',
        addr: '0x15c303b84045f67156acf6963954e4247b526717',
    },
    {
        id: 'gasgains',
        symbol: 'gasg',
        addr: '0xc58467b855401ef3ff8fda9216f236e29f0d6277',
    },
    {
        id: 'gasify',
        symbol: 'gsfy',
        addr: '0x02f3a1819851d127bcd6f468253d7a498567eee0',
    },
    {
        id: 'gastoken',
        symbol: 'gst2',
        addr: '0x0000000000b3f879cb30fe243b4dfee438691c04',
    },
    {
        id: 'gastroadvisor',
        symbol: 'fork',
        addr: '0x5bb1632fa0023e1aa76a1ae92b4635c8dba49fa2',
    },
    {
        id: 'gatcoin',
        symbol: 'gat',
        addr: '0x687174f8c49ceb7729d925c3a961507ea4ac7b28',
    },
    {
        id: 'gatechain-token',
        symbol: 'gt',
        addr: '0xe66747a101bff2dba3697199dcce5b743b454759',
    },
    {
        id: 'gatenet',
        symbol: 'gate',
        addr: '0x9d7630adf7ab0b0cb00af747db76864df0ec82e4',
    },
    {
        id: 'gather',
        symbol: 'gth',
        addr: '0xc3771d47e2ab5a519e2917e61e23078d0c05ed7f',
    },
    {
        id: 'gazecoin',
        symbol: 'gze',
        addr: '0x4ac00f287f36a6aad655281fe1ca6798c9cb727b',
    },
    {
        id: 'gazetv',
        symbol: 'gaze',
        addr: '0xd1e06952708771f71e6dd18f06ee418f6e8fc564',
    },
    {
        id: 'geeq',
        symbol: 'GEEQ',
        addr: '0x6b9f031d718dded0d681c20cb754f97b3bb81b78',
    },
    {
        id: 'gem-exchange-and-trading',
        symbol: 'gxt',
        addr: '0x28d3e409bb9bc58f1ca6e009f8fc78a1db85e6b7',
    },
    {
        id: 'gemini-dollar',
        symbol: 'gusd',
        addr: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    },
    {
        id: 'gems-2',
        symbol: 'gem',
        addr: '0xc7bba5b765581efb2cdd2679db5bea9ee79b201f',
    },
    {
        id: 'gemswap',
        symbol: 'gem',
        addr: '0x90f62b96a62801488b151ff3c65eac5fae21a962',
    },
    {
        id: 'gemvault-coin',
        symbol: 'gvc',
        addr: '0xa57392548087453dec6106e670bbfb849276b358',
    },
    {
        id: 'genaro-network',
        symbol: 'gnx',
        addr: '0x6ec8a24cabdc339a06a172f8223ea557055adaa5',
    },
    {
        id: 'gene',
        symbol: 'gene',
        addr: '0xf6ec87dfe1ed3a7256cc0c38e3c8139103e9af3b',
    },
    {
        id: 'genebank-token',
        symbol: 'gnbt',
        addr: '0x7aa46a51f717404d944051af3075bbcb49b2288b',
    },
    {
        id: 'general-attention-currency',
        symbol: 'xac',
        addr: '0xde4c5a791913838027a2185709e98c5c6027ea63',
    },
    {
        id: 'generation-of-yield',
        symbol: 'ygy',
        addr: '0x11b0a8c0fa626627601ed518c3538a39d92d609e',
    },
    {
        id: 'genes-chain',
        symbol: 'genes',
        addr: '0x1673a63aa0047294d75954226f3f2f98de77b16f',
    },
    {
        id: 'genesis-shards',
        symbol: 'gs',
        addr: '0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112',
    },
    {
        id: 'genesis-token',
        symbol: 'gent',
        addr: '0x0f767338244418310342d49b02183715691d988f',
    },
    {
        id: 'genesis-vision',
        symbol: 'gvt',
        addr: '0x103c3a209da59d3e7c4a89307e66521e081cfdf0',
    },
    {
        id: 'gene-source-code-token',
        symbol: 'gene',
        addr: '0x884181554dfa9e578d36379919c05c25dc4a15bb',
    },
    {
        id: 'genexi',
        symbol: 'gxi',
        addr: '0xbcfdaeb22ab6e10dfb99546e6240155edc1084f7',
    },
    {
        id: 'geodb',
        symbol: 'geo',
        addr: '0x147faf8de9d8d8daae129b187f0d02d819126750',
    },
    {
        id: 'gera-coin',
        symbol: 'gera',
        addr: '0xde5ea375ffbdc8b25a80fe13d631e8ba0ab4bb02',
    },
    {
        id: 'germancoin',
        symbol: 'gcx',
        addr: '0x44a67c8570a61a28bafd0035042f2f0a73a64428',
    },
    {
        id: 'gerowallet',
        symbol: 'gero',
        addr: '0x3431f91b3a388115f00c5ba9fdb899851d005fb5',
    },
    {
        id: 'ges',
        symbol: 'ges',
        addr: '0xd667d5a228cb09f190c4308cf89d39cab18a413c',
    },
    {
        id: 'get-token',
        symbol: 'get',
        addr: '0x8a854288a5976036a725879164ca3e91d30c6a1b',
    },
    {
        id: 'geyser',
        symbol: 'gysr',
        addr: '0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab',
    },
    {
        id: 'gg-coin',
        symbol: 'ggc',
        addr: '0x7f969c4d388ca0ae39a4fddb1a6f89878ca2fbf8',
    },
    {
        id: 'gg-token',
        symbol: 'ggtk',
        addr: '0xfa99a87b14b02e2240c79240c5a20f945ca5ef76',
    },
    {
        id: 'giftedhands',
        symbol: 'ghd',
        addr: '0x3b544e6fcf6c8dce9d8b45a4fdf21c9b02f9fda9',
    },
    {
        id: 'gifto',
        symbol: 'gto',
        addr: '0xc5bbae50781be1669306b9e001eff57a2957b09d',
    },
    {
        id: 'giga-watt-token',
        symbol: 'wtt',
        addr: '0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda',
    },
    {
        id: 'gimmer',
        symbol: 'gmr',
        addr: '0x9b8d5f3402f74c7a61d9f09c32d3ca07b45c1466',
    },
    {
        id: 'gitcoin',
        symbol: 'gtc',
        addr: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
    },
    {
        id: 'give-global',
        symbol: 'give',
        addr: '0xba8e5a4c64c1be42230910f7b39a6388f3d4297c',
    },
    {
        id: 'givingtoservices',
        symbol: 'svcs',
        addr: '0x9cec686ba6f07d6135b2091140c795166ef5b761',
    },
    {
        id: 'givly-coin',
        symbol: 'giv',
        addr: '0xf6537fe0df7f0cc0985cf00792cc98249e73efa0',
    },
    {
        id: 'glex',
        symbol: 'glex',
        addr: '0x0a0db74ef8b4480cc29b7d68647727feeb1ea4ec',
    },
    {
        id: 'glitch-protocol',
        symbol: 'glch',
        addr: '0x038a68ff68c393373ec894015816e33ad41bd564',
    },
    {
        id: 'global-aex-token',
        symbol: 'gat',
        addr: '0x24efe6b87bf1bfe9ea2ccb5a9d0a959c7172b364',
    },
    {
        id: 'global-coin-research',
        symbol: 'gcr',
        addr: '0x6307b25a665efc992ec1c1bc403c38f3ddd7c661',
    },
    {
        id: 'global-crypto-alliance',
        symbol: 'call',
        addr: '0xbbe761ea1447a20b75aa485b7bcad4837415d7d7',
    },
    {
        id: 'global-defi',
        symbol: 'gdefi',
        addr: '0xb5e88b229b18e748e3aa16a1c2bfefdfc8a5560d',
    },
    {
        id: 'global-digital-content',
        symbol: 'gdc',
        addr: '0x301c755ba0fca00b1923768fffb3df7f4e63af31',
    },
    {
        id: 'global-gaming',
        symbol: 'gmng',
        addr: '0xcf81e6fdb8d7a743c3d4c3542a5356ff197ea1c0',
    },
    {
        id: 'global-human-trust',
        symbol: 'ght',
        addr: '0xbe30f684d62c9f7883a75a29c162c332c0d98f23',
    },
    {
        id: 'global-reserve-system',
        symbol: 'glob',
        addr: '0x45f2ab0ca2116b2e1a70bf5e13293947b25d0272',
    },
    {
        id: 'global-social-chain',
        symbol: 'gsc',
        addr: '0x228ba514309ffdf03a81a205a6d040e429d6e80c',
    },
    {
        id: 'global-trust-coin',
        symbol: 'gtc',
        addr: '0xe138fda441fc31b36171122397a8a11d6cd2c479',
    },
    {
        id: 'globaltrustfund-token',
        symbol: 'gtf',
        addr: '0x87befc1d367190f2b9cbe9b689e0e5ca658e3b71',
    },
    {
        id: 'globalvillage-ecosystem',
        symbol: 'gve',
        addr: '0x81705082ef9f0d660f07be80093d46d826d48b25',
    },
    {
        id: 'globe-derivative-exchange',
        symbol: 'gdt',
        addr: '0xc67b12049c2d0cf6e476bc64c7f82fc6c63cffc5',
    },
    {
        id: 'globex',
        symbol: 'gex',
        addr: '0x03282f2d7834a97369cad58f888ada19eec46ab6',
    },
    {
        id: 'glosfer-token',
        symbol: 'glo',
        addr: '0xc0e6737a29de7a00e2f6011924eb257106cb082f',
    },
    {
        id: 'glox-finance',
        symbol: 'glox',
        addr: '0x0222be1f1b8413b2d7d76ebfc9e0285c1300692f',
    },
    {
        id: 'glyph-token',
        symbol: 'gly',
        addr: '0x299948bc2ca54a5e814b19849327a6d9a0e7de1b',
    },
    {
        id: 'gneiss',
        symbol: 'gneiss',
        addr: '0x5da3e93fab0580bd7a532a741ac5f886376eff46',
    },
    {
        id: 'gnosis',
        symbol: 'gno',
        addr: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    },
    {
        id: 'gny',
        symbol: 'gny',
        addr: '0xb1f871ae9462f1b2c6826e88a7827e76f86751d4',
    },
    {
        id: 'goaltime-n',
        symbol: 'gtx',
        addr: '0x916885426255235da7a0bd90447986c00675f9ec',
    },
    {
        id: 'goat-cash',
        symbol: 'goat',
        addr: '0x9f452e458b024e82d6e3ff50a07b8de74c988523',
    },
    {
        id: 'goat-coin',
        symbol: 'goat',
        addr: '0x37611b28aca5673744161dc337128cfdd2657f69',
    },
    {
        id: 'goforit',
        symbol: 'goi',
        addr: '0x2f34dd3d46855277eee79a1d724c2249f770054b',
    },
    {
        id: 'gogo-finance',
        symbol: 'gogo',
        addr: '0x9a96e767bfcce8e80370be00821ed5ba283d4a17',
    },
    {
        id: 'gogolcoin',
        symbol: 'gol',
        addr: '0x083d41d6dd21ee938f0c055ca4fb12268df0efac',
    },
    {
        id: 'gokumarket-credit',
        symbol: 'gmc',
        addr: '0xa6272359bc37f61af398071b65c8934aca744d53',
    },
    {
        id: 'gold',
        symbol: 'gold',
        addr: '0xe081b71ed098fbe1108ea48e235b74f122272e68',
    },
    {
        id: 'gold-and-gold',
        symbol: 'gng',
        addr: '0xf1a355cc5953a5c04130f221b6ccad13c3f82990',
    },
    {
        id: 'goldblock',
        symbol: 'gbk',
        addr: '0x3e522d144814bd6149c1f3e0c6cd19d0941372ac',
    },
    {
        id: 'gold-coin-reserve',
        symbol: 'gcr',
        addr: '0x37f6f8eb409deb9feaf032c109a72319f665c79d',
    },
    {
        id: 'golden-bridge-coin',
        symbol: 'gbc',
        addr: '0x539e890f31f8e3fc63d5a2f5756a785c20f5c85d',
    },
    {
        id: 'golden-goose',
        symbol: 'gold',
        addr: '0x40d1f63b5d2048e67e9bedb1b4c2f1a9fb4b6817',
    },
    {
        id: 'golden-ratio-coin',
        symbol: 'goldr',
        addr: '0xcfe4f03c3afbb9857b29fc706180bf0044900d59',
    },
    {
        id: 'golden-ratio-token',
        symbol: 'grt',
        addr: '0xb83cd8d39462b761bb0092437d38b37812dd80a2',
    },
    {
        id: 'golden-token',
        symbol: 'gold',
        addr: '0x34d6a0f5c2f5d0082141fe73d93b9dd00ca7ce11',
    },
    {
        id: 'goldenugget',
        symbol: 'gnto',
        addr: '0x7b3296198f8a548edf89bdb16864da8f37b7d9cb',
    },
    {
        id: 'golder-coin',
        symbol: 'gldr',
        addr: '0x172f20402afc807c8a5566bceed00831adb938ca',
    },
    {
        id: 'goldfinx',
        symbol: 'gix',
        addr: '0xbd434a09191d401da3283a5545bb3515d033b8c4',
    },
    {
        id: 'goldfund-ico',
        symbol: 'gfun',
        addr: '0x919d3a363776b1ceec9352610c82dfaf80edc32d',
    },
    {
        id: 'gold-mining-members',
        symbol: 'gmm',
        addr: '0x7af89c8a06719271a96e62e290ea9ed192e73fc1',
    },
    {
        id: 'goldmint',
        symbol: 'mntp',
        addr: '0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc',
    },
    {
        id: 'golem',
        symbol: 'glm',
        addr: '0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429',
    },
    {
        id: 'golff',
        symbol: 'gof',
        addr: '0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c',
    },
    {
        id: 'golfrochain',
        symbol: 'golf',
        addr: '0x996652b6c5c4b1154b25515db21b7bbadd40ddfa',
    },
    {
        id: 'gomics',
        symbol: 'gom',
        addr: '0xb8c6ad2586bb71d518c2aaf510efe91f82022f58',
    },
    {
        id: 'gomining-token',
        symbol: 'gmt',
        addr: '0x7ddc52c4de30e94be3a6a0a2b259b2850f421989',
    },
    {
        id: 'gomoney2',
        symbol: 'gom2',
        addr: '0x48783486ddd7fa85eca6b0c4ae8920bc25dfbcd7',
    },
    {
        id: 'gonetwork',
        symbol: 'got',
        addr: '0x423b5f62b328d0d6d44870f4eee316befa0b2df5',
    },
    {
        id: 'gotogods',
        symbol: 'ogods',
        addr: '0x1051a014e4b3f2bd08e5a7e52522f0f71628162b',
    },
    {
        id: 'gourmetgalaxy',
        symbol: 'gum',
        addr: '0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24',
    },
    {
        id: 'governor-dao',
        symbol: 'gdao',
        addr: '0x515d7e9d75e2b76db60f8a051cd890eba23286bc',
    },
    {
        id: 'govi',
        symbol: 'govi',
        addr: '0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107',
    },
    {
        id: 'gowithmi',
        symbol: 'gmat',
        addr: '0xb13de094cc5cee6c4cc0a3737bf0290166d9ca5d',
    },
    {
        id: 'grabity',
        symbol: 'gbt',
        addr: '0x30634241d3a7fbcea55f0ba7df42dfd8cdd8b2cd',
    },
    {
        id: 'grafsound',
        symbol: 'gsmt',
        addr: '0x7713bcda5106424ff6b0ae1e7fa05c3f4ae3ecb0',
    },
    {
        id: 'grain-token',
        symbol: 'grain',
        addr: '0x6589fe1271a0f29346796c6baf0cdf619e25e58e',
    },
    {
        id: 'grandpa-fan',
        symbol: 'fyy',
        addr: '0x6f39297bc0c386355c77da3a0275c867b21b2454',
    },
    {
        id: 'grap-finance',
        symbol: 'grap',
        addr: '0xc8d2ab2a6fdebc25432e54941cb85b55b9f152db',
    },
    {
        id: 'graphlinq-protocol',
        symbol: 'glq',
        addr: '0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24',
    },
    {
        id: 'graviton',
        symbol: 'gton',
        addr: '0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d',
    },
    {
        id: 'grearn',
        symbol: 'gst',
        addr: '0x3afa1902b1f8a802abc18e5ad982d1bcd34afe22',
    },
    {
        id: 'green-light',
        symbol: 'gl',
        addr: '0x70fadbe1f2cccbaf98ac88fdcf94a0509a48e46d',
    },
    {
        id: 'gric',
        symbol: 'gc',
        addr: '0x720c2c93f5f9a6b82226e84095558b10f399b0fa',
    },
    {
        id: 'grid',
        symbol: 'grid',
        addr: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd',
    },
    {
        id: 'grom',
        symbol: 'gr',
        addr: '0xce593a29905951e8fc579bc092eca72577da575c',
    },
    {
        id: 'groovy-finance',
        symbol: 'gvy',
        addr: '0x31be30217989766215672e88ed449913e05bf0f5',
    },
    {
        id: 'growth-defi',
        symbol: 'gro',
        addr: '0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0',
    },
    {
        id: 'grpl-finance-2',
        symbol: 'grpl',
        addr: '0x15e4132dcd932e8990e794d1300011a472819cbd',
    },
    {
        id: 'gsenetwork',
        symbol: 'gse',
        addr: '0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838',
    },
    {
        id: 'gt-star-token',
        symbol: 'gts',
        addr: '0x951a1070ac39851dcc07b302230a68f81929a5f1',
    },
    {
        id: 'guarded-ether',
        symbol: 'geth',
        addr: '0x9ad03c34aab604a9e0fde41dbf8e383e11c416c4',
    },
    {
        id: 'guider',
        symbol: 'gdr',
        addr: '0x874d4c9b980f1a13dd44cbcdb912e24ef0671ed0',
    },
    {
        id: 'gunthy',
        symbol: 'gunthy',
        addr: '0x3684b581db1f94b721ee0022624329feb16ab653',
    },
    {
        id: 'gusd-token',
        symbol: 'gusdt',
        addr: '0x3242aebcdcf8de491004b1c98e6595e9827f6c17',
    },
    {
        id: 'guss-one',
        symbol: 'guss',
        addr: '0xdae6f68da3bab6866742a7f4050366f6ac48760d',
    },
    {
        id: 'gyen',
        symbol: 'gyen',
        addr: '0xc08512927d12348f6620a698105e1baac6ecd911',
    },
    {
        id: 'h3x',
        symbol: 'h3x',
        addr: '0x85eba557c06c348395fd49e35d860f58a4f7c95a',
    },
    {
        id: 'habitat',
        symbol: 'hbt',
        addr: '0x0ace32f6e87ac1457a5385f8eb0208f37263b415',
    },
    {
        id: 'hachiko-inu',
        symbol: 'hachiko',
        addr: '0xccac36423def6c19ee6b5679144e2976e309ca45',
    },
    {
        id: 'hackspace-capital',
        symbol: 'hac',
        addr: '0x43567eb78638a55bbe51e9f9fb5b2d7ad1f125aa',
    },
    {
        id: 'hakka-finance',
        symbol: 'hakka',
        addr: '0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd',
    },
    {
        id: 'halalchain',
        symbol: 'hlc',
        addr: '0x58c69ed6cd6887c0225d1fccecc055127843c69b',
    },
    {
        id: 'halving-coin',
        symbol: 'halv',
        addr: '0x9e7cb236e43c4bd042fe463df6a175d4479ee186',
    },
    {
        id: 'hanzo-inu',
        symbol: 'hnzo',
        addr: '0x239dc02a28a0774738463e06245544a72745d5c5',
    },
    {
        id: 'hapi',
        symbol: 'hapi',
        addr: '0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54',
    },
    {
        id: 'happy-birthday-coin',
        symbol: 'hbdc',
        addr: '0x39d30828a163713d91c4eadbba2c497a9139ec5c',
    },
    {
        id: 'hara-token',
        symbol: 'hart',
        addr: '0x173b1e935e653d0098ae692a37177ff132834595',
    },
    {
        id: 'hardcore-finance',
        symbol: 'hcore',
        addr: '0x60a995cebcd44ca566ae22a9666ed28c67b598a1',
    },
    {
        id: 'hardware-chain',
        symbol: 'hdw',
        addr: '0xca176a8ac234446b2561293db7543e0cdadc6627',
    },
    {
        id: 'harrison-first',
        symbol: 'FIRST',
        addr: '0x9903a4cd589da8e434f264deafc406836418578e',
    },
    {
        id: 'harvest-finance',
        symbol: 'farm',
        addr: '0xa0246c9032bc3a600820415ae600c6388619a14d',
    },
    {
        id: 'hashbx',
        symbol: 'hbx',
        addr: '0x6fe355c62c6faf6946ce888ffaba9fd12355ae27',
    },
    {
        id: 'hashcoin',
        symbol: 'hsc',
        addr: '0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f',
    },
    {
        id: 'hashnet-biteco',
        symbol: 'hnb',
        addr: '0x9c197c4b58527faaab67cb35e3145166b23d242e',
    },
    {
        id: 'hash-pot',
        symbol: 'hpot',
        addr: '0x8cd024cc8f73f5cd132005d1584403877b318c9d',
    },
    {
        id: 'hatch-dao',
        symbol: 'hatch',
        addr: '0x6f3009663470475f0749a6b76195375f95495fcb',
    },
    {
        id: 'hauteclere-shards-2',
        symbol: 'haut',
        addr: '0x3142dad33b1c6e1371d8627365f2ee2095eb6b37',
    },
    {
        id: 'havens-nook',
        symbol: 'hxn',
        addr: '0x0e1fe60bc4ac0e3102343752ae7e49d01d444c0b',
    },
    {
        id: 'havethertoken',
        symbol: 'het',
        addr: '0xf0998faebc12188172310403814e0399f7af3f73',
    },
    {
        id: 'havven',
        symbol: 'snx',
        addr: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    {
        id: 'havy-2',
        symbol: 'havy',
        addr: '0x7c2e5b7ec572199d3841f6a38f7d4868bd0798f1',
    },
    {
        id: 'hdt',
        symbol: 'hdt',
        addr: '0xd0cb75298d5c1e3b277e3cd95c56b3caa81a99d3',
    },
    {
        id: 'healing-plus',
        symbol: 'hp',
        addr: '0xab55bdef7057b76482914e79f037999f4ebb6bf1',
    },
    {
        id: 'healthchainus',
        symbol: 'hcut',
        addr: '0xd31a9d28d66a1f7e62b5565416ea14607690f788',
    },
    {
        id: 'heartbout',
        symbol: 'hb',
        addr: '0x877c7deb5eb1fc5faad30c71e3a6e39dc8b1519f',
    },
    {
        id: 'heartbout-pay',
        symbol: 'hp',
        addr: '0x5a4b14aea23a605abc463f04a6b8aaf52dd3e7c6',
    },
    {
        id: 'heartnumber',
        symbol: 'htn',
        addr: '0x4b4b1d389d4f4e082b30f75c6319c0ce5acbd619',
    },
    {
        id: 'heavens-gate',
        symbol: 'hate',
        addr: '0x054bd236b42385c938357112f419dc5943687886',
    },
    {
        id: 'hedget',
        symbol: 'hget',
        addr: '0x7968bc6a03017ea2de509aaa816f163db0f35148',
    },
    {
        id: 'hedge-tech-governance',
        symbol: 'htg',
        addr: '0xbff89386d062c6040ed1955e180c87dd00bb71af',
    },
    {
        id: 'hedgetrade',
        symbol: 'hedg',
        addr: '0xf1290473e210b2108a85237fbcd7b6eb42cc654f',
    },
    {
        id: 'hedpay',
        symbol: 'hdp.ф',
        addr: '0xc4d5545392f5fc57eba3af8981815669bb7e2a48',
    },
    {
        id: 'hegic',
        symbol: 'hegic',
        addr: '0x584bc13c7d411c00c01a62e8019472de68768430',
    },
    {
        id: 'heidi',
        symbol: 'hdi',
        addr: '0x58a3520d738b268c2353ecee518a1ad8e28e4ae5',
    },
    {
        id: 'helex-token',
        symbol: 'hlx',
        addr: '0x8f8e787989bc652eea01a6c88a19f0f379bdf4fd',
    },
    {
        id: 'helio-power-token',
        symbol: 'thpt',
        addr: '0x9f58702ef19ebeb76363884362439a8691e3f033',
    },
    {
        id: 'hellogold',
        symbol: 'hgt',
        addr: '0xba2184520a1cc49a6159c57e61e1844e085615b6',
    },
    {
        id: 'help-coin',
        symbol: 'hlp',
        addr: '0x308564dc5217c39386f5eae96545159e1d396661',
    },
    {
        id: 'helper-search-token',
        symbol: 'hsn',
        addr: '0x567300e14f8d67e1f6720a95291dce2511a86723',
    },
    {
        id: 'help-token',
        symbol: 'help',
        addr: '0xbbc2045d335cb224228f1850b29173d9d7d7b989',
    },
    {
        id: 'herbalist-token',
        symbol: 'herb',
        addr: '0x04a020325024f130988782bd5276e53595e8d16e',
    },
    {
        id: 'hermez-network-token',
        symbol: 'hez',
        addr: '0xeef9f339514298c6a857efcfc1a762af84438dee',
    },
    {
        id: 'herocoin',
        symbol: 'play',
        addr: '0xe477292f1b3268687a29376116b0ed27a9c76170',
    },
    {
        id: 'hero-node',
        symbol: 'her',
        addr: '0x491c9a23db85623eed455a8efdd6aba9b911c5df',
    },
    {
        id: 'hero-token',
        symbol: 'raise',
        addr: '0x10ba8c420e912bf07bedac03aa6908720db04e0c',
    },
    {
        id: 'hex',
        symbol: 'hex',
        addr: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
    },
    {
        id: 'hex-money',
        symbol: 'hxy',
        addr: '0xf3a2ace8e48751c965ea0a1d064303aca53842b9',
    },
    {
        id: 'hey-bitcoin',
        symbol: 'hybn',
        addr: '0x20bcae16a8ba95d8e8363e265de4ecfc36ec5cd9',
    },
    {
        id: 'hgh-token',
        symbol: 'hgh',
        addr: '0x40c6f861a08f97dfbc3c0931485bff4921975a56',
    },
    {
        id: 'higamecoin',
        symbol: 'hgc',
        addr: '0x5b5a353fc217ebef77bc7686ea05a003ebdb7d1a',
    },
    {
        id: 'high-performance-blockchain',
        symbol: 'hpb',
        addr: '0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2',
    },
    {
        id: 'hina-inu',
        symbol: 'hina',
        addr: '0xbd0a4bf098261673d5e6e600fd87ddcd756e6764',
    },
    {
        id: 'hintchain',
        symbol: 'hint',
        addr: '0x6ce21e5f5383c95691d243879a86a6025e0870c0',
    },
    {
        id: 'hippo-finance',
        symbol: 'hippo',
        addr: '0x81313f7c5c9c824236c9e4cba3ac4b049986e756',
    },
    {
        id: 'hitchain',
        symbol: 'hit',
        addr: '0x7995ab36bb307afa6a683c24a25d90dc1ea83566',
    },
    {
        id: 'hiveterminal',
        symbol: 'hvn',
        addr: '0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d',
    },
    {
        id: 'hiz-finance',
        symbol: 'hiz',
        addr: '0xc761d1ccb38a94703675d2cdb15f7f1b3dcff7b7',
    },
    {
        id: 'hland-token',
        symbol: 'hland',
        addr: '0xba7b2c094c1a4757f9534a37d296a3bed7f544dc',
    },
    {
        id: 'hntc-energy-distributed-network',
        symbol: 'hntc',
        addr: '0x135093731f61dd5cbfd7744751bf3ced3aaa69b1',
    },
    {
        id: 'hodltree',
        symbol: 'htre',
        addr: '0xdea67845a51e24461d5fed8084e69b426af3d5db',
    },
    {
        id: 'hoge-finance',
        symbol: 'hoge',
        addr: '0xfad45e47083e4607302aa43c65fb3106f1cd7607',
    },
    {
        id: 'hokkaidu-inu',
        symbol: 'hokk',
        addr: '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e',
    },
    {
        id: 'holdtowin',
        symbol: '7add',
        addr: '0xed36482c7f8e5850e91ac0cf6bf2130a1aa2df92',
    },
    {
        id: 'holistic-btc-set',
        symbol: 'tcapbtcusdc',
        addr: '0x7510d6fac98a6eca2db7c9357619715a7f5049d4',
    },
    {
        id: 'holistic-eth-set',
        symbol: 'tcapethdai',
        addr: '0x8e4dbf540bf814c044785218b58c930b20a56be1',
    },
    {
        id: 'hollaex-token',
        symbol: 'xht',
        addr: '0xd3c625f54dec647db8780dbbe0e880ef21ba4329',
    },
    {
        id: 'hollygold',
        symbol: 'hgold',
        addr: '0x0c93b616933b0cd03b201b29cd8a22681dd9e0d9',
    },
    {
        id: 'holotoken',
        symbol: 'hot',
        addr: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    },
    {
        id: 'holyheld',
        symbol: 'holy',
        addr: '0x39eae99e685906ff1c11a962a743440d0a1a6e09',
    },
    {
        id: 'holyheld-2',
        symbol: 'move',
        addr: '0x3fa729b4548becbad4eab6ef18413470e6d5324c',
    },
    {
        id: 'homeros',
        symbol: 'hmr',
        addr: '0xb1a30851e3f7d841b231b086479608e17198363a',
    },
    {
        id: 'homihelp',
        symbol: 'homi',
        addr: '0xca208bfd69ae6d2667f1fcbe681bae12767c0078',
    },
    {
        id: 'hom-token',
        symbol: 'homt',
        addr: '0xef7a985e4ff9b5dccd6eddf58577486887288711',
    },
    {
        id: 'honey',
        symbol: 'hny',
        addr: '0xc3589f56b6869824804a5ea29f2c9886af1b0fce',
    },
    {
        id: 'hoo-token',
        symbol: 'hoo',
        addr: '0xd241d7b5cb0ef9fc79d9e4eb9e21f5e209f52f7d',
    },
    {
        id: 'hopr',
        symbol: 'hopr',
        addr: '0xf5581dfefd8fb0e4aec526be659cfab1f8c781da',
    },
    {
        id: 'hoqu',
        symbol: 'hqx',
        addr: '0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa',
    },
    {
        id: 'hord',
        symbol: 'hord',
        addr: '0x43a96962254855f16b925556f9e97be436a43448',
    },
    {
        id: 'hotbit-token',
        symbol: 'htb',
        addr: '0x6be61833fc4381990e82d7d4a9f4c9b3f67ea941',
    },
    {
        id: 'hot-cross',
        symbol: 'hotcross',
        addr: '0x4297394c20800e8a38a619a243e9bbe7681ff24e',
    },
    {
        id: 'hotdollars-token',
        symbol: 'hds',
        addr: '0xcafe27178308351a12fffffdeb161d9d730da082',
    },
    {
        id: 'hotpot-base-token',
        symbol: 'pot',
        addr: '0x042afd3869a47e2d5d42cc787d5c9e19df32185f',
    },
    {
        id: 'howdoo',
        symbol: 'udoo',
        addr: '0x12f649a9e821f90bb143089a6e56846945892ffb',
    },
    {
        id: 'hplus',
        symbol: 'hplus',
        addr: '0xff744f2315c9d61d825b581c973576055c3da07e',
    },
    {
        id: 'hrd',
        symbol: 'hrd',
        addr: '0xc617d51e3a1f621da8ae67b2f652d6ac02eb8d95',
    },
    {
        id: 'hubdao',
        symbol: 'hd',
        addr: '0x6ce654ac973d326f89f0685e7459542641410ed9',
    },
    {
        id: 'hubii-network',
        symbol: 'hbt',
        addr: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f',
    },
    {
        id: 'hub-token',
        symbol: 'hub',
        addr: '0xba358b6f5b4c0215650444b8c30d870b55050d2d',
    },
    {
        id: 'hue',
        symbol: 'hue',
        addr: '0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5',
    },
    {
        id: 'humancoin-2',
        symbol: 'hmnc',
        addr: '0x77e31d674a46d356b2e65892bde7758bb26238ca',
    },
    {
        id: 'humaniq',
        symbol: 'hmq',
        addr: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908',
    },
    {
        id: 'humanscape',
        symbol: 'hum',
        addr: '0x174afe7a032b5a33a3270a9f6c30746e25708532',
    },
    {
        id: 'hunt-token',
        symbol: 'hunt',
        addr: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
    },
    {
        id: 'huobi-bitcoin-cash',
        symbol: 'hbch',
        addr: '0xaac679720204aaa68b6c5000aa87d789a3ca0aa5',
    },
    {
        id: 'huobi-btc',
        symbol: 'hbtc',
        addr: '0x0316eb71485b0ab14103307bf65a021042c6d380',
    },
    {
        id: 'huobi-fil',
        symbol: 'hfil',
        addr: '0x9afb950948c2370975fb91a441f36fdc02737cd4',
    },
    {
        id: 'huobi-litecoin',
        symbol: 'hltc',
        addr: '0x2c000c0093de75a8fa2fccd3d97b314e20b431c3',
    },
    {
        id: 'huobi-polkadot',
        symbol: 'hdot',
        addr: '0x9ffc3bcde7b68c46a6dc34f0718009925c1867cb',
    },
    {
        id: 'huobi-pool-token',
        symbol: 'hpt',
        addr: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    },
    {
        id: 'huobi-token',
        symbol: 'ht',
        addr: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    },
    {
        id: 'hurify',
        symbol: 'hur',
        addr: '0xcdb7ecfd3403eef3882c65b761ef9b5054890a47',
    },
    {
        id: 'husd',
        symbol: 'husd',
        addr: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
    },
    {
        id: 'husky',
        symbol: 'husky',
        addr: '0xd5281bb2d1ee94866b03a0fccdd4e900c8cb5091',
    },
    {
        id: 'hustle-token',
        symbol: 'husl',
        addr: '0x56be94d29e1125d2d61d06629c1b251d72c1b3b3',
    },
    {
        id: 'hut34-entropy',
        symbol: 'entrp',
        addr: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3',
    },
    {
        id: 'hxro',
        symbol: 'hxro',
        addr: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
    },
    {
        id: 'hybrid-bank-cash',
        symbol: 'hbc',
        addr: '0xfb9553afa2b5c19c5f8e5b8ee175fc01abd1555f',
    },
    {
        id: 'hybrix',
        symbol: 'hy',
        addr: '0x9b53e429b0badd98ef7f01f03702986c516a5715',
    },
    {
        id: 'hydradx',
        symbol: 'xhdx',
        addr: '0x6fcb6408499a7c0f242e32d77eb51ffa1dd28a7e',
    },
    {
        id: 'hydro',
        symbol: 'hydro',
        addr: '0x946112efab61c3636cbd52de2e1392d7a75a6f01',
    },
    {
        id: 'hydrocarbon-8',
        symbol: 'hc8',
        addr: '0x285e6b192928a1ba5ab2ced5cc34ad1cf774238a',
    },
    {
        id: 'hydro-protocol',
        symbol: 'hot',
        addr: '0x9af839687f6c94542ac5ece2e317daae355493a1',
    },
    {
        id: 'hygenercoin',
        symbol: 'hg',
        addr: '0x1bc9f31c327ce04b6fa9d56fd84c14cc0b0a4f47',
    },
    {
        id: 'hype',
        symbol: 'hype',
        addr: '0x4ff7c227e1e7bd59351de8635381c379750a8040',
    },
    {
        id: 'hype-bet',
        symbol: 'hypebet',
        addr: '0xc9dfcd0a1dd2d7bb6fd2ef91a16a6a1c4e9846dd',
    },
    {
        id: 'hypeburn',
        symbol: 'hburn',
        addr: '0x88d39566dae88dc838652d9898f0aa6a8ff2819a',
    },
    {
        id: 'hype-finance',
        symbol: 'hype',
        addr: '0x610c67be018a5c5bdc70acd8dc19688a11421073',
    },
    {
        id: 'hyper-credit-network',
        symbol: 'hpay',
        addr: '0xf83d7ff2e4b43ebad2fa534e621e31076f4d254c',
    },
    {
        id: 'hyperdao',
        symbol: 'hdao',
        addr: '0x74faab6986560fd1140508e4266d8a7b87274ffd',
    },
    {
        id: 'hyperion',
        symbol: 'hyn',
        addr: '0xe99a894a69d7c2e3c92e61b64c505a6a57d2bc07',
    },
    {
        id: 'hyperquant',
        symbol: 'hqt',
        addr: '0x3e1d5a855ad9d948373ae68e4fe1f094612b1322',
    },
    {
        id: 'hypersign-identify-token',
        symbol: 'hid',
        addr: '0xb14ebf566511b9e6002bb286016ab2497b9b9c9d',
    },
    {
        id: 'hyper-speed-network',
        symbol: 'hsn',
        addr: '0x365542df3c8c9d096c5f0de24a0d8cf33c19c8fd',
    },
    {
        id: 'hyve',
        symbol: 'hyve',
        addr: '0xd794dd1cada4cf79c9eebaab8327a1b0507ef7d4',
    },
    {
        id: 'i9-coin',
        symbol: 'i9c',
        addr: '0x7cf74238d48ce383db00a1efff8da99303552cb0',
    },
    {
        id: 'i9x-coin',
        symbol: 'i9x',
        addr: '0x60a16b9efd33bb45c18833aed45ca66045b3b714',
    },
    {
        id: 'iab',
        symbol: 'iab',
        addr: '0xded2583b3fbf4b381851f5031188a5a3562ab2cd',
    },
    {
        id: 'iai-token',
        symbol: 'iai',
        addr: '0x1ee1c46251b811075fd480fb64197f4e49c37ee0',
    },
    {
        id: 'ibnb',
        symbol: 'ibnb',
        addr: '0xafd870f32ce54efdbf677466b612bf8ad164454b',
    },
    {
        id: 'ibtc',
        symbol: 'iBTC',
        addr: '0xd6014ea05bde904448b743833ddf07c3c7837481',
    },
    {
        id: 'ice-token',
        symbol: 'ice',
        addr: '0xf16e81dce15b08f326220742020379b855b87df9',
    },
    {
        id: 'ichi-farm',
        symbol: 'ichi',
        addr: '0x903bef1736cddf2a537176cf3c64579c3867a881',
    },
    {
        id: 'icicb-coin',
        symbol: 'icicb',
        addr: '0xffcf5f9feb7e14833331b6687755d1622399316c',
    },
    {
        id: 'ick-mask',
        symbol: 'ick',
        addr: '0x793e2602a8396468f3ce6e34c1b6c6fd6d985bad',
    },
    {
        id: 'iconiq-lab-token',
        symbol: 'icnq',
        addr: '0xb3e2cb7cccfe139f8ff84013823bf22da6b6390a',
    },
    {
        id: 'idash',
        symbol: 'idash',
        addr: '0xcb98f42221b2c251a4e74a1609722ee09f0cc08e',
    },
    {
        id: 'idavoll-network',
        symbol: 'idv',
        addr: '0x92ec47df1aa167806dfa4916d9cfb99da6953b8f',
    },
    {
        id: 'ideachain',
        symbol: 'ich',
        addr: '0xf8483e2d6560585c02d46bf7b3186bf154a96166',
    },
    {
        id: 'ideaology',
        symbol: 'idea',
        addr: '0x5d3a4f62124498092ce665f865e0b38ff6f5fbea',
    },
    {
        id: 'idefi',
        symbol: 'idefi',
        addr: '0x14d10003807ac60d07bb0ba82caeac8d2087c157',
    },
    {
        id: 'idextools',
        symbol: 'dext',
        addr: '0x26ce25148832c04f3d7f26f32478a9fe55197166',
    },
    {
        id: 'idk',
        symbol: 'idk',
        addr: '0x61fd1c62551850d0c04c76fce614cbced0094498',
    },
    {
        id: 'idle',
        symbol: 'idle',
        addr: '0x875773784af8135ea0ef43b5a374aad105c5d39e',
    },
    {
        id: 'idle-dai-risk-adjusted',
        symbol: 'idleDAISafe',
        addr: '0xa14ea0e11121e6e951e87c66afe460a00bcd6a16',
    },
    {
        id: 'idle-dai-yield',
        symbol: 'idleDAIYield',
        addr: '0x3fe7940616e5bc47b0775a0dccf6237893353bb4',
    },
    {
        id: 'idle-susd-yield',
        symbol: 'idleSUSDYield',
        addr: '0xf52cdcd458bf455aed77751743180ec4a595fd3f',
    },
    {
        id: 'idle-tusd-yield',
        symbol: 'idleTUSDYield',
        addr: '0xc278041fdd8249fe4c1aad1193876857eea3d68c',
    },
    {
        id: 'idle-usdc-risk-adjusted',
        symbol: 'idleUSDCSafe',
        addr: '0x3391bc034f2935ef0e1e41619445f998b2680d35',
    },
    {
        id: 'idle-usdc-yield',
        symbol: 'idleUSDCYield',
        addr: '0x5274891bec421b39d23760c04a6755ecb444797c',
    },
    {
        id: 'idle-usdt-risk-adjusted',
        symbol: 'IdleUSDTSafe',
        addr: '0x28fac5334c9f7262b3a3fe707e250e01053e07b5',
    },
    {
        id: 'idle-usdt-yield',
        symbol: 'idleUSDTYield',
        addr: '0xf34842d05a1c888ca02769a633df37177415c2f8',
    },
    {
        id: 'idle-wbtc-yield',
        symbol: 'idleWBTCYield',
        addr: '0x8c81121b15197fa0eeaee1dc75533419dcfd3151',
    },
    {
        id: 'idl-token',
        symbol: 'idl',
        addr: '0x6febd6be8fa45be6a5eeb61a17c82d33b9addd41',
    },
    {
        id: 'idot',
        symbol: 'idot',
        addr: '0x46a97629c9c1f58de6ec18c7f536e7e6d6a6ecde',
    },
    {
        id: 'ieos',
        symbol: 'ieos',
        addr: '0xf4eebdd0704021ef2a6bbe993fdf93030cd784b4',
    },
    {
        id: 'ieth',
        symbol: 'ieth',
        addr: '0xa9859874e1743a32409f75bb11549892138bba1e',
    },
    {
        id: 'iethereum',
        symbol: 'ieth',
        addr: '0xc71d8baaa436aa7e42da1f40bec48f11ab3c9e4a',
    },
    {
        id: 'iexec-rlc',
        symbol: 'rlc',
        addr: '0x607f4c5bb672230e8672085532f7e901544a7375',
    },
    {
        id: 'ifarm',
        symbol: 'ifarm',
        addr: '0x1571ed0bed4d987fe2b498ddbae7dfa19519f651',
    },
    {
        id: 'iftoken',
        symbol: 'ift',
        addr: '0x2731d151cbdf84a8a4c6d9d0bae74012db51e428',
    },
    {
        id: 'ifx24',
        symbol: 'ifx24',
        addr: '0xc962ad021a69d457564e985738c719ae3f79b707',
    },
    {
        id: 'ig-gold',
        symbol: 'igg',
        addr: '0x8ffe40a3d0f80c0ce6b203d5cdc1a6a86d9acaea',
    },
    {
        id: 'ignite',
        symbol: 'ign',
        addr: '0xde9d41a01bb11a9f41e709242824e54c3917084e',
    },
    {
        id: 'igtoken',
        symbol: 'ig',
        addr: '0x8a88f04e0c905054d2f33b26bb3a46d7091a039a',
    },
    {
        id: 'iht-real-estate-protocol',
        symbol: 'iht',
        addr: '0xeda8b016efa8b1161208cf041cd86972eee0f31e',
    },
    {
        id: 'ijascoin',
        symbol: 'ijc',
        addr: '0xc7ff1e126cc81e816915ff48c940ed9d4e6d05d6',
    },
    {
        id: 'ikomp',
        symbol: 'ikomp',
        addr: '0x6a625ddb2e2a2de0257c5129364dd80bb4afa3b9',
    },
    {
        id: 'illuvium',
        symbol: 'ilv',
        addr: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
    },
    {
        id: 'imbtc',
        symbol: 'imbtc',
        addr: '0x17d8cbb6bce8cee970a4027d1198f6700a7a6c24',
    },
    {
        id: 'impermax',
        symbol: 'imx',
        addr: '0x7b35ce522cb72e4077baeb96cb923a5529764a00',
    },
    {
        id: 'impulseven',
        symbol: 'ven',
        addr: '0xe14e06671702f0db50055388c29adc66821d933b',
    },
    {
        id: 'ims-wallet',
        symbol: 'ims',
        addr: '0x3c4030839708a20fd2fb379cf11810dde4888d93',
    },
    {
        id: 'imusd',
        symbol: 'imusd',
        addr: '0x30647a72dc82d7fbb1123ea74716ab8a317eac19',
    },
    {
        id: 'inbox-token',
        symbol: 'inbox',
        addr: '0xb688a7b1472e2427c338b975d77e12389ecf2558',
    },
    {
        id: 'indahash',
        symbol: 'idh',
        addr: '0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0',
    },
    {
        id: 'index-cooperative',
        symbol: 'index',
        addr: '0x0954906da0bf32d5479e25f46056d22f08464cab',
    },
    {
        id: 'indexed-finance',
        symbol: 'ndx',
        addr: '0x86772b1409b61c639eaac9ba0acfbb6e238e5f83',
    },
    {
        id: 'indorse',
        symbol: 'ind',
        addr: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
    },
    {
        id: 'infinito',
        symbol: 'inft',
        addr: '0x83d60e7aed59c6829fb251229061a55f35432c4d',
    },
    {
        id: 'infinitus-token',
        symbol: 'inf',
        addr: '0x00e150d741eda1d49d341189cae4c08a73a49c95',
    },
    {
        id: 'infinity-esaham',
        symbol: 'infs',
        addr: '0x193408ca0576b73156ed42a2ea7d6fd3f6507162',
    },
    {
        id: 'injective-protocol',
        symbol: 'inj',
        addr: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
    },
    {
        id: 'ink-protocol',
        symbol: 'xnk',
        addr: '0xbc86727e770de68b1060c91f6bb6945c73e10388',
    },
    {
        id: 'inlock-token',
        symbol: 'ilk',
        addr: '0xf784682c82526e245f50975190ef0fff4e4fc077',
    },
    {
        id: 'inmax',
        symbol: 'inx',
        addr: '0x018d7d179350f1bb9853d04982820e37cce13a92',
    },
    {
        id: 'inmediate',
        symbol: 'dit',
        addr: '0xf14922001a2fb8541a433905437ae954419c2439',
    },
    {
        id: 'innovaminex',
        symbol: 'minx',
        addr: '0xae353daeed8dcc7a9a12027f7e070c0a50b7b6a4',
    },
    {
        id: 'innovation-blockchain-payment',
        symbol: 'IBP',
        addr: '0x7d14b842630cbc2530cb288109e5719e0c4d67d7',
    },
    {
        id: 'innovative-bioresearch',
        symbol: 'innbc',
        addr: '0xb67718b98d52318240c52e71a898335da4a28c42',
    },
    {
        id: 'innovativebioresearchclassic',
        symbol: 'innbcl',
        addr: '0x0cc9fccff81252f4bd8c5c6b359b14ae2ed851cf',
    },
    {
        id: 'ino-coin',
        symbol: 'ino',
        addr: '0xc9859fccc876e6b4b3c749c5d29ea04f48acb74f',
    },
    {
        id: 'inoovi',
        symbol: 'ivi',
        addr: '0xa91464abd4625a23ab719e3f0fce84dadd54e546',
    },
    {
        id: 'insight-chain',
        symbol: 'inb',
        addr: '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482',
    },
    {
        id: 'insight-protocol',
        symbol: 'inx',
        addr: '0x84fe25f3921f3426395c883707950d0c00367576',
    },
    {
        id: 'instadapp',
        symbol: 'inst',
        addr: '0x6f40d4a6237c257fff2db00fa0510deeecd303eb',
    },
    {
        id: 'insula',
        symbol: 'isla',
        addr: '0x697ef32b4a3f5a4c39de1cb7563f24ca7bfc5947',
    },
    {
        id: 'insurace',
        symbol: 'insur',
        addr: '0x544c42fbb96b39b21df61cf322b5edc285ee7429',
    },
    {
        id: 'insure',
        symbol: 'sure',
        addr: '0xb5a4ac5b04e777230ba3381195eff6a60c3934f2',
    },
    {
        id: 'insured-finance',
        symbol: 'infi',
        addr: '0x159751323a9e0415dd3d6d42a1212fe9f4a0848c',
    },
    {
        id: 'insurepal',
        symbol: 'ipl',
        addr: '0x64cdf819d3e75ac8ec217b3496d7ce167be42e80',
    },
    {
        id: 'insureum',
        symbol: 'isr',
        addr: '0xb16d3ed603d62b125c6bd45519eda40829549489',
    },
    {
        id: 'insurex',
        symbol: 'ixt',
        addr: '0xfca47962d45adfdfd1ab2d972315db4ce7ccf094',
    },
    {
        id: 'intelligent-eth-set-ii',
        symbol: 'inteth',
        addr: '0x89c0b027bd7cc2d17854b06f8322e29451192ce3',
    },
    {
        id: 'intelligent-investment-chain',
        symbol: 'iic',
        addr: '0xb6f43025b29196af2dddd69b0a58afba079cd600',
    },
    {
        id: 'intelligent-ratio-set',
        symbol: 'intratio',
        addr: '0xba8ea15b647f54d9ff849670fcaacf35df21a457',
    },
    {
        id: 'intelligent-trading-tech',
        symbol: 'itt',
        addr: '0x0aef06dcccc531e581f0440059e6ffcc206039ee',
    },
    {
        id: 'intellishare',
        symbol: 'ine',
        addr: '0x86e6a4f512b1290c043970b04e0b570d4fc98291',
    },
    {
        id: 'interest-bearing-bitcoin',
        symbol: 'ibbtc',
        addr: '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
    },
    {
        id: 'interest-bearing-eth',
        symbol: 'ibETH',
        addr: '0x67b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a',
    },
    {
        id: 'interfinex-bills',
        symbol: 'ifex',
        addr: '0xa891cf72aeda692570928efe1a832342e9783cdc',
    },
    {
        id: 'international-cryptox',
        symbol: 'incx',
        addr: '0xa984a92731c088f1ea4d53b71a2565a399f7d8d5',
    },
    {
        id: 'internet-exchange-token',
        symbol: 'inex',
        addr: '0xa2d77f8353cb2afd709aba4a967257511ecff716',
    },
    {
        id: 'internxt',
        symbol: 'inxt',
        addr: '0xa8006c4ca56f24d6836727d106349320db7fef82',
    },
    {
        id: 'interop',
        symbol: 'trop',
        addr: '0x2ec75589856562646afe393455986cad26c4cc5f',
    },
    {
        id: 'intervalue',
        symbol: 'inve',
        addr: '0xdac4ae188ace3c8985765edc6c9b4739d4845ddc',
    },
    {
        id: 'intexcoin',
        symbol: 'intx',
        addr: '0x7533d63a2558965472398ef473908e1320520ae2',
    },
    {
        id: 'inventoryclub',
        symbol: 'vnt',
        addr: '0xe912b8ba2513d7e29b7b2e5b14398dbf77503fb4',
    },
    {
        id: 'inverse-finance',
        symbol: 'inv',
        addr: '0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68',
    },
    {
        id: 'invictus-hyprion-fund',
        symbol: 'ihf',
        addr: '0xaf1250fa68d7decd34fd75de8742bc03b29bd58e',
    },
    {
        id: 'invizion',
        symbol: 'nvzn',
        addr: '0x99963ee76c886fc43d5063428ff8f926e8a50985',
    },
    {
        id: 'ionchain-token',
        symbol: 'ionc',
        addr: '0xbc647aad10114b89564c0a7aabe542bd0cf2c5af',
    },
    {
        id: 'ioox-system',
        symbol: 'ioox',
        addr: '0xf6923f7d96fc22c4b8010a865e41cf7edfb6379c',
    },
    {
        id: 'iot-chain',
        symbol: 'itc',
        addr: '0x5e6b6d9abad9093fdc861ea1600eba1b355cd940',
    },
    {
        id: 'iown',
        symbol: 'iown',
        addr: '0x555d051538c7a13712f1f590fa6b4c176ca4529f',
    },
    {
        id: 'ipchain',
        symbol: 'ipc',
        addr: '0x622cd54deb2bb7a051515192417109bcf3fe098f',
    },
    {
        id: 'iqeon',
        symbol: 'iqn',
        addr: '0x0db8d8b76bc361bacbb72e2c491e06085a97ab31',
    },
    {
        id: 'iqoniq',
        symbol: 'iqq',
        addr: '0x68a9d92fe19399feebed6a9a0980a7ea7638074c',
    },
    {
        id: 'isalcoin',
        symbol: 'isal',
        addr: '0x8e12bd795d2608f90440c84dddd2d985240696d5',
    },
    {
        id: 'ishop-plus',
        symbol: 'isp',
        addr: '0x3db1678170418d1014012f855e2dda492f35c289',
    },
    {
        id: 'ishop-token',
        symbol: 'ist',
        addr: '0x7a4d70528c0b8d376c206b0fb2c9db1d26315c2d',
    },
    {
        id: 'isiklar-coin',
        symbol: 'isikc',
        addr: '0x42726d074bba68ccc15200442b72afa2d495a783',
    },
    {
        id: 'island-coin',
        symbol: 'isle',
        addr: '0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1',
    },
    {
        id: 'ispolink',
        symbol: 'isp',
        addr: '0xc8807f0f5ba3fa45ffbdc66928d71c5289249014',
    },
    {
        id: 'istardust',
        symbol: 'isdt',
        addr: '0xf2354f740f31704820f6fcfba70b9da065459b62',
    },
    {
        id: 'italian-lira',
        symbol: 'itl',
        addr: '0x122a86b5dff2d085afb49600b4cd7375d0d94a5f',
    },
    {
        id: 'iten',
        symbol: 'iten',
        addr: '0x65b678936c489a2639036755aa2107ec09569198',
    },
    {
        id: 'iteration-syndicate',
        symbol: 'ITS',
        addr: '0xc32cc5b70bee4bd54aa62b9aefb91346d18821c4',
    },
    {
        id: 'iungo',
        symbol: 'ing',
        addr: '0x24ddff6d8b8a42d835af3b440de91f3386554aa4',
    },
    {
        id: 'ivy-mining',
        symbol: 'ivy',
        addr: '0x829067d40a8d1233927891d9b3381d6aecee1e80',
    },
    {
        id: 'ixrp',
        symbol: 'ixrp',
        addr: '0x27269b3e45a4d3e79a3d6bfee0c8fb13d0d711a6',
    },
    {
        id: 'ixtz',
        symbol: 'ixtz',
        addr: '0xc2992b2c22238f296c2f429ee2f7afb462ed1750',
    },
    {
        id: 'ize',
        symbol: 'ize',
        addr: '0x6944d3e38973c4831da24e954fbd790c7e688bdd',
    },
    {
        id: 'izeroium',
        symbol: 'izer',
        addr: '0xab5c04bbe42667610a2da07ac98ea9fa6e4a9514',
    },
    {
        id: 'izichain',
        symbol: 'izi',
        addr: '0xdf59c8ba19b4d1437d80836b45f1319d9a429eed',
    },
    {
        id: 'jack-token',
        symbol: 'jack',
        addr: '0x4e12eb8e506ccd1427f6b8f7faa3e88fb698eb28',
    },
    {
        id: 'jarvis',
        symbol: 'jar',
        addr: '0xa249de6948022783765fee4850d7b85e43118fcc',
    },
    {
        id: 'jarvis-reward-token',
        symbol: 'jrt',
        addr: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
    },
    {
        id: 'jarvis-synthetic-british-pound',
        symbol: 'jgbp',
        addr: '0x7409856cae628f5d578b285b45669b36e7005283',
    },
    {
        id: 'jarvis-synthetic-euro',
        symbol: 'jeur',
        addr: '0x0f17bc9a994b87b5225cfb6a2cd4d667adb4f20b',
    },
    {
        id: 'jarvis-synthetic-swiss-franc',
        symbol: 'jchf',
        addr: '0x53dfea0a8cc2a2a2e425e1c174bc162999723ea0',
    },
    {
        id: 'javascript-token',
        symbol: 'js',
        addr: '0x5046e860ff274fb8c66106b0ffb8155849fb0787',
    },
    {
        id: 'jboxcoin',
        symbol: 'jbx',
        addr: '0x884e3902c4d5cfa86de4ace7a96aa91ebc25c0ff',
    },
    {
        id: 'jd-coin',
        symbol: 'jdc',
        addr: '0x2fe39f22eac6d3c1c86dd9d143640ebb94609fce',
    },
    {
        id: 'jejudoge',
        symbol: 'jejudoge',
        addr: '0x939a7a577d93ad29b64c1595b1284ce660a479b9',
    },
    {
        id: 'jem',
        symbol: 'jem',
        addr: '0x21cf09bc065082478dcc9ccb5fd215a978dc8d86',
    },
    {
        id: 'jemoo-community',
        symbol: 'jmc',
        addr: '0x4b6628c5396e0740630e3c597cc47f2185002e43',
    },
    {
        id: 'jenny-metaverse-dao-token',
        symbol: 'uJENNY',
        addr: '0xa499648fd0e80fd911972bbeb069e4c20e68bf22',
    },
    {
        id: 'jetcoin',
        symbol: 'jet',
        addr: '0x8727c112c712c4a03371ac87a74dd6ab104af768',
    },
    {
        id: 'jewel',
        symbol: 'jwl',
        addr: '0x8275ebf521dc217aa79c88132017a5bcef001dd9',
    },
    {
        id: 'jfin-coin',
        symbol: 'jfin',
        addr: '0x940bdcb99a0ee5fb008a606778ae87ed9789f257',
    },
    {
        id: 'jiaozi',
        symbol: 'jiaozi',
        addr: '0x94939d55000b31b7808904a80aa7bab05ef59ed6',
    },
    {
        id: 'jigstack',
        symbol: 'stak',
        addr: '0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13',
    },
    {
        id: 'jinbi-token',
        symbol: 'jnb',
        addr: '0x21d5a14e625d767ce6b7a167491c2d18e0785fda',
    },
    {
        id: 'jindoge',
        symbol: 'jindoge',
        addr: '0x3f4cd830543db25254ec0f05eac058d4d6e86166',
    },
    {
        id: 'jllone',
        symbol: 'jll',
        addr: '0x5661c46e366570360064ae1a50a17a7a1a8f3236',
    },
    {
        id: 'jmtime',
        symbol: 'jmt',
        addr: '0xda022ca91df99413e8cb0caab4d1cba4e9018bea',
    },
    {
        id: 'jntre',
        symbol: 'jntr/e',
        addr: '0x1368452bfb5cd127971c8de22c58fbe89d35a6bf',
    },
    {
        id: 'jobchain',
        symbol: 'job',
        addr: '0xdfbc9050f5b01df53512dcc39b4f2b2bbacd517a',
    },
    {
        id: 'joint',
        symbol: 'joint',
        addr: '0x347c099f110ca6761779329d2879957b606b6ace',
    },
    {
        id: 'jomon-shiba',
        symbol: 'jshiba',
        addr: '0x1426cc6d52d1b14e2b3b1cb04d57ea42b39c4c7c',
    },
    {
        id: 'joon',
        symbol: 'joon',
        addr: '0x174897edd3ce414084a009d22db31c7b7826400d',
    },
    {
        id: 'joorschain',
        symbol: 'jic',
        addr: '0xf07376f0e3bff57116ed62e5e8e2bb1341e4b4c2',
    },
    {
        id: 'joos-protocol',
        symbol: 'joos',
        addr: '0x05f9abf4b0c5661e83b92c056a8791d5ccd7ca52',
    },
    {
        id: 'joyso',
        symbol: 'joy',
        addr: '0xdde12a12a6f67156e0da672be05c374e1b0a3e57',
    },
    {
        id: 'joytube-token',
        symbol: 'jtt',
        addr: '0xe9ed705842bd7219a963e452c41be85ce5cff884',
    },
    {
        id: 'jpyq-stablecoin-by-q-dao-v1',
        symbol: 'jpyq',
        addr: '0x558a069a3a1a1e72398607b9e3577fce1c67ea63',
    },
    {
        id: 'jubi-token',
        symbol: 'jt',
        addr: '0xeb7355c2f217b3485a591332fe13c8c5a76a581d',
    },
    {
        id: 'juggernaut',
        symbol: 'jgn',
        addr: '0x73374ea518de7addd4c2b624c0e8b113955ee041',
    },
    {
        id: 'juiice',
        symbol: 'jui',
        addr: '0x2cae31d2ca104a951654456f46168bc9f88fdc65',
    },
    {
        id: 'jul',
        symbol: 'jul',
        addr: '0x5580ab97f226c324c671746a1787524aef42e415',
    },
    {
        id: 'julien',
        symbol: 'julien',
        addr: '0xe6710e0cda178f3d921f456902707b0d4c4a332b',
    },
    {
        id: 'junca-cash',
        symbol: 'jcc',
        addr: '0xea7aa1edd21735a5ab05ee3e90869016191e274e',
    },
    {
        id: 'jupiter',
        symbol: 'jup',
        addr: '0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8',
    },
    {
        id: 'jurasaur',
        symbol: 'jrex',
        addr: '0x638155f4bd8f85d401da32498d8866ee39a150b8',
    },
    {
        id: 'justbet',
        symbol: 'winr',
        addr: '0x27460aac4b005de72e2326bd8391c27fb41780f8',
    },
    {
        id: 'just-network',
        symbol: 'jus',
        addr: '0x14ca41eecd7d81d5d13098586c0d2314eba285be',
    },
    {
        id: 'k21',
        symbol: 'k21',
        addr: '0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af',
    },
    {
        id: 'kaaso',
        symbol: 'kaaso',
        addr: '0xf6bf74a97d78f2242376769ef1e79885cf1f0c1c',
    },
    {
        id: 'kambria',
        symbol: 'kat',
        addr: '0x14da230d6726c50f759bc1838717f8ce6373509c',
    },
    {
        id: 'kambria-yield-tuning-engine',
        symbol: 'kyte',
        addr: '0xa053c1b7013e77fe0a873ce0ca2bd5d0b7414c41',
    },
    {
        id: 'kan',
        symbol: 'kan',
        addr: '0x1410434b0346f5be678d0fb554e5c7ab620f8f4a',
    },
    {
        id: 'kanadecoin',
        symbol: 'kndc',
        addr: '0x8e5610ab5e39d26828167640ea29823fe1dd5843',
    },
    {
        id: 'kangal',
        symbol: 'kangal',
        addr: '0x6e765d26388a17a6e86c49a8e41df3f58abcd337',
    },
    {
        id: 'kansas-city-chiefs-win-super-bowl',
        symbol: 'chiefs',
        addr: '0xffc16ab7d366273466c705f03cfeaca8dd964f89',
    },
    {
        id: 'kanva',
        symbol: 'knv',
        addr: '0x5935ffc231e93ac04daa089c0f1b94d0fb2449de',
    },
    {
        id: 'karaganda-token',
        symbol: 'krg',
        addr: '0x32a8cd4d04d5f2e5de30ad73ef0a377eca2fdd98',
    },
    {
        id: 'karatgold-coin',
        symbol: 'kbc',
        addr: '0xd67b1db49801b6f4c96a01a4f7964233150dc58b',
    },
    {
        id: 'kardiachain',
        symbol: 'kai',
        addr: '0xd9ec3ff1f8be459bb9369b4e79e9ebcf7141c093',
    },
    {
        id: 'karma-dao',
        symbol: 'karma',
        addr: '0xdfe691f37b6264a90ff507eb359c45d55037951c',
    },
    {
        id: 'katalyo',
        symbol: 'ktlyo',
        addr: '0x24e3794605c84e580eea4972738d633e8a7127c8',
    },
    {
        id: 'katana-finance',
        symbol: 'katana',
        addr: '0xe6410569602124506658ff992f258616ea2d4a3d',
    },
    {
        id: 'kattana',
        symbol: 'ktn',
        addr: '0x491e136ff7ff03e6ab097e54734697bb5802fc1c',
    },
    {
        id: 'kawanggawa',
        symbol: 'kgw',
        addr: '0x55eb5288c9b65037a4cd2289637f38a4f9db3a6b',
    },
    {
        id: 'kdag',
        symbol: 'kdag',
        addr: '0x95e40e065afb3059dcabe4aaf404c1f92756603a',
    },
    {
        id: 'keanu-inu',
        symbol: 'keanu',
        addr: '0x106552c11272420aad5d7e94f8acab9095a6c952',
    },
    {
        id: 'keep3rv1',
        symbol: 'kp3r',
        addr: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
    },
    {
        id: 'keep4r',
        symbol: 'kp4r',
        addr: '0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e',
    },
    {
        id: 'keep-calm',
        symbol: 'kch',
        addr: '0xdb80734b094a3f964dedfd10e8946753ae0ac04c',
    },
    {
        id: 'keep-network',
        symbol: 'keep',
        addr: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',
    },
    {
        id: 'kefi-token',
        symbol: 'kfi',
        addr: '0x3b0e1508fae33ffba8d3ea64851cf98c02f1c61b',
    },
    {
        id: 'keisuke-inu',
        symbol: '$kei',
        addr: '0xc0114f14638a333a4d5c3b04f09b96372348a842',
    },
    {
        id: 'kelvpn',
        symbol: 'kel',
        addr: '0x4abb9cc67bd3da9eb966d1159a71a0e68bd15432',
    },
    {
        id: 'kerman',
        symbol: 'kerman',
        addr: '0x7841b2a48d1f6e78acec359fed6d874eb8a0f63c',
    },
    {
        id: 'key',
        symbol: 'key',
        addr: '0x4cd988afbad37289baaf53c13e98e2bd46aaea8c',
    },
    {
        id: 'keyfi',
        symbol: 'keyfi',
        addr: '0xb8647e90c0645152fccf4d9abb6b59eb4aa99052',
    },
    {
        id: 'keysians-network',
        symbol: 'ken',
        addr: '0x6a7ef4998eb9d0f706238756949f311a59e05745',
    },
    {
        id: 'keytango',
        symbol: 'tango',
        addr: '0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef',
    },
    {
        id: 'khipu-token',
        symbol: 'kip',
        addr: '0x64e65d352f6a2949463b3a7595911b61bbafc63e',
    },
    {
        id: 'ki',
        symbol: 'xki',
        addr: '0x4f6103bad230295bacf30f914fda7d4273b7f585',
    },
    {
        id: 'kickico',
        symbol: 'kick',
        addr: '0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e',
    },
    {
        id: 'kids-cash',
        symbol: 'kash',
        addr: '0x2c50ba1ed5e4574c1b613b044bd1876f0b0b87a9',
    },
    {
        id: 'kiloample',
        symbol: 'kmpl',
        addr: '0xe8d17542dfe79ff4fbd4b850f2d39dc69c4489a2',
    },
    {
        id: 'kimchi-finance',
        symbol: 'kimchi',
        addr: '0x1e18821e69b9faa8e6e75dffe54e7e25754beda0',
    },
    {
        id: 'kimex',
        symbol: 'kmx',
        addr: '0x9b8c184439245b7bb24a5b2ec51ec81c39589e8a',
    },
    {
        id: 'kind-ads-token',
        symbol: 'kind',
        addr: '0x4618519de4c304f3444ffa7f812dddc2971cc688',
    },
    {
        id: 'kineko',
        symbol: 'kko',
        addr: '0x368c5290b13caa10284db58b4ad4f3e9ee8bf4c9',
    },
    {
        id: 'kine-protocol',
        symbol: 'kine',
        addr: '0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d',
    },
    {
        id: 'king-authur',
        symbol: 'bking',
        addr: '0x1ca02dd95f3f1e33da7f5afe15ea866dab07af04',
    },
    {
        id: 'king-maker-coin',
        symbol: 'kmc',
        addr: '0xed79e6dd91324f6af138f01967bd24233d642a24',
    },
    {
        id: 'king-swap',
        symbol: '$king',
        addr: '0xd2057d71fe3f5b0dc1e3e7722940e1908fc72078',
    },
    {
        id: 'kingxchain',
        symbol: 'kxc',
        addr: '0x016396044709eb3edc69c44f4d5fa6996917e4e8',
    },
    {
        id: 'kira-network',
        symbol: 'kex',
        addr: '0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8',
    },
    {
        id: 'kirobo',
        symbol: 'kiro',
        addr: '0xb1191f691a355b43542bea9b8847bc73e7abb137',
    },
    {
        id: 'kishu-inu',
        symbol: 'kishu',
        addr: '0xa2b4c0af19cc16a6cfacce81f192b024d625817d',
    },
    {
        id: 'kitcoin',
        symbol: 'ktc',
        addr: '0x9827f6e8df0ccc584ff7b37144de8bac7c446385',
    },
    {
        id: 'kittenfinance',
        symbol: 'kif',
        addr: '0x177ba0cac51bfc7ea24bad39d81dcefd59d74faa',
    },
    {
        id: 'kittoken',
        symbol: 'kit',
        addr: '0x080eb7238031f97ff011e273d6cad5ad0c2de532',
    },
    {
        id: 'kiwi-token',
        symbol: 'kiwi',
        addr: '0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d',
    },
    {
        id: 'kleekai',
        symbol: 'klee',
        addr: '0x382f0160c24f5c515a19f155bac14d479433a407',
    },
    {
        id: 'kleros',
        symbol: 'pnk',
        addr: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    },
    {
        id: 'klondike-bond',
        symbol: 'kbond',
        addr: '0xa8c2af8c403704a31f32f0aa70a43e63afcd54d0',
    },
    {
        id: 'klondike-btc',
        symbol: 'kbtc',
        addr: '0xe6c3502997f97f9bde34cb165fbce191065e068f',
    },
    {
        id: 'klondike-finance',
        symbol: 'klon',
        addr: '0xb97d5cf2864fb0d08b34a484ff48d5492b2324a0',
    },
    {
        id: 'klondike-finance-v2',
        symbol: 'klonx',
        addr: '0xbf15797bb5e47f6fb094a4abdb2cfc43f77179ef',
    },
    {
        id: 'knekted',
        symbol: 'knt',
        addr: '0x7cc62d8e80be9bea3947f3443ad136f50f75b505',
    },
    {
        id: 'koinos',
        symbol: 'koin',
        addr: '0x66d28cb58487a7609877550e1a34691810a6b9fc',
    },
    {
        id: 'koji',
        symbol: 'koji',
        addr: '0x1c8266a4369af6d80df2659ba47b3c98f35cb8be',
    },
    {
        id: 'kok-coin',
        symbol: 'kok',
        addr: '0x7bd6a4e7db3a34c485a8dd02b30b6565e3bbc633',
    },
    {
        id: 'kokoswap',
        symbol: 'koko',
        addr: '0x7c3e3eae4d893d11c61e74d5187c962ba5744a3b',
    },
    {
        id: 'komet',
        symbol: 'komet',
        addr: '0x6cfb6df56bbdb00226aeffcdb2cd1fe8da1abda7',
    },
    {
        id: 'kompass',
        symbol: 'komp',
        addr: '0x41bc0913ed789428e107c4ea9ed007815c5a8230',
    },
    {
        id: 'kong-defi',
        symbol: 'kong',
        addr: '0x7c3cf2d43b50e78e27a81293a43fcac45796fb54',
    },
    {
        id: 'konomi-network',
        symbol: 'kono',
        addr: '0x850aab69f0e0171a9a49db8be3e71351c8247df4',
    },
    {
        id: 'kora-network',
        symbol: 'knt',
        addr: '0xff5c25d2f40b47c4a37f989de933e26562ef0ac0',
    },
    {
        id: 'kper-network',
        symbol: 'kper',
        addr: '0xc89b4a8a121dd3e726fe7515e703936cf83e3350',
    },
    {
        id: 'kpop-coin',
        symbol: 'kpop',
        addr: '0x7b7983967409fce461ea8bbdf9ed37631b1d59c9',
    },
    {
        id: 'krios',
        symbol: 'GIG',
        addr: '0x838d8e11b160dec88fe62bf0f743fb7000941e13',
    },
    {
        id: 'kronn',
        symbol: 'krex',
        addr: '0x9588fc24a9796fbd870951a2cd54c6f1f24b2e7c',
    },
    {
        id: 'kryll',
        symbol: 'krl',
        addr: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
    },
    {
        id: 'krypton-token',
        symbol: 'kgc',
        addr: '0xa8262eb913fccea4c3f77fc95b8b4043b384cfbb',
    },
    {
        id: 'kskin',
        symbol: 'ksk',
        addr: '0x44bbb689aa13315ea5d56ebda2d263e53cb4b0b7',
    },
    {
        id: 'kstarcoin',
        symbol: 'ksc',
        addr: '0x990e081a7b7d3ccba26a2f49746a68cc4ff73280',
    },
    {
        id: 'k-tune',
        symbol: 'ktt',
        addr: '0x14cc8dfaf2258e1b8b2869300dba1b734dc0fe43',
    },
    {
        id: 'kuaitoken',
        symbol: 'kt',
        addr: '0x26ddf6cabadcbf4f013841bd8d914830beb0d984',
    },
    {
        id: 'kublaicoin',
        symbol: 'kub',
        addr: '0xc59cb23295e2deeb66bd090acb6b02be8d30a11f',
    },
    {
        id: 'kubocoin',
        symbol: 'kubo',
        addr: '0x4f76e85d067e219779a863ff18577846b3152f1f',
    },
    {
        id: 'kucoin-shares',
        symbol: 'kcs',
        addr: '0xf34960d9d60be18cc1d5afc1a6f012a723a28811',
    },
    {
        id: 'kuende',
        symbol: 'kue',
        addr: '0xdf1338fbafe7af1789151627b886781ba556ef9a',
    },
    {
        id: 'kuky-star',
        symbol: 'kuky',
        addr: '0xe6b7743e2b9aa2d0a9b163c4e69186abb57817d9',
    },
    {
        id: 'kuma-inu',
        symbol: 'kuma',
        addr: '0xb525ecee288b99216cd481c56b6efbdbe9bf90b5',
    },
    {
        id: 'kupp',
        symbol: 'kupp',
        addr: '0xc6c6224cf32f5b0850ddf740b47cd1ed31abead4',
    },
    {
        id: 'kush-finance',
        symbol: 'kseed',
        addr: '0x3f09400313e83d53366147e3ea0e4e2279d80850',
    },
    {
        id: 'kuverit',
        symbol: 'kuv',
        addr: '0xf70d160102cf7a22c1e432d6928a9d625db91170',
    },
    {
        id: 'kvi',
        symbol: 'kvi',
        addr: '0x8868ff4893113193313465a0ccc5f1bd370d7751',
    },
    {
        id: 'kwhcoin',
        symbol: 'kwh',
        addr: '0xb8ddc930c2bab6c71610a2be639036e829f9c10b',
    },
    {
        id: 'kwikswap-protocol',
        symbol: 'kwik',
        addr: '0x286c0936c7eaf6651099ab5dab9ee5a6cb5d229d',
    },
    {
        id: 'kxusd',
        symbol: 'kxusd',
        addr: '0x43244c686a014c49d3d5b8c4b20b4e3fab0cbda7',
    },
    {
        id: 'kyber-network',
        symbol: 'kncl',
        addr: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    },
    {
        id: 'kyber-network-crystal',
        symbol: 'knc',
        addr: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
    },
    {
        id: 'kylin-network',
        symbol: 'kyl',
        addr: '0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c',
    },
    {
        id: 'labracoin',
        symbol: 'labra',
        addr: '0x106d3c66d22d2dd0446df23d7f5960752994d600',
    },
    {
        id: 'labs-group',
        symbol: 'labs',
        addr: '0x8b0e42f366ba502d787bb134478adfae966c8798',
    },
    {
        id: 'lady-luck',
        symbol: 'luck',
        addr: '0x0955a73d014f0693ac7b53cfe77706dab02b3ef9',
    },
    {
        id: 'ladz',
        symbol: 'ladz',
        addr: '0x1287c0509df9a475ef178471ab2132b9dfd312b3',
    },
    {
        id: 'laika-protocol',
        symbol: 'laika',
        addr: '0x0bffc5692960bb043d3216839bdd6e5e64ff1b4e',
    },
    {
        id: 'lambda',
        symbol: 'lamb',
        addr: '0x8971f9fd7196e5cee2c1032b50f656855af7dd26',
    },
    {
        id: 'lance-coin',
        symbol: 'lce',
        addr: '0x2c644c3bbea053ed95a6bc04a94c9ce928ff9881',
    },
    {
        id: 'latamcash',
        symbol: 'lmch',
        addr: '0x9205c049c231dda51bace0ba569f047e3e1e9979',
    },
    {
        id: 'latex-chain',
        symbol: 'lxc',
        addr: '0x6a404a3386655bd8b63e584f2efd2e3fb60e70f8',
    },
    {
        id: 'latino-token',
        symbol: 'latino',
        addr: '0x567287d4f42086beab4b36de9af21c70adec6760',
    },
    {
        id: 'latiumx',
        symbol: 'latx',
        addr: '0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9',
    },
    {
        id: 'latoken',
        symbol: 'la',
        addr: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
    },
    {
        id: 'lattice-token',
        symbol: 'ltx',
        addr: '0xa393473d64d2f9f026b60b6df7859a689715d092',
    },
    {
        id: 'launchpool',
        symbol: 'lpool',
        addr: '0x6149c26cd2f7b5ccdb32029af817123f6e37df5b',
    },
    {
        id: 'lbk',
        symbol: 'lbk',
        addr: '0x9cb1aeafcc8a9406632c5b084246ea72f62d37b6',
    },
    {
        id: 'lcg',
        symbol: 'lcg',
        addr: '0x6e1a58e7e9e801f32bb82462636a8a2e7b65e036',
    },
    {
        id: 'lcx',
        symbol: 'lcx',
        addr: '0x037a54aab062628c9bbae1fdb1583c195585fe41',
    },
    {
        id: 'lead-token',
        symbol: 'lead',
        addr: '0x1dd80016e3d4ae146ee2ebb484e8edd92dacc4ce',
    },
    {
        id: 'leash',
        symbol: 'leash',
        addr: '0x27c70cd1946795b66be9d954418546998b546634',
    },
    {
        id: 'ledgerscore',
        symbol: 'led',
        addr: '0x72de803b67b6ab05b61efab2efdcd414d16ebf6d',
    },
    {
        id: 'legal-block',
        symbol: 'lbk',
        addr: '0xd9af2d11d788da0097076f4eb21bd1c5533743d9',
    },
    {
        id: 'legends-room',
        symbol: 'more',
        addr: '0x305de070488c8469dfac957226c9c900c4bfba22',
    },
    {
        id: 'legolas-exchange',
        symbol: 'lgo',
        addr: '0x0a50c93c762fdd6e56d86215c24aaad43ab629aa',
    },
    {
        id: 'lemochain',
        symbol: 'lemo',
        addr: '0x60c24407d01782c2175d32fe7c8921ed732371d1',
    },
    {
        id: 'lemon-bet',
        symbol: 'lbet',
        addr: '0x932d447274dcffb4aea4f0944d3c804e88056416',
    },
    {
        id: 'lemond',
        symbol: 'lemd',
        addr: '0xf45f6c8bb3d77ea762175b8f7ca4d251941649fa',
    },
    {
        id: 'lendefi',
        symbol: 'LDFI',
        addr: '0x5479d565e549f3ecdbde4ab836d02d86e0d6a8c7',
    },
    {
        id: 'lendingblock',
        symbol: 'lnd',
        addr: '0x0947b0e6d821378805c9598291385ce7c791a6b2',
    },
    {
        id: 'lendroid-support-token',
        symbol: 'lst',
        addr: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
    },
    {
        id: 'leo-token',
        symbol: 'leo',
        addr: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    },
    {
        id: 'lepard-coin',
        symbol: 'lp',
        addr: '0x14d9444f6b9d55caba5d73f15bea947695c11c82',
    },
    {
        id: 'lepricon',
        symbol: 'l3p',
        addr: '0xdef1da03061ddd2a5ef6c59220c135dec623116d',
    },
    {
        id: 'less-network',
        symbol: 'less',
        addr: '0x62786eeacc9246b4018e0146cb7a3efeacd9459d',
    },
    {
        id: 'level01-derivatives-exchange',
        symbol: 'lvx',
        addr: '0x261638ec8ee8100484130ebd2febfdadc0d8742a',
    },
    {
        id: 'levelapp',
        symbol: 'lvl',
        addr: '0xa8eda9d4aee0eb882f8752c6ba7e16d9233c9ad2',
    },
    {
        id: 'leverj',
        symbol: 'lev',
        addr: '0x0f4ca92660efad97a9a70cb0fe969c755439772c',
    },
    {
        id: 'leverj-gluon',
        symbol: 'l2',
        addr: '0xbbff34e47e559ef680067a6b1c980639eeb64d24',
    },
    {
        id: 'lever-network',
        symbol: 'lev',
        addr: '0xbc194e6f748a222754c3e8b9946922c09e7d4e91',
    },
    {
        id: 'levolution',
        symbol: 'levl',
        addr: '0x09970aec766b6f3223aca9111555e99dc50ff13a',
    },
    {
        id: 'lgcy-network',
        symbol: 'lgcy',
        addr: '0xae697f994fc5ebc000f8e22ebffee04612f98a0d',
    },
    {
        id: 'lhcoin',
        symbol: 'lhcoin',
        addr: '0x0778cc2e8bbad3d483e82371606d100cc8604522',
    },
    {
        id: 'libartysharetoken',
        symbol: 'lst',
        addr: '0x355376d6471e09a4ffca8790f50da625630c5270',
    },
    {
        id: 'libera',
        symbol: 'lib',
        addr: '0x0bf6261297198d91d4fa460242c69232146a5703',
    },
    {
        id: 'libertas-token',
        symbol: 'libertas',
        addr: '0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90',
    },
    {
        id: 'libfx',
        symbol: 'libfx',
        addr: '0xc0ea83113038987d974fe667831a36e442e661e7',
    },
    {
        id: 'libra-2',
        symbol: 'lc',
        addr: '0x8aa2af3df13bb6f0cb922bd34446d65244733ad0',
    },
    {
        id: 'libra-credit',
        symbol: 'lba',
        addr: '0xfe5f141bf94fe84bc28ded0ab966c16b17490657',
    },
    {
        id: 'librefreelencer',
        symbol: 'libref',
        addr: '0x449efe48ad7cd423bab056276639f8120cd4f9a3',
    },
    {
        id: 'lido-dao',
        symbol: 'ldo',
        addr: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
    },
    {
        id: 'lien',
        symbol: 'lien',
        addr: '0xab37e1358b639fd877f015027bb62d3ddaa7557e',
    },
    {
        id: 'lift-kitchen',
        symbol: 'lift',
        addr: '0xf9209d900f7ad1dc45376a2caa61c78f6dea53b6',
    },
    {
        id: 'lift-kitchen-eth',
        symbol: 'lfeth',
        addr: '0xe09b10efa59f6e17052e9a2d947bad6214e7cc90',
    },
    {
        id: 'lift-kitchen-lfbtc',
        symbol: 'lfbtc',
        addr: '0xafce9b78d409bf74980cacf610afb851bf02f257',
    },
    {
        id: 'limestone-network',
        symbol: 'limex',
        addr: '0x400b1d8a7dd8c471026b2c8cbe1062b27d120538',
    },
    {
        id: 'limitswap',
        symbol: 'limit',
        addr: '0x1712aad2c773ee04bdc9114b32163c058321cd85',
    },
    {
        id: 'lina',
        symbol: 'lina',
        addr: '0xc05d14442a510de4d3d71a3d316585aa0ce32b50',
    },
    {
        id: 'linear',
        symbol: 'lina',
        addr: '0x3e9bc21c9b189c09df3ef1b824798658d5011937',
    },
    {
        id: 'linfinity',
        symbol: 'lfc',
        addr: '0xe0c8087ce1a17bdd5d6c12eb52f8d7eff7791987',
    },
    {
        id: 'linix',
        symbol: 'lnx',
        addr: '0x5e3845a1d78db544613edbe43dc1ea497266d3b8',
    },
    {
        id: 'linka',
        symbol: 'linka',
        addr: '0x578b49c45961f98d8df92854b53f1641af0a5036',
    },
    {
        id: 'linkart',
        symbol: 'lar',
        addr: '0x6226caa1857afbc6dfb6ca66071eb241228031a1',
    },
    {
        id: 'linkbased',
        symbol: 'lbd',
        addr: '0xb15ae165000c8d7b69d2a82e425e110668c73ad5',
    },
    {
        id: 'linkcoin-token',
        symbol: 'lkn',
        addr: '0x9f549ebfd4974cd4ed4a1550d40394b44a7382aa',
    },
    {
        id: 'linker-coin',
        symbol: 'lnc',
        addr: '0x6beb418fc6e1958204ac8baddcf109b8e9694966',
    },
    {
        id: 'link-eth-growth-alpha-set',
        symbol: 'lega',
        addr: '0xc166f976ce9926a3205b145af104eb0e4b38b5c0',
    },
    {
        id: 'link-eth-long-only-alpha-portfolio',
        symbol: 'leloap',
        addr: '0x8a63be90f095f6777be3ed25d9fc7cd2a63ddb30',
    },
    {
        id: 'link-eth-rsi-ratio-trading-set',
        symbol: 'linkethrsi',
        addr: '0x8933ea1ce67b946bdf2436ce860ffbb53ce814d2',
    },
    {
        id: 'linkeye',
        symbol: 'let',
        addr: '0xfa3118b34522580c35ae27f6cf52da1dbb756288',
    },
    {
        id: 'linkflow',
        symbol: 'lf',
        addr: '0x88665a7556e1b3c939d6661248116886845249a8',
    },
    {
        id: 'link-platform',
        symbol: 'lnk',
        addr: '0xe2e6d4be086c6938b53b22144855eef674281639',
    },
    {
        id: 'linkpool',
        symbol: 'lpl',
        addr: '0x99295f1141d58a99e939f7be6bbe734916a875b8',
    },
    {
        id: 'link-profit-taker-set',
        symbol: 'linkpt',
        addr: '0x78e29d35573bea6265aedfcb9f45481b717ebfde',
    },
    {
        id: 'link-rsi-crossover-set',
        symbol: 'linkrsico',
        addr: '0x0329d23fc7b1b1e6cca57afa3f0090f1189069e8',
    },
    {
        id: 'linkusd',
        symbol: 'linkusd',
        addr: '0x0e2ec54fc0b509f445631bf4b91ab8168230c752',
    },
    {
        id: 'lipchain',
        symbol: 'lips',
        addr: '0xc67d5cfb933c4a1c6d2ca4cbdae2ed9f017ee9e5',
    },
    {
        id: 'liquid-bank',
        symbol: 'liq',
        addr: '0xe6a9e1bec166f50eda336d02df2662d4eb8ab23c',
    },
    {
        id: 'liquid-defi',
        symbol: 'liq',
        addr: '0x72ca0501427bb8f089c1c4f767cb17d017e803a9',
    },
    {
        id: 'liquidity-bot-token',
        symbol: 'liq',
        addr: '0x44fd55aeb7420b4fd275e19d6f0674a6f91ad356',
    },
    {
        id: 'liquidity-dividends-protocol',
        symbol: 'LID',
        addr: '0x0417912b3a7af768051765040a55bb0925d4ddcf',
    },
    {
        id: 'liquidity-network',
        symbol: 'lqd',
        addr: '0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4',
    },
    {
        id: 'liquid-lottery-rtc',
        symbol: 'liqlo',
        addr: '0x59ad6061a0be82155e7acce9f0c37bf59f9c1e3c',
    },
    {
        id: 'liquity',
        symbol: 'lqty',
        addr: '0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d',
    },
    {
        id: 'liquity-usd',
        symbol: 'lusd',
        addr: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
    },
    {
        id: 'litbinex-coin',
        symbol: 'ltb',
        addr: '0xa105c740bc012a43a342ab4a0ef40143452c8e89',
    },
    {
        id: 'litecoin-sv',
        symbol: 'lsv',
        addr: '0xee059f0ca1507e4e20c689b20cff71b5e924f7bd',
    },
    {
        id: 'litecoin-token',
        symbol: 'ltk',
        addr: '0x8a732bc91c33c167f868e0af7e6f31e0776d0f71',
    },
    {
        id: 'litegold',
        symbol: 'ltg',
        addr: '0xb4c9abc8a74bd2e0e0b7ac5ece30792e65d86c59',
    },
    {
        id: 'litentry',
        symbol: 'lit',
        addr: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    },
    {
        id: 'litex',
        symbol: 'lxt',
        addr: '0xbc46d9961a3932f7d6b64abfdec80c1816c4b835',
    },
    {
        id: 'lith-token',
        symbol: 'lith',
        addr: '0xf8a4a419c2d7140e49ef952a7e7ae1bd4a8b6b9c',
    },
    {
        id: 'lition',
        symbol: 'lit',
        addr: '0x763fa6806e1acf68130d2d0f0df754c93cc546b2',
    },
    {
        id: 'littlesesame',
        symbol: 'lsc',
        addr: '0xc77d7e0dd7b2a01b990e866feb21d031f1418c2e',
    },
    {
        id: 'livenpay',
        symbol: 'lvn',
        addr: '0xc8cac7672f4669685817cf332a33eb249f085475',
    },
    {
        id: 'livepeer',
        symbol: 'lpt',
        addr: '0x58b6a8a3302369daec383334672404ee733ab239',
    },
    {
        id: 'live-swap-coin',
        symbol: 'dsc',
        addr: '0x048eb9b9c08e2df45644cf0db1fcb3e866c401ad',
    },
    {
        id: 'lixir-protocol',
        symbol: 'lix',
        addr: '0xd0345d30fd918d7682398acbcdf139c808998709',
    },
    {
        id: 'lnko-token',
        symbol: 'lnko',
        addr: '0x11afe7fa792589dd1236257f99ba09f510460ad9',
    },
    {
        id: 'load-network',
        symbol: 'load',
        addr: '0xa883e72c12473ded50a5fbffa60e4000fa5fe3c8',
    },
    {
        id: 'loanburst',
        symbol: 'lburst',
        addr: '0x93ecd2ecdfb91ab2fee28a8779a6adfe2851cda6',
    },
    {
        id: 'loa-protocol',
        symbol: 'loa',
        addr: '0x7458fd786b2fe8cd801c0381f88b61c5071a006f',
    },
    {
        id: 'localcoinswap',
        symbol: 'lcs',
        addr: '0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8',
    },
    {
        id: 'locgame',
        symbol: 'locg',
        addr: '0x60eb57d085c59932d5faa6c6026268a4386927d0',
    },
    {
        id: 'lockchain',
        symbol: 'loc',
        addr: '0x5e3346444010135322268a4630d2ed5f8d09446c',
    },
    {
        id: 'lock-token',
        symbol: 'lock',
        addr: '0xb9464ef80880c5aea54c7324c0b8dd6ca6d05a90',
    },
    {
        id: 'loltoken',
        symbol: 'lol',
        addr: '0x5978708d6cce1cc9640eed47422d64c91bbd5171',
    },
    {
        id: 'loom-network',
        symbol: 'loomold',
        addr: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    },
    {
        id: 'loom-network-new',
        symbol: 'loom',
        addr: '0x42476f744292107e34519f9c357927074ea3f75d',
    },
    {
        id: 'loon-network',
        symbol: 'loon',
        addr: '0x7c5d5100b339fe7d995a893af6cb496b9474373c',
    },
    {
        id: 'loopring',
        symbol: 'lrc',
        addr: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    },
    {
        id: 'lossless',
        symbol: 'lss',
        addr: '0x3b9be07d622accaed78f479bc0edabfd6397e320',
    },
    {
        id: 'lotoblock',
        symbol: 'loto',
        addr: '0xf947b0824c3995787efc899017a36bc9f281265e',
    },
    {
        id: 'lotto',
        symbol: 'lotto',
        addr: '0xb0dfd28d3cf7a5897c694904ace292539242f858',
    },
    {
        id: 'lottonation',
        symbol: 'lnt',
        addr: '0x3a73f6156c4fbc71b8fdf38090a9d99401163644',
    },
    {
        id: 'lovechain',
        symbol: 'lov',
        addr: '0xe3c864307b5592404431649de541c259497e2bd1',
    },
    {
        id: 'low-orbit-crypto-cannon',
        symbol: 'locc',
        addr: '0x556938621c19e5eae58c94a806da9d237b969bd8',
    },
    {
        id: 'lp-3pool-curve',
        symbol: '3crv',
        addr: '0x6c3f90f043a72fa612cbac8115ee7e52bde6e490',
    },
    {
        id: 'lp-renbtc-curve',
        symbol: 'renbtcCurve',
        addr: '0x49849c98ae39fff122806c06791fa73784fb3675',
    },
    {
        id: 'lp-scurve',
        symbol: 'sCurve',
        addr: '0xc25a3a3b969415c80451098fa907ec722572917f',
    },
    {
        id: 'lto-network',
        symbol: 'lto',
        addr: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
    },
    {
        id: 'lua-token',
        symbol: 'lua',
        addr: '0xb1f66997a5760428d3a87d68b90bfe0ae64121cc',
    },
    {
        id: 'luckstar',
        symbol: 'lst',
        addr: '0x681ecc5a0bfd18c308a1138ff607f818bac5e417',
    },
    {
        id: 'lucky-2',
        symbol: 'lucky',
        addr: '0xe478d4f4a87d4d641af97ca0b5cc3db61e266357',
    },
    {
        id: 'luckyseventoken',
        symbol: 'lst',
        addr: '0x6b9f1f092e0b10015a4391a80cd3e6b6cefd1728',
    },
    {
        id: 'ludena-protocol',
        symbol: 'ldn',
        addr: '0xb29663aa4e2e81e425294193616c1b102b70a158',
    },
    {
        id: 'ludos',
        symbol: 'lud',
        addr: '0xe64b47931f28f89cc7a0c6965ecf89eadb4975f5',
    },
    {
        id: 'lukki-operating-token',
        symbol: 'lot',
        addr: '0x6556d2ec4d96da39cf75cbe50d58fae90079800a',
    },
    {
        id: 'lukso-token',
        symbol: 'lyxe',
        addr: '0xa8b919680258d369114910511cc87595aec0be6d',
    },
    {
        id: 'lukutex',
        symbol: 'lkt',
        addr: '0x243c56e8e740025ac6b112d7b9af59be8eef6e33',
    },
    {
        id: 'lumos',
        symbol: 'LMS',
        addr: '0x034455c8a9882bf44c9704c780a55198e05ba559',
    },
    {
        id: 'lunch-money',
        symbol: 'lmy',
        addr: '0x66fd97a78d8854fec445cd1c80a07896b0b4851f',
    },
    {
        id: 'lung-protocol',
        symbol: 'l2p',
        addr: '0xee0f286776639cd363da810daf3e0623f82576b0',
    },
    {
        id: 'lunyr',
        symbol: 'lun',
        addr: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9',
    },
    {
        id: 'lux-bio-exchange-coin',
        symbol: 'lbxc',
        addr: '0xffe510a92434a0df346c5e72a3494b043cf249eb',
    },
    {
        id: 'lux-expression',
        symbol: 'lux',
        addr: '0x88dafebb769311d7fbbeb9a21431fa026d4100d0',
    },
    {
        id: 'luxurious-pro-network-token',
        symbol: 'lpnt',
        addr: '0x6a4c76874e686a7d080d173987a35a9c48905583',
    },
    {
        id: 'luxurium',
        symbol: 'lxmt',
        addr: '0x61c320935da31552b0d0de515ddee964267c4764',
    },
    {
        id: 'lyfe-gold',
        symbol: 'lgold',
        addr: '0x27778e14ce36d3b85e1effeb43816a17bbb7088a',
    },
    {
        id: 'lyfe-land',
        symbol: 'lland',
        addr: '0xe5bf6790d138b154f1df3db8d245be46a5d05ee4',
    },
    {
        id: 'lyfe-silver',
        symbol: 'lsilver',
        addr: '0xd64809f5f7d772d9112a6bd379de00a77188199e',
    },
    {
        id: 'lympo',
        symbol: 'lym',
        addr: '0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5',
    },
    {
        id: 'lynchpin_token',
        symbol: 'lyn',
        addr: '0xb0b1685f55843d03739c7d9b0a230f1b7dcf03d5',
    },
    {
        id: 'lync-network',
        symbol: 'lync',
        addr: '0x8f87ec6aad3b2a8c44f1298a1af56169b8e574cf',
    },
    {
        id: 'lyze',
        symbol: 'lze',
        addr: '0xfe69bc0920fb63c5924cfc322dc4a5cc23d9afed',
    },
    {
        id: 'mach',
        symbol: 'mach',
        addr: '0xb119ce94d098c18fe380904c24e358bd887f00be',
    },
    {
        id: 'machix',
        symbol: 'mcx',
        addr: '0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8',
    },
    {
        id: 'mad-network',
        symbol: 'mad',
        addr: '0x5b09a0371c1da44a8e24d36bf5deb1141a84d875',
    },
    {
        id: 'maecenas',
        symbol: 'art',
        addr: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e',
    },
    {
        id: 'maggie',
        symbol: 'mag',
        addr: '0x647f274b3a7248d6cf51b35f08e7e7fd6edfb271',
    },
    {
        id: 'magic-e-stock',
        symbol: 'msb',
        addr: '0x2bc586ffbfa2d6e9c30d5ad95d546091db7607cf',
    },
    {
        id: 'magnachain',
        symbol: 'mgc',
        addr: '0xa6eb54102f20095679882db4c84e72e65ab782a4',
    },
    {
        id: 'mahadao',
        symbol: 'maha',
        addr: '0xb4d930279552397bba2ee473229f89ec245bc365',
    },
    {
        id: 'maincoin',
        symbol: 'mnc',
        addr: '0x9f0f1be08591ab7d990faf910b38ed5d60e4d5bf',
    },
    {
        id: 'mainframe',
        symbol: 'mft',
        addr: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
    },
    {
        id: 'mainstream-for-the-underground',
        symbol: 'mftu',
        addr: '0xba745513acebcbb977497c569d4f7d340f2a936b',
    },
    {
        id: 'maker',
        symbol: 'mkr',
        addr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    },
    {
        id: 'makes',
        symbol: 'mks',
        addr: '0xcff20ce22e71ecf2ea89c86ecbd4a3cf513768c7',
    },
    {
        id: 'malamute-finance',
        symbol: 'mally',
        addr: '0xa3e7833775a9cc022db2c72eb900378f90ce89b4',
    },
    {
        id: 'mandala-exchange-token',
        symbol: 'mdx',
        addr: '0x947aeb02304391f8fbe5b25d7d98d649b57b1788',
    },
    {
        id: 'mandi-token',
        symbol: 'mandi',
        addr: '0x5aa485e6b794bcf5f834bf5c7ff43b9b83322764',
    },
    {
        id: 'mangochain',
        symbol: 'mgp',
        addr: '0x8a845fc339ceb022a695281554890429a34df120',
    },
    {
        id: 'mangu',
        symbol: 'mnguz',
        addr: '0x66af49ebaeefed6f0f43df48142341391f3f25c1',
    },
    {
        id: 'manifold-finance',
        symbol: 'fold',
        addr: '0xd084944d3c05cd115c09d072b9f44ba3e0e45921',
    },
    {
        id: 'mantra-dao',
        symbol: 'om',
        addr: '0x3593d125a4f7849a1b059e64f4517a86dd60c95d',
    },
    {
        id: 'many',
        symbol: 'many',
        addr: '0xab7aaf9e485a3bc885985184abe9fc6aba727bd6',
    },
    {
        id: 'maple',
        symbol: 'mpl',
        addr: '0x33349b282065b0284d756f0577fb39c158f935e6',
    },
    {
        id: 'marblecoin',
        symbol: 'mbc',
        addr: '0x8888889213dd4da823ebdd1e235b09590633c150',
    },
    {
        id: 'marcopolo',
        symbol: 'map',
        addr: '0x9e976f211daea0d652912ab99b0dc21a7fd728e4',
    },
    {
        id: 'marginswap',
        symbol: 'mfi',
        addr: '0xaa4e3edb11afa93c41db59842b29de64b72e355b',
    },
    {
        id: 'margix',
        symbol: 'mgx',
        addr: '0x1412f6aa5adc77c620715bb2a020aa690b85f68a',
    },
    {
        id: 'mario-cash-jan-2021',
        symbol: 'mario-cash-jan-2021',
        addr: '0x84bd083b1c8bf929f39c98bc17cf518f40154f58',
    },
    {
        id: 'markaccy',
        symbol: 'MKCY',
        addr: '0xf3281c539716a08c754ec4c8f2b4cee0fab64bb9',
    },
    {
        id: 'marketpeak',
        symbol: 'peak',
        addr: '0x630d98424efe0ea27fb1b3ab7741907dffeaad78',
    },
    {
        id: 'markyt',
        symbol: 'mar',
        addr: '0xa9080bf7c8e55f2af5c6603243d5865f4f328715',
    },
    {
        id: 'marlin',
        symbol: 'pond',
        addr: '0x57b946008913b82e4df85f501cbaed910e58d26c',
    },
    {
        id: 'mar-network',
        symbol: 'mars',
        addr: '0xedd8da5c20eb014e550008df3304213dde5e29f0',
    },
    {
        id: 'mars',
        symbol: 'mars',
        addr: '0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7',
    },
    {
        id: 'marshal-lion-group-coin',
        symbol: 'mlgc',
        addr: '0x4534492034a2cd3eab34c8f357cd139c95b09f52',
    },
    {
        id: 'mask-network',
        symbol: 'mask',
        addr: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
    },
    {
        id: 'masq',
        symbol: 'masq',
        addr: '0x06f3c323f0238c72bf35011071f2b5b7f43a054c',
    },
    {
        id: 'mass-vehicle-ledger',
        symbol: 'mvl',
        addr: '0xa849eaae994fb86afa73382e9bd88c2b6b18dc71',
    },
    {
        id: 'masternet',
        symbol: 'mash',
        addr: '0xa0d440c6da37892dc06ee7930b2eede0634fd681',
    },
    {
        id: 'master-usd',
        symbol: 'musd',
        addr: '0xa52383b665b91dce42dd4b6d1e0fb37d3effe489',
    },
    {
        id: 'matchpool',
        symbol: 'gup',
        addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c',
    },
    {
        id: 'math',
        symbol: 'math',
        addr: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
    },
    {
        id: 'matic-network',
        symbol: 'matic',
        addr: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    },
    {
        id: 'matrexcoin',
        symbol: 'mac',
        addr: '0xc3e2de0b661cf58f66bde8e896905399ded58af5',
    },
    {
        id: 'matrix-ai-network',
        symbol: 'man',
        addr: '0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d',
    },
    {
        id: 'matryx',
        symbol: 'mtx',
        addr: '0x0af44e2784637218dd1d32a322d44e603a8f0c6a',
    },
    {
        id: 'max-token',
        symbol: 'max',
        addr: '0xe7976c4efc60d9f4c200cc1bcef1a1e3b02c73e7',
    },
    {
        id: 'maya-coin',
        symbol: 'maya',
        addr: '0x14468ff6b324f1c5a869e62b9c442846e7d0baf1',
    },
    {
        id: 'maya-preferred-223',
        symbol: 'mayp',
        addr: '0x7cda79830faf07ed696fe220566116951ced36a7',
    },
    {
        id: 'mbm-token',
        symbol: 'mbm',
        addr: '0x281f5b914b0d589f8193cd5e711c6920874e00c8',
    },
    {
        id: 'mcdex',
        symbol: 'mcb',
        addr: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
    },
    {
        id: 'mch-coin',
        symbol: 'mchc',
        addr: '0xd69f306549e9d96f183b1aeca30b8f4353c2ecc3',
    },
    {
        id: 'mci-coin',
        symbol: 'mci',
        addr: '0x3b58c52c03ca5eb619eba171091c86c34d603e5f',
    },
    {
        id: 'mdsquare',
        symbol: 'tmed',
        addr: '0xd32641191578ea9b208125ddd4ec5e7b84fcab4c',
    },
    {
        id: 'measurable-data-token',
        symbol: 'mdt',
        addr: '0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26',
    },
    {
        id: 'media-licensing-token',
        symbol: 'mlt',
        addr: '0x9506d37f70eb4c3d79c398d326c871abbf10521d',
    },
    {
        id: 'medibit',
        symbol: 'medibit',
        addr: '0x737fa0372c8d001904ae6acaf0552d4015f9c947',
    },
    {
        id: 'medicalchain',
        symbol: 'mtn',
        addr: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3',
    },
    {
        id: 'medical-token-currency',
        symbol: 'mtc',
        addr: '0x905e337c6c8645263d3521205aa37bf4d034e745',
    },
    {
        id: 'medicalveda',
        symbol: 'mveda',
        addr: '0xcbe7142f5c16755d8683ba329efa1abf7b54482d',
    },
    {
        id: 'medican-coin',
        symbol: 'mcan',
        addr: '0x72ba699f0f3c29d0f886c264ec7350533a32b3d5',
    },
    {
        id: 'medikey',
        symbol: 'mkey',
        addr: '0xe154d54890c35634ca525d543ed58c741af7cf7a',
    },
    {
        id: 'medishares',
        symbol: 'mds',
        addr: '0x66186008c1050627f979d464eabb258860563dbe',
    },
    {
        id: 'medium',
        symbol: 'mdm',
        addr: '0xd24dff6117936b6ff97108cf26c1dd8865743d87',
    },
    {
        id: 'medooza-ecosystem',
        symbol: 'mdza',
        addr: '0x0ecdd783dc7bf820614044b51862ed29714d2ba5',
    },
    {
        id: 'meetple',
        symbol: 'mpt',
        addr: '0x47481c1b44f2a1c0135c45aa402ce4f4dde4d30e',
    },
    {
        id: 'megabonk',
        symbol: 'mbonk',
        addr: '0xacfe45c352c902ae3a3f9b6bfe6ec994c5d791bf',
    },
    {
        id: 'megacryptopolis',
        symbol: 'mega',
        addr: '0x3218a02f8f8b5c3894ce30eb255f10bcba13e654',
    },
    {
        id: 'melalie',
        symbol: 'mel',
        addr: '0xed0889f7e1c7c7267407222be277e1f1ef4d4892',
    },
    {
        id: 'meliora',
        symbol: 'mora',
        addr: '0xb64cd4f56043f8d80691433e395d08b1bebdadf0',
    },
    {
        id: 'melon',
        symbol: 'mln',
        addr: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    },
    {
        id: 'membrana-platform',
        symbol: 'mbn',
        addr: '0x4eeea7b48b9c3ac8f70a9c932a8b1e8a5cb624c7',
    },
    {
        id: 'meme-cash',
        symbol: 'mch',
        addr: '0xa4e7414fcba1af15203030c6daac630df8f16aea',
    },
    {
        id: 'menapay',
        symbol: 'mpay',
        addr: '0x3810a4ddf41e586fa0dba1463a7951b748cecfca',
    },
    {
        id: 'menlo-one',
        symbol: 'one',
        addr: '0x4d807509aece24c0fa5a102b6a3b059ec6e14392',
    },
    {
        id: 'merchdao',
        symbol: 'mrch',
        addr: '0xbed4ab0019ff361d83ddeb74883dac8a70f5ea1e',
    },
    {
        id: 'merculet',
        symbol: 'mvp',
        addr: '0x8a77e40936bbc27e80e9a3f526368c967869c86d',
    },
    {
        id: 'mercurity-finance',
        symbol: 'mee',
        addr: '0xe1b583dc66e0a24fd9af2dc665f6f5e48978e106',
    },
    {
        id: 'meridian-network',
        symbol: 'lock',
        addr: '0x95172ccbe8344fecd73d0a30f54123652981bd6f',
    },
    {
        id: 'meschain',
        symbol: 'mes',
        addr: '0x8f1135ea4f8946949441716d66e5390c5a990df0',
    },
    {
        id: 'mesefa',
        symbol: 'sefa',
        addr: '0x27201232579491ce9b116ac6f37d354cc723a2f3',
    },
    {
        id: 'meshbox',
        symbol: 'mesh',
        addr: '0xcf9fbffec9e0e5bbc62e79bf1965f5db76955661',
    },
    {
        id: 'meta',
        symbol: 'mta',
        addr: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
    },
    {
        id: 'metadium',
        symbol: 'meta',
        addr: '0xde2f7766c8bf14ca67193128535e5c7454f8387c',
    },
    {
        id: 'metagame',
        symbol: 'seed',
        addr: '0x30cf203b48edaa42c3b4918e955fed26cd012a3f',
    },
    {
        id: 'metal',
        symbol: 'mtl',
        addr: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
    },
    {
        id: 'metamorph',
        symbol: 'metm',
        addr: '0xfef3884b603c33ef8ed4183346e093a173c94da6',
    },
    {
        id: 'meta-network',
        symbol: 'meta',
        addr: '0x8807e69dc04155af64172cd6f0b4738f8068d0d4',
    },
    {
        id: 'metaprediction',
        symbol: 'metp',
        addr: '0x108d27f9c4b2a98c025c94c76ca78c6ce6c7a4eb',
    },
    {
        id: 'metaverse-index',
        symbol: 'mvi',
        addr: '0x72e364f2abdc788b7e918bc238b21f109cd634d7',
    },
    {
        id: 'metaverse-nft-index',
        symbol: 'PLAY',
        addr: '0x33e18a092a93ff21ad04746c7da12e35d34dc7c4',
    },
    {
        id: 'metawhale-btc',
        symbol: 'mwbtc',
        addr: '0x3521c85c3000bff57eac04489eb05bbd3193a531',
    },
    {
        id: 'metawhale-gold',
        symbol: 'MWG',
        addr: '0x45128cb743951121fb70cb570c0784492732778a',
    },
    {
        id: 'meteorite-network',
        symbol: 'meteor',
        addr: '0x765baefcb5418fa9f7dddacb1ccc07bd0e890e4e',
    },
    {
        id: 'meter-governance-mapped-by-meter-io',
        symbol: 'eMTRG',
        addr: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
    },
    {
        id: 'method-fi',
        symbol: 'mthd',
        addr: '0x84ba4aecfde39d69686a841bab434c32d179a169',
    },
    {
        id: 'metis',
        symbol: 'mts',
        addr: '0xa9598333b99d14d90bc81cad8af82c4c70625e75',
    },
    {
        id: 'metric-exchange',
        symbol: 'metric',
        addr: '0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac',
    },
    {
        id: 'metronome',
        symbol: 'met',
        addr: '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e',
    },
    {
        id: 'mettalex',
        symbol: 'mtlx',
        addr: '0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14',
    },
    {
        id: 'mex',
        symbol: 'mex',
        addr: '0x2ba6b1e4424e19816382d15937739959f7da5fd8',
    },
    {
        id: 'mexc-token',
        symbol: 'mexc',
        addr: '0x7de2d123042994737105802d2abd0a10a7bde276',
    },
    {
        id: 'mgc-token',
        symbol: 'mgc',
        addr: '0x174bfa6600bf90c885c7c01c7031389ed1461ab9',
    },
    {
        id: 'miami',
        symbol: 'miami',
        addr: '0x74303d9d085a0d647ef47f9c0c424c73f3bfa6ca',
    },
    {
        id: 'mib-coin',
        symbol: 'mib',
        addr: '0x146d8d942048ad517479c9bab1788712af180fde',
    },
    {
        id: 'micro-blood-science',
        symbol: 'mbs',
        addr: '0x53893a4a67d4392ebebdf1a683e98e1c577ab6c1',
    },
    {
        id: 'microchain',
        symbol: 'mb',
        addr: '0x7ab1fc79f319718690e9c883bac910f8e289ce8f',
    },
    {
        id: 'micromines',
        symbol: 'micro',
        addr: '0xbe6c8f2810ef39420d2dc2901b8414c8c45fee6d',
    },
    {
        id: 'micromoney',
        symbol: 'amm',
        addr: '0x8b1f49491477e0fb46a29fef53f1ea320d13c349',
    },
    {
        id: 'microtuber',
        symbol: 'mct',
        addr: '0x6876eba317272fe221c67405c5e8eb3b24535547',
    },
    {
        id: 'midas-protocol',
        symbol: 'mas',
        addr: '0x23ccc43365d9dd3882eab88f43d515208f832430',
    },
    {
        id: 'migranet',
        symbol: 'mig',
        addr: '0x05a78ffea2b35aa1af438c21cf06668cf118df0a',
    },
    {
        id: 'miks-coin',
        symbol: 'miks',
        addr: '0xfbaf48e57cab46f4c2e03edb90a421d9fc6c7cbf',
    },
    {
        id: 'mileverse',
        symbol: 'mvc',
        addr: '0x581911b360b6eb3a14ef295a83a91dc2bce2d6f7',
    },
    {
        id: 'millimeter',
        symbol: 'mm',
        addr: '0xc3c221fe28c33814c28c822b631fd76047ef1a63',
    },
    {
        id: 'mindol',
        symbol: 'min',
        addr: '0x5d64d850c8368008afb39224e92ad0dceff3cf38',
    },
    {
        id: 'minds',
        symbol: 'minds',
        addr: '0xb26631c6dda06ad89b93c71400d25692de89c068',
    },
    {
        id: 'minebee',
        symbol: 'mb',
        addr: '0x8d8129963291740dddd917ab01af18c7aed4ba58',
    },
    {
        id: 'minereum',
        symbol: 'mne',
        addr: '0x426ca1ea2406c07d75db9585f22781c096e3d0e0',
    },
    {
        id: 'mini',
        symbol: 'mini',
        addr: '0x4d953cf077c0c95ba090226e59a18fcf97db44ec',
    },
    {
        id: 'minibitcoin',
        symbol: 'mbtc',
        addr: '0x7e8c149f70437eba6785f9059190a5b08abf03de',
    },
    {
        id: 'minter-hub',
        symbol: 'hub',
        addr: '0x8e9a29e7ed21db7c5b2e1cd75e676da0236dfb45',
    },
    {
        id: 'minty-art',
        symbol: 'minty',
        addr: '0xb6c6920327b33f8eec26786c7462c5f4098d47e3',
    },
    {
        id: 'miraqle',
        symbol: 'mql',
        addr: '0x428dc22668e6f3468273634067e5545ed5417a3e',
    },
    {
        id: 'mirocana',
        symbol: 'miro',
        addr: '0x0168703872fa06741ecaa9dff7803168e83f7ae0',
    },
    {
        id: 'mirrored-alibaba',
        symbol: 'mbaba',
        addr: '0x56aa298a19c93c6801fdde870fa63ef75cc0af72',
    },
    {
        id: 'mirrored-amazon',
        symbol: 'mamzn',
        addr: '0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7',
    },
    {
        id: 'mirrored-apple',
        symbol: 'maapl',
        addr: '0xd36932143f6ebdedd872d5fb0651f4b72fd15a84',
    },
    {
        id: 'mirrored-facebook',
        symbol: 'mfb',
        addr: '0x0e99cc0535bb6251f6679fa6e65d6d3b430e840b',
    },
    {
        id: 'mirrored-google',
        symbol: 'mgoogl',
        addr: '0x59a921db27dd6d4d974745b7ffc5c33932653442',
    },
    {
        id: 'mirrored-invesco-qqq-trust',
        symbol: 'mqqq',
        addr: '0x13b02c8de71680e71f0820c996e4be43c2f57d15',
    },
    {
        id: 'mirrored-ishares-gold-trust',
        symbol: 'miau',
        addr: '0x1d350417d9787e000cc1b95d70e9536dcd91f373',
    },
    {
        id: 'mirrored-ishares-silver-trust',
        symbol: 'mslv',
        addr: '0x9d1555d8cb3c846bb4f7d5b1b1080872c3166676',
    },
    {
        id: 'mirrored-microsoft',
        symbol: 'mmsft',
        addr: '0x41bbedd7286daab5910a1f15d12cbda839852bd7',
    },
    {
        id: 'mirrored-netflix',
        symbol: 'mnflx',
        addr: '0xc8d674114bac90148d11d3c1d33c61835a0f9dcd',
    },
    {
        id: 'mirrored-proshares-vix',
        symbol: 'mvixy',
        addr: '0xf72fcd9dcf0190923fadd44811e240ef4533fc86',
    },
    {
        id: 'mirrored-tesla',
        symbol: 'mtsla',
        addr: '0x21ca39943e91d704678f5d00b6616650f066fd63',
    },
    {
        id: 'mirrored-twitter',
        symbol: 'mtwtr',
        addr: '0xedb0414627e6f1e3f082de65cd4f9c693d78cca9',
    },
    {
        id: 'mirrored-united-states-oil-fund',
        symbol: 'muso',
        addr: '0x31c63146a635eb7465e5853020b39713ac356991',
    },
    {
        id: 'mirror-protocol',
        symbol: 'mir',
        addr: '0x09a3ecafa817268f77be1283176b946c4ff2e608',
    },
    {
        id: 'misbloc',
        symbol: 'msb',
        addr: '0x84c722e6f1363e8d5c6db3ea600bef9a006da824',
    },
    {
        id: 'miss',
        symbol: 'miss',
        addr: '0xe653967f0beb6e313c6350f20bca9a5f4c636eed',
    },
    {
        id: 'mith-cash',
        symbol: 'mic',
        addr: '0xeed0c8d2da6d243329a6f4a8c2ac61a59ecbfa02',
    },
    {
        id: 'mithril',
        symbol: 'mith',
        addr: '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb',
    },
    {
        id: 'mithril-share',
        symbol: 'mis',
        addr: '0x024b6e7dc26f4d5579bdd936f8d7bc31f2339999',
    },
    {
        id: 'mixmarvel',
        symbol: 'mix',
        addr: '0x5d285f735998f36631f678ff41fb56a10a4d0429',
    },
    {
        id: 'mixsome',
        symbol: 'some',
        addr: '0x3e8ffc8c3cb0db3081df85dec91b63abbbe99f71',
    },
    {
        id: 'mixtrust',
        symbol: 'mxt',
        addr: '0x6251e725cd45fb1af99354035a414a2c0890b929',
    },
    {
        id: 'mmaon',
        symbol: 'mmaon',
        addr: '0x8315472bae77f9a2b856a67eb0796480aafcd51c',
    },
    {
        id: 'mm-token',
        symbol: 'mm',
        addr: '0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304',
    },
    {
        id: 'mnmcoin',
        symbol: 'mnmc',
        addr: '0xf45091f25d374bbe956c0bb64bb85e02d07aa741',
    },
    {
        id: 'moar',
        symbol: 'moar',
        addr: '0x187eff9690e1f1a61d578c7c492296eaab82701a',
    },
    {
        id: 'mobiecoin',
        symbol: 'mbx',
        addr: '0x71ba91dc68c6a206db0a6a92b4b1de3f9271432d',
    },
    {
        id: 'mobifi',
        symbol: 'mofi',
        addr: '0xb2dbf14d0b47ed3ba02bdb7c954e05a72deb7544',
    },
    {
        id: 'mobilego',
        symbol: 'mgo',
        addr: '0x40395044ac3c0c57051906da938b54bd6557f212',
    },
    {
        id: 'mobilian-coin',
        symbol: 'mbn',
        addr: '0xaf80951201a0eff85a0fd3adf4c7043db856d3e6',
    },
    {
        id: 'mobilink-coin',
        symbol: 'molk',
        addr: '0x97cb5cc1b2e10cc56dc16ab9179f06dfedbe41a2',
    },
    {
        id: 'mochi-market',
        symbol: 'moma',
        addr: '0xbd1848e1491d4308ad18287a745dd4db2a4bd55b',
    },
    {
        id: 'modefi',
        symbol: 'mod',
        addr: '0xea1ea0972fa092dd463f2968f9bb51cc4c981d71',
    },
    {
        id: 'model-x-coin',
        symbol: 'modx',
        addr: '0x3c6da7763caa0e4b684bbc733f04a8ec08af3762',
    },
    {
        id: 'modex',
        symbol: 'modex',
        addr: '0x4bcea5e4d0f6ed53cf45e7a28febb2d3621d7438',
    },
    {
        id: 'modum',
        symbol: 'mod',
        addr: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e',
    },
    {
        id: 'moeda-loyalty-points',
        symbol: 'mda',
        addr: '0x51db5ad35c671a87207d88fc11d593ac0c8415bd',
    },
    {
        id: 'mogu',
        symbol: 'mogx',
        addr: '0xbdec45952b5e234eddc2981b43eed360826d5087',
    },
    {
        id: 'mogul-productions',
        symbol: 'stars',
        addr: '0xc55c2175e90a46602fd42e931f62b3acc1a013ca',
    },
    {
        id: 'moji-experience-points',
        symbol: 'mexp',
        addr: '0xde201daec04ba73166d9917fdf08e1728e270f06',
    },
    {
        id: 'molecular-future',
        symbol: 'mof',
        addr: '0x653430560be843c4a3d143d0110e896c2ab8ac0d',
    },
    {
        id: 'molten',
        symbol: 'mol',
        addr: '0x1443e7c1cce72662545d94779120c59251447e91',
    },
    {
        id: 'momentum',
        symbol: 'XMM',
        addr: '0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4',
    },
    {
        id: 'monavale',
        symbol: 'mona',
        addr: '0x275f5ad03be0fa221b4c6649b8aee09a42d9412a',
    },
    {
        id: 'monetha',
        symbol: 'mth',
        addr: '0xaf4dce16da2877f8c9e00544c93b62ac40631f16',
    },
    {
        id: 'moneybrain-bips',
        symbol: 'bips',
        addr: '0x5cb888182fbffdb62c08fb4b5a343914f00fdfee',
    },
    {
        id: 'money-cash-miner',
        symbol: 'mcm',
        addr: '0x3b3801f0fc76528e42390df701f513fc62cbf154',
    },
    {
        id: 'moneynet',
        symbol: 'mnc',
        addr: '0xbac7a1798350cdf2dbfe0c210c2c9861223f4b31',
    },
    {
        id: 'money-party',
        symbol: 'party',
        addr: '0x314bd765cab4774b2e547eb0aa15013e03ff74d2',
    },
    {
        id: 'money-printer-go-brrr-set',
        symbol: 'brrr',
        addr: '0x8abf3a95862619a55fa00cb3e4eedbe113ff468c',
    },
    {
        id: 'moneyswap',
        symbol: 'mswap',
        addr: '0xc005204856ee7035a13d8d7cdbbdc13027afff90',
    },
    {
        id: 'moneytoken',
        symbol: 'imt',
        addr: '0x13119e34e140097a507b07a5564bde1bc375d9e6',
    },
    {
        id: 'monkey-coin',
        symbol: 'mc',
        addr: '0xa38b7ee9df79955b90cc4e2de90421f6baa83a3d',
    },
    {
        id: 'monkey-king-token',
        symbol: 'mkt',
        addr: '0x16558553e4647ca500c3718c56c356edb6f9b11c',
    },
    {
        id: 'monnos',
        symbol: 'mns',
        addr: '0x53884b61963351c283118a8e1fc05ba464a11959',
    },
    {
        id: 'moonai',
        symbol: 'mooi',
        addr: '0xd3c89cac4a4283edba6927e2910fd1ebc14fe006',
    },
    {
        id: 'moonbase',
        symbol: 'mbbased',
        addr: '0x26cf82e4ae43d31ea51e72b663d26e26a75af729',
    },
    {
        id: 'moonday-finance',
        symbol: 'Moonday',
        addr: '0x1ad606adde97c0c28bd6ac85554176bc55783c01',
    },
    {
        id: 'moon-day-plus',
        symbol: 'md+',
        addr: '0xcb696c86917175dfb4f0037ddc4f2e877a9f081a',
    },
    {
        id: 'moon-juice',
        symbol: 'juice',
        addr: '0x889efb523cc39590b8483eb9491890ac71407f64',
    },
    {
        id: 'moonswap',
        symbol: 'moon',
        addr: '0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824',
    },
    {
        id: 'moontools',
        symbol: 'moons',
        addr: '0x260e63d91fccc499606bae3fe945c4ed1cf56a56',
    },
    {
        id: 'moon-yfi',
        symbol: 'myfi',
        addr: '0x1efb2286bf89f01488c6b2a22b2556c0f45e972b',
    },
    {
        id: 'morality',
        symbol: 'mo',
        addr: '0x4fd5b9b5dcc9a5d5931d007ba4ae573e760d9b64',
    },
    {
        id: 'morcrypto-coin',
        symbol: 'mor',
        addr: '0xae746520ffdb15d0505e32f1d6e9a2b4ab866572',
    },
    {
        id: 'mork',
        symbol: 'mork',
        addr: '0xf552b656022c218c26dad43ad88881fc04116f76',
    },
    {
        id: 'morpher',
        symbol: 'mph',
        addr: '0x6369c3dadfc00054a42ba8b2c09c48131dd4aa38',
    },
    {
        id: 'morpheus-labs',
        symbol: 'mitx',
        addr: '0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6',
    },
    {
        id: 'morpheus-network',
        symbol: 'mrph',
        addr: '0x7b0c06043468469967dba22d1af33d77d44056c8',
    },
    {
        id: 'moss-carbon-credit',
        symbol: 'mco2',
        addr: '0xfc98e825a2264d890f9a1e68ed50e1526abccacd',
    },
    {
        id: 'mossland',
        symbol: 'moc',
        addr: '0x865ec58b06bf6305b886793aa20a2da31d034e68',
    },
    {
        id: 'most-protocol',
        symbol: 'most',
        addr: '0x784561b89a160990f46de6db19571ca1b5f14bce',
    },
    {
        id: 'mothership',
        symbol: 'msp',
        addr: '0x68aa3f232da9bdc2343465545794ef3eea5209bd',
    },
    {
        id: 'motiv-protocol',
        symbol: 'mov',
        addr: '0x40284109c3309a7c3439111bfd93bf5e0fbb706c',
    },
    {
        id: 'moviebloc',
        symbol: 'mbl',
        addr: '0xb879da8b24c9b8685de8526cf492e954f165d74b',
    },
    {
        id: 'moviecash',
        symbol: 'mvh',
        addr: '0x45c943973e65d069906b0dc33dc31d1d7d9d09dc',
    },
    {
        id: 'mozik',
        symbol: 'moz',
        addr: '0x7bd82b320ebc28d8eb3c4f5fa2af7b14da5b90c3',
    },
    {
        id: 'mozox',
        symbol: 'mozox',
        addr: '0xea4931bfcf3260da6dbf0550e27f5c214e3c268b',
    },
    {
        id: 'mp3',
        symbol: 'mp3',
        addr: '0x018fb5af9d015af25592a014c4266a84143de7a0',
    },
    {
        id: 'mp4',
        symbol: 'mp4',
        addr: '0xe1a0da60f8802b49cc36313bafade3f9e12342fd',
    },
    {
        id: 'mstable-btc',
        symbol: 'mbtc',
        addr: '0x945facb997494cc2570096c74b5f66a3507330a1',
    },
    {
        id: 'mti-finance',
        symbol: 'mti',
        addr: '0x86d3f38edaf7e7959e5d8e6aea5ad3187b78c346',
    },
    {
        id: 'mt-pelerin-shares',
        symbol: 'mps',
        addr: '0x96c645d3d3706f793ef52c19bbace441900ed47d',
    },
    {
        id: 'mu-dank',
        symbol: 'dank',
        addr: '0x9ea1ae46c15a4164b74463bc26f8aa3b0eea2e6e',
    },
    {
        id: 'multiplier',
        symbol: 'mxx',
        addr: '0x8a6f3bf52a26a21531514e23016eeae8ba7e7018',
    },
    {
        id: 'multivac',
        symbol: 'mtv',
        addr: '0x6226e00bcac68b0fe55583b90a1d727c14fab77f',
    },
    {
        id: 'multiven',
        symbol: 'mtcn',
        addr: '0xf6117cc92d7247f605f11d4c942f0feda3399cb5',
    },
    {
        id: 'munch-token',
        symbol: 'munch',
        addr: '0x944eee930933be5e23b690c8589021ec8619a301',
    },
    {
        id: 'musd',
        symbol: 'musd',
        addr: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
    },
    {
        id: 'muse-2',
        symbol: 'muse',
        addr: '0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81',
    },
    {
        id: 'museum-of-crypto-art',
        symbol: 'moca',
        addr: '0x9ac07635ddbde5db18648c360defb00f5f22537e',
    },
    {
        id: 'mushroom',
        symbol: 'mush',
        addr: '0xea6412fb370e8d1605e6aeeaa21ad07c3c7e9f24',
    },
    {
        id: 'musk',
        symbol: 'musk',
        addr: '0x5003b168b457b663c3c18ffcf5b6a24bee8f59c7',
    },
    {
        id: 'must',
        symbol: 'must',
        addr: '0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
    },
    {
        id: 'mute',
        symbol: 'mute',
        addr: '0xa49d7499271ae71cd8ab9ac515e6694c755d400c',
    },
    {
        id: 'muzika-network',
        symbol: 'mzk',
        addr: '0x1f35a281036be57e64e7e7a2a556b4f888a1b829',
    },
    {
        id: 'mvg-token',
        symbol: 'IUT',
        addr: '0xd36a0e7b741542208ae0fbb35453c893d0136625',
    },
    {
        id: 'mvp',
        symbol: 'mvp',
        addr: '0x65fc94d99cb301c5630c485d312e6ff5edde13d0',
    },
    {
        id: 'mxc',
        symbol: 'mxc',
        addr: '0x5ca381bbfb58f0092df149bd3d243b08b9a8386e',
    },
    {
        id: 'mx-token',
        symbol: 'mx',
        addr: '0x11eef04c884e24d9b7b4760e7476d06ddf797f36',
    },
    {
        id: 'mybit-token',
        symbol: 'myb',
        addr: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
    },
    {
        id: 'mycro-ico',
        symbol: 'myo',
        addr: '0x50987e6be405ebac691f8988304562e5efc3b2ea',
    },
    {
        id: 'my-crypto-play',
        symbol: 'mcp',
        addr: '0x2186ecb39f1b765ba7d78f1c43c2e9d7fc0c1eca',
    },
    {
        id: 'my-defi-pet',
        symbol: 'dpet',
        addr: '0xfb62ae373aca027177d1c18ee0862817f9080d08',
    },
    {
        id: 'myfichain',
        symbol: 'myfi',
        addr: '0x0dfdd839cde95dabf56f0b5c5698e0159138930d',
    },
    {
        id: 'my-identity-coin',
        symbol: 'myid',
        addr: '0x5273063725a43a323300c502478c22fbb4e92c2d',
    },
    {
        id: 'mykonos-coin',
        symbol: 'myk',
        addr: '0xc8645f0d6a622e2a9a66c1db9d33b1a46b4462dc',
    },
    {
        id: 'my-neighbor-alice',
        symbol: 'alice',
        addr: '0xac51066d7bec65dc4589368da368b212745d63e8',
    },
    {
        id: 'myobu',
        symbol: 'myobu',
        addr: '0x75d12e4f91df721fafcae4c6cd1d5280381370ac',
    },
    {
        id: 'mysterium',
        symbol: 'myst',
        addr: '0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361',
    },
    {
        id: 'myteamcoin',
        symbol: 'myc',
        addr: '0xb8323cfafb0e6cc60ce332f1181d56e91ba0d8ba',
    },
    {
        id: 'mytoken',
        symbol: 'mt',
        addr: '0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc',
    },
    {
        id: 'mytvchain',
        symbol: 'mytv',
        addr: '0x45af324f53a8d7da1752dad74adc1748126d7978',
    },
    {
        id: 'mywish',
        symbol: 'wish',
        addr: '0xd123575d94a7ad9bff3ad037ae9d4d52f41a7518',
    },
    {
        id: 'myx-network',
        symbol: 'myx',
        addr: '0x2129ff6000b95a973236020bcd2b2006b0d8e019',
    },
    {
        id: 'n3rd-finance',
        symbol: 'N3RDz',
        addr: '0x32c868f6318d6334b2250f323d914bc2239e4eee',
    },
    {
        id: 'naga',
        symbol: 'ngc',
        addr: '0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131',
    },
    {
        id: 'nahmii',
        symbol: 'nii',
        addr: '0x7c8155909cd385f120a56ef90728dd50f9ccbe52',
    },
    {
        id: 'name-changing-token',
        symbol: 'nct',
        addr: '0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e',
    },
    {
        id: 'nami-corporation-token',
        symbol: 'nami',
        addr: '0x2f7b618993cc3848d6c7ed9cdd5e835e4fe22b98',
    },
    {
        id: 'nanjcoin',
        symbol: 'nanj',
        addr: '0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265',
    },
    {
        id: 'nantrade',
        symbol: 'nan',
        addr: '0xb393cd041afc1aca4c380c663793fe2c7b8a0212',
    },
    {
        id: 'naos-finance',
        symbol: 'naos',
        addr: '0x4a615bb7166210cce20e6642a6f8fb5d4d044496',
    },
    {
        id: 'napoleon-x',
        symbol: 'npx',
        addr: '0x28b5e12cce51f15594b0b91d5b5adaa70f684a02',
    },
    {
        id: 'narwhale',
        symbol: 'nawa',
        addr: '0x7d529a5b3c41126760a0fa3c1a9652d8a7a07793',
    },
    {
        id: 'natmin-pure-escrow',
        symbol: 'nat',
        addr: '0x90d46a9636b973f18186541d1b04ed3621a49cb0',
    },
    {
        id: 'nature',
        symbol: 'nat',
        addr: '0xecb79a9b7559168174c41b153997bc462b6dfe4e',
    },
    {
        id: 'ndex',
        symbol: 'ndx',
        addr: '0x1966d718a565566e8e202792658d7b5ff4ece469',
    },
    {
        id: 'ndn-link',
        symbol: 'ndn',
        addr: '0x6ec47a178a9d50d4ec4683003d8324f19ca35382',
    },
    {
        id: 'neal',
        symbol: 'neal',
        addr: '0xacce88f5a63a5e65db9aa7303720be16b556e751',
    },
    {
        id: 'nebulas',
        symbol: 'nas',
        addr: '0x5d65d971895edc438f465c17db6992698a52318d',
    },
    {
        id: 'nectar-token',
        symbol: 'nec',
        addr: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
    },
    {
        id: 'neeva-defi',
        symbol: 'nva',
        addr: '0x38f7cd43662d1cff4cc3c2c4b749f7cfed1d1db3',
    },
    {
        id: 'nemocoin',
        symbol: 'nemo',
        addr: '0x957b28f93b0e01557e21e6c564ab26ddc2d18ec5',
    },
    {
        id: 'neo-holistic-coin',
        symbol: 'nhc',
        addr: '0x62947ff43626ea26427be5ae4c7dd03b4f1ca872',
    },
    {
        id: 'neon-exchange',
        symbol: 'nex',
        addr: '0xe2dc070524a6e305ddb64d8513dc444b6a1ec845',
    },
    {
        id: 'neoworld-cash',
        symbol: 'nash',
        addr: '0x0a255f700b16c0acf5673565c757b94fb38b27f2',
    },
    {
        id: 'nest',
        symbol: 'nest',
        addr: '0x04abeda201850ac0124161f037efd70c74ddc74c',
    },
    {
        id: 'nestree',
        symbol: 'egg',
        addr: '0x65ccd72c0813ce6f2703593b633202a0f3ca6a0c',
    },
    {
        id: 'netkoin',
        symbol: 'ntk',
        addr: '0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c',
    },
    {
        id: 'netkoin-liquid',
        symbol: 'liquid',
        addr: '0xac2385e183d9301dd5e2bb08da932cbf9800dc9c',
    },
    {
        id: 'netvrk',
        symbol: 'ntvrk',
        addr: '0xfc0d6cf33e38bce7ca7d89c0e292274031b7157a',
    },
    {
        id: 'neumark',
        symbol: 'neu',
        addr: '0xa823e6722006afe99e91c30ff5295052fe6b8e32',
    },
    {
        id: 'neural-protocol',
        symbol: 'nrp',
        addr: '0x3918c42f14f2eb1168365f911f63e540e5a306b5',
    },
    {
        id: 'neurochain',
        symbol: 'ncc',
        addr: '0x5d48f293baed247a2d0189058ba37aa238bd4725',
    },
    {
        id: 'neuromorphic-io',
        symbol: 'nmp',
        addr: '0x4d6b9f281af31916a0f16d1cea2ec7384851eaab',
    },
    {
        id: 'neurotoken',
        symbol: 'ntk',
        addr: '0x69beab403438253f13b6e92db91f7fb849258263',
    },
    {
        id: 'neutrino',
        symbol: 'usdn',
        addr: '0x674c6ad92fd080e4004b2312b45f796a192d27a0',
    },
    {
        id: 'newinu',
        symbol: 'newinu',
        addr: '0x1997830b5beb723f5089bb8fc38766d419a0444d',
    },
    {
        id: 'newland',
        symbol: 'nld',
        addr: '0x48e234d2ddcb32d780971c0df7fdde25bba192de',
    },
    {
        id: 'new-landbox',
        symbol: 'land',
        addr: '0x0e2ef8aecb3c01ad5d596f1b67134e178199984d',
    },
    {
        id: 'newstoken',
        symbol: 'newos',
        addr: '0x29536b7ca7029b5cddeb03c0451715615aca35ba',
    },
    {
        id: 'newtonium',
        symbol: 'newton',
        addr: '0xae9cbe6ebf72a51c9fcea3830485614486318fd4',
    },
    {
        id: 'new-usdf',
        symbol: 'usdf',
        addr: '0x3d61e677944204cd1002202912a2b7a43a8e2823',
    },
    {
        id: 'new-year-bull',
        symbol: 'nyb',
        addr: '0x798a9055a98913835bbfb45a0bbc209438dcfd97',
    },
    {
        id: 'nexfin',
        symbol: 'nex',
        addr: '0xa7be196d92629620154291e4b90c056517489904',
    },
    {
        id: 'nexo',
        symbol: 'nexo',
        addr: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    },
    {
        id: 'nextexchange',
        symbol: 'next',
        addr: '0x377d552914e7a104bc22b4f3b6268ddc69615be7',
    },
    {
        id: 'next-level',
        symbol: 'nxl',
        addr: '0x6839ac5ea8082688b706c773d5d2afd7d503fdd4',
    },
    {
        id: 'nfta',
        symbol: 'nfta',
        addr: '0x1847e59d9c2f30c7fe0347ba3e53da1ae8a7f0e8',
    },
    {
        id: 'nftfy',
        symbol: 'nftfy',
        addr: '0xbf6ff49ffd3d104302ef0ab0f10f5a84324c091c',
    },
    {
        id: 'nftify',
        symbol: 'n1',
        addr: '0xacbd826394189cf2623c6df98a18b41fc8ffc16d',
    },
    {
        id: 'nft-index',
        symbol: 'nfti',
        addr: '0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c',
    },
    {
        id: 'nftlootbox',
        symbol: 'loot',
        addr: '0x7b3d36eb606f873a75a6ab68f8c999848b04f935',
    },
    {
        id: 'nft-platform-index',
        symbol: 'NFTP',
        addr: '0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465',
    },
    {
        id: 'nft-protocol',
        symbol: 'nft',
        addr: '0xcb8d1260f9c92a3a545d409466280ffdd7af7042',
    },
    {
        id: 'nft-rehab',
        symbol: 'rehab',
        addr: '0x6c93c838d362656430d81e150cdbe9b69ba8efc4',
    },
    {
        id: 'nft-stars',
        symbol: 'nfts',
        addr: '0x08037036451c768465369431da5c671ad9b37dbc',
    },
    {
        id: 'nft-wars',
        symbol: 'war',
        addr: '0x4d75d9e37667a2d4677ec3d74bdd9049326ad8d6',
    },
    {
        id: 'nftx',
        symbol: 'nftx',
        addr: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
    },
    {
        id: 'nftx-hashmasks-index',
        symbol: 'mask',
        addr: '0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f',
    },
    {
        id: 'nfx-coin',
        symbol: 'nfxc',
        addr: '0x2d39ec4da54329d28d230b4973f5aa27886c3aee',
    },
    {
        id: 'ngot',
        symbol: 'ngot',
        addr: '0x1ebd8d3ca115451b9b6bbaa7ee2f7b0f96e49fd8',
    },
    {
        id: 'nice',
        symbol: 'nice',
        addr: '0x53f64be99da00fec224eaf9f8ce2012149d2fc88',
    },
    {
        id: 'nickel',
        symbol: 'nickel',
        addr: '0xc4895f94340f30fc126d1149d6cbd4a5fea50890',
    },
    {
        id: 'niifi',
        symbol: 'niifi',
        addr: '0x852e5427c86a3b46dd25e5fe027bb15f53c4bcb8',
    },
    {
        id: 'nimbus',
        symbol: 'nbu',
        addr: '0xeb58343b36c7528f23caae63a150240241310049',
    },
    {
        id: 'niobium-coin',
        symbol: 'nbc',
        addr: '0x9f195617fa8fbad9540c5d113a99a0a0172aaedc',
    },
    {
        id: 'nirvana',
        symbol: 'vana',
        addr: '0x790baf0c914898c62163a61f150637d4bd180697',
    },
    {
        id: 'nitroex',
        symbol: 'ntx',
        addr: '0xfdb15e5e6799be72798b1ccfaecbf186bf73a0c4',
    },
    {
        id: 'nitrous-finance',
        symbol: 'nos',
        addr: '0x7061ee0896ab2c1865078b6c91731f67a89ea6a4',
    },
    {
        id: 'nix-bridge-token',
        symbol: 'voice',
        addr: '0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9',
    },
    {
        id: 'nkn',
        symbol: 'nkn',
        addr: '0x5cf04716ba20127f1e2297addcf4b5035000c9eb',
    },
    {
        id: 'nms-token',
        symbol: 'nmst',
        addr: '0xe2a05a52bb1582a8c436e972531cda45b45d7ff4',
    },
    {
        id: 'nnb-token',
        symbol: 'nnb',
        addr: '0xb66a2131a6b840dd020151f80723caed603efb51',
    },
    {
        id: 'noah-ark',
        symbol: 'noahark',
        addr: '0xfce94fde7ac091c2f1db00d62f15eeb82b624389',
    },
    {
        id: 'noah-coin',
        symbol: 'noahp',
        addr: '0x41b3f18c6384dc9a39c33afeca60d9b8e61eaa9f',
    },
    {
        id: 'noa-play',
        symbol: 'noa',
        addr: '0x0fd3822072ad001aac1c90a09d9506f097f24458',
    },
    {
        id: 'nobrainer-finance',
        symbol: 'brain',
        addr: '0xea3cb156745a8d281a5fc174186c976f2dd04c2e',
    },
    {
        id: 'noderunners',
        symbol: 'ndr',
        addr: '0x739763a258640919981f9ba610ae65492455be53',
    },
    {
        id: 'nodeseeds',
        symbol: 'nds',
        addr: '0x747f564d258612ec5c4e24742c5fd4110bcbe46b',
    },
    {
        id: 'noia-network',
        symbol: 'noia',
        addr: '0xa8c8cfb141a3bb59fea1e2ea6b79b5ecbcd7b6ca',
    },
    {
        id: 'noiz-chain',
        symbol: 'noiz',
        addr: '0x36151737b45017234e9570cf9a1cac97138953c2',
    },
    {
        id: 'noku',
        symbol: 'noku',
        addr: '0x1fc52f1abade452dd4674477d4711951700b3d27',
    },
    {
        id: 'non-fungible-yearn',
        symbol: 'nfy',
        addr: '0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc',
    },
    {
        id: 'noob-finance',
        symbol: '$noob',
        addr: '0x1fc05d480b1ef1175a31123bfdbd36bfee256889',
    },
    {
        id: 'noodle-finance',
        symbol: 'noodle',
        addr: '0x420ab548b18911717ed7c4ccbf46371ea758458c',
    },
    {
        id: 'nord-finance',
        symbol: 'nord',
        addr: '0x6e9730ecffbed43fd876a264c982e254ef05a0de',
    },
    {
        id: 'nosturis',
        symbol: 'ntrs',
        addr: '0xeccf15a4b5976a1365baed5297058b4ca42777c0',
    },
    {
        id: 'no-trump-augur-prediction-token',
        symbol: 'ntrump',
        addr: '0x44ea84a85616f8e9cd719fc843de31d852ad7240',
    },
    {
        id: 'nova',
        symbol: 'nova',
        addr: '0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6',
    },
    {
        id: 'novadefi',
        symbol: 'nmt',
        addr: '0xd9a6803f41a006cbf389f21e55d7a6079dfe8df3',
    },
    {
        id: 'nss-coin',
        symbol: 'nss',
        addr: '0x4e3bddd468abfc6c88bc25daa5d894380ced5bc8',
    },
    {
        id: 'nsure-network',
        symbol: 'nsure',
        addr: '0x20945ca1df56d237fd40036d47e866c7dccd2114',
    },
    {
        id: 'ntoken0031',
        symbol: 'n0031',
        addr: '0x075190c6130ea0a3a7e40802f1d77f4ea8f38fe2',
    },
    {
        id: 'nucleus-vision',
        symbol: 'ncash',
        addr: '0x809826cceab68c387726af962713b64cb5cb3cca',
    },
    {
        id: 'nuclum',
        symbol: 'nlm',
        addr: '0xa30c7cdac7d8505f32bb0930ed82b9ba5777b5f3',
    },
    {
        id: 'nuco-cloud',
        symbol: 'ncdt',
        addr: '0xe0c8b298db4cffe05d1bea0bb1ba414522b33c1b',
    },
    {
        id: 'nucypher',
        symbol: 'nu',
        addr: '0x4fe83213d56308330ec302a8bd641f1d0113a4cc',
    },
    {
        id: 'nuggets',
        symbol: 'nug',
        addr: '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1',
    },
    {
        id: 'numeraire',
        symbol: 'nmr',
        addr: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    },
    {
        id: 'nusd',
        symbol: 'susd',
        addr: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    {
        id: 'nuvo-cash',
        symbol: 'nuvo',
        addr: '0xe2db94e8d4e4144c336e45668a792d17d48a482c',
    },
    {
        id: 'nxm',
        symbol: 'nxm',
        addr: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
    },
    {
        id: 'nyantereum',
        symbol: 'nyante',
        addr: '0xc1215988f2e555ac324d1e2d2a6164f1010ff29f',
    },
    {
        id: 'nyan-v2',
        symbol: 'nyan-2',
        addr: '0xbf4a9a37ecfc21825011285222c36ab35de51f14',
    },
    {
        id: 'nydronia',
        symbol: 'nia',
        addr: '0xdb11f6fc8e16c02719e9c2eb3c4c762fee8f5c5b',
    },
    {
        id: 'o3-swap',
        symbol: 'o3',
        addr: '0xee9801669c6138e84bd50deb500827b776777d28',
    },
    {
        id: 'oasis-city',
        symbol: 'osc',
        addr: '0x24700a297960e8477ce3ca6c58b70a7af3410398',
    },
    {
        id: 'obee-network',
        symbol: 'obee',
        addr: '0x3678d8cc9eb08875a3720f34c1c8d1e1b31f5a11',
    },
    {
        id: 'obic',
        symbol: 'obic',
        addr: '0xa8b6d0bd067ce5b2e4e9e225b2e0ff5eb74ded8a',
    },
    {
        id: 'obitan-chain',
        symbol: 'obtc',
        addr: '0x8fc01e6cbdffaf09b54f423f9bb1f856b22e47b2',
    },
    {
        id: 'obortech',
        symbol: 'obot',
        addr: '0xedadeb5faa413e6c8623461849dfd0b7c3790c32',
    },
    {
        id: 'obr',
        symbol: 'obr',
        addr: '0x595643d83b35df38e29058976c04000acfa31570',
    },
    {
        id: 'occamfi',
        symbol: 'occ',
        addr: '0x2f109021afe75b949429fe30523ee7c0d5b27207',
    },
    {
        id: 'ocean-protocol',
        symbol: 'ocean',
        addr: '0x967da4048cd07ab37855c090aaf366e4ce1b9f48',
    },
    {
        id: 'octofi',
        symbol: 'octo',
        addr: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
    },
    {
        id: 'oddo-coin',
        symbol: 'odc',
        addr: '0x49e90537d5ef6778fd000d1f05be20134f9f6dc6',
    },
    {
        id: 'oddz',
        symbol: 'oddz',
        addr: '0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6',
    },
    {
        id: 'odem',
        symbol: 'ode',
        addr: '0xbf52f2ab39e26e0951d2a02b49b7702abe30406a',
    },
    {
        id: 'odin-token',
        symbol: 'odin',
        addr: '0x57c8d5d5b87a1580fdaf996cef674bb0d7f14c98',
    },
    {
        id: 'odyssey',
        symbol: 'ocn',
        addr: '0x4092678e4e78230f46a1534c0fbc8fa39780892b',
    },
    {
        id: 'offshift',
        symbol: 'xft',
        addr: '0xabe580e7ee158da464b51ee1a83ac0289622e6be',
    },
    {
        id: 'oilage',
        symbol: 'oil',
        addr: '0xa29a8e360c0cba25a3719763fde43a1ee570271d',
    },
    {
        id: 'oiler',
        symbol: 'oil',
        addr: '0x0275e1001e293c46cfe158b3702aade0b99f88a5',
    },
    {
        id: 'oin-finance',
        symbol: 'oin',
        addr: '0x9aeb50f542050172359a0e1a25a9933bc8c01259',
    },
    {
        id: 'okb',
        symbol: 'okb',
        addr: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    },
    {
        id: 'olcf',
        symbol: 'olcf',
        addr: '0xeeaa34af95b034bada4baf565063132c765b1fa5',
    },
    {
        id: 'olympus',
        symbol: 'ohm',
        addr: '0x383518188c0c6d7730d91b2c03a03c837814a899',
    },
    {
        id: 'olyseum',
        symbol: 'oly',
        addr: '0x6595b8fd9c920c81500dca94e53cdc712513fb1f',
    },
    {
        id: 'omega-protocol-money',
        symbol: 'opm',
        addr: '0xf4c17bc4979c1dc7b4ca50115358dec58c67fd9d',
    },
    {
        id: 'omisego',
        symbol: 'omg',
        addr: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    },
    {
        id: 'omnitude',
        symbol: 'ecom',
        addr: '0x171d750d42d661b62c277a6b486adb82348c3eca',
    },
    {
        id: 'omniunit',
        symbol: 'omniunit',
        addr: '0xd22dcf31ca28cf4dce530a0f120e244f4b4539eb',
    },
    {
        id: 'onbuff',
        symbol: 'onit',
        addr: '0x410e731c2970dce3add351064acf5ce9e33fdbf0',
    },
    {
        id: 'one',
        symbol: 'one',
        addr: '0x946551dd05c5abd7cc808927480225ce36d8c475',
    },
    {
        id: 'one-army-coin',
        symbol: 'oac',
        addr: '0xf17e9e4e32d842e4ddfbed5750a26f7bd77777ee',
    },
    {
        id: 'onebtc',
        symbol: 'onebtc',
        addr: '0xc88f47067db2e25851317a2fdae73a22c0777c37',
    },
    {
        id: 'one-cash',
        symbol: 'onc',
        addr: '0xd90e69f67203ebe02c917b5128629e77b4cd92dc',
    },
    {
        id: 'one-dex',
        symbol: 'odex',
        addr: '0xa960d2ba7000d58773e7fa5754dec3bb40a069d5',
    },
    {
        id: 'oneeth',
        symbol: 'oneeth',
        addr: '0xec0d77a58528a218cbf41fa6e1585c8d7a085868',
    },
    {
        id: 'one-genesis',
        symbol: 'og',
        addr: '0x8a4491936a8e5a1662c8a755932b83dbe9634b0d',
    },
    {
        id: 'one-ledger',
        symbol: 'olt',
        addr: '0x64a60493d888728cf42616e034a0dfeae38efcf0',
    },
    {
        id: 'onelink',
        symbol: 'onelink',
        addr: '0x18cc17a1eed37c02a77b0b96b7890c7730e2a2cf',
    },
    {
        id: 'oneroot-network',
        symbol: 'rnt',
        addr: '0xff603f43946a3a28df5e6a73172555d8c8b02386',
    },
    {
        id: 'one-share',
        symbol: 'ons',
        addr: '0x5bb29c33c4a3c29f56f8aca40b4db91d8a5fe2c5',
    },
    {
        id: 'oneswap-dao-token',
        symbol: 'ones',
        addr: '0x0b342c51d1592c41068d5d4b4da4a68c0a04d5a4',
    },
    {
        id: 'onevbtc',
        symbol: 'onevbtc',
        addr: '0x7bd198b9107496fd5cc3d7655af52f43a8edbc4c',
    },
    {
        id: 'onewing',
        symbol: 'onewing',
        addr: '0x8f041a3940a5e6fb580075c3774e15fcfa0e1618',
    },
    {
        id: 'ong-social',
        symbol: 'ong',
        addr: '0xd341d1680eeee3255b8c4c75bcce7eb57f144dae',
    },
    {
        id: 'onigiri',
        symbol: 'onigiri',
        addr: '0xcf9c692f7e62af3c571d4173fd4abf9a3e5330d0',
    },
    {
        id: 'onlexpa-token',
        symbol: 'onlexpa',
        addr: '0x33384af34b03eaca63fd153f59589f504772b570',
    },
    {
        id: 'online-expo',
        symbol: 'expo',
        addr: '0x7acb51e690301b114a2a65b2e557cc1b7e644ba8',
    },
    {
        id: 'ono',
        symbol: 'onot',
        addr: '0xb31c219959e06f9afbeb36b388a4bad13e802725',
    },
    {
        id: 'onx-finance',
        symbol: 'onx',
        addr: '0xe0ad1806fd3e7edf6ff52fdb822432e847411033',
    },
    {
        id: 'o-ocean-mar22',
        symbol: 'o-ocean-mar22',
        addr: '0x24d8c2163d6b13a6b8770b794d00c98cb4e0cbca',
    },
    {
        id: 'opacity',
        symbol: 'opct',
        addr: '0xdb05ea0877a2622883941b939f0bb11d1ac7c400',
    },
    {
        id: 'openalexa-protocol',
        symbol: 'oap',
        addr: '0x1788430620960f9a70e3dc14202a3a35dde1a316',
    },
    {
        id: 'openanx',
        symbol: 'oax',
        addr: '0x701c244b988a513c945973defa05de933b23fe1d',
    },
    {
        id: 'open-governance-token',
        symbol: 'open',
        addr: '0x69e8b9528cabda89fe846c67675b5d73d463a916',
    },
    {
        id: 'open-monetary-system',
        symbol: 'oms',
        addr: '0x3d1e3c5f658d74c585267350cac22fd44e8d951c',
    },
    {
        id: 'opennity',
        symbol: 'opnn',
        addr: '0xa829f97373069ee5d23175e4105df8fd49238be7',
    },
    {
        id: 'open-platform',
        symbol: 'open',
        addr: '0x9d86b1b2554ec410eccffbf111a6994910111340',
    },
    {
        id: 'open-predict-token',
        symbol: 'opt',
        addr: '0x4fe5851c9af07df9e5ad8217afae1ea72737ebda',
    },
    {
        id: 'opium',
        symbol: 'opium',
        addr: '0x888888888889c00c67689029d7856aac1065ec11',
    },
    {
        id: 'option-room',
        symbol: 'room',
        addr: '0xad4f86a25bbc20ffb751f2fac312a0b4d8f88c64',
    },
    {
        id: 'optionroom-governance-token',
        symbol: 'court',
        addr: '0x0538a9b4f4dcb0cb01a7fa34e17c0ac947c22553',
    },
    {
        id: 'options-market',
        symbol: 'osm',
        addr: '0x9b75848172677042269c63365b57b0a51c21d031',
    },
    {
        id: 'optitoken',
        symbol: 'opti',
        addr: '0x832904863978b94802123106e6eb491bdf0df928',
    },
    {
        id: 'opus',
        symbol: 'opt',
        addr: '0x4355fc160f74328f9b383df2ec589bb3dfd82ba0',
    },
    {
        id: 'oracle-system',
        symbol: 'orc',
        addr: '0x324af2d5353f2dd138e234b359d30d67c64b1b20',
    },
    {
        id: 'oracle-top-5',
        symbol: 'orcl5',
        addr: '0xd6cb2adf47655b1babddc214d79257348cbc39a7',
    },
    {
        id: 'oraichain-token',
        symbol: 'orai',
        addr: '0x4c11249814f11b9346808179cf06e71ac328c1b5',
    },
    {
        id: 'orao-network',
        symbol: 'orao',
        addr: '0xee1cea7665ba7aa97e982edeaecb26b59a04d035',
    },
    {
        id: 'orbicular',
        symbol: 'orbi',
        addr: '0x11a2ab94ade17e96197c78f9d5f057332a19a0b9',
    },
    {
        id: 'orbit-chain',
        symbol: 'orc',
        addr: '0x662b67d00a13faf93254714dd601f5ed49ef2f51',
    },
    {
        id: 'orbs',
        symbol: 'orbs',
        addr: '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa',
    },
    {
        id: 'orb-v2',
        symbol: 'orb',
        addr: '0x1b7c4d4f226ccf3211b0f99c4fdfb84a2606bf8e',
    },
    {
        id: 'orchid-protocol',
        symbol: 'oxt',
        addr: '0x4575f41308ec1483f3d399aa9a2826d74da13deb',
    },
    {
        id: 'orient',
        symbol: 'oft',
        addr: '0xc0a25a24cce412e2fb407c08e3785437fee9ad1d',
    },
    {
        id: 'origin-dollar',
        symbol: 'ousd',
        addr: '0x2a8e1e676ec238d8a992307b495b45b3feaa5e86',
    },
    {
        id: 'origin-protocol',
        symbol: 'ogn',
        addr: '0x8207c1ffc5b6804f6024322ccf34f29c3541ae26',
    },
    {
        id: 'origin-sport',
        symbol: 'ors',
        addr: '0xeb9a4b185816c354db92db09cc3b50be60b901b6',
    },
    {
        id: 'origintrail',
        symbol: 'trac',
        addr: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    },
    {
        id: 'origo',
        symbol: 'ogo',
        addr: '0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e',
    },
    {
        id: 'orion-protocol',
        symbol: 'orn',
        addr: '0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a',
    },
    {
        id: 'orium',
        symbol: 'orm',
        addr: '0xd51e852630debc24e9e1041a03d80a0107f8ef0c',
    },
    {
        id: 'ormeus-cash',
        symbol: 'omc',
        addr: '0xd6bd97a26232ba02172ff86b055d5d7be789335b',
    },
    {
        id: 'ormeuscoin',
        symbol: 'orme',
        addr: '0xc96df921009b790dffca412375251ed1a2b75c60',
    },
    {
        id: 'ormeus-ecosystem',
        symbol: 'eco',
        addr: '0x191557728e4d8caa4ac94f86af842148c0fa8f7e',
    },
    {
        id: 'oro',
        symbol: 'oro',
        addr: '0xc3eb2622190c57429aac3901808994443b64b466',
    },
    {
        id: 'orsgroup-io',
        symbol: 'ors',
        addr: '0xac2e58a06e6265f1cf5084ee58da68e5d75b49ca',
    },
    {
        id: 'oryx',
        symbol: 'oryx',
        addr: '0x5c0bc243fb13632c4d247f4f0bc27f2f58982c39',
    },
    {
        id: 'osina',
        symbol: 'osina',
        addr: '0x39ad22c916f42af5f67371d6f2fb0dab42321a89',
    },
    {
        id: 'otcbtc-token',
        symbol: 'otb',
        addr: '0xa86a0da9d05d0771955df05b44ca120661af16de',
    },
    {
        id: 'our-pay',
        symbol: 'our',
        addr: '0xdff3d69a00759449f091561a0af99a218982bd7f',
    },
    {
        id: 'oviex',
        symbol: 'ovi',
        addr: '0x6b3760facdeb7f798cd13c0af2e4cd9ddc085122',
    },
    {
        id: 'ovr',
        symbol: 'ovr',
        addr: '0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697',
    },
    {
        id: 'owl',
        symbol: 'owl',
        addr: '0x1a5f9352af8af974bfc03399e3767df6370d82e4',
    },
    {
        id: 'owl-token',
        symbol: 'owl',
        addr: '0x2a7f709ee001069771ceb6d42e85035f7d18e736',
    },
    {
        id: 'owndata',
        symbol: 'own',
        addr: '0x170b275ced089fffaebfe927f445a350ed9160dc',
    },
    {
        id: 'own-token',
        symbol: 'own',
        addr: '0xcc6f15be8573cb8243c42d300565566d328213dd',
    },
    {
        id: 'oxbitcoin',
        symbol: '0xbtc',
        addr: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    },
    {
        id: 'oxo-farm',
        symbol: 'oxo',
        addr: '0x47dac6bd80f024575a6d367af5ba8e89202a09fc',
    },
    {
        id: 'oxygen',
        symbol: 'oxy',
        addr: '0x965697b4ef02f0de01384d0d4f9f782b1670c163',
    },
    {
        id: 'p2p',
        symbol: 'p2p',
        addr: '0xabe9b2e4bbd5a8c718752c41254ed81aae7d98bf',
    },
    {
        id: 'p2pgo',
        symbol: 'p2pg',
        addr: '0xa2a19165c17b36a5c753a246c1e188489754a693',
    },
    {
        id: 'p2p-solutions-foundation',
        symbol: 'p2ps',
        addr: '0x4527a3b4a8a150403090a99b87effc96f2195047',
    },
    {
        id: 'packswap',
        symbol: 'pact',
        addr: '0x66e7ce35578a37209d01f99f3d2ff271f981f581',
    },
    {
        id: 'paid-network',
        symbol: 'paid',
        addr: '0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787',
    },
    {
        id: 'paint',
        symbol: 'paint',
        addr: '0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042',
    },
    {
        id: 'pajama-finance',
        symbol: 'pjm',
        addr: '0x61bc1f530ac6193d73af1e1a6a14cb44b9c3f915',
    },
    {
        id: 'palace',
        symbol: 'paa',
        addr: '0x3d9ac8e7a9c9be11dfac1677dda901e28d44527f',
    },
    {
        id: 'palletone',
        symbol: 'ptn',
        addr: '0xfe76be9cec465ed3219a9972c21655d57d21aec6',
    },
    {
        id: 'pamp-cc',
        symbol: 'PAMP',
        addr: '0x7f0f118d083d5175ab9d2d34c4c8fa4f43c3f47b',
    },
    {
        id: 'pamp-network',
        symbol: 'pamp',
        addr: '0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1',
    },
    {
        id: 'panda-finance',
        symbol: 'pand',
        addr: '0x5bc52b5367b637bec5f818e69208eb9f03c426ee',
    },
    {
        id: 'pando',
        symbol: 'pando',
        addr: '0x7a3c45f34ea5df6fe5f6af710ec8a04d388a71d1',
    },
    {
        id: 'pangea',
        symbol: 'xpat',
        addr: '0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82',
    },
    {
        id: 'pantheon-x',
        symbol: 'xpn',
        addr: '0x3b9e094d56103611f0acefdab43182347ba60df4',
    },
    {
        id: 'pantos',
        symbol: 'pan',
        addr: '0x536381a8628dbcc8c70ac9a30a7258442eab4c92',
    },
    {
        id: 'panvala-pan',
        symbol: 'pan',
        addr: '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44',
    },
    {
        id: 'paparazzi',
        symbol: 'pazzi',
        addr: '0xbcd8756ea481608ea3dd5a555493305cf0a79640',
    },
    {
        id: 'papa-shiba',
        symbol: 'phiba',
        addr: '0xc4d586ef7be9ebe80bd5ee4fbd228fe2db5f2c4e',
    },
    {
        id: 'paper',
        symbol: 'paper',
        addr: '0xddce093888c8dc636677cd29bc6c68d35cfdac33',
    },
    {
        id: 'parachute',
        symbol: 'par',
        addr: '0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06',
    },
    {
        id: 'paralink-network',
        symbol: 'para',
        addr: '0x3a8d5bc8a8948b68dfc0ce9c14ac4150e083518c',
    },
    {
        id: 'parellel-network',
        symbol: 'pnc',
        addr: '0x31141dc226c214d40b1f77feb532741d8f893c6f',
    },
    {
        id: 'pareto-network',
        symbol: 'pareto',
        addr: '0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc',
    },
    {
        id: 'parkgene',
        symbol: 'gene',
        addr: '0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d',
    },
    {
        id: 'parkingo',
        symbol: 'got',
        addr: '0x613fa2a6e6daa70c659060e86ba1443d2679c9d7',
    },
    {
        id: 'parsiq',
        symbol: 'prq',
        addr: '0x362bc847a3a9637d3af6624eec853618a43ed7d2',
    },
    {
        id: 'parsiq-boost',
        symbol: 'prqboost',
        addr: '0xa211f450ce88deb31d3f12ae3c1ebf6b0e55a5d9',
    },
    {
        id: 'par-stablecoin',
        symbol: 'par',
        addr: '0x68037790a0229e9ce6eaa8a99ea92964106c4703',
    },
    {
        id: 'partner',
        symbol: 'prc',
        addr: '0xcaa05e82bdcba9e25cd1a3bf1afb790c1758943d',
    },
    {
        id: 'passive-income',
        symbol: 'psi',
        addr: '0xd4cb461eace80708078450e465881599d2235f1a',
    },
    {
        id: 'passive-income-bot',
        symbol: 'pib',
        addr: '0x1baffbc23f2246040cce12f7a140c38c5dc73e46',
    },
    {
        id: 'passport-finance',
        symbol: 'pass',
        addr: '0x6c4522f0035bed2180b40f4c5d9dbaab64b41325',
    },
    {
        id: 'patientory',
        symbol: 'ptoy',
        addr: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06',
    },
    {
        id: 'patron',
        symbol: 'pat',
        addr: '0xf3b3cad094b89392fce5fafd40bc03b80f2bc624',
    },
    {
        id: 'pawtocol',
        symbol: 'upi',
        addr: '0x70d2b7c19352bb76e4409858ff5746e500f2b67c',
    },
    {
        id: 'pax-gold',
        symbol: 'paxg',
        addr: '0x45804880de22913dafe09f4980848ece6ecbaf78',
    },
    {
        id: 'paxos-standard',
        symbol: 'pax',
        addr: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    },
    {
        id: 'payaccept',
        symbol: 'payt',
        addr: '0x8ef47555856f6ce2e0cd7c36aef4fab317d2e2e2',
    },
    {
        id: 'paycent',
        symbol: 'pyn',
        addr: '0x0142c3b2fc51819b5af5dfc4aa52df9722790851',
    },
    {
        id: 'payfair',
        symbol: 'pfr',
        addr: '0x6353eadf8d1d4421002332bb9074222b14d54881',
    },
    {
        id: 'payou-finance',
        symbol: 'payou',
        addr: '0xcb2fa15f4ea7c55bf6ef9456a662412b137043e9',
    },
    {
        id: 'payperex',
        symbol: 'pax',
        addr: '0xc1d204d77861def49b6e769347a883b15ec397ff',
    },
    {
        id: 'paypex',
        symbol: 'payx',
        addr: '0x62a56a4a2ef4d355d34d10fbf837e747504d38d4',
    },
    {
        id: 'paypie',
        symbol: 'ppp',
        addr: '0xc42209accc14029c1012fb5680d95fbd6036e2a0',
    },
    {
        id: 'paypolitan-token',
        symbol: 'epan',
        addr: '0x72630b1e3b42874bf335020ba0249e3e9e47bafc',
    },
    {
        id: 'payship',
        symbol: 'pshp',
        addr: '0x88d59ba796fdf639ded3b5e720988d59fdb71eb8',
    },
    {
        id: 'payyoda',
        symbol: 'yot',
        addr: '0x9f978aa425148cdd9223eb175446a877b86727ff',
    },
    {
        id: 'pazzy',
        symbol: 'pazzy',
        addr: '0x74c287ad5328daca276c6a1c1f149415b12c148d',
    },
    {
        id: 'pbtc35a',
        symbol: 'pbtc35a',
        addr: '0xa8b12cc90abf65191532a12bb5394a714a46d358',
    },
    {
        id: 'peach-finance',
        symbol: 'peech',
        addr: '0x31d939dc09a6bb55642fcbf9d56166ebc0bdec9a',
    },
    {
        id: 'peanut',
        symbol: 'nux',
        addr: '0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c',
    },
    {
        id: 'peculium',
        symbol: 'pcl',
        addr: '0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a',
    },
    {
        id: 'peerex-network',
        symbol: 'PERX',
        addr: '0x3c6ff50c9ec362efa359317009428d52115fe643',
    },
    {
        id: 'peerguess',
        symbol: 'guess',
        addr: '0xbdcfbf5c4d91abc0bc9709c7286d00063c0e6f22',
    },
    {
        id: 'pegasus',
        symbol: 'pgs',
        addr: '0x931ad0628aa11791c26ff4d41ce23e40c31c5e4e',
    },
    {
        id: 'pegshares',
        symbol: 'pegs',
        addr: '0x88bd6efe33bc82860278c044efa33364c6285032',
    },
    {
        id: 'pegsusd',
        symbol: 'pusd',
        addr: '0x412e5a36bde71aa2c38e1c0e26baaf7f2f0bc24a',
    },
    {
        id: 'pendle',
        symbol: 'pendle',
        addr: '0x808507121b80c02388fad14726482e061b8da827',
    },
    {
        id: 'penguin-party-fish',
        symbol: 'fish',
        addr: '0x30bcd71b8d21fe830e493b30e90befba29de9114',
    },
    {
        id: 'penny-for-bit',
        symbol: 'pfb',
        addr: '0x46760d2bf2f4dd5405646d9b2ce7b723efe74a48',
    },
    {
        id: 'penta',
        symbol: 'pnt',
        addr: '0x53066cddbc0099eb6c96785d9b3df2aaeede5da3',
    },
    {
        id: 'pepedex',
        symbol: 'ppdex',
        addr: '0xf1f508c7c9f0d1b15a76fba564eef2d956220cf7',
    },
    {
        id: 'pepemon-pepeballs',
        symbol: 'ppblz',
        addr: '0x4d2ee5dae46c86da2ff521f7657dad98834f97b8',
    },
    {
        id: 'percent',
        symbol: 'pct',
        addr: '0xbc16da9df0a22f01a16bc0620a27e7d6d6488550',
    },
    {
        id: 'peri-finance',
        symbol: 'peri',
        addr: '0x5d30ad9c6374bf925d0a75454fa327aacf778492',
    },
    {
        id: 'perkscoin',
        symbol: 'pct',
        addr: '0x5ebe6a342a93102393edd9d2e458c689e5ac0bb3',
    },
    {
        id: 'perlin',
        symbol: 'perl',
        addr: '0xeca82185adce47f39c684352b0439f030f860318',
    },
    {
        id: 'perpetual-protocol',
        symbol: 'perp',
        addr: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
    },
    {
        id: 'perth-mint-gold-token',
        symbol: 'pmgt',
        addr: '0xaffcdd96531bcd66faed95fc61e443d08f79efef',
    },
    {
        id: 'peth18c',
        symbol: 'peth18c',
        addr: '0xa15690e9205de386ce849889831c1668c300c1ad',
    },
    {
        id: 'petroleum',
        symbol: 'oil',
        addr: '0xae6eb6f6c0a1694968b9f78a4316319c27b0964b',
    },
    {
        id: 'pgf500',
        symbol: 'pgf7t',
        addr: '0x9fadea1aff842d407893e21dbd0e2017b4c287b6',
    },
    {
        id: 'pha',
        symbol: 'pha',
        addr: '0x6c5ba91642f10282b576d91922ae6448c9d52f4e',
    },
    {
        id: 'phantasma',
        symbol: 'soul',
        addr: '0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80',
    },
    {
        id: 'phantasma-energy',
        symbol: 'kcal',
        addr: '0x14eb60f5f270b059b0c788de0ddc51da86f8a06d',
    },
    {
        id: 'phantom-token',
        symbol: 'phtf',
        addr: '0x457a57e931cba4dff5ce8500cc0dff18356df041',
    },
    {
        id: 'philips-pay-coin',
        symbol: 'ppc',
        addr: '0x84f710bae3316a74fb0fcb01904d2578a4cc6a26',
    },
    {
        id: 'phillionex',
        symbol: 'phn',
        addr: '0xf73fc4b74a4cc6f9ea203a9d5bbff4ffce3a4c48',
    },
    {
        id: 'philosafe-token',
        symbol: 'plst',
        addr: '0x22314b3d1375548c969eaae65e43203b51f9e9e9',
    },
    {
        id: 'phoenixdao',
        symbol: 'phnx',
        addr: '0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7',
    },
    {
        id: 'phuture',
        symbol: 'phtr',
        addr: '0xe1fc4455f62a6e89476f1072530c20cf1a0622da',
    },
    {
        id: 'pibble',
        symbol: 'pib',
        addr: '0x1864ce27e9f7517047933caae530674e8c70b8a7',
    },
    {
        id: 'pica',
        symbol: 'pica',
        addr: '0x1ece1739dae08253ae582c404511b37355b42c84',
    },
    {
        id: 'pick',
        symbol: 'pick',
        addr: '0x287609a15a683640a5bbc4d93d4d5f4ed6bad3a0',
    },
    {
        id: 'pickle-finance',
        symbol: 'pickle',
        addr: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
    },
    {
        id: 'piction-network',
        symbol: 'pxl',
        addr: '0xf88951d7b676798705fd3a362ba5b1dbca2b233b',
    },
    {
        id: 'piedao-balanced-crypto-pie',
        symbol: 'bcp',
        addr: '0xe4f726adc8e89c6a6017f01eada77865db22da14',
    },
    {
        id: 'piedao-btc',
        symbol: 'btc++',
        addr: '0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd',
    },
    {
        id: 'piedao-defi',
        symbol: 'defi++',
        addr: '0x8d1ce361eb68e9e05573443c407d4a3bed23b033',
    },
    {
        id: 'piedao-defi-large-cap',
        symbol: 'defi+l',
        addr: '0x78f225869c08d478c34e5f645d07a87d3fe8eb78',
    },
    {
        id: 'piedao-defi-small-cap',
        symbol: 'DEFI+S',
        addr: '0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c',
    },
    {
        id: 'piedao-dough-v2',
        symbol: 'dough',
        addr: '0xad32a8e6220741182940c5abf610bde99e737b2d',
    },
    {
        id: 'piedao-yearn-ecosystem-pie',
        symbol: 'ypie',
        addr: '0x17525e4f4af59fbc29551bc4ece6ab60ed49ce31',
    },
    {
        id: 'pigx',
        symbol: 'pigx',
        addr: '0x47e820df943170b0e31f9e18ecd5bdd67b77ff1f',
    },
    {
        id: 'pikachu',
        symbol: 'pika',
        addr: '0xa682ee16b497afceedf47e4820fc2af3845fd2d2',
    },
    {
        id: 'pikto-group',
        symbol: 'pkp',
        addr: '0x6a532b08c654a1a86069b74c560d8fa0ff842218',
    },
    {
        id: 'pillar',
        symbol: 'plr',
        addr: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
    },
    {
        id: 'pilnette',
        symbol: 'pvg',
        addr: '0x6f0b09bfa87410ab993291ec5f8cda81f1d2acd9',
    },
    {
        id: 'pinknode',
        symbol: 'pnode',
        addr: '0xaf691508ba57d416f895e32a1616da1024e882d2',
    },
    {
        id: 'piplcoin',
        symbol: 'pipl',
        addr: '0xe64509f0bf07ce2d29a7ef19a8a9bc065477c1b4',
    },
    {
        id: 'pitch',
        symbol: 'pitch',
        addr: '0x87f56ee356b434187105b40f96b230f5283c0ab4',
    },
    {
        id: 'pivot-token',
        symbol: 'pvt',
        addr: '0x7869c4a1a3f6f8684fbcc422a21ad7abe3167834',
    },
    {
        id: 'pixie-coin',
        symbol: 'pxc',
        addr: '0xc27c95350ecd634c80df89db0f10cd5c24b7b11f',
    },
    {
        id: 'pkg-token',
        symbol: 'pkg',
        addr: '0x02f2d4a04e6e01ace88bd2cd632875543b2ef577',
    },
    {
        id: 'plaas-farmers-token',
        symbol: 'plaas',
        addr: '0x60571e95e12c78cba5223042692908f0649435a5',
    },
    {
        id: 'planet',
        symbol: 'pla',
        addr: '0x307d45afbb7e84f82ef3d251a6bb0f00edf632e4',
    },
    {
        id: 'plasma-finance',
        symbol: 'ppay',
        addr: '0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2',
    },
    {
        id: 'platoncoin',
        symbol: 'pltc',
        addr: '0x429d83bb0dcb8cdd5311e34680adc8b12070a07f',
    },
    {
        id: 'play2live',
        symbol: 'luc',
        addr: '0x5dbe296f97b23c4a6aa6183d73e574d02ba5c719',
    },
    {
        id: 'playcent',
        symbol: 'pcnt',
        addr: '0x657b83a0336561c8f64389a6f5ade675c04b0c3b',
    },
    {
        id: 'playchip',
        symbol: 'pla',
        addr: '0x0198f46f520f33cd4329bd4be380a25a90536cd5',
    },
    {
        id: 'playdapp',
        symbol: 'pla',
        addr: '0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430',
    },
    {
        id: 'playfuel',
        symbol: 'plf',
        addr: '0xada62f7ccd6af6cacff04accbc4f56f3d4ffd4ef',
    },
    {
        id: 'playgame',
        symbol: 'pxg',
        addr: '0x47e67ba66b0699500f18a53f94e2b9db3d47437e',
    },
    {
        id: 'playgroundz',
        symbol: 'iog',
        addr: '0x1c4b7d0e1885bd7667af3378e0c538f74e712006',
    },
    {
        id: 'playkey',
        symbol: 'pkt',
        addr: '0x2604fa406be957e542beb89e6754fcde6815e83f',
    },
    {
        id: 'playmarket',
        symbol: 'pmt',
        addr: '0xc1322d8ae3b0e2e437e0ae36388d0cfd2c02f1c9',
    },
    {
        id: 'pledgecamp',
        symbol: 'plg',
        addr: '0x85ca6710d0f1d511d130f6935edda88acbd921bd',
    },
    {
        id: 'plethori',
        symbol: 'ple',
        addr: '0xaeeaa9c0ecd8d50ab7fcd159bddad0f52ce360c2',
    },
    {
        id: 'plgnet',
        symbol: 'plug',
        addr: '0x47da5456bc2e1ce391b645ce80f2e97192e4976a',
    },
    {
        id: 'plotx',
        symbol: 'plot',
        addr: '0x72f020f8f3e8fd9382705723cd26380f8d0c66bb',
    },
    {
        id: 'plug',
        symbol: 'plg',
        addr: '0xba069ee53b8b531f3ab117c92ca09a204c9e6285',
    },
    {
        id: 'plus-coin',
        symbol: 'nplc',
        addr: '0x97fb6fc2ad532033af97043b563131c5204f8a35',
    },
    {
        id: 'pluto',
        symbol: 'plut',
        addr: '0xf38011f9153acffaca3fbfc42ddfa766c980d967',
    },
    {
        id: 'pluton',
        symbol: 'plu',
        addr: '0xd8912c10681d8b21fd3742244f44658dba12264e',
    },
    {
        id: 'pnetwork',
        symbol: 'pnt',
        addr: '0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed',
    },
    {
        id: 'poc-chain',
        symbol: 'pocc',
        addr: '0x926be13b4d93f29ea254e4e518f33099e45d7f06',
    },
    {
        id: 'pocket-node',
        symbol: 'node',
        addr: '0x435d664f72d6f194ef67d63b5f3936650187b131',
    },
    {
        id: 'podo-point',
        symbol: 'pod',
        addr: '0xc697648021870cc250fbcd6ea8e77524f57b45c0',
    },
    {
        id: 'poet',
        symbol: 'poe',
        addr: '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195',
    },
    {
        id: 'pofid-dao',
        symbol: 'pfid',
        addr: '0x87c4bd3038176301e81e6682ce51a6fdaefabd0c',
    },
    {
        id: 'poker-io',
        symbol: 'pok',
        addr: '0xbc8deee89f1cf4b661514185aa1ab780336c4c4a',
    },
    {
        id: 'polar-chain',
        symbol: 'pola',
        addr: '0xbbe5c81412bad19877300d63cc8d8264a154091e',
    },
    {
        id: 'polaris-share',
        symbol: 'pola',
        addr: '0xc691bc298a304d591ad9b352c7a8d216de9f2ced',
    },
    {
        id: 'polkabase',
        symbol: 'pbase',
        addr: '0x44b537b6f94c73a54f7bf8a9b68f8125da3c330b',
    },
    {
        id: 'polkabridge',
        symbol: 'pbr',
        addr: '0x298d492e8c1d909d3f63bc4a36c66c64acb3d695',
    },
    {
        id: 'polka-city',
        symbol: 'polc',
        addr: '0xaa8330fb2b4d5d07abfe7a72262752a8505c6b37',
    },
    {
        id: 'polkacover',
        symbol: 'cvr',
        addr: '0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6',
    },
    {
        id: 'polkadex',
        symbol: 'pdex',
        addr: '0xf59ae934f6fe444afc309586cc60a84a0f89aaea',
    },
    {
        id: 'polkadomain',
        symbol: 'name',
        addr: '0xe1a4c5bbb704a92599fedb191f451e0d3a1ed842',
    },
    {
        id: 'polkafoundry',
        symbol: 'pkf',
        addr: '0x8b39b70e39aa811b69365398e0aace9bee238aeb',
    },
    {
        id: 'polkainsure-finance',
        symbol: 'pis',
        addr: '0x834ce7ad163ab3be0c5fd4e0a81e67ac8f51e00c',
    },
    {
        id: 'polkally',
        symbol: 'kally',
        addr: '0xfd30c9bea1a952feeed2ef2c6b2ff8a8fc4aad07',
    },
    {
        id: 'polkalokr',
        symbol: 'lkr',
        addr: '0x80ce3027a70e0a928d9268994e9b85d03bd4cdcf',
    },
    {
        id: 'polkamarkets',
        symbol: 'polk',
        addr: '0xd478161c952357f05f0292b56012cd8457f1cfbf',
    },
    {
        id: 'polkamon',
        symbol: 'pmon',
        addr: '0x1796ae0b0fa4862485106a0de9b654efe301d0b2',
    },
    {
        id: 'polkarare',
        symbol: 'prare',
        addr: '0x2c2f7e7c5604d162d75641256b80f1bf6f4dc796',
    },
    {
        id: 'polkastarter',
        symbol: 'pols',
        addr: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
    },
    {
        id: 'polkaswap',
        symbol: 'pswap',
        addr: '0x519c1001d550c0a1dae7d1fc220f7d14c2a521bb',
    },
    {
        id: 'polka-ventures',
        symbol: 'polven',
        addr: '0x4a6ab9792e9f046c3ab22d8602450de5186be9a7',
    },
    {
        id: 'polybius',
        symbol: 'plbt',
        addr: '0x0affa06e7fbe5bc9a764c979aa66e8256a631f02',
    },
    {
        id: 'polyient-games-governance-token',
        symbol: 'pgt',
        addr: '0xeaccb6e0f24d66cf4aa6cbda33971b9231d332a1',
    },
    {
        id: 'polyient-games-unity',
        symbol: 'pgu',
        addr: '0x98c36c0e953463bd5146c8783ce081ce1d187acf',
    },
    {
        id: 'polymath-network',
        symbol: 'poly',
        addr: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
    },
    {
        id: 'polypux',
        symbol: 'PUX',
        addr: '0xe277ac35f9d327a670c1a3f3eec80a83022431e4',
    },
    {
        id: 'polyswarm',
        symbol: 'nct',
        addr: '0x9e46a38f5daabe8683e10793b06749eef7d733d1',
    },
    {
        id: 'poma',
        symbol: 'pomac',
        addr: '0xdf4df8ee1bd1c9f01e60ee15e4c2f7643b690699',
    },
    {
        id: 'pool-of-stake',
        symbol: 'psk',
        addr: '0x1c5f43710a1776b0ea7191b7ead75d4b98d69858',
    },
    {
        id: 'poolstake',
        symbol: 'psk',
        addr: '0x3f84c4184b35c488f7fe4a12469610c9b1cb03c9',
    },
    {
        id: 'pooltogether',
        symbol: 'pool',
        addr: '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e',
    },
    {
        id: 'poolz-finance',
        symbol: 'poolz',
        addr: '0x69a95185ee2a045cdc4bcd1b1df10710395e4e23',
    },
    {
        id: 'pop',
        symbol: 'pop!',
        addr: '0x7fc3ec3574d408f3b59cd88709bacb42575ebf2b',
    },
    {
        id: 'popchain',
        symbol: 'pch',
        addr: '0xe3f4b4a5d91e5cb9435b947f090a319737036312',
    },
    {
        id: 'pop-chest-token',
        symbol: 'pop',
        addr: '0x5d858bcd53e085920620549214a8b27ce2f04670',
    },
    {
        id: 'popcorn-token',
        symbol: 'corn',
        addr: '0x3080ec2a6960432f179c66d388099a48e82e2047',
    },
    {
        id: 'populous',
        symbol: 'ppt',
        addr: '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a',
    },
    {
        id: 'populous-xbrl-token',
        symbol: 'pxt',
        addr: '0xc14830e53aa344e8c14603a91229a0b925b0b262',
    },
    {
        id: 'porkchop',
        symbol: 'chop',
        addr: '0x646707246d7d5c2a86d7206f41ca8199ea9ced69',
    },
    {
        id: 'portal',
        symbol: 'portal',
        addr: '0x8db90e3e7d04c875a51997092f9178fcac9defdb',
    },
    {
        id: 'portion',
        symbol: 'prt',
        addr: '0x6d0f5149c502faf215c89ab306ec3e50b15e2892',
    },
    {
        id: 'potentiam',
        symbol: 'ptm',
        addr: '0x7c32db0645a259fae61353c1f891151a2e7f8c1e',
    },
    {
        id: 'power-index-pool-token',
        symbol: 'pipt',
        addr: '0x26607ac599266b21d13c7acf7942c7701a8b699c',
    },
    {
        id: 'power-ledger',
        symbol: 'powr',
        addr: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
    },
    {
        id: 'powertrade-fuel',
        symbol: 'ptf',
        addr: '0xc57d533c50bc22247d49a368880fb49a1caa39f7',
    },
    {
        id: 'precium',
        symbol: 'pcm',
        addr: '0x6096d2460cf5177e40b515223428dc005ad35123',
    },
    {
        id: 'predictz',
        symbol: 'prdz',
        addr: '0x4e085036a1b732cbe4ffb1c12ddfdd87e7c3664d',
    },
    {
        id: 'prediqt',
        symbol: 'pqt',
        addr: '0xf8c17c840549974ec17c6573b3963f1e3046c0eb',
    },
    {
        id: 'predix-network',
        symbol: 'prdx',
        addr: '0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7',
    },
    {
        id: 'premia',
        symbol: 'premia',
        addr: '0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70',
    },
    {
        id: 'presearch',
        symbol: 'pre',
        addr: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
    },
    {
        id: 'pressone',
        symbol: 'prs',
        addr: '0xe0d95530820aafc51b1d98023aa1ff000b78d8b2',
    },
    {
        id: 'presto',
        symbol: 'prstx',
        addr: '0x00ad22ab1006fc282674887aff1114e5ad14077d',
    },
    {
        id: 'previse',
        symbol: 'prvs',
        addr: '0xa36e59c08c9f251a6b7a9eb6be6e32fd6157acd0',
    },
    {
        id: 'pria',
        symbol: 'pria',
        addr: '0xb9871cb10738eada636432e86fc0cb920dc3de24',
    },
    {
        id: 'pride',
        symbol: 'lgbtq',
        addr: '0x5881da4527bcdc44a100f8ba2efc4039243d2c07',
    },
    {
        id: 'primas',
        symbol: 'pst',
        addr: '0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9',
    },
    {
        id: 'prime-dai',
        symbol: 'pdai',
        addr: '0x9043d4d51c9d2e31e3f169de4551e416970c27ef',
    },
    {
        id: 'primedao',
        symbol: 'prime',
        addr: '0xe59064a8185ed1fca1d17999621efedfab4425c9',
    },
    {
        id: 'prime-finance',
        symbol: 'pfi',
        addr: '0x989ac4c1fc5ab2b8c86924c6253aaf1ee68e9ce9',
    },
    {
        id: 'prime-whiterock-company',
        symbol: 'pwc',
        addr: '0xa3d93c0616dbc31fef1e112c7665a4ba4ddbf0be',
    },
    {
        id: 'printer-finance',
        symbol: 'print',
        addr: '0x54b8c98268da0055971652a95f2bfd3a9349a38c',
    },
    {
        id: 'prism-network',
        symbol: 'prism',
        addr: '0xd46df541148932690b81092f600f35208afd4325',
    },
    {
        id: 'privatix',
        symbol: 'prix',
        addr: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a',
    },
    {
        id: 'probit-exchange',
        symbol: 'prob',
        addr: '0xfb559ce67ff522ec0b9ba7f5dc9dc7ef6c139803',
    },
    {
        id: 'project-inverse',
        symbol: 'xiv',
        addr: '0x44f262622248027f8e2a8fb1090c4cf85072392c',
    },
    {
        id: 'project-senpai',
        symbol: 'senpai',
        addr: '0x5a705745373a780814c379ef17810630d529efe0',
    },
    {
        id: 'project-shivom',
        symbol: 'omx',
        addr: '0xb5dbc6d3cf380079df3b27135664b6bcf45d1869',
    },
    {
        id: 'project-with',
        symbol: 'wiken',
        addr: '0xb7e77aebbe0687d2eff24cc90c41a3b6ea74bdab',
    },
    {
        id: 'prometeus',
        symbol: 'prom',
        addr: '0xfc82bb4ba86045af6f327323a46e80412b91b27d',
    },
    {
        id: 'promotionchain',
        symbol: 'pc',
        addr: '0xa6714a2e5f0b1bdb97b895b0913b4fcd3a775e4d',
    },
    {
        id: 'prophecy',
        symbol: 'pry',
        addr: '0x3c81d482172cc273c3b91dd9d8eb212023d00521',
    },
    {
        id: 'prophet',
        symbol: 'prophet',
        addr: '0x8d5db0c1f0681071cb38a382ae6704588d9da587',
    },
    {
        id: 'props',
        symbol: 'props',
        addr: '0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41',
    },
    {
        id: 'propy',
        symbol: 'pro',
        addr: '0x226bb599a12c826476e3a771454697ea52e9e220',
    },
    {
        id: 'prospectors-gold',
        symbol: 'pgl',
        addr: '0x089a6d83282fb8988a656189f1e7a73fa6c1cac2',
    },
    {
        id: 'prosper',
        symbol: 'pros',
        addr: '0x8642a849d0dcb7a15a974794668adcfbe4794b56',
    },
    {
        id: 'prostarter-token',
        symbol: 'prot',
        addr: '0x2341dd0a96a0dab62aa1efb93d59ff7f3bdb8932',
    },
    {
        id: 'proswap',
        symbol: 'pros',
        addr: '0x094f00cb5e31ab6164e3cacb654e8d6c2b3b471c',
    },
    {
        id: 'protocol-finance',
        symbol: 'pfi',
        addr: '0x7b69d465c0f9fb22affae56aa86149973e9b0966',
    },
    {
        id: 'proton-project',
        symbol: 'prtn',
        addr: '0x6d10e0194400a04600881057787eb9e9c063dca0',
    },
    {
        id: 'proton-token',
        symbol: 'ptt',
        addr: '0x4689a4e169eb39cc9078c0940e21ff1aa8a39b9c',
    },
    {
        id: 'proverty-eradication-coin',
        symbol: 'pec',
        addr: '0x432bf73443909c33b545efed536a5246c9a722ca',
    },
    {
        id: 'provoco',
        symbol: 'voco',
        addr: '0xb5ca46cf1da09248126682a7bd72401fd7a6b151',
    },
    {
        id: 'proxeus',
        symbol: 'xes',
        addr: '0xa017ac5fac5941f95010b12570b812c974469c2c',
    },
    {
        id: 'psyche',
        symbol: 'usd1',
        addr: '0xf6c0aa7ebfe9992200c67e5388e4f42da49e1783',
    },
    {
        id: 'pteria',
        symbol: 'pteria',
        addr: '0x02eca910cb3a7d43ebc7e8028652ed5c6b70259b',
    },
    {
        id: 'ptokens-btc',
        symbol: 'pbtc',
        addr: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
    },
    {
        id: 'ptokens-ltc',
        symbol: 'pltc',
        addr: '0x5979f50f1d4c08f9a53863c2f39a7b0492c38d0f',
    },
    {
        id: 'pub-finance',
        symbol: 'pint',
        addr: '0xfecba472b2540c5a2d3700b2c9e06f0aa7dc6462',
    },
    {
        id: 'publica',
        symbol: 'pbl',
        addr: '0x55648de19836338549130b1af587f16bea46f66b',
    },
    {
        id: 'public-index-network',
        symbol: 'pin',
        addr: '0xc1f976b91217e240885536af8b63bc8b5269a9be',
    },
    {
        id: 'public-mint',
        symbol: 'mint',
        addr: '0x0cdf9acd87e940837ff21bb40c9fd55f68bba059',
    },
    {
        id: 'puglife',
        symbol: 'pugl',
        addr: '0xdb69c3f8977f78952303987e87153c1988cf65a9',
    },
    {
        id: 'pumapay',
        symbol: 'pma',
        addr: '0x846c66cf71c43f80403b51fe3906b3599d63336f',
    },
    {
        id: 'pundi-x',
        symbol: 'npxs',
        addr: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    },
    {
        id: 'pundi-x-2',
        symbol: 'pundix',
        addr: '0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38',
    },
    {
        id: 'punk',
        symbol: 'punk',
        addr: '0x9cea2ed9e47059260c97d697f82b8a14efa61ea5',
    },
    {
        id: 'punk-attr-4',
        symbol: 'punk-attr-4',
        addr: '0x49706a576bb823cde3180c930f9947d59e2ded4d',
    },
    {
        id: 'punk-attr-5',
        symbol: 'punk-attr-5',
        addr: '0xab9c92a9337a1494c6d545e48187fa37144403c8',
    },
    {
        id: 'punk-basic',
        symbol: 'punk-basic',
        addr: '0x69bbe2fa02b4d90a944ff328663667dc32786385',
    },
    {
        id: 'punk-female',
        symbol: 'punk-female',
        addr: '0x27ffed7e5926fb2795fc85aaab558243f280a8a2',
    },
    {
        id: 'punk-zombie',
        symbol: 'punk-zombie',
        addr: '0xf18ade29a225faa555e475ee01f9eb66eb4a3a74',
    },
    {
        id: 'pupper',
        symbol: 'pup',
        addr: '0x81dbc1c8e40c3095071949eda9800c2209a7279a',
    },
    {
        id: 'puregold-token',
        symbol: 'pgpay',
        addr: '0xc949fc82a15964fb5b97e5cf8f9ffed139086821',
    },
    {
        id: 'pureland-project',
        symbol: 'pld',
        addr: '0xe9541c7ea236332f4d07be73101670f39b27da02',
    },
    {
        id: 'puriever',
        symbol: 'pure',
        addr: '0x2904b9b16652d7d0408eccfa23a19d4a3358230f',
    },
    {
        id: 'pussy-financial',
        symbol: 'pussy',
        addr: '0x9196e18bc349b1f64bc08784eae259525329a1ad',
    },
    {
        id: 'pway',
        symbol: 'pway',
        addr: '0x5a14fe6923e767a8238f29d3e1fb1a913975f0d7',
    },
    {
        id: 'pxgold-synthetic-gold-31-may-2021',
        symbol: 'pxGOLD-MAY2021',
        addr: '0x59fec83ec709c893aedd1a144cf1828eb04127cd',
    },
    {
        id: 'pxgold-synthetic-gold-expiring-31-mar-2022',
        symbol: 'pxgold-mar2022',
        addr: '0x5247c0db4044fb6f97f32c7e1b48758019a5a912',
    },
    {
        id: 'pxusd-synthetic-usd-expiring-1-april-2021',
        symbol: 'pxusd-mar2021',
        addr: '0xf93340b1a3adf7eedcaec25fae8171d4b736e89f',
    },
    {
        id: 'pxusd-synthetic-usd-expiring-31-mar-2022',
        symbol: 'pxusd-mar2022',
        addr: '0x4b606e9eb2228c70f44453afe5a73e1fea258ce1',
    },
    {
        id: 'pylon-finance',
        symbol: 'pylon',
        addr: '0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2',
    },
    {
        id: 'pylon-network',
        symbol: 'pylnt',
        addr: '0x7703c35cffdc5cda8d27aa3df2f9ba6964544b6e',
    },
    {
        id: 'pyro-network',
        symbol: 'pyro',
        addr: '0x14409b0fc5c7f87b5dad20754fe22d29a3de8217',
    },
    {
        id: 'q8e20-token',
        symbol: 'q8e20',
        addr: '0xa31f7a32db329f270a0e6b59558823e64d8ef0a6',
    },
    {
        id: 'qanplatform',
        symbol: 'qark',
        addr: '0x63120ccd7b415743e8753afd167f5ad4a1732c43',
    },
    {
        id: 'qanx-token',
        symbol: 'qanx',
        addr: '0xaaa7a10a8ee237ea61e8ac46c50a8db8bcc1baaa',
    },
    {
        id: 'qash',
        symbol: 'qash',
        addr: '0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6',
    },
    {
        id: 'qawalla-token',
        symbol: 'qwla',
        addr: '0x1d96fd43ee07aa79f8fd003cbdf404fb5ce41ad2',
    },
    {
        id: 'qcad',
        symbol: 'qcad',
        addr: '0x4a16baf414b8e637ed12019fad5dd705735db2e0',
    },
    {
        id: 'qchi',
        symbol: 'qch',
        addr: '0x687bfc3e73f6af55f0ccca8450114d107e781a0e',
    },
    {
        id: 'qchi-chain',
        symbol: 'qhc',
        addr: '0x5df94780f00140fe72d239d0d261f7797e3fbd1b',
    },
    {
        id: 'qcore-finance',
        symbol: 'qcore',
        addr: '0x82866b4a71ba9d930fe338c386b6a45a7133eb36',
    },
    {
        id: 'q-dao-governance-token-v1-0',
        symbol: 'qdao',
        addr: '0x3166c570935a7d8554c8f4ea792ff965d2efe1f2',
    },
    {
        id: 'qdefi-rating-governance-token-v2',
        symbol: 'qdefi',
        addr: '0xfee4dbe2751bf8d1b1b861aaf9664961f19ce91a',
    },
    {
        id: 'qian-governance-token',
        symbol: 'kun',
        addr: '0x65d9bc970aa9b2413027fa339f7f179b3f3f2604',
    },
    {
        id: 'qiibee',
        symbol: 'qbx',
        addr: '0x2467aa6b5a2351416fd4c3def8462d841feeecec',
    },
    {
        id: 'qobit',
        symbol: 'qob',
        addr: '0xbd1e7f594600dcaf7f483af55deacec0159a064e',
    },
    {
        id: 'qqq-token',
        symbol: 'qqq',
        addr: '0x2822f6d1b2f41f93f33d937bc7d84a8dfa4f4c21',
    },
    {
        id: 'quadrant-protocol',
        symbol: 'equad',
        addr: '0xc28e931814725bbeb9e670676fabbcb694fe7df2',
    },
    {
        id: 'quai-dao',
        symbol: 'quai',
        addr: '0x40821cd074dfecb1524286923bc69315075b5c89',
    },
    {
        id: 'quality-tracing-chain',
        symbol: 'qtc',
        addr: '0x19131a8ae42e32c747c1ead318fadb98b0be45b7',
    },
    {
        id: 'quantfury',
        symbol: 'qtf',
        addr: '0x0fcbc31c503b4a9ed90e87f8ff46c318a4a14260',
    },
    {
        id: 'quant-network',
        symbol: 'qnt',
        addr: '0x4a220e6096b25eadb88358cb44068a3248254675',
    },
    {
        id: 'quantstamp',
        symbol: 'qsp',
        addr: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    },
    {
        id: 'quark-chain',
        symbol: 'qkc',
        addr: '0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664',
    },
    {
        id: 'queenbee',
        symbol: 'qbz',
        addr: '0x9bbc9286cdf6eefebf21df19bac71c6bdd7759d4',
    },
    {
        id: 'quick',
        symbol: 'quick',
        addr: '0x6c28aef8977c9b773996d0e8376d2ee379446f2f',
    },
    {
        id: 'quick-mining',
        symbol: 'qm',
        addr: '0xb73404280697080da0116cfac0e577fafdf44b37',
    },
    {
        id: 'quickx-protocol',
        symbol: 'qcx',
        addr: '0xf9e5af7b42d31d51677c75bbbd37c1986ec79aee',
    },
    {
        id: 'quinads',
        symbol: 'quin',
        addr: '0x86e44543164d9b97b14ef7f6f3ab7ba670cab346',
    },
    {
        id: 'quiverx',
        symbol: 'qrx',
        addr: '0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8',
    },
    {
        id: 'quiztok',
        symbol: 'qtcon',
        addr: '0x1bf7fd22709733ccd7c45ab27dd02c7ec8e50078',
    },
    {
        id: 'qunqun',
        symbol: 'qun',
        addr: '0x264dc2dedcdcbb897561a57cba5085ca416fb7b4',
    },
    {
        id: 'quras-token',
        symbol: 'xqc',
        addr: '0x70da48f4b7e83c386ef983d4cef4e58c2c09d8ac',
    },
    {
        id: 'qusd-stablecoin',
        symbol: 'qusd',
        addr: '0x59d4ccc94a9c4c3d3b4ba2aa343a9bdf95145dd1',
    },
    {
        id: 'r34p',
        symbol: 'r34p',
        addr: '0xcaeaf8381d4b20b43afa42061d6f80319a8881f6',
    },
    {
        id: 'r3fi-finance',
        symbol: 'r3fi',
        addr: '0x13572851103bed49ff743af4c4bb5ace88b22e2f',
    },
    {
        id: 'r64x',
        symbol: 'r64x',
        addr: '0xf3110b27f481f9ac3c1ba3c54de542accb2d913c',
    },
    {
        id: 'rabbit-coin',
        symbol: 'brb',
        addr: '0x61d24aabb3e5e800d8f3d3d43dcbd66ae6cab51e',
    },
    {
        id: 'rac',
        symbol: 'rac',
        addr: '0xc22b30e4cce6b78aaaadae91e44e73593929a3e9',
    },
    {
        id: 'racing-pigeon-chain',
        symbol: 'rpc',
        addr: '0xf18af466f8885f9ea93d2b85c47a427cb01bad52',
    },
    {
        id: 'radicle',
        symbol: 'rad',
        addr: '0x31c8eacbffdd875c74b94b077895bd78cf1e64a3',
    },
    {
        id: 'rae-token',
        symbol: 'rae',
        addr: '0xe5a3229ccb22b6484594973a03a3851dcd948756',
    },
    {
        id: 'rage-fan',
        symbol: 'rage',
        addr: '0x94804dc4948184ffd7355f62ccbb221c9765886f',
    },
    {
        id: 'rai',
        symbol: 'rai',
        addr: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
    },
    {
        id: 'raiden-network',
        symbol: 'rdn',
        addr: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    },
    {
        id: 'rai-finance',
        symbol: 'rai',
        addr: '0xf30547ff2df1f1cbe5c8dd758b3dd098c856e38f',
    },
    {
        id: 'rainicorn',
        symbol: 'raini',
        addr: '0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed',
    },
    {
        id: 'rain-network',
        symbol: 'rain',
        addr: '0x61cdb66e56fad942a7b5ce3f419ffe9375e31075',
    },
    {
        id: 'rake-finance',
        symbol: 'rak',
        addr: '0xa8b0f154a688c22142e361707df64277e0a0be66',
    },
    {
        id: 'rakon',
        symbol: 'rkn',
        addr: '0x6e5a43db10b04701385a34afb670e404bc7ea597',
    },
    {
        id: 'raksur',
        symbol: 'ras',
        addr: '0x393fac0773c765c80dc887451377d553c46f83b1',
    },
    {
        id: 'rakun',
        symbol: 'raku',
        addr: '0x51bc0deaf7bbe82bc9006b0c3531668a4206d27f',
    },
    {
        id: 'rally-2',
        symbol: 'rly',
        addr: '0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b',
    },
    {
        id: 'ramifi',
        symbol: 'ram',
        addr: '0xac6fe9aa6b996d15f23e2e9a384fe64607bba7d5',
    },
    {
        id: 'ramp',
        symbol: 'ramp',
        addr: '0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f',
    },
    {
        id: 'rapidz',
        symbol: 'rpzx',
        addr: '0x68350d30d9f58c81aaaa41929f1bfc52fff4ea49',
    },
    {
        id: 'rare',
        symbol: 'rare',
        addr: '0x81b1bfd6cb9ad42db395c2a27f73d4dcf5777e2d',
    },
    {
        id: 'rare-pepe',
        symbol: 'rpepe',
        addr: '0x0e9b56d2233ea2b5883861754435f9c51dbca141',
    },
    {
        id: 'rarible',
        symbol: 'rari',
        addr: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
    },
    {
        id: 'rari-governance-token',
        symbol: 'rgt',
        addr: '0xd291e7a03283640fdc51b121ac401383a46cc623',
    },
    {
        id: 'rate3',
        symbol: 'rte',
        addr: '0x436f0f3a982074c4a05084485d421466a994fe53',
    },
    {
        id: 'raze-network',
        symbol: 'raze',
        addr: '0x5eaa69b29f99c84fe5de8200340b4e9b4ab38eac',
    },
    {
        id: 'razor-network',
        symbol: 'razor',
        addr: '0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd',
    },
    {
        id: 'rbase-finance',
        symbol: 'rbase',
        addr: '0xe8b251822d003a2b2466ee0e38391c2db2048739',
    },
    {
        id: 'rccc',
        symbol: 'rccc',
        addr: '0x33bfd20660eeaf952e8d5bc3236e1918701f17d0',
    },
    {
        id: 'read-this-contract',
        symbol: 'rtc',
        addr: '0x7f9a00e03c2e53a3af6031c17a150dbedaaab3dc',
    },
    {
        id: 'real',
        symbol: 'real',
        addr: '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
    },
    {
        id: 'real-coin',
        symbol: 'real',
        addr: '0x6b4389afb3e243a65668b7311fa9ef092a8a3b64',
    },
    {
        id: 'real-estate-sales-platform',
        symbol: 'rsp',
        addr: '0xcf42de80d80edc4a8d56e4e840b5ff0dc84aaa17',
    },
    {
        id: 'realio-network',
        symbol: 'rio',
        addr: '0xf21661d0d1d76d3ecb8e1b9f1c923dbfffae4097',
    },
    {
        id: 'real-land',
        symbol: 'rld',
        addr: '0xd1632efa392925089785b43410c529f8959a8d9a',
    },
    {
        id: 'realtoken-16200-fullerton-avenue-detroit-mi',
        symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
        addr: '0x22c8ecf727c23422f47093b562ec53c139805301',
    },
    {
        id: 'realtoken-20200-lesure-st-detroit-mi',
        symbol: 'REALTOKEN-20200-LESURE-ST-DETROIT-MI',
        addr: '0x395c47a421c254ae42253764a7f56e0ee0cddac5',
    },
    {
        id: 'realtract',
        symbol: 'ret',
        addr: '0xd7394087e1dbbe477fe4f1cf373b9ac9459565ff',
    },
    {
        id: 'reapchain',
        symbol: 'reap',
        addr: '0x1fc5ef0337aea85c5f9198853a6e3a579a7a6987',
    },
    {
        id: 'reapit',
        symbol: 'reap',
        addr: '0xa20b44c001578e2c52665098ba62b00ebf8963cb',
    },
    {
        id: 'rebased',
        symbol: 'reb2',
        addr: '0x87f5f9ebe40786d49d35e1b5997b07ccaa8adbff',
    },
    {
        id: 'rebasing-liquidity',
        symbol: 'delta rlp',
        addr: '0xfcfc434ee5bff924222e084a8876eee74ea7cfba',
    },
    {
        id: 'rebit',
        symbol: 'keyt',
        addr: '0xce13abce0db5a8224616ef24d3979d466f19cf90',
    },
    {
        id: 'red',
        symbol: 'red',
        addr: '0x76960dccd5a1fe799f7c29be9f19ceb4627aeb2f',
    },
    {
        id: 'redfox-labs-2',
        symbol: 'rfox',
        addr: '0xa1d6df714f91debf4e0802a542e13067f31b8262',
    },
    {
        id: 'redi',
        symbol: 'redi',
        addr: '0xebdf9a7ae0009b958c6d09501eb9ac1dafeb31ab',
    },
    {
        id: 'redpanda-earth',
        symbol: 'redpanda',
        addr: '0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548',
    },
    {
        id: 'reef-finance',
        symbol: 'reef',
        addr: '0xfe3e6a25e6b192a42a44ecddcd13796471735acf',
    },
    {
        id: 'refereum',
        symbol: 'rfr',
        addr: '0xd0929d411954c47438dc1d871dd6081f5c5e149c',
    },
    {
        id: 'refine-medium',
        symbol: 'xrm',
        addr: '0xe1329ebf8b719881549909d689987f746a8931d1',
    },
    {
        id: 'reflect-finance',
        symbol: 'rfi',
        addr: '0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7',
    },
    {
        id: 'reflector-finance',
        symbol: 'rfctr',
        addr: '0x16b1eb8b8e9058800bf0ba3684f805a6711a1d2c',
    },
    {
        id: 'reflex',
        symbol: 'rfx',
        addr: '0x159a1dfae19057de57dfffcbb3da1ae784678965',
    },
    {
        id: 'reflexer-ungovernance-token',
        symbol: 'flx',
        addr: '0x6243d8cea23066d098a15582d81a598b4e8391f4',
    },
    {
        id: 'refork',
        symbol: 'efk',
        addr: '0x6653c0d21507573cc39ead1e609d74d5e0ca16e2',
    },
    {
        id: 'refract',
        symbol: 'rfr',
        addr: '0xe0bdaafd0aab238c55d68ad54e616305d4a21772',
    },
    {
        id: 'refraction',
        symbol: 'REFRACTION',
        addr: '0x21a870c7fce1bce5d88bdf845ac332c76204a9a0',
    },
    {
        id: 'relax-protocol',
        symbol: 'rlx',
        addr: '0x7fc693b16184b6778f4534f5410f06633cb030e0',
    },
    {
        id: 'relayer-network',
        symbol: 'rlr',
        addr: '0x5b3f693efd5710106eb2eac839368364acb5a70f',
    },
    {
        id: 'relayer-network-2',
        symbol: 'rlr',
        addr: '0x0e3ef895c59e7db27214ab5bbf56347ce115a3f4',
    },
    {
        id: 'release-ico-project',
        symbol: 'rel',
        addr: '0x61bfc979ea8160ede9b862798b7833a97bafa02a',
    },
    {
        id: 'relevant',
        symbol: 'rel',
        addr: '0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec',
    },
    {
        id: 'relex',
        symbol: 'rlx',
        addr: '0x4a42d2c580f83dce404acad18dab26db11a1750e',
    },
    {
        id: 'relite-finance',
        symbol: 'reli',
        addr: '0x0e58ed58e150dba5fd8e5d4a49f54c7e1e880124',
    },
    {
        id: 'remme',
        symbol: 'rem',
        addr: '0x83984d6142934bb535793a82adb0a46ef0f66b6d',
    },
    {
        id: 'rena-finance',
        symbol: 'rena',
        addr: '0x56de8bc61346321d4f2211e3ac3c0a7f00db9b76',
    },
    {
        id: 'renbch',
        symbol: 'renbch',
        addr: '0x459086f2376525bdceba5bdda135e4e9d3fef5bf',
    },
    {
        id: 'renbtc',
        symbol: 'renbtc',
        addr: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
    },
    {
        id: 'render-token',
        symbol: 'rndr',
        addr: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
    },
    {
        id: 'rendoge',
        symbol: 'rendoge',
        addr: '0x3832d2f059e55934220881f831be501d180671a7',
    },
    {
        id: 'renfil',
        symbol: 'renfil',
        addr: '0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5',
    },
    {
        id: 'rentberry',
        symbol: 'berry',
        addr: '0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c',
    },
    {
        id: 'rentible',
        symbol: 'rnb',
        addr: '0x2a039b1d9bbdccbb91be28691b730ca893e5e743',
    },
    {
        id: 'renzec',
        symbol: 'renzec',
        addr: '0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2',
    },
    {
        id: 'republic-protocol',
        symbol: 'ren',
        addr: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    {
        id: 'request-network',
        symbol: 'req',
        addr: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    },
    {
        id: 'reserve',
        symbol: 'rsv',
        addr: '0x196f4727526ea7fb1e17b2071b3d8eaa38486988',
    },
    {
        id: 'reserve-rights-token',
        symbol: 'rsr',
        addr: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    },
    {
        id: 'resfinex-token',
        symbol: 'res',
        addr: '0x0a9f693fce6f00a51a8e0db4351b5a8078b4242e',
    },
    {
        id: 'restart-energy',
        symbol: 'mwat',
        addr: '0x6425c6be902d692ae2db752b3c268afadb099d3b',
    },
    {
        id: 'restore',
        symbol: 'rest',
        addr: '0x6753795d67ed0b2b65b57fc45c7ac0f53b55f4fe',
    },
    {
        id: 'reth',
        symbol: 'reth',
        addr: '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593',
    },
    {
        id: 'revain',
        symbol: 'rev',
        addr: '0x2ef52ed7de8c5ce03a4ef0efbe9b7450f2d7edc9',
    },
    {
        id: 'revelation-coin',
        symbol: 'rev',
        addr: '0xe6be436df1ff96956dfe0b2b77fab84ede30236f',
    },
    {
        id: 'revolution-populi',
        symbol: 'rvp',
        addr: '0x17ef75aa22dd5f6c2763b8304ab24f40ee54d48a',
    },
    {
        id: 'revomon',
        symbol: 'revo',
        addr: '0x155040625d7ae3e9cada9a73e3e44f76d3ed1409',
    },
    {
        id: 'revv',
        symbol: 'revv',
        addr: '0x557b933a7c2c45672b610f8954a3deb39a51a8ca',
    },
    {
        id: 'rewardiqa',
        symbol: 'rew',
        addr: '0x3ffffa8f3cc943e43f9f17a83cbb18f4bbb9f4ac',
    },
    {
        id: 'rex',
        symbol: 'rex',
        addr: '0xf05a9382a4c3f29e2784502754293d88b835109c',
    },
    {
        id: 'rfis',
        symbol: 'rfis',
        addr: '0xc82eb6dea0c93edb8b697b89ad1b13d19469d635',
    },
    {
        id: 'rfyield-finance',
        symbol: 'rfy',
        addr: '0x3f5be50e4651ee184109a0b1b71d344d12e8b603',
    },
    {
        id: 'rheaprotocol',
        symbol: 'rhea',
        addr: '0xf7a219fffeade6cd98789da5642b687f743270eb',
    },
    {
        id: 'rhegic',
        symbol: 'rhegic',
        addr: '0x47c0ad2ae6c0ed4bcf7bc5b380d7205e89436e84',
    },
    {
        id: 'rhegic2',
        symbol: 'rhegic2',
        addr: '0xad7ca17e23f13982796d27d1e6406366def6ee5f',
    },
    {
        id: 'rigel-finance',
        symbol: 'rigel',
        addr: '0x4ca0654f4fc1025cf1a17b7459c20ac0479522ad',
    },
    {
        id: 'rigel-protocol',
        symbol: 'rgp',
        addr: '0x4af5ff1a60a6ef6c7c8f9c4e304cd9051fca3ec0',
    },
    {
        id: 'rigoblock',
        symbol: 'grg',
        addr: '0x4fbb350052bca5417566f188eb2ebce5b19bc964',
    },
    {
        id: 'ring-x-platform',
        symbol: 'ringx',
        addr: '0x7f86c782ec802ac402e0369d2e6d500256f7abc5',
    },
    {
        id: 'rio-defi',
        symbol: 'rfuel',
        addr: '0xaf9f549774ecedbd0966c52f250acc548d3f36e5',
    },
    {
        id: 'ripio-credit-network',
        symbol: 'rcn',
        addr: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
    },
    {
        id: 'risecointoken',
        symbol: 'rsct',
        addr: '0xc275865a6cce78398e94cb2af29fa0d787b7f7eb',
    },
    {
        id: 'rise-protocol',
        symbol: 'rise',
        addr: '0x3fa807b6f8d4c407e6e605368f4372d14658b38c',
    },
    {
        id: 'ri-token',
        symbol: 'ri',
        addr: '0x37e808f084101f75783612407e7c3f5f92d8ee3f',
    },
    {
        id: 'rivemont',
        symbol: 'rvmt',
        addr: '0x43ae53b8c920c6c69f4abf393fcb68a6dd4cbab4',
    },
    {
        id: 'rivetz',
        symbol: 'rvt',
        addr: '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244',
    },
    {
        id: 'rivex-erc20',
        symbol: 'rvx',
        addr: '0x91d6f6e9026e43240ce6f06af6a4b33129ebde94',
    },
    {
        id: 'rizen-coin',
        symbol: 'rzn',
        addr: '0xd8c82fbc4d8ed0644a7ec04cf973e84c6153c1d7',
    },
    {
        id: 'rizubot',
        symbol: 'rzb',
        addr: '0x429ac77f069bff489e2d78f9479e1e933305c528',
    },
    {
        id: 'rmpl',
        symbol: 'rmpl',
        addr: '0xe17f017475a709de58e976081eb916081ff4c9d5',
    },
    {
        id: 'robet-coin',
        symbol: 'robet',
        addr: '0x2344871f523cbb28a4f60045531184cf1f03ad24',
    },
    {
        id: 'robocalls',
        symbol: 'rc20',
        addr: '0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7',
    },
    {
        id: 'robonomics-network',
        symbol: 'xrt',
        addr: '0x7de91b204c1c737bcee6f000aaa6569cf7061cb7',
    },
    {
        id: 'robonomics-web-services',
        symbol: 'rws',
        addr: '0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802',
    },
    {
        id: 'robot',
        symbol: 'robot',
        addr: '0xfb5453340c03db5ade474b27e68b6a9c6b2823eb',
    },
    {
        id: 'robotina',
        symbol: 'rox',
        addr: '0x574f84108a98c575794f75483d801d1d5dc861a5',
    },
    {
        id: 'robo-token',
        symbol: 'robo',
        addr: '0x6fc2f1044a3b9bb3e43a43ec8f840843ed753061',
    },
    {
        id: 'rock3t',
        symbol: 'r3t',
        addr: '0x8c7424c3000942e5a93de4a01ce2ec86c06333cb',
    },
    {
        id: 'rocket-bunny',
        symbol: 'bunny',
        addr: '0x3ea50b7ef6a7eaf7e966e2cb72b519c16557497c',
    },
    {
        id: 'rocket-pool',
        symbol: 'rpl',
        addr: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    },
    {
        id: 'rocket-token',
        symbol: 'rckt',
        addr: '0x78571accaf24052795f98b11f093b488a2d9eaa4',
    },
    {
        id: 'rocket-vault-finance',
        symbol: 'rvf',
        addr: '0xdc8af07a7861bedd104b8093ae3e9376fc8596d2',
    },
    {
        id: 'rocki',
        symbol: 'rocks',
        addr: '0x92ece48522e1acbcda4aaa8c2fbf2aa9fb15d624',
    },
    {
        id: 'rom-token',
        symbol: 'rom',
        addr: '0xacaca5b8805636608e14c64b0bfffc2deb2c6cec',
    },
    {
        id: 'roobee',
        symbol: 'roobee',
        addr: '0xa31b1767e09f842ecfd4bc471fe44f830e3891aa',
    },
    {
        id: 'rook',
        symbol: 'rook',
        addr: '0xfa5047c9c78b8877af97bdcb85db743fd7313d4a',
    },
    {
        id: 'roonex',
        symbol: 'rnx',
        addr: '0x72a6344185b383035d6665c3f44a9dfcc73873c8',
    },
    {
        id: 'rootkit',
        symbol: 'root',
        addr: '0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e',
    },
    {
        id: 'rope',
        symbol: '$rope',
        addr: '0x9d47894f8becb68b9cf3428d256311affe8b068b',
    },
    {
        id: 'rotharium',
        symbol: 'rth',
        addr: '0x3fd8f39a962efda04956981c31ab89fab5fb8bc8',
    },
    {
        id: 'rotten',
        symbol: 'rot',
        addr: '0xd04785c4d8195e4a54d9dec3a9043872875ae9e2',
    },
    {
        id: 'rougecoin',
        symbol: 'xrge',
        addr: '0xa1c7d450130bb77c6a23ddfaecbc4a060215384b',
    },
    {
        id: 'route',
        symbol: 'route',
        addr: '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4',
    },
    {
        id: 'royale',
        symbol: 'roya',
        addr: '0x7eaf9c89037e4814dc0d9952ac7f888c784548db',
    },
    {
        id: 'rozeus',
        symbol: 'roz',
        addr: '0xe55cc44c0cf9cede2d68f9432cbeeafa6357ed92',
    },
    {
        id: 'rrspace',
        symbol: 'rrc',
        addr: '0xdc7836bc6c84c51275365e337fd147db2dc7b3c3',
    },
    {
        id: 'rubic',
        symbol: 'rbc',
        addr: '0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3',
    },
    {
        id: 'rublix',
        symbol: 'rblx',
        addr: '0xfc2c4d8f95002c14ed0a7aa65102cac9e5953b5e',
    },
    {
        id: 'ruff',
        symbol: 'ruff',
        addr: '0xf278c1ca969095ffddded020290cf8b5c424ace2',
    },
    {
        id: 'rug',
        symbol: 'rug',
        addr: '0xd0df3b1cf729a29b7404c40d61c750008e631ba7',
    },
    {
        id: 'rug-proof',
        symbol: 'rpt',
        addr: '0xa0bb0027c28ade4ac628b7f81e7b93ec71b4e020',
    },
    {
        id: 'rugz',
        symbol: 'rugz',
        addr: '0xedfbd6c48c3ddff5612ade14b45bb19f916809ba',
    },
    {
        id: 'ruler-protocol',
        symbol: 'ruler',
        addr: '0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8',
    },
    {
        id: 'ruletka',
        symbol: 'rtk',
        addr: '0x1f6deadcb526c4710cf941872b86dcdfbbbd9211',
    },
    {
        id: 'rupiah-token',
        symbol: 'idrt',
        addr: '0x998ffe1e43facffb941dc337dd0468d52ba5b48a',
    },
    {
        id: 'rush',
        symbol: 'ruc',
        addr: '0x395768aeb16484e5785612a98e9408e4cc1269ec',
    },
    {
        id: 'ryi-platinum',
        symbol: 'ryip',
        addr: '0xd78e5b24aae1bd03a488af642770e2abb986f9d5',
    },
    {
        id: 's1inch',
        symbol: 's1inch',
        addr: '0xcd39b5434a0a92cf47d1f567a7df84be356814f0',
    },
    {
        id: 's4fe',
        symbol: 's4f',
        addr: '0xaec7d1069e3a914a3eb50f0bfb1796751f2ce48a',
    },
    {
        id: 'saave',
        symbol: 'saave',
        addr: '0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076',
    },
    {
        id: 'sacks',
        symbol: 'sacks',
        addr: '0xa6610ed604047e7b76c1da288172d15bcda57596',
    },
    {
        id: 'sada',
        symbol: 'sada',
        addr: '0xe36e2d3c7c34281fa3bc737950a68571736880a1',
    },
    {
        id: 'sad-cat-token',
        symbol: 'scat',
        addr: '0x8424c5ac326834b404742de0067bcb654e86be30',
    },
    {
        id: 'safari',
        symbol: 'sfr',
        addr: '0x648d19d775a8d4bafba09e189090bdcbf8ef31c1',
    },
    {
        id: 'safe2',
        symbol: 'safe2',
        addr: '0x250a3500f48666561386832f1f1f1019b89a2699',
    },
    {
        id: 'safebreastinu',
        symbol: 'breast',
        addr: '0x77a2bf0bda9775fb3524a6720dd3b16bd455e2c2',
    },
    {
        id: 'safeearth',
        symbol: 'safeearth',
        addr: '0xe6f1966d04cfcb9cd1b1dc4e8256d8b501b11cba',
    },
    {
        id: 'safemoon-inu',
        symbol: 'smi',
        addr: '0xcd7492db29e2ab436e819b249452ee1bbdf52214',
    },
    {
        id: 'safeswap',
        symbol: 'ssgt',
        addr: '0x2ecc48ba346a73d7d55aa5a46b5e314d9daa6161',
    },
    {
        id: 'saffron-finance',
        symbol: 'sfi',
        addr: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
    },
    {
        id: 'sai',
        symbol: 'sai',
        addr: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    {
        id: 'saint-fame',
        symbol: 'fame',
        addr: '0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2',
    },
    {
        id: 'saito',
        symbol: 'saito',
        addr: '0xfa14fa6958401314851a17d6c5360ca29f74b57b',
    },
    {
        id: 'sak3',
        symbol: 'sak3',
        addr: '0xe9f84de264e91529af07fa2c746e934397810334',
    },
    {
        id: 'sake-token',
        symbol: 'sake',
        addr: '0x066798d9ef0833ccc719076dab77199ecbd178b0',
    },
    {
        id: 'sakhalin-husky',
        symbol: 'SAHU',
        addr: '0x2b1fe2cea92436e8c34b7c215af66aaa2932a8b2',
    },
    {
        id: 'sakura-bloom',
        symbol: 'skb',
        addr: '0x4af328c52921706dcb739f25786210499169afe6',
    },
    {
        id: 'salient-investment-holding',
        symbol: 'sih',
        addr: '0x6d728ff862bfe74be2aba30537e992a24f259a22',
    },
    {
        id: 'salt',
        symbol: 'salt',
        addr: '0x4156d3342d5c385a87d264f90653733592000581',
    },
    {
        id: 'samurai',
        symbol: 'sam',
        addr: '0x53378825d95281737914a8a2ac0e5a9304ae5ed7',
    },
    {
        id: 'samzn',
        symbol: 'samzn',
        addr: '0x9cf7e61853ea30a41b02169391b393b901eac457',
    },
    {
        id: 'sanshu-inu',
        symbol: 'sanshu',
        addr: '0xc73c167e7a4ba109e4052f70d5466d0c312a344d',
    },
    {
        id: 'santiment-network-token',
        symbol: 'san',
        addr: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
    },
    {
        id: 'sapchain',
        symbol: 'sap',
        addr: '0x91f529e972d6cf43d36abfa91c1118122ff7f16c',
    },
    {
        id: 'sapien',
        symbol: 'spn',
        addr: '0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a',
    },
    {
        id: 'sappchain',
        symbol: 'sapp',
        addr: '0x4df76a9dab9bb8310e4ad3dc4336a8e26ed24ebb',
    },
    {
        id: 'sarcophagus',
        symbol: 'sarco',
        addr: '0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a',
    },
    {
        id: 'saren',
        symbol: 'sar',
        addr: '0xbd4a858139b155219e2c8d10135003fdef720b6b',
    },
    {
        id: 'sashimi',
        symbol: 'sashimi',
        addr: '0xc28e27870558cf22add83540d2126da2e4b464c2',
    },
    {
        id: 'satoexchange-token',
        symbol: 'satx',
        addr: '0xe96f2c381e267a96c29bbb8ab05ab7d3527b45ab',
    },
    {
        id: 'satopay',
        symbol: 'stop',
        addr: '0x8c3ee4f778e282b59d42d693a97b80b1ed80f4ee',
    },
    {
        id: 'satopay-yield-token',
        symbol: 'spy',
        addr: '0xe4883bcb919386bb5f48ef59b7c31c1d93a51a57',
    },
    {
        id: 'satoshivision-coin',
        symbol: 'svc',
        addr: '0x64ea2c6104f1cf3035e28be0f781b6286d50934d',
    },
    {
        id: 'satt',
        symbol: 'satt',
        addr: '0xdf49c9f599a0a9049d97cff34d0c30e468987389',
    },
    {
        id: 'saud',
        symbol: 'saud',
        addr: '0xf48e200eaf9906362bb1442fca31e0835773b8b4',
    },
    {
        id: 'sav3',
        symbol: 'sav3',
        addr: '0x6e10aacb89a28d6fa0fe68790777fec7e7f01890',
    },
    {
        id: 'savedroid',
        symbol: 'svd',
        addr: '0xbdeb4b83251fb146687fa19d1c660f99411eefe3',
    },
    {
        id: 'save-environment-token',
        symbol: 'set',
        addr: '0x0a2d9370cf74da3fd3df5d764e394ca8205c50b6',
    },
    {
        id: 'save-token-us',
        symbol: 'save',
        addr: '0xc1eecf1f4af8eb9a2a19f6c26b434aa96ce859e1',
    },
    {
        id: 'savix',
        symbol: 'svx',
        addr: '0xc434b27736a6882d33094d34792999702860a13c',
    },
    {
        id: 'sbank',
        symbol: 'sts',
        addr: '0x4c14114c107d6374ec31981f5f6cc27a13e22f9a',
    },
    {
        id: 'sbnb',
        symbol: 'sbnb',
        addr: '0x617aecb6137b5108d1e7d4918e3725c8cebdb848',
    },
    {
        id: 'sbtc',
        symbol: 'sbtc',
        addr: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
    },
    {
        id: 'scanetchain',
        symbol: 'swc',
        addr: '0xadf8b8050639b6236915f7516d69de714672f0bf',
    },
    {
        id: 'scatter-cx',
        symbol: 'stt',
        addr: '0xac9bb427953ac7fddc562adca86cf42d988047fd',
    },
    {
        id: 'scex',
        symbol: 'scex',
        addr: '0xeabacd844a196d7faf3ce596edebf9900341b420',
    },
    {
        id: 'schain-wallet',
        symbol: 'scha',
        addr: '0x2cad4991f62fc6fcd8ec219f37e7de52b688b75a',
    },
    {
        id: 'science_chain',
        symbol: 'scc',
        addr: '0x4a9f00de5d8a244944313faee23849ff725e680d',
    },
    {
        id: 'scifi-finance',
        symbol: 'scifi',
        addr: '0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4',
    },
    {
        id: 'scomp',
        symbol: 'scomp',
        addr: '0xeb029507d3e043dd6c87f2917c4e82b902c35618',
    },
    {
        id: 'scoobi-doge',
        symbol: 'scoobi',
        addr: '0x06a87f6afec4a739c367bef69eefe383d27106bd',
    },
    {
        id: 'scroll-token',
        symbol: 'xd',
        addr: '0x24dcc881e7dd730546834452f21872d5cb4b5293',
    },
    {
        id: 'scrv',
        symbol: 'scrv',
        addr: '0xd38aeb759891882e78e957c80656572503d8c1b1',
    },
    {
        id: 'scry-info',
        symbol: 'ddd',
        addr: '0x9f5f3cfd7a32700c93f971637407ff17b91c7342',
    },
    {
        id: 'sdash',
        symbol: 'sdash',
        addr: '0xfe33ae95a9f0da8a845af33516edc240dcd711d6',
    },
    {
        id: 'sdefi',
        symbol: 'sdefi',
        addr: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
    },
    {
        id: 'sdot',
        symbol: 'sdot',
        addr: '0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6',
    },
    {
        id: 'sea-cucumber-chain',
        symbol: 'scc',
        addr: '0xe6b75a1960f91bfa7010dec8543685ead67f8cff',
    },
    {
        id: 'seadex',
        symbol: 'sead',
        addr: '0x936862d34b930b85272f65e94d5b6ec469f95ff7',
    },
    {
        id: 'sealblock-token',
        symbol: 'skt',
        addr: '0x82bdfb4c6f488fc47700cef12c448a2f13f8ff4f',
    },
    {
        id: 'seal-finance',
        symbol: 'seal',
        addr: '0x33c2da7fd5b125e629b3950f3c38d7f721d7b30d',
    },
    {
        id: 'sechain',
        symbol: 'snn',
        addr: '0xf5717f5df41ea67ef67dfd3c1d02f9940bcf5d08',
    },
    {
        id: 'secret-erc20',
        symbol: 'wscrt',
        addr: '0x2b89bf8ba858cd2fcee1fada378d5cd6936968be',
    },
    {
        id: 'secure-pad',
        symbol: 'sepa',
        addr: '0x10994aa2fb8e6ba5d9fb2bc127ff228c4fe6167f',
    },
    {
        id: 'securypto',
        symbol: 'scu',
        addr: '0x8b8d971c8bc37f65a93c4609644fef0590af2fc7',
    },
    {
        id: 'sedo-pow-token',
        symbol: 'sedo',
        addr: '0x0f00f1696218eaefa2d2330df3d6d1f94813b38f',
    },
    {
        id: 'seedswap',
        symbol: 'snft',
        addr: '0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2',
    },
    {
        id: 'seed-venture',
        symbol: 'seed',
        addr: '0xc969e16e63ff31ad4bcac3095c616644e6912d79',
    },
    {
        id: 'seele',
        symbol: 'seele',
        addr: '0xb1e93236ab6073fdac58ada5564897177d4bcc43',
    },
    {
        id: 'seen',
        symbol: 'seen',
        addr: '0xca3fe04c7ee111f0bbb02c328c699226acf9fd33',
    },
    {
        id: 'seer',
        symbol: 'seer',
        addr: '0x0f1ed66c251bcb52ecf7e67ac64bb72482048adb',
    },
    {
        id: 'sefi',
        symbol: 'sefi',
        addr: '0x773258b03c730f84af10dfcb1bfaa7487558b8ac',
    },
    {
        id: 'seigniorage-shares',
        symbol: 'share',
        addr: '0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d',
    },
    {
        id: 'sekuritance',
        symbol: 'skrt',
        addr: '0x887168120cb89fb06f3e74dc4af20d67df0977f6',
    },
    {
        id: 'selenium',
        symbol: 'slc',
        addr: '0x2ac22ebc138ff127566f68db600addad7df38d38',
    },
    {
        id: 'selfkey',
        symbol: 'key',
        addr: '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7',
    },
    {
        id: 'self-storage-coin',
        symbol: 'stor',
        addr: '0xa3ceac0aac5c5d868973e546ce4731ba90e873c2',
    },
    {
        id: 'semitoken',
        symbol: 'semi',
        addr: '0x6d7917864003a9bb13cbbec8f1cdd4e36ddf6fc8',
    },
    {
        id: 'sensitrust',
        symbol: 'sets',
        addr: '0x04e0af0af1b7f0023c6b12af5a94df59b0e8cf59',
    },
    {
        id: 'senso',
        symbol: 'senso',
        addr: '0xc19b6a4ac7c7cc24459f08984bbd09664af17bd1',
    },
    {
        id: 'sentinel-chain',
        symbol: 'senc',
        addr: '0xa13f0743951b4f6e3e3aa039f682e17279f52bc3',
    },
    {
        id: 'sentinel-group',
        symbol: 'dvpn',
        addr: '0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037',
    },
    {
        id: 'sentinel-protocol',
        symbol: 'upp',
        addr: '0xc86d054809623432210c107af2e3f619dcfbf652',
    },
    {
        id: 'sentivate',
        symbol: 'sntvt',
        addr: '0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8',
    },
    {
        id: 'seos',
        symbol: 'seos',
        addr: '0x88c8cf3a212c0369698d13fe98fcb76620389841',
    },
    {
        id: 'serenity',
        symbol: 'srnt',
        addr: '0xbc7942054f77b82e8a71ace170e4b00ebae67eb6',
    },
    {
        id: 'sergey-save-link',
        symbol: 'ssl',
        addr: '0x0d9227f9c4ab3972f994fccc6eeba3213c0305c4',
    },
    {
        id: 'sergs',
        symbol: 'sergs',
        addr: '0x79ba92dda26fce15e1e9af47d5cfdfd2a093e000',
    },
    {
        id: 'serum',
        symbol: 'srm',
        addr: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
    },
    {
        id: 'sessia',
        symbol: 'kicks',
        addr: '0xd91a6162f146ef85922d9a15ee6eb14a00344586',
    },
    {
        id: 'setc',
        symbol: 'setc',
        addr: '0x22602469d704bffb0936c7a7cfcd18f7aa269375',
    },
    {
        id: 'seth',
        symbol: 'seth',
        addr: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
    },
    {
        id: 'sether',
        symbol: 'seth',
        addr: '0x78b039921e84e726eb72e7b1212bb35504c645ca',
    },
    {
        id: 'set-of-sets-trailblazer-fund',
        symbol: 'mqss',
        addr: '0x77b1465b0e01ba085e515324e30fee6555c623ea',
    },
    {
        id: 'seur',
        symbol: 'seur',
        addr: '0xd71ecff9342a5ced620049e616c5035f1db98620',
    },
    {
        id: 'sfb',
        symbol: 'sfb',
        addr: '0xf50b5e535f62a56a9bd2d8e2434204e726c027fa',
    },
    {
        id: 'sf-capital',
        symbol: 'sfcp',
        addr: '0x8b6cda5cc518c904e8844f445e1a7c7d2db0ff16',
    },
    {
        id: 's-finance',
        symbol: 'sfg',
        addr: '0x8a6aca71a218301c7081d4e96d64292d3b275ce0',
    },
    {
        id: 'sg20',
        symbol: 'sg20',
        addr: '0x91a7769afcf796a3c8fff879ed80b10dd76d3ccd',
    },
    {
        id: 'sgoog',
        symbol: 'sgoog',
        addr: '0xc63b8ecce56ab9c46184ec6ab85e4771fea4c8ad',
    },
    {
        id: 'shabu-shabu',
        symbol: 'kobe',
        addr: '0xcb4e8cafeda995da5cedfda5205bd5664a12b848',
    },
    {
        id: 'shadetech',
        symbol: 'shd',
        addr: '0x8a8221628361fa25294a83a172dd4f0133207b37',
    },
    {
        id: 'shadows',
        symbol: 'dows',
        addr: '0x661ab0ed68000491d98c796146bcf28c20d7c559',
    },
    {
        id: 'shard',
        symbol: 'shard',
        addr: '0xbebdab6da046bc49ffbb61fbd7b33157eb270d05',
    },
    {
        id: 'sharder-protocol',
        symbol: 'ss',
        addr: '0xbbff862d906e348e9946bfb2132ecb157da3d4b4',
    },
    {
        id: 'shardingdao',
        symbol: 'shd',
        addr: '0x5845cd0205b5d43af695412a79cf7c1aeddb060f',
    },
    {
        id: 'shardus',
        symbol: 'ult',
        addr: '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7',
    },
    {
        id: 'shareat',
        symbol: 'xat',
        addr: '0x01c8857057326b8f64dcb5cba6d802dcd132946e',
    },
    {
        id: 'sharedstake-governance-token',
        symbol: 'sgt',
        addr: '0x84810bcf08744d5862b8181f12d17bfd57d3b078',
    },
    {
        id: 'sharering',
        symbol: 'shr',
        addr: '0xd98f75b1a3261dab9eed4956c93f33749027a964',
    },
    {
        id: 'sharpay',
        symbol: 's',
        addr: '0x96b0bf939d9460095c15251f71fda11e41dcbddb',
    },
    {
        id: 'sheesha-finance',
        symbol: 'sheesha',
        addr: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
    },
    {
        id: 'sheng',
        symbol: 'sheng',
        addr: '0x22ef3753e3658e81d5a0d0889ce078178fe66595',
    },
    {
        id: 'shiba-cloud',
        symbol: 'nimbus',
        addr: '0x645035d009182b480fe554d2926664105d62c309',
    },
    {
        id: 'shiba-cosmos',
        symbol: 'shibco',
        addr: '0xc5c43ad81e6c76eaa1f2dd92cb6a11ff6b6d09ea',
    },
    {
        id: 'shiba-inu',
        symbol: 'shib',
        addr: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
    },
    {
        id: 'shibaken-finance',
        symbol: 'shibaken',
        addr: '0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b',
    },
    {
        id: 'shiba-launch',
        symbol: 'shibal',
        addr: '0x77f39c61ddac121ca1b24fdea984fab734fdce8f',
    },
    {
        id: 'shibamax',
        symbol: 'smax',
        addr: '0x8fa025e8342ead1037d2954b95333ff2bf57162b',
    },
    {
        id: 'shiba-ramen',
        symbol: 'shibaramen',
        addr: '0xb2e20502c7593674509b8384ed9240a03869faf3',
    },
    {
        id: 'shiba-swim',
        symbol: 'sswim',
        addr: '0x6936f1dcd8c2e3a69469311a130858174f9f0a15',
    },
    {
        id: 'shield-finance',
        symbol: 'shld',
        addr: '0xd49efa7bc0d339d74f487959c573d518ba3f8437',
    },
    {
        id: 'shih-tzu',
        symbol: 'shih',
        addr: '0x841fb148863454a3b3570f515414759be9091465',
    },
    {
        id: 'shikokuaido',
        symbol: 'shokk',
        addr: '0xec0bf0e934d092d31e769e8c9722ffbaa582db3b',
    },
    {
        id: 'shill',
        symbol: 'posh',
        addr: '0x685aea4f02e39e5a5bb7f7117e88db1151f38364',
    },
    {
        id: 'shincoin',
        symbol: 'scoin',
        addr: '0x3f5df2f90df67e10974fbcb1729c00d3f87c0eb4',
    },
    {
        id: 'shinechain',
        symbol: 'she',
        addr: '0x9064c91e51d7021a85ad96817e1432abf6624470',
    },
    {
        id: 'shipchain',
        symbol: 'ship',
        addr: '0xe25b0bba01dc5630312b6a21927e578061a13f55',
    },
    {
        id: 'shipitpro',
        symbol: 'shpp',
        addr: '0x13b1e6b036ac0a1495f876313f92a0706cc10871',
    },
    {
        id: 'shitcoin',
        symbol: 'shit',
        addr: '0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f',
    },
    {
        id: 'shopping-io',
        symbol: 'spi',
        addr: '0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7',
    },
    {
        id: 'showcase-token',
        symbol: 'sho',
        addr: '0xcc0014ccb39f6e86b1be0f17859a783b6722722f',
    },
    {
        id: 'showhand',
        symbol: 'hand',
        addr: '0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7',
    },
    {
        id: 'shrimp-finance',
        symbol: 'shrimp',
        addr: '0x38c4102d11893351ced7ef187fcf43d33eb1abe6',
    },
    {
        id: 'shrine-cloud-storage-network',
        symbol: 'SCDS',
        addr: '0xb72c794effb775197287d767ca80c22ae9094cb5',
    },
    {
        id: 'shroom-finance',
        symbol: 'shroom',
        addr: '0xed0439eacf4c4965ae4613d77a5c2efe10e5f183',
    },
    {
        id: 'shuffle-monster',
        symbol: 'shuf',
        addr: '0x3a9fff453d50d4ac52a6890647b823379ba36b9e',
    },
    {
        id: 'shuttleone',
        symbol: 'szo',
        addr: '0x6086b52cab4522b4b0e8af9c3b2c5b8994c36ba6',
    },
    {
        id: 'shyft-network-2',
        symbol: 'shft',
        addr: '0xcba3eae7f55d0f423af43cc85e67ab0fbf87b61c',
    },
    {
        id: 'si14bet',
        symbol: 'si14',
        addr: '0x8b98df4dff429e64e9a56fc6eebe2380c6c3409c',
    },
    {
        id: 'siacashcoin',
        symbol: 'scc',
        addr: '0x74fd51a98a4a1ecbef8cc43be801cce630e260bd',
    },
    {
        id: 'siambitcoin',
        symbol: 'sbtc',
        addr: '0xb8e103b60a33597136ea9511f46b6dbeb643a3a5',
    },
    {
        id: 'sideshift-token',
        symbol: 'xai',
        addr: '0x35e78b3982e87ecfd5b3f3265b601c046cdbe232',
    },
    {
        id: 'sienna-erc20',
        symbol: 'wsienna',
        addr: '0x9b00e6e8d787b13756eb919786c9745054db64f9',
    },
    {
        id: 'sifchain',
        symbol: 'erowan',
        addr: '0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe',
    },
    {
        id: 'signal-token',
        symbol: 'sig',
        addr: '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792',
    },
    {
        id: 'signata',
        symbol: 'sata',
        addr: '0x3ebb4a4e91ad83be51f8d596533818b246f4bee1',
    },
    {
        id: 'silkchain',
        symbol: 'silk',
        addr: '0x4c1e085d8c2d2a8377834d0d7b38f12cc5b86898',
    },
    {
        id: 'silverway',
        symbol: 'slv',
        addr: '0x4c1c4957d22d8f373aed54d0853b090666f6f9de',
    },
    {
        id: 'simba-storage-token',
        symbol: 'sst',
        addr: '0x2863916c6ebdbbf0c6f02f87b7eb478509299868',
    },
    {
        id: 'simba-token',
        symbol: 'simba',
        addr: '0x254417f7b56328a48f554b173dca7bdda7a2a0d2',
    },
    {
        id: 'simian-finance',
        symbol: 'sifi',
        addr: '0x4afb0aac9b862946837b2444566b8a914d6d0d97',
    },
    {
        id: 'simple-token',
        symbol: 'ost',
        addr: '0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca',
    },
    {
        id: 'simracer-coin',
        symbol: 'src',
        addr: '0x16587cf43f044aba0165ffa00acf412631194e4b',
    },
    {
        id: 'sinelock',
        symbol: 'sine',
        addr: '0xeb2c0e11af20fb1c41c6e7abe5ad214e48738514',
    },
    {
        id: 'sinergia',
        symbol: 'sng',
        addr: '0xcfd6ae8bf13f42de14867351eaff7a8a3b9fbbe7',
    },
    {
        id: 'singulardtv',
        symbol: 'sngls',
        addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
    },
    {
        id: 'singularitydao',
        symbol: 'sdao',
        addr: '0x993864e43caa7f7f12953ad6feb1d1ca635b875f',
    },
    {
        id: 'singularitynet',
        symbol: 'agix',
        addr: '0x5b7533812759b45c2b44c19e320ba2cd2681b542',
    },
    {
        id: 'sinoc',
        symbol: 'sinoc',
        addr: '0xcba8162778e6a3eba60e1cf7c012b327340bd05d',
    },
    {
        id: 'siren',
        symbol: 'si',
        addr: '0xd23ac27148af6a2f339bd82d0e3cff380b5093de',
    },
    {
        id: 'sirin-labs-token',
        symbol: 'srn',
        addr: '0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25',
    },
    {
        id: 'skale',
        symbol: 'skl',
        addr: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
    },
    {
        id: 'skillchain',
        symbol: 'ski',
        addr: '0x996dc5dfc819408dd98cd92c9a76f64b0738dc3d',
    },
    {
        id: 'skinchain',
        symbol: 'skc',
        addr: '0x0fe156436f203b114c6c562cb1a2a81aa2801090',
    },
    {
        id: 'skincoin',
        symbol: 'skin',
        addr: '0x2bdc0d42996017fce214b21607a515da41a9e0c5',
    },
    {
        id: 'skraps',
        symbol: 'skrp',
        addr: '0xfdfe8b7ab6cf1bd1e3d14538ef40686296c42052',
    },
    {
        id: 'skrumble-network',
        symbol: 'skm',
        addr: '0x048fe49be32adfc9ed68c37d32b5ec9df17b3603',
    },
    {
        id: 'skull',
        symbol: 'skull',
        addr: '0xbcc66ed2ab491e9ae7bf8386541fb17421fa9d35',
    },
    {
        id: 'skull-candy-shards',
        symbol: 'candy',
        addr: '0x50eb346fc29a80d97563a50146c3fcf9423b5538',
    },
    {
        id: 'slink',
        symbol: 'slink',
        addr: '0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6',
    },
    {
        id: 'slt',
        symbol: 'slt',
        addr: '0xe9f3cb0229eb8d0aaf03ec84883950134ed20ddc',
    },
    {
        id: 'sltc',
        symbol: 'sltc',
        addr: '0xc14103c2141e842e228fbac594579e798616ce7a',
    },
    {
        id: 'small-doge',
        symbol: 'sdog',
        addr: '0x537edd52ebcb9f48ff2f8a28c51fcdb9d6a6e0d4',
    },
    {
        id: 'smart-application-chain',
        symbol: 'sac',
        addr: '0xabc1280a0187a2020cc675437aed400185f86db6',
    },
    {
        id: 'smartcredit-token',
        symbol: 'smartcredit',
        addr: '0x72e9d9038ce484ee986fea183f8d8df93f9ada13',
    },
    {
        id: 'smartkey',
        symbol: 'skey',
        addr: '0x06a01a4d579479dd5d884ebf61a31727a3d8d442',
    },
    {
        id: 'smartmesh',
        symbol: 'smt',
        addr: '0x21f15966e07a10554c364b988e91dab01d32794a',
    },
    {
        id: 'smart-mfg',
        symbol: 'mfg',
        addr: '0x6710c63432a2de02954fc0f851db07146a6c0312',
    },
    {
        id: 'smartofgiving',
        symbol: 'aog',
        addr: '0x8578530205cecbe5db83f7f29ecfeec860c297c2',
    },
    {
        id: 'smartshare',
        symbol: 'ssp',
        addr: '0x624d520bab2e4ad83935fa503fb130614374e850',
    },
    {
        id: 'smart-trade-coin',
        symbol: 'trade',
        addr: '0x40e45890dff79e7d533797d964e64a2c0121f49a',
    },
    {
        id: 'smart-trade-networks',
        symbol: 'stn5',
        addr: '0x55150e8378b81f930f310d4b62ab7e1252c30b9b',
    },
    {
        id: 'smart-valor',
        symbol: 'valor',
        addr: '0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a',
    },
    {
        id: 'smartx',
        symbol: 'sat',
        addr: '0x1f0f468ee03a6d99cd8a09dd071494a83dc1c0e5',
    },
    {
        id: 'smilecoin',
        symbol: 'sec',
        addr: '0x75d669c53142302c8826d16b5689bffad50a7e18',
    },
    {
        id: 'smol',
        symbol: 'smol',
        addr: '0x2216e873ea4282ebef7a02ac5aea220be6391a7c',
    },
    {
        id: 'smooth-love-potion',
        symbol: 'slp',
        addr: '0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25',
    },
    {
        id: 'smoothy',
        symbol: 'smty',
        addr: '0xbf776e4fca664d791c4ee3a71e2722990e003283',
    },
    {
        id: 'smpl-foundation',
        symbol: 'smpl',
        addr: '0x8bf92cad232f72a7c61eb42e9185e8d0ea470f6b',
    },
    {
        id: 'smscodes',
        symbol: 'smsct',
        addr: '0x668f7dfb8c8d716839fa5dbea317d8723ebe6110',
    },
    {
        id: 'snetwork',
        symbol: 'snet',
        addr: '0xff19138b039d938db46bdda0067dc4ba132ec71c',
    },
    {
        id: 'snflx',
        symbol: 'snflx',
        addr: '0x5a7e3c07604eb515c16b36cd51906a65f021f609',
    },
    {
        id: 'snglsdao-governance-token',
        symbol: 'sgt',
        addr: '0xc4199fb6ffdb30a829614beca030f9042f1c3992',
    },
    {
        id: 'snoop-doge',
        symbol: 'snoge',
        addr: '0x072c46f392e729c1f0d92a307c2c6dba06b5d078',
    },
    {
        id: 'snovio',
        symbol: 'snov',
        addr: '0xbdc5bac39dbe132b1e030e898ae3830017d7d969',
    },
    {
        id: 'snowswap',
        symbol: 'SNOW',
        addr: '0xfe9a29ab92522d14fc65880d817214261d8479ae',
    },
    {
        id: 'snp-token',
        symbol: 'snp',
        addr: '0x795dbf627484f8248d3d6c09c309825c1563e873',
    },
    {
        id: 'soar',
        symbol: 'skym',
        addr: '0x7297862b9670ff015192799cc849726c88bf1d77',
    },
    {
        id: 'soar-2',
        symbol: 'soar',
        addr: '0xbae5f2d8a1299e5c4963eaff3312399253f27ccb',
    },
    {
        id: 'soba-token',
        symbol: 'soba',
        addr: '0x65032604dab202aff9adf89300cdb4bd0d059f55',
    },
    {
        id: 'social-finance',
        symbol: 'sofi',
        addr: '0xaea5e11e22e447fa9837738a0cd2848857748adf',
    },
    {
        id: 'social-good-project',
        symbol: 'sg',
        addr: '0xddf7fd345d54ff4b40079579d4c4670415dbfd0a',
    },
    {
        id: 'sociall',
        symbol: 'scl',
        addr: '0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8',
    },
    {
        id: 'social-rocket',
        symbol: 'rocks',
        addr: '0x0829d2d5cc09d3d341e813c821b0cfae272d9fb2',
    },
    {
        id: 'society-of-galactic-exploration',
        symbol: 'sge',
        addr: '0xab456bdb0a373bbac6c4a76176e9f159cacd5752',
    },
    {
        id: 'socketfinance',
        symbol: 'sfi',
        addr: '0xa6312567e419e73951c451feaba07b6d74a0e8ce',
    },
    {
        id: 'soda-token',
        symbol: 'soda',
        addr: '0x7afb39837fd244a651e4f0c5660b4037214d4adf',
    },
    {
        id: 'soft-bitcoin',
        symbol: 'sbtc',
        addr: '0x309013d55fb0e8c17363bcc79f25d92f711a5802',
    },
    {
        id: 'softchain',
        symbol: 'scc',
        addr: '0x86696431d6aca9bae5ce6536ecf5d437f2e6dba2',
    },
    {
        id: 'softlink',
        symbol: 'slink',
        addr: '0x10bae51262490b4f4af41e12ed52a0e744c1137a',
    },
    {
        id: 'soft-yearn',
        symbol: 'syfi',
        addr: '0x322124122df407b0d0d902cb713b3714fb2e2e1f',
    },
    {
        id: 'soge',
        symbol: 'soge',
        addr: '0x41933422dc4a1cb8c822e06f12f7b52fa5e7e094',
    },
    {
        id: 'solar-dao',
        symbol: 'sdao',
        addr: '0x646cec6ee42d258336165cbbd5deb4af14f0f476',
    },
    {
        id: 'solareum',
        symbol: 'slrm',
        addr: '0x56ee8c9bd1d445a3324ad83e86d8be309db8f85d',
    },
    {
        id: 'solarite',
        symbol: 'solarite',
        addr: '0x930ed81ad809603baf727117385d01f04354612e',
    },
    {
        id: 'solomon-defi',
        symbol: 'slm',
        addr: '0x07a0ad7a9dfc3854466f8f29a173bf04bba5686e',
    },
    {
        id: 'solve-care',
        symbol: 'solve',
        addr: '0x446c9033e7516d820cc9a2ce2d0b7328b579406f',
    },
    {
        id: 'somee-advertising-token',
        symbol: 'sat',
        addr: '0xc9f1016d336ef77aee75fc11ad64c5ecf9121332',
    },
    {
        id: 'somidax',
        symbol: 'smdx',
        addr: '0x7e8539d1e5cb91d63e46b8e188403b3f262a949b',
    },
    {
        id: 'somnium-space-cubes',
        symbol: 'cube',
        addr: '0xdf801468a808a32656d2ed2d2d80b72a129739f4',
    },
    {
        id: 'sonm',
        symbol: 'snm',
        addr: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63',
    },
    {
        id: 'sopay',
        symbol: 'sop',
        addr: '0x076641af1b8f06b7f8c92587156143c109002cbe',
    },
    {
        id: 'sophiatx',
        symbol: 'sphtx',
        addr: '0x3833dda0aeb6947b98ce454d89366cba8cc55528',
    },
    {
        id: 'sora',
        symbol: 'xor',
        addr: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
    },
    {
        id: 'sora-validator-token',
        symbol: 'val',
        addr: '0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4',
    },
    {
        id: 'sota-finance',
        symbol: 'sota',
        addr: '0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb',
    },
    {
        id: 'sp8de',
        symbol: 'spx',
        addr: '0x05aaaa829afa407d83315cded1d45eb16025910c',
    },
    {
        id: 'spacechain-erc-20',
        symbol: 'spc',
        addr: '0x86ed939b500e121c0c5f493f399084db596dad20',
    },
    {
        id: 'space-doge',
        symbol: 'spacedoge',
        addr: '0xaa2409594dc0aef63c0f367e30f6b51149cbe613',
    },
    {
        id: 'space-iz',
        symbol: 'spiz',
        addr: '0xa7a5c1058194af8f00c187adb7fcc0c95f1c6c2d',
    },
    {
        id: 'space-monkey',
        symbol: 'spmk',
        addr: '0x51d3e4c0b2c83e62f5d517d250b3e856897d2052',
    },
    {
        id: 'spacepenguin',
        symbol: 'pngn',
        addr: '0x469a8ea7683c27d31cd9b0de769151d8a8b66c5a',
    },
    {
        id: 'spaceswap-milk2',
        symbol: 'milk2',
        addr: '0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de',
    },
    {
        id: 'spaceswap-shake',
        symbol: 'shake',
        addr: '0x6006fc2a849fedaba8330ce36f5133de01f96189',
    },
    {
        id: 'spaghetti',
        symbol: 'pasta',
        addr: '0xe54f9e6ab80ebc28515af8b8233c1aee6506a15e',
    },
    {
        id: 'spankchain',
        symbol: 'spank',
        addr: '0x42d6622dece394b54999fbd73d108123806f6a18',
    },
    {
        id: 'sparkle',
        symbol: 'sprkl',
        addr: '0x4b7ad3a56810032782afce12d7d27122bdb96eff',
    },
    {
        id: 'sparkpoint',
        symbol: 'srk',
        addr: '0x0488401c3f535193fa8df029d9ffe615a06e74e6',
    },
    {
        id: 'spartan',
        symbol: '300',
        addr: '0x167e2a574669b0eeb552aaf3da47c728cb348a41',
    },
    {
        id: 'sparta-startups',
        symbol: 'sparta',
        addr: '0x24aef3bf1a47561500f9430d74ed4097c47f51f2',
    },
    {
        id: 'spectre-dividend-token',
        symbol: 'sxdt',
        addr: '0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf',
    },
    {
        id: 'spectre-utility-token',
        symbol: 'sxut',
        addr: '0x2c82c73d5b34aa015989462b2948cd616a37641f',
    },
    {
        id: 'spectrum',
        symbol: 'spt',
        addr: '0x01cc4151fe5f00efb8df2f90ff833725d3a482a3',
    },
    {
        id: 'speedcash',
        symbol: 'scs',
        addr: '0x81995ff7aee5c780192b47e0b42a7a86692d1415',
    },
    {
        id: 'speed-mining-service',
        symbol: 'sms',
        addr: '0xe5867608b51a2c9c78b9587355cc093140a49b0a',
    },
    {
        id: 'spell-token',
        symbol: 'spell',
        addr: '0x090185f2135308bad17527004364ebcc2d37e5f6',
    },
    {
        id: 'spendcoin',
        symbol: 'spnd',
        addr: '0xddd460bbd9f79847ea08681563e8a9696867210c',
    },
    {
        id: 'spender-x',
        symbol: 'spdx',
        addr: '0x2c756e74b7309d785b5e2960ef262c4f14a87930',
    },
    {
        id: 'sperax',
        symbol: 'spa',
        addr: '0x9631483f28b7f5cbf7d435ab249be8f709215bc3',
    },
    {
        id: 'sphere-social',
        symbol: 'sat',
        addr: '0xc56b13ebbcffa67cfb7979b900b736b3fb480d78',
    },
    {
        id: 'spheroid-universe',
        symbol: 'sph',
        addr: '0xa0cf46eb152656c7090e769916eb44a138aaa406',
    },
    {
        id: 'spice-finance',
        symbol: 'spice',
        addr: '0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664',
    },
    {
        id: 'spiderdao',
        symbol: 'spdr',
        addr: '0xbcd4b7de6fde81025f74426d43165a5b0d790fdd',
    },
    {
        id: 'spider-ecology',
        symbol: 'espi',
        addr: '0x35a79fceb867ee3392ed0c8dedd8dc2f6124c9cd',
    },
    {
        id: 'spiking',
        symbol: 'spike',
        addr: '0xa7fc5d2453e3f68af0cc1b78bcfee94a1b293650',
    },
    {
        id: 'spindle',
        symbol: 'spd',
        addr: '0x1dea979ae76f26071870f824088da78979eb91c8',
    },
    {
        id: 'splyt',
        symbol: 'shopx',
        addr: '0x7bef710a5759d197ec0bf621c3df802c2d60d848',
    },
    {
        id: 'sport-and-leisure',
        symbol: 'snl',
        addr: '0xa806b3fed6891136940cf81c4085661500aa2709',
    },
    {
        id: 'sportx',
        symbol: 'sx',
        addr: '0x99fe3b1391503a1bc1788051347a1324bff41452',
    },
    {
        id: 'springrole',
        symbol: 'spring',
        addr: '0xfb0bdc444c8ae7e9b5beea5e4d1e8de93879e487',
    },
    {
        id: 'spritzcoin',
        symbol: 'sprtz',
        addr: '0xc560984d8c4ced2a0eba5790b33b6f43afeef759',
    },
    {
        id: 'spurt-plus',
        symbol: 'spup',
        addr: '0xef7bce1be2ba032131326910a6c11e716daedbff',
    },
    {
        id: 'srcoin',
        symbol: 'srh',
        addr: '0xc350e846e2c57f9eece90febc253d14c8080871b',
    },
    {
        id: 'sren',
        symbol: 'sren',
        addr: '0xd31533e8d0f3df62060e94b3f1318137bb6e3525',
    },
    {
        id: 'srune',
        symbol: 'srune',
        addr: '0x0352557b007a4aae1511c114409b932f06f9e2f4',
    },
    {
        id: 'sss-finance',
        symbol: 'SSS',
        addr: '0x8d7db6a562764b437f3248031f886359b4183cc4',
    },
    {
        id: 'stabilize',
        symbol: 'stbz',
        addr: '0xb987d48ed8f2c468d52d6405624eadba5e76d723',
    },
    {
        id: 'stabinol',
        symbol: 'stol',
        addr: '0x4ff5253e2304e3f5ed6547ac5d9952a62b91e3e8',
    },
    {
        id: 'stable-asset',
        symbol: 'sta',
        addr: '0xd7d05bda4bf5876ba1254b3eaaf8b47d2f5676eb',
    },
    {
        id: 'stableusd',
        symbol: 'USDS',
        addr: '0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe',
    },
    {
        id: 'stacker-ventures',
        symbol: 'stack',
        addr: '0xe0955f26515d22e347b17669993fcefcc73c3a0a',
    },
    {
        id: 'stackos',
        symbol: 'stack',
        addr: '0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4',
    },
    {
        id: 'stacktical',
        symbol: 'dsla',
        addr: '0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe',
    },
    {
        id: 'stacy',
        symbol: 'stacy',
        addr: '0xf12ec0d3dab64ddefbdc96474bde25af3fe1b327',
    },
    {
        id: 'stake-dao',
        symbol: 'sdt',
        addr: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
    },
    {
        id: 'staked-ether',
        symbol: 'steth',
        addr: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    },
    {
        id: 'stakedxem',
        symbol: 'stxem',
        addr: '0x0c63cae5fcc2ca3dde60a35e50362220651ebec8',
    },
    {
        id: 'stakedxym',
        symbol: 'stxym',
        addr: '0x8f5e78888f8933ed676a62bb6b58a4b279abe408',
    },
    {
        id: 'staked-yaxis',
        symbol: 'syax',
        addr: '0xef31cb88048416e301fee1ea13e7664b887ba7e8',
    },
    {
        id: 'stakedzen',
        symbol: 'stzen',
        addr: '0x31b595e7cfdb624d10a3e7a562ed98c3567e3865',
    },
    {
        id: 'stakehound',
        symbol: 'stfiro',
        addr: '0x160b1e5aabfd70b2fc40af815014925d71ceed7e',
    },
    {
        id: 'stakehound-staked-ether',
        symbol: 'steth',
        addr: '0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d',
    },
    {
        id: 'stakehouse-batch',
        symbol: 'shb',
        addr: '0x7c3e3bdcec89a3f706c9a02797ec427ffa596787',
    },
    {
        id: 'staker',
        symbol: 'str',
        addr: '0x426567f78e74577f8a6233b635970eb729631e05',
    },
    {
        id: 'staker-dao',
        symbol: 'stkr',
        addr: '0x89dcff5fd892f2bfc8b75dba12804b651f769579',
    },
    {
        id: 'stakewise',
        symbol: 'swise',
        addr: '0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2',
    },
    {
        id: 'stamp',
        symbol: 'stamp',
        addr: '0x43afc9058a3debf37eadf99138e449ce8a480a8a',
    },
    {
        id: 'standard-protocol',
        symbol: 'stnd',
        addr: '0x9040e237c3bf18347bb00957dc22167d0f2b999d',
    },
    {
        id: 'stand-cash',
        symbol: 'sac',
        addr: '0xacd8f2523a4613eee78904354187c81bb05ae2b8',
    },
    {
        id: 'stand-share',
        symbol: 'sas',
        addr: '0x4c38d0e726b6c86f64c1b281348e725973542043',
    },
    {
        id: 'starbase',
        symbol: 'star',
        addr: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc',
    },
    {
        id: 'starblock',
        symbol: 'stb',
        addr: '0xc48b1ac1417db27c4e2c2ed3dae5a3d2fbb07dc5',
    },
    {
        id: 'starbugs-shards',
        symbol: 'bugs',
        addr: '0xbc3ec4e491b835dce394a53e9a9a10ac19564839',
    },
    {
        id: 'starcurve',
        symbol: 'xstar',
        addr: '0xc0e47007e084eef3ee58eb33d777b3b4ca98622f',
    },
    {
        id: 'star-foxx',
        symbol: 'foxx',
        addr: '0x31d457e7bcff5bc9a5ef86e6a5ea1db5b5c3bfb0',
    },
    {
        id: 'stargaze-protocol',
        symbol: 'stgz',
        addr: '0xa9a8377287ea9c6b8b4249dd502e75d34148fc5b',
    },
    {
        id: 'stark-chain',
        symbol: 'stark',
        addr: '0x1edc9ba729ef6fb017ef9c687b1a37d48b6a166c',
    },
    {
        id: 'starplay',
        symbol: 'stpc',
        addr: '0x3fb8d8a28aff053ccf446bc075eecb7a0ef65d0c',
    },
    {
        id: 'star-shib',
        symbol: 'STARSB',
        addr: '0x5f435cd858f71e42a3db4282231d1ed25ba07aed',
    },
    {
        id: 'stasis-eurs',
        symbol: 'eurs',
        addr: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    },
    {
        id: 'stater',
        symbol: 'str',
        addr: '0x84bb947fcedba6b9c7dcead42df07e113bb03007',
    },
    {
        id: 'statera',
        symbol: 'sta',
        addr: '0xa7de087329bfcda5639247f96140f9dabe3deed1',
    },
    {
        id: 'status',
        symbol: 'SNT',
        addr: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    },
    {
        id: 'stb-chain',
        symbol: 'stb',
        addr: '0x3154da898943fc7151bc77f16e43c0c47b5e452d',
    },
    {
        id: 'steaks-finance',
        symbol: 'steak',
        addr: '0xeed9e4f2450035d6426276a8aa2084966ee3b1bb',
    },
    {
        id: 'stib-token',
        symbol: 'sti',
        addr: '0xb52bbd3d5bfa3836bf2b55fe3b7467219280bc2e',
    },
    {
        id: 'sting',
        symbol: 'stn',
        addr: '0x592481a5f6b4f078cc303c2cde4337dfa2d76fa0',
    },
    {
        id: 'stk',
        symbol: 'stk',
        addr: '0xae73b38d1c9a8b274127ec30160a4927c4d71824',
    },
    {
        id: 'stk-coin',
        symbol: 'stk',
        addr: '0x5c5887e55bbe41472acdba5fae989788c6f7ab59',
    },
    {
        id: 'stobox-token',
        symbol: 'stbu',
        addr: '0x212dd60d4bf0da8372fe8116474602d429e5735f',
    },
    {
        id: 'stockchain',
        symbol: 'scc',
        addr: '0x355a458d555151d3b27f94227960ade1504e526a',
    },
    {
        id: 'ston',
        symbol: 'ston',
        addr: '0xdc47f2ba852669b178699449e50682d6ceaf8c07',
    },
    {
        id: 'stoner-doge',
        symbol: 'stoge',
        addr: '0x1296a923cd4f39116e0297d921fe25fe228552c6',
    },
    {
        id: 'stone-token',
        symbol: 'stn',
        addr: '0xe63d6b308bce0f6193aec6b7e6eba005f41e36ab',
    },
    {
        id: 'stonk',
        symbol: 'stonk',
        addr: '0x35b55c25731e9b05b1d8480ba39463d52c9d0211',
    },
    {
        id: 'stonk-2',
        symbol: 'stonk',
        addr: '0xb4058411967d5046f3510943103805be61f0600e',
    },
    {
        id: 'stonks',
        symbol: 'stonk',
        addr: '0x60ca261e14f26e8daae8b1a7f8e783d64859126c',
    },
    {
        id: 'storeum',
        symbol: 'sto',
        addr: '0xcb39c3502415152b2ec90ff07ee18cc94f681a72',
    },
    {
        id: 'storichain-token',
        symbol: 'tori',
        addr: '0xc71e20e54adfc415f79bf0a8f11122917920050e',
    },
    {
        id: 'storiqa',
        symbol: 'stq',
        addr: '0x5c3a228510d246b78a3765c20221cbf3082b44a4',
    },
    {
        id: 'storj',
        symbol: 'storj',
        addr: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    },
    {
        id: 'storm',
        symbol: 'stmx',
        addr: '0xbe9375c6a420d2eeb258962efb95551a5b722803',
    },
    {
        id: 'stox',
        symbol: 'stx',
        addr: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45',
    },
    {
        id: 'stp-network',
        symbol: 'stpt',
        addr: '0xde7d85157d9714eadf595045cc12ca4a5f3e2adb',
    },
    {
        id: 'strain',
        symbol: 'strn',
        addr: '0x90b426067be0b0ff5de257bc4dd6a4815ea03b5f',
    },
    {
        id: 'stratos',
        symbol: 'stos',
        addr: '0x08c32b0726c5684024ea6e141c50ade9690bbdcc',
    },
    {
        id: 'streamix',
        symbol: 'mixs',
        addr: '0xb0bfb1e2f72511cf8b4d004852e2054d7b9a76e1',
    },
    {
        id: 'stream-protocol',
        symbol: 'stpl',
        addr: '0x9b5c2be869a19e84bdbcb1386dad83a2ec8dae82',
    },
    {
        id: 'streamr-datacoin',
        symbol: 'data',
        addr: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
    },
    {
        id: 'street-cred',
        symbol: 'cred',
        addr: '0xed7fa212e100dfb3b13b834233e4b680332a3420',
    },
    {
        id: 'strike',
        symbol: 'strk',
        addr: '0x74232704659ef37c08995e386a2e26cc27a8d7b1',
    },
    {
        id: 'strong',
        symbol: 'strong',
        addr: '0x990f341946a3fdb507ae7e52d17851b87168017c',
    },
    {
        id: 'stronghold',
        symbol: 'strng',
        addr: '0x350a6a30c79df3600c4e0e67deab0a64b645e2c2',
    },
    {
        id: 'strudel-finance',
        symbol: 'trdl',
        addr: '0x297d33e17e61c2ddd812389c2105193f8348188a',
    },
    {
        id: 'stsla',
        symbol: 'stsla',
        addr: '0x918da91ccbc32b7a6a0cc4ecd5987bbab6e31e6d',
    },
    {
        id: 'stvke-network',
        symbol: 'stv',
        addr: '0x226e390751a2e22449d611bac83bd267f2a2caff',
    },
    {
        id: 'subgame',
        symbol: 'sgb',
        addr: '0x4b4eb5c44d50bfd44124688c6754633f7e258b01',
    },
    {
        id: 'substratum',
        symbol: 'sub',
        addr: '0x8d75959f1e61ec2571aa72798237101f084de63a',
    },
    {
        id: 'suku',
        symbol: 'SUKU',
        addr: '0x0763fdccf1ae541a5961815c0872a8c5bc6de4d7',
    },
    {
        id: 'sun',
        symbol: 'sun',
        addr: '0x7cc61e3ae6360e923e9296c802382ec7c9dd3652',
    },
    {
        id: 'suncontract',
        symbol: 'snc',
        addr: '0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404',
    },
    {
        id: 'suni',
        symbol: 'suni',
        addr: '0x4a22a69e45ab29f9f7276b0267797474daf1f27c',
    },
    {
        id: 'suniswap',
        symbol: 'suni',
        addr: '0x30635297e450b930f8693297eba160d9e6c8ebcf',
    },
    {
        id: 'sup8eme',
        symbol: 'sup8eme',
        addr: '0x47935edfb3cdd358c50f6c0add1cc24662e30f5f',
    },
    {
        id: 'superbid',
        symbol: 'superbid',
        addr: '0x0563dce613d559a47877ffd1593549fb9d3510d6',
    },
    {
        id: 'super-black-hole',
        symbol: 'hole',
        addr: '0x03fb52d4ee633ab0d06c833e32efdd8d388f3e6a',
    },
    {
        id: 'super-coinview-token',
        symbol: 'scv',
        addr: '0x282417b21236ac01a3a3d7ba304ed8d284f48b4d',
    },
    {
        id: 'superfarm',
        symbol: 'super',
        addr: '0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55',
    },
    {
        id: 'super-saiya-jin',
        symbol: 'ssj',
        addr: '0xb4ae194a0dcf1b4080b164c1d775ee06e0817305',
    },
    {
        id: 'superskynet',
        symbol: 'ssn',
        addr: '0xa5b46ff9a887180c8fb2d97146398ddfc5fef1cd',
    },
    {
        id: 'super-trip-chain',
        symbol: 'supt',
        addr: '0x868ab6c9e560ff70584b9770d1bd1b961ad09d82',
    },
    {
        id: 'supertron',
        symbol: 'stro',
        addr: '0xc2e343118f937f88ee1fc3150cdc0d6f3d11bba7',
    },
    {
        id: 'support-listing-coin',
        symbol: 'slc',
        addr: '0xbd2ebe1ddf549e6e9079faa6182bcc33c21f13a3',
    },
    {
        id: 'suretly',
        symbol: 'sur',
        addr: '0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf',
    },
    {
        id: 'surfexutilitytoken',
        symbol: 'surf',
        addr: '0x46d473a0b3eeec9f55fade641bc576d5bc0b2246',
    },
    {
        id: 'surf-finance',
        symbol: 'surf',
        addr: '0xea319e87cf06203dae107dd8e5672175e3ee976c',
    },
    {
        id: 'sushi',
        symbol: 'sushi',
        addr: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    {
        id: 'suterusu',
        symbol: 'suter',
        addr: '0xaa2ce7ae64066175e0b90497ce7d9c190c315db4',
    },
    {
        id: 'swaap-stablecoin',
        symbol: 'sap',
        addr: '0xa12a00e73e4e7174acc50a1c073e36aa0c9cb305',
    },
    {
        id: 'swace',
        symbol: 'swace',
        addr: '0x03b155af3f4459193a276395dd76e357bb472da1',
    },
    {
        id: 'swag-finance',
        symbol: 'swag',
        addr: '0x87edffde3e14c7a66c9b9724747a1c5696b742e6',
    },
    {
        id: 'swagg-network',
        symbol: 'swagg',
        addr: '0xa19a40fbd7375431fab013a4b08f00871b9a2791',
    },
    {
        id: 'swapall',
        symbol: 'sap',
        addr: '0xf6ed276a69270a895d6e419d99dcb5aaa2f3cb4a',
    },
    {
        id: 'swapcoinz',
        symbol: 'spaz',
        addr: '0x810908b285f85af668f6348cd8b26d76b3ec12e1',
    },
    {
        id: 'swapdex',
        symbol: 'sdx',
        addr: '0x041fdd6637ecfd96af8804278ac12660ac2d12c0',
    },
    {
        id: 'swapfolio',
        symbol: 'swfl',
        addr: '0xba21ef4c9f433ede00badefcc2754b8e74bd538a',
    },
    {
        id: 'swapp',
        symbol: 'swapp',
        addr: '0x8cb924583681cbfe487a62140a994a49f833c244',
    },
    {
        id: 'swapship',
        symbol: 'swsh',
        addr: '0x3ac2ab91ddf57e2385089202ca221c360ced0062',
    },
    {
        id: 'swarm',
        symbol: 'swm',
        addr: '0x3505f494c3f0fed0b594e01fa41dd3967645ca39',
    },
    {
        id: 'swarm-city',
        symbol: 'swt',
        addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
    },
    {
        id: 'swerve-dao',
        symbol: 'swrv',
        addr: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
    },
    {
        id: 'swe-token',
        symbol: 'swet',
        addr: '0x4d07fdd4bae81ce2c8b1b76f4db2064c35d7851e',
    },
    {
        id: 'swftcoin',
        symbol: 'swftc',
        addr: '0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e',
    },
    {
        id: 'swiftlance-token',
        symbol: 'swl',
        addr: '0x8cd480260a47f04589670a313d27a15b321ad266',
    },
    {
        id: 'swipe',
        symbol: 'sxp',
        addr: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
    },
    {
        id: 'swipe-network',
        symbol: 'swipe',
        addr: '0x13d71cfc90a83cd1cc0e59675c3f4b90d4162a8b',
    },
    {
        id: 'swirge',
        symbol: 'swgb',
        addr: '0x92ef4ffbfe0df030837b65d7fccfe1abd6549579',
    },
    {
        id: 'swissborg',
        symbol: 'chsb',
        addr: '0xba9d4199fab4f26efe3551d490e3821486f135ba',
    },
    {
        id: 'swiss-finance',
        symbol: 'swiss',
        addr: '0x692eb773e0b5b7a79efac5a015c8b36a2577f65c',
    },
    {
        id: 'switch',
        symbol: 'esh',
        addr: '0xd6a55c63865affd67e2fb9f284f87b7a9e5ff3bd',
    },
    {
        id: 'swtcoin',
        symbol: 'swat',
        addr: '0xc0f1728d9513efc316d0e93a0758c992f88b0809',
    },
    {
        id: 'swusd',
        symbol: 'swusd',
        addr: '0x77c6e4a580c0dce4e5c7a17d0bc077188a83a059',
    },
    {
        id: 'swyft',
        symbol: 'swyftt',
        addr: '0xa1248c718d52752b2cc257eeb0eba900408daeb8',
    },
    {
        id: 'sxag',
        symbol: 'sxag',
        addr: '0x6a22e5e94388464181578aa7a6b869e00fe27846',
    },
    {
        id: 'sxau',
        symbol: 'sxau',
        addr: '0x261efcdd24cea98652b9700800a13dfbca4103ff',
    },
    {
        id: 'sxc',
        symbol: 'sxc',
        addr: '0x6a48ba795e3289b9151036e189e352e3ee2c7798',
    },
    {
        id: 'sxmr',
        symbol: 'sxmr',
        addr: '0x5299d6f7472dcc137d7f3c4bcfbbb514babf341a',
    },
    {
        id: 'sxrp',
        symbol: 'sxrp',
        addr: '0xa2b0fde6d710e201d0d608e924a484d1a5fed57c',
    },
    {
        id: 'sxtz',
        symbol: 'sxtz',
        addr: '0xf45b14ddabf0f0e275e215b94dd24ae013a27f12',
    },
    {
        id: 'sybc-coin',
        symbol: 'sybc',
        addr: '0x69428bb4272e3181de9e3cab461e19b0131855c8',
    },
    {
        id: 'sylo',
        symbol: 'sylo',
        addr: '0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4',
    },
    {
        id: 'symverse',
        symbol: 'sym',
        addr: '0x2fd61567c29e7adb4ca17e60e1f4a3fcfe68acb8',
    },
    {
        id: 'synchrobitcoin',
        symbol: 'snb',
        addr: '0x179e31fb25e433441a2839389a7b8ec9c4654b7b',
    },
    {
        id: 'synchrolife',
        symbol: 'syc',
        addr: '0xe49214e4c92dc9bcb3b56c1309afe0d626dd730e',
    },
    {
        id: 'sync-network',
        symbol: 'sync',
        addr: '0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32',
    },
    {
        id: 'synlev',
        symbol: 'syn',
        addr: '0x1695936d6a953df699c38ca21c2140d497c08bd9',
    },
    {
        id: 'synth-soil',
        symbol: 'soil',
        addr: '0x6d16cf3ec5f763d4d99cb0b0b110eefd93b11b56',
    },
    {
        id: 'tacos',
        symbol: 'taco',
        addr: '0x00d1793d7c3aae506257ba985b34c76aaf642557',
    },
    {
        id: 'tacotoken',
        symbol: 'taco',
        addr: '0x41c028a4c1f461ebfc3af91619b240004ebad216',
    },
    {
        id: 'tadpole-finance',
        symbol: 'tad',
        addr: '0x9f7229af0c4b9740e207ea283b9094983f78ba04',
    },
    {
        id: 'taekwondo-access-credit',
        symbol: 'tac',
        addr: '0xdeeb6091a5adc78fa0332bee5a38a8908b6b566e',
    },
    {
        id: 'tagcoin-erc20',
        symbol: 'tag',
        addr: '0xcc4ae94372da236e9b113132e0c46c68704246b9',
    },
    {
        id: 'taklimakan-network',
        symbol: 'tan',
        addr: '0x2c36204a0712a2a50e54a62f7c4f01867e78cb53',
    },
    {
        id: 'talent-coin',
        symbol: 'tlnt',
        addr: '0x9f300b4ac0bf94cad77e7e2d3f850352b8bb264c',
    },
    {
        id: 'talent-token',
        symbol: 'ttx',
        addr: '0xef2e239b21a81719abaabc6239e2e90859b44d9b',
    },
    {
        id: 'tama-egg-niftygotchi',
        symbol: 'tme',
        addr: '0x6e742e29395cf5736c358538f0f1372ab3dfe731',
    },
    {
        id: 'tamy-token',
        symbol: 'tmt',
        addr: '0xb9cb7905981198add8059114b3b7dc7042b52f7b',
    },
    {
        id: 'tap',
        symbol: 'xtp',
        addr: '0x6368e1e18c4c419ddfc608a0bed1ccb87b9250fc',
    },
    {
        id: 'tapmydata',
        symbol: 'tap',
        addr: '0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d',
    },
    {
        id: 'tap-project',
        symbol: 'ttt',
        addr: '0x9f599410d207f3d2828a8712e5e543ac2e040382',
    },
    {
        id: 'taraxa',
        symbol: 'tara',
        addr: '0xf001937650bb4f62b57521824b2c20f5b91bea05',
    },
    {
        id: 'tardigrades-finance',
        symbol: 'trdg',
        addr: '0x92a42db88ed0f02c71d439e55962ca7cab0168b5',
    },
    {
        id: 'tartarus',
        symbol: 'tar',
        addr: '0xc567bca531992352166252ea5121e535432e81ed',
    },
    {
        id: 'tatcoin',
        symbol: 'tat',
        addr: '0x37ee79e0b44866876de2fb7f416d0443dd5ae481',
    },
    {
        id: 'taurus-chain',
        symbol: 'trt',
        addr: '0x32054526df40fbb08b733abe256a8d21de58432d',
    },
    {
        id: 'tavittcoin',
        symbol: 'tavitt',
        addr: '0xdd690d8824c00c84d64606ffb12640e932c1af56',
    },
    {
        id: 'tbcc-wallet',
        symbol: 'tbcc',
        addr: '0x2ecb95eb932dfbbb71545f4d23ca303700ac855f',
    },
    {
        id: 'tbc-mart-token',
        symbol: 'tmt',
        addr: '0x6f02055e3541dd74a1abd8692116c22ffafadc5d',
    },
    {
        id: 'tbtc',
        symbol: 'tbtc',
        addr: '0x8daebade922df735c38c80c7ebd708af50815faa',
    },
    {
        id: 'tcash',
        symbol: 'tcash',
        addr: '0x7051620d11042c4335069aaa4f10cd3b4290c681',
    },
    {
        id: 'tcbcoin',
        symbol: 'tcfx',
        addr: '0x36dcffe069a3f2878fab2a46d81e83d462d0cbf7',
    },
    {
        id: 'tchain',
        symbol: 'tch',
        addr: '0x59c337ef937d0ba9cb1cc47d4e6ded632d22d623',
    },
    {
        id: 'tcoin-fun',
        symbol: 'tco',
        addr: '0x00ff902d4b2bfdbd0db38887412447c30b565aa0',
    },
    {
        id: 'teal',
        symbol: 'teat',
        addr: '0x38d58b82cb24a3e0410a7991f255174c9fd8093b',
    },
    {
        id: 'team-finance',
        symbol: 'team',
        addr: '0xb05af453011d7ad68a92b0065ffd9d1277ed2741',
    },
    {
        id: 'tea-token',
        symbol: 'tea',
        addr: '0x5dced3c2fab61e21b25177c6050d3f166f696110',
    },
    {
        id: 'technology-innovation-project',
        symbol: 'tip',
        addr: '0x07de533cbc72395c32eb8981ddccd2cc6a6e1c4e',
    },
    {
        id: 'tecracoin',
        symbol: 'tcr',
        addr: '0xe38b72d6595fd3885d1d2f770aa23e94757f91a1',
    },
    {
        id: 'te-food',
        symbol: 'tone',
        addr: '0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4',
    },
    {
        id: 'telcoin',
        symbol: 'tel',
        addr: '0x467bccd9d29f223bce8043b84e8c8b282827790f',
    },
    {
        id: 'tellor',
        symbol: 'trb',
        addr: '0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0',
    },
    {
        id: 'telos',
        symbol: 'tlos',
        addr: '0x7825e833d495f3d1c28872415a4aee339d26ac88',
    },
    {
        id: 'temco',
        symbol: 'temco',
        addr: '0x2fc246aa66f0da5bb1368f688548ecbbe9bdee5d',
    },
    {
        id: 'tena',
        symbol: 'tena',
        addr: '0xe14a603f7c77d4101a87859b8736a04cfd85c688',
    },
    {
        id: 'tendies',
        symbol: 'tend',
        addr: '0x1453dbb8a29551ade11d89825ca812e05317eaeb',
    },
    {
        id: 'tenet',
        symbol: 'ten',
        addr: '0x74159651a992952e2bf340d7628459aa4593fc05',
    },
    {
        id: 'tenset',
        symbol: '10set',
        addr: '0x7ff4169a6b5122b664c51c95727d87750ec07c84',
    },
    {
        id: 'tenx',
        symbol: 'pay',
        addr: '0xb97048628db6b661d4c2aa833e95dbe1a905b280',
    },
    {
        id: 'tenxcoin',
        symbol: 'txc',
        addr: '0xc11551bb497875050b69a2fdccc20a53a9a70263',
    },
    {
        id: 'tepleton',
        symbol: 'tep',
        addr: '0x2e65e12b5f0fd1d58738c6f38da7d57f5f183d1c',
    },
    {
        id: 'terablock',
        symbol: 'tbc',
        addr: '0xa1ed0364d53394209d61ae8bfdb8ff50484d8c91',
    },
    {
        id: 'tercet-network',
        symbol: 'tcnx',
        addr: '0x28d7f432d24ba6020d1cbd4f28bedc5a82f24320',
    },
    {
        id: 'terran-coin',
        symbol: 'trr',
        addr: '0x490e3f4af13e1616ec97a8c6600c1061a8d0253e',
    },
    {
        id: 'terrausd',
        symbol: 'ust',
        addr: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
    },
    {
        id: 'terra-virtua-kolect',
        symbol: 'tvk',
        addr: '0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988',
    },
    {
        id: 'teslafan',
        symbol: 'teslf',
        addr: '0x2d5bed63b0fe325ed3b865ae2cdaa3649eb25461',
    },
    {
        id: 'tesra',
        symbol: 'tsr',
        addr: '0x58959e0c71080434f237bd42d07cd84b74cef438',
    },
    {
        id: 'tessla-coin',
        symbol: 'tsla',
        addr: '0x110fe5f21c1edd4f03a6e0de0d96d0c2eed0b9cc',
    },
    {
        id: 'tether',
        symbol: 'usdt',
        addr: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    {
        id: 'tether-gold',
        symbol: 'xaut',
        addr: '0x4922a015c4407f87432b179bb209e125432e4a2a',
    },
    {
        id: 'thaler',
        symbol: 'tgco',
        addr: '0x375a08ce3a460f20bbafd282be1e3579a2c31f41',
    },
    {
        id: 'thar-token',
        symbol: 'ZEST',
        addr: '0x757703bd5b2c4bbcfde0be2c0b0e7c2f31fcf4e9',
    },
    {
        id: 'the-4th-pillar',
        symbol: 'four',
        addr: '0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0',
    },
    {
        id: 'the-abyss',
        symbol: 'abyss',
        addr: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6',
    },
    {
        id: 'the-apis',
        symbol: 'api',
        addr: '0x16448014a29484b82e3a5a6cf254e5c563a28929',
    },
    {
        id: 'the-bitcoin-family',
        symbol: 'family',
        addr: '0x833e4c02c47b7e38f5b9a80b26eb07d23d1961f4',
    },
    {
        id: 'thebridge',
        symbol: 'tbg',
        addr: '0x391612e67b0252e0d1e1460501b41545931faef9',
    },
    {
        id: 'thecash',
        symbol: 'tch',
        addr: '0xcd475371e39c0d94e82fccc9dd0ea710d0dc0c0b',
    },
    {
        id: 'the-crypto-prophecies',
        symbol: 'tcp',
        addr: '0x06576eb3b212d605b797dc15523d9dc9f4f66db4',
    },
    {
        id: 'the-currency-analytics',
        symbol: 'tcat',
        addr: '0xaff84e86d72edb971341a6a66eb2da209446fa14',
    },
    {
        id: 'the-famous-token',
        symbol: 'tft',
        addr: '0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc',
    },
    {
        id: 'the-graph',
        symbol: 'grt',
        addr: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
    },
    {
        id: 'the-hash-speed',
        symbol: 'ths',
        addr: '0xd0df51cec800d1f8045722377f6faceba8d15a4d',
    },
    {
        id: 'the-metaonez',
        symbol: 'meta',
        addr: '0xc0bfeba72805f22dc18dde31467c5a55c16ff57b',
    },
    {
        id: 'the-midas-touch-gold',
        symbol: 'tmtg',
        addr: '0x10086399dd8c1e3de736724af52587a2044c9fa2',
    },
    {
        id: 'themis-2',
        symbol: 'mis',
        addr: '0xcd1cb16a67937ff8af5d726e2681010ce1e9891a',
    },
    {
        id: 'the-movement',
        symbol: 'mvt',
        addr: '0x3d46454212c61ecb7b31248047fa033120b88668',
    },
    {
        id: 'the-nifty-onez',
        symbol: 'onez',
        addr: '0x12419eea0b053ffea92f9afcd7986a495e2cf0dd',
    },
    {
        id: 'the-node',
        symbol: 'the',
        addr: '0xb4a677b0e363c3815d46326954a4e4d2b1ace357',
    },
    {
        id: 'the-sandbox',
        symbol: 'sand',
        addr: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
    },
    {
        id: 'thetimeschaincoin',
        symbol: 'ttc',
        addr: '0xaff4abdc75f07387401ba9bc0f75ebe4c734b4c9',
    },
    {
        id: 'the-tokenized-bitcoin',
        symbol: 'imbtc',
        addr: '0x3212b29e33587a00fb1c83346f5dbfa69a458923',
    },
    {
        id: 'the-transfer-token',
        symbol: 'ttt',
        addr: '0x2494a68c1484376fef880b4c24d91f049d29b02a',
    },
    {
        id: 'thingschain',
        symbol: 'tic',
        addr: '0x72430a612adc007c50e3b6946dbb1bb0fd3101d1',
    },
    {
        id: 'thingsoperatingsystem',
        symbol: 'tos',
        addr: '0xfb5a551374b656c6e39787b1d3a03feab7f3a98e',
    },
    {
        id: 'thorchain-erc20',
        symbol: 'rune',
        addr: '0x3155ba85d5f96b2d030a4966af206230e46849cb',
    },
    {
        id: 'thorecash',
        symbol: 'tch',
        addr: '0x9972a0f24194447e73a7e8b6cd26a52e02ddfad5',
    },
    {
        id: 'thore-exchange',
        symbol: 'thex',
        addr: '0x3204dcde0c50b7b2e606587663a0fe2ee8dfb6bf',
    },
    {
        id: 'thorenext',
        symbol: 'thx',
        addr: '0xf08c68bd5f4194d994fd70726746bf529ee5a617',
    },
    {
        id: 'thorncoin',
        symbol: 'thrn',
        addr: '0x35a735b7d1d811887966656855f870c05fd0a86d',
    },
    {
        id: 'thrive',
        symbol: 'thrt',
        addr: '0x4f27053f32eda8af84956437bc00e5ffa7003287',
    },
    {
        id: 'thx',
        symbol: 'thx',
        addr: '0xa98ed1fd277ead2c00d143cbe1465f59e65a0066',
    },
    {
        id: 'tianya-token',
        symbol: 'tyt',
        addr: '0x614fd8f06ce4d93aa2361b342c86554eb5cb39f1',
    },
    {
        id: 'tidal-finance',
        symbol: 'tidal',
        addr: '0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7',
    },
    {
        id: 'tierion',
        symbol: 'tnt',
        addr: '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8',
    },
    {
        id: 'ties-network',
        symbol: 'tie',
        addr: '0x999967e2ec8a74b7c8e9db19e039d920b31d39d0',
    },
    {
        id: 'tigercash',
        symbol: 'tch',
        addr: '0x9b39a0b97319a9bd5fed217c1db7b030453bac91',
    },
    {
        id: 'tigereum',
        symbol: 'tig',
        addr: '0x749826f1041caf0ea856a4b3578ba327b18335f8',
    },
    {
        id: 'tiger-king',
        symbol: 'tking',
        addr: '0xc626d951eff8e421448074bd2ad7805c6d585793',
    },
    {
        id: 'tilwiki',
        symbol: 'tlw',
        addr: '0x06f3cdabae564b0546529b4dd8fef1bcd4235753',
    },
    {
        id: 'timecoin-protocol',
        symbol: 'tmcn',
        addr: '0x5d45aa01b73c971c65f3df409c9b3627b8fe2726',
    },
    {
        id: 'timeminer',
        symbol: 'time',
        addr: '0xa54c67bd320da4f9725a6f585b7635a0c09b122e',
    },
    {
        id: 'time-new-bank',
        symbol: 'tnb',
        addr: '0xf7920b0768ecb20a123fac32311d07d193381d6f',
    },
    {
        id: 'timers',
        symbol: 'ipm',
        addr: '0x8feef860e9fa9326ff9d7e0058f637be8579cc29',
    },
    {
        id: 'tinkucoin',
        symbol: 'tinku',
        addr: '0x47fa4b26c1c52bc35654f98d10cd61b9f3e10267',
    },
    {
        id: 'titanswap',
        symbol: 'titan',
        addr: '0x3a8cccb969a61532d1e6005e2ce12c200caece87',
    },
    {
        id: 'tixl-new',
        symbol: 'txl',
        addr: '0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41',
    },
    {
        id: 'tkn-token',
        symbol: 'tknt',
        addr: '0xbce7bd79558dda90b261506768f265c5543a9f90',
    },
    {
        id: 'tl-coin',
        symbol: 'tlc',
        addr: '0xf340b180a486d9c7a7da83e8c1937258c492fc8a',
    },
    {
        id: 'tls-token',
        symbol: 'tls',
        addr: '0x4afadb32b8fdb334cf9f20afb476a06c1f5b111a',
    },
    {
        id: 'tmc',
        symbol: 'tmc',
        addr: '0x1c153badb7e54abcdcb65f0a09fcd6f10de36aa3',
    },
    {
        id: 'tmc-niftygotchi',
        symbol: 'tmc',
        addr: '0xe13559cf6edf84bd04bf679e251f285000b9305e',
    },
    {
        id: 'tnc-coin',
        symbol: 'tnc',
        addr: '0x39e743fee400a5d9b36f1167b70c10e8f06440e5',
    },
    {
        id: 'tnos-coin',
        symbol: 'tno',
        addr: '0xad6683b7f3618c44f5ca6040902812dd890dde4d',
    },
    {
        id: 'toast-finance',
        symbol: 'house',
        addr: '0x19810559df63f19cfe88923313250550edadb743',
    },
    {
        id: 'tokamak-network',
        symbol: 'ton',
        addr: '0x2be5e8c109e2197d077d13a82daead6a9b3433c5',
    },
    {
        id: 'tokemon',
        symbol: 'tkmn',
        addr: '0x2b5016cea1c425f915e13727f7657025de3208fe',
    },
    {
        id: 'tokenasset',
        symbol: 'ntb',
        addr: '0xbe393aa534f82c0ffac31bf06a23e283acb3352b',
    },
    {
        id: 'tokenbox',
        symbol: 'tbx',
        addr: '0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b',
    },
    {
        id: 'tokencard',
        symbol: 'tkn',
        addr: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    },
    {
        id: 'token-cashpay',
        symbol: 'tcp',
        addr: '0x331a4589516eae384ea5f557853af6af73b9534e',
    },
    {
        id: 'tokenclub',
        symbol: 'tct',
        addr: '0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7',
    },
    {
        id: 'tokendesk',
        symbol: 'tds',
        addr: '0x6295ab2be04a617747481b292c390bfca592cf28',
    },
    {
        id: 'tokengo',
        symbol: 'gpt',
        addr: '0xa00425d3e2d3e9ff74f3e112b4d3a7978d7d88c2',
    },
    {
        id: 'tokenize-xchange',
        symbol: 'tkx',
        addr: '0x667102bd3413bfeaa3dffb48fa8288819e480a88',
    },
    {
        id: 'tokenlon',
        symbol: 'lon',
        addr: '0x0000000000095413afc295d19edeb1ad7b71c952',
    },
    {
        id: 'token-of-power',
        symbol: 'top',
        addr: '0x0ebd5ec91680d3b0cedbb1d5bb61851154d3edb6',
    },
    {
        id: 'tokenomy',
        symbol: 'ten',
        addr: '0xdd16ec0f66e54d453e6756713e533355989040e4',
    },
    {
        id: 'tokenplace',
        symbol: 'tok',
        addr: '0x4fb721ef3bf99e0f2c193847afa296b9257d3c30',
    },
    {
        id: 'token-pocket',
        symbol: 'tpt',
        addr: '0x4161725d019690a3e0de50f6be67b07a86a9fae1',
    },
    {
        id: 'tokens-of-babel',
        symbol: 'tob',
        addr: '0x7777770f8a6632ff043c8833310e245eba9209e6',
    },
    {
        id: 'tokenstars-ace',
        symbol: 'ace',
        addr: '0x06147110022b768ba8f99a8f385df11a151a9cc8',
    },
    {
        id: 'tokenstars-team',
        symbol: 'team',
        addr: '0x1c79ab32c66acaa1e9e81952b8aaa581b43e54e7',
    },
    {
        id: 'tokenswap',
        symbol: 'top',
        addr: '0xed6aad9650815d1647480caa1133043800d31533',
    },
    {
        id: 'tokentuber',
        symbol: 'tuber',
        addr: '0xd1766a85b0d6f81185782dc07f15326d63c3cbaa',
    },
    {
        id: 'toko',
        symbol: 'toko',
        addr: '0xa0f0546eb5e3ee7e8cfc5da12e5949f3ae622675',
    },
    {
        id: 'tokok',
        symbol: 'tok',
        addr: '0x9a49f02e128a8e989b443a8f94843c0918bf45e7',
    },
    {
        id: 'tokpie',
        symbol: 'tkp',
        addr: '0xd31695a1d35e489252ce57b129fd4b1b05e6acac',
    },
    {
        id: 'tolar',
        symbol: 'tol',
        addr: '0xd07d9fe2d2cc067015e2b4917d24933804f42cfa',
    },
    {
        id: 'tom-finance',
        symbol: 'tom',
        addr: '0xf7970499814654cd13cb7b6e7634a12a7a8a9abc',
    },
    {
        id: 'tomoe',
        symbol: 'tomoe',
        addr: '0x05d3606d5c81eb9b7b18530995ec9b29da05faba',
    },
    {
        id: 'tontoken',
        symbol: 'ton',
        addr: '0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a',
    },
    {
        id: 'topb',
        symbol: 'topb',
        addr: '0xf6317dd9b04097a9e7b016cd23dcaa7cfe19d9c6',
    },
    {
        id: 'topbidder',
        symbol: 'bid',
        addr: '0x00000000000045166c45af0fc6e4cf31d9e14b9a',
    },
    {
        id: 'topchain',
        symbol: 'topc',
        addr: '0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79',
    },
    {
        id: 'topinvestmentcoin',
        symbol: 'tico',
        addr: '0x36b60a425b82483004487abc7adcb0002918fc56',
    },
    {
        id: 'top-network',
        symbol: 'top',
        addr: '0xdcd85914b8ae28c1e62f1c488e1d968d5aaffe2b',
    },
    {
        id: 'torchain',
        symbol: 'tor',
        addr: '0x4f5f2eea4ed3485e5e23a39704d5fd9d0a423886',
    },
    {
        id: 'torex',
        symbol: 'tor',
        addr: '0x9ea20fbfaa44efbc60c6728fcdba17f01b7e04fe',
    },
    {
        id: 'tornado-cash',
        symbol: 'torn',
        addr: '0x77777feddddffc19ff86db637967013e6c6a116c',
    },
    {
        id: 'tornadocore',
        symbol: 'tcore',
        addr: '0x7a3d5d49d64e57dbd6fbb21df7202bd3ee7a2253',
    },
    {
        id: 'torocus-token',
        symbol: 'torocus',
        addr: '0x406ae253fb0aa898f9912fb192c1e6deb9623a07',
    },
    {
        id: 'torq-coin',
        symbol: 'torq',
        addr: '0x1c65c261cb89178b02cf2aee20058b992787d770',
    },
    {
        id: 'tosdis',
        symbol: 'dis',
        addr: '0x220b71671b649c03714da9c621285943f3cbcdc6',
    },
    {
        id: 'toshify-finance',
        symbol: 'YFT',
        addr: '0x9cd39da8f25ec50cf2ee260e464ac23ea23f6bb0',
    },
    {
        id: 'toshi-token',
        symbol: 'toshi',
        addr: '0xf136d7b0b7ae5b86d21e7b78dfa95375a7360f19',
    },
    {
        id: 'total-crypto-market-cap-token',
        symbol: 'tcap',
        addr: '0x16c52ceece2ed57dad87319d91b5e3637d50afa4',
    },
    {
        id: 'totemfi',
        symbol: 'totm',
        addr: '0x6ff1bfa14a57594a5874b37ff6ac5efbd9f9599a',
    },
    {
        id: 'tothe-moon',
        symbol: 'ttm',
        addr: '0x714b1fded61090a6c49eb0b4d088b8e5ebd64e61',
    },
    {
        id: 'touchcon',
        symbol: 'toc',
        addr: '0xe02784175c3be0dea7cc0f284041b64503639e66',
    },
    {
        id: 'touch-social',
        symbol: 'tst',
        addr: '0xd9bae39c725a1864b1133ad0ef1640d02f79b78c',
    },
    {
        id: 'tourist-review-token',
        symbol: 'tret',
        addr: '0xc6d603a9df53d1542552058c382bf115aace70c7',
    },
    {
        id: 'tourist-token',
        symbol: 'toto',
        addr: '0xe3278df3eb2085ba9b6899812a99a10f9ca5e0df',
    },
    {
        id: 'tower',
        symbol: 'tower',
        addr: '0x1c9922314ed1415c95b9fd453c3818fd41867d0b',
    },
    {
        id: 'tozex',
        symbol: 'toz',
        addr: '0x29239242a83479a4074cb1c9e2a3e6705a4a4455',
    },
    {
        id: 'traceability-chain',
        symbol: 'tac',
        addr: '0xca694eb79ef355ea0999485d211e68f39ae98493',
    },
    {
        id: 'tradcoin',
        symbol: 'trad',
        addr: '0xb09ad98524780228d2df4f34aa665d9dbb9999e4',
    },
    {
        id: 'trade-butler-bot',
        symbol: 'tbb',
        addr: '0x4a7adcb083fe5e3d6b58edc3d260e2e61668e7a2',
    },
    {
        id: 'tradestars',
        symbol: 'tsx',
        addr: '0x734c90044a0ba31b3f2e640c10dc5d3540499bfd',
    },
    {
        id: 'trade-token',
        symbol: 'tiox',
        addr: '0xd947b0ceab2a8885866b9a04a06ae99de852a3d4',
    },
    {
        id: 'trade-win',
        symbol: 'twi',
        addr: '0xdad26bce7dcf59cd03a2455558e4dd73e1c07b66',
    },
    {
        id: 'tradove',
        symbol: 'bbc',
        addr: '0xe7d3e4413e29ae35b0893140f4500965c74365e5',
    },
    {
        id: 'tranche-finance',
        symbol: 'SLICE',
        addr: '0x0aee8703d34dd9ae107386d3eff22ae75dd616d1',
    },
    {
        id: 'tranium',
        symbol: 'trm',
        addr: '0xbffe4fdcd397e7942fd7c9f99255e0aa34e4b3fb',
    },
    {
        id: 'transcodium',
        symbol: 'tns',
        addr: '0xb0280743b44bf7db4b6be482b2ba7b75e5da096c',
    },
    {
        id: 'transmute',
        symbol: 'XPb',
        addr: '0xbc81bf5b3173bccdbe62dba5f5b695522ad63559',
    },
    {
        id: 'tratok',
        symbol: 'trat',
        addr: '0xe225aca29524bb65fd82c79a9602f3b4f9c6fe3f',
    },
    {
        id: 'travelnote',
        symbol: 'tvnt',
        addr: '0x5635ddeabf9cdda686995fe90beb5411831563fc',
    },
    {
        id: 'traxia',
        symbol: 'tmt',
        addr: '0x3209f98bebf0149b769ce26d71f7aea8e435efea',
    },
    {
        id: 'treasure-financial-coin',
        symbol: 'tfc',
        addr: '0x8694ee05b45c9fe1058ce532de8dbcf1d84a4154',
    },
    {
        id: 'trebit-network',
        symbol: 'trb',
        addr: '0x901f8679a6ef435d533732f5ea49bb82d568be99',
    },
    {
        id: 'treecle',
        symbol: 'trcl',
        addr: '0x0a9d68886a0d7db83a30ec00d62512483e5ad437',
    },
    {
        id: 'treelion',
        symbol: 'trn',
        addr: '0x70968feaf13299d0dbf78f66860bab9dbe3856bc',
    },
    {
        id: 'trendering',
        symbol: 'trnd',
        addr: '0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb',
    },
    {
        id: 'trias-token',
        symbol: 'trias',
        addr: '0x3a856d4effa670c54585a5d523e96513e148e95d',
    },
    {
        id: 'tribe-2',
        symbol: 'tribe',
        addr: '0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
    },
    {
        id: 'tribute',
        symbol: 'trbt',
        addr: '0x7031ab87dcc46818806ec07af46fa8c2ad2a2bfc',
    },
    {
        id: 'trinity-protocol',
        symbol: 'TRI',
        addr: '0xc299004a310303d1c0005cb14c70ccc02863924d',
    },
    {
        id: 'tripio',
        symbol: 'trio',
        addr: '0x8b40761142b9aa6dc8964e61d0585995425c3d94',
    },
    {
        id: 'trips-community',
        symbol: 'trips',
        addr: '0x1350fbe8ce27762ec19134bf8fc405a427fe9bf1',
    },
    {
        id: 'trism',
        symbol: 'trism',
        addr: '0x56b4f8c39e07d4d5d91692acf9d0f6d4d3493763',
    },
    {
        id: 'triumphx',
        symbol: 'trix',
        addr: '0x056354f3ff20743aa4c0da365603871c7000b081',
    },
    {
        id: 'trodl',
        symbol: 'tro',
        addr: '0x831168e04047d881968d236249689cc001a6da08',
    },
    {
        id: 'tronclassic',
        symbol: 'trxc',
        addr: '0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e',
    },
    {
        id: 'tronipay',
        symbol: 'trp',
        addr: '0x9b1e1fc958b83e801d1342f9f9ba7da3a55ba1ef',
    },
    {
        id: 'trueaud',
        symbol: 'taud',
        addr: '0x00006100f7090010005f1bd7ae6122c3c2cf0090',
    },
    {
        id: 'truebit-protocol',
        symbol: 'tru',
        addr: '0xf65b5c5104c4fafd4b709d9d60a185eae063276c',
    },
    {
        id: 'truedeck',
        symbol: 'tdp',
        addr: '0x5b11aacb6bddb9ffab908fdce739bf4aed554327',
    },
    {
        id: 'truefeedbackchain',
        symbol: 'tfb',
        addr: '0x79cdfa04e3c4eb58c4f49dae78b322e5b0d38788',
    },
    {
        id: 'truefi',
        symbol: 'tru',
        addr: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
    },
    {
        id: 'trueflip',
        symbol: 'tfl',
        addr: '0xa7f976c360ebbed4465c2855684d1aae5271efa9',
    },
    {
        id: 'truegame',
        symbol: 'tgame',
        addr: '0xf8e06e4e4a80287fdca5b02dccecaa9d0954840f',
    },
    {
        id: 'truegbp',
        symbol: 'tgbp',
        addr: '0x00000000441378008ea67f4284a57932b1c000a5',
    },
    {
        id: 'truehkd',
        symbol: 'thkd',
        addr: '0x0000852600ceb001e08e00bc008be620d60031f2',
    },
    {
        id: 'true-pnl',
        symbol: 'pnl',
        addr: '0x9fc8f0ca1668e87294941b7f627e9c15ea06b459',
    },
    {
        id: 'true-seigniorage-dollar',
        symbol: 'tsd',
        addr: '0x4846239fdf4d4c1aeb26729fa064b0205aca90e1',
    },
    {
        id: 'true-usd',
        symbol: 'tusd',
        addr: '0x0000000000085d4780b73119b644ae5ecd22b376',
    },
    {
        id: 'trust',
        symbol: 'trust',
        addr: '0x57700244b20f84799a31c6c96dadff373ca9d6c5',
    },
    {
        id: 'trustline-network',
        symbol: 'tln',
        addr: '0x679131f591b4f369acb8cd8c51e68596806c3916',
    },
    {
        id: 'trustmarkethub-token',
        symbol: 'tmh',
        addr: '0x901fe080ee18383bf5494049538f1bca155f4d0b',
    },
    {
        id: 'trustswap',
        symbol: 'swap',
        addr: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
    },
    {
        id: 'trustusd',
        symbol: 'trusd',
        addr: '0xdd436a0dce9244b36599ae7b22f0373b4e33992d',
    },
    {
        id: 'trustverse',
        symbol: 'trv',
        addr: '0x72955ecff76e48f2c8abcce11d54e5734d6f3657',
    },
    {
        id: 'try-finance',
        symbol: 'try',
        addr: '0xc12ecee46ed65d970ee5c899fcc7ae133aff9b03',
    },
    {
        id: 'tsuki-inu',
        symbol: 'tkinu',
        addr: '0xda23d301761e4e2bf474951f978f6dfb6f3c9f14',
    },
    {
        id: 'tugz',
        symbol: 'tugz',
        addr: '0xb5943c96b28570d63512dda2069045b304994daf',
    },
    {
        id: 'tulip-seed',
        symbol: 'stlp',
        addr: '0x3d1be3fef769399cce7e504e85324d622f23cf85',
    },
    {
        id: 'tunnel-protocol',
        symbol: 'tni',
        addr: '0xa5a2af22eac6f050227d844b108c2b2a011fd329',
    },
    {
        id: 'turex',
        symbol: 'tur',
        addr: '0x1600c2e08acb830f2a4ee4d34b48594dade48651',
    },
    {
        id: 'tutors-diary',
        symbol: 'tuda',
        addr: '0x5e3002dff591c5e75bb9dedae268049742e6b13a',
    },
    {
        id: 'tvt',
        symbol: 'tvt',
        addr: '0x98e0438d3ee1404fea48e38e92853bb08cfa68bd',
    },
    {
        id: 'tweebaa',
        symbol: 'twee',
        addr: '0x2b6ff53fc2493ccd5202d80a6c439741414c5ff2',
    },
    {
        id: 'two-prime-ff1-token',
        symbol: 'ff1',
        addr: '0x59af0356cdebd1fa23ae5dadff9170bbfc31278c',
    },
    {
        id: 'tycoon',
        symbol: 'tyc',
        addr: '0x3a82d3111ab5faf39d847d46023d9090261a658f',
    },
    {
        id: 'typerium',
        symbol: 'type',
        addr: '0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f',
    },
    {
        id: 'typhoon-cash',
        symbol: 'phoon',
        addr: '0x79256db1bdb6259315a1a3d7dd237f69cadfd8fc',
    },
    {
        id: 'ubex',
        symbol: 'ubex',
        addr: '0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1',
    },
    {
        id: 'ubiner',
        symbol: 'ubin',
        addr: '0xb9eceb9f717852ad0d936b46155cb0c0f43cbe8e',
    },
    {
        id: 'ubiquitous-social-network-service',
        symbol: 'usns',
        addr: '0x2f766a83146f7eaee2c635c9f9a291e4b86f4108',
    },
    {
        id: 'ubix-network',
        symbol: 'ubx',
        addr: '0xf5b5efc906513b4344ebabcf47a04901f99f09f3',
    },
    {
        id: 'ubricoin',
        symbol: 'ubn',
        addr: '0xdb13025b219db5e4529f48b65ff009a26b6ae733',
    },
    {
        id: 'ubu',
        symbol: 'ubu',
        addr: '0x6b74dd5d01f8320081247f5cf1f7a48324700db6',
    },
    {
        id: 'ucash',
        symbol: 'ucash',
        addr: '0x92e52a1a235d9a103d970901066ce910aacefd37',
    },
    {
        id: 'uchain',
        symbol: 'ucn',
        addr: '0xaaf37055188feee4869de63464937e683d61b2a1',
    },
    {
        id: 'ucos-token',
        symbol: 'ucos',
        addr: '0xd8d887b5611a5b3e90bf764085d9858031d2be67',
    },
    {
        id: 'ucot',
        symbol: 'uct',
        addr: '0x3c4bea627039f0b7e7d21e34bb9c9fe962977518',
    },
    {
        id: 'ucrowdme',
        symbol: 'ucm',
        addr: '0x722f97a435278b7383a1e3c47f41773bebf3232c',
    },
    {
        id: 'ucx',
        symbol: 'ucx',
        addr: '0x3d3af44cf092a49280e316f09c8f20ecf97bc933',
    },
    {
        id: 'ucx-foundation',
        symbol: 'ucx',
        addr: '0xe7cd2c56d3f01f9f8ae542ba5b2f00cf2cf994b1',
    },
    {
        id: 'udap',
        symbol: 'upx',
        addr: '0x5f778ec4b31a506c1dfd8b06f131e9b451a61d39',
    },
    {
        id: 'ugas-jun21',
        symbol: 'ugas-jun21',
        addr: '0xa6b9d7e3d76cf23549293fb22c488e0ea591a44e',
    },
    {
        id: 'ugchain',
        symbol: 'ugc',
        addr: '0xf485c5e679238f9304d986bb2fc28fe3379200e5',
    },
    {
        id: 'uhive',
        symbol: 'hve2',
        addr: '0xd487892bb4c57edbe7ab401d9fe801c8fe6473f5',
    },
    {
        id: 'ulgen-hash-power',
        symbol: 'uhp',
        addr: '0x9135d92e3a34e2a94e4474b74b9dc2d51118eed5',
    },
    {
        id: 'ultiledger',
        symbol: 'ult',
        addr: '0xe884cc2795b9c45beeac0607da9539fd571ccf85',
    },
    {
        id: 'ultra',
        symbol: 'uos',
        addr: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
    },
    {
        id: 'ultrain',
        symbol: 'ugas',
        addr: '0x8716fc5da009d3a208f0178b637a50f4ef42400f',
    },
    {
        id: 'ultralpha',
        symbol: 'uat',
        addr: '0x01c0987e88f778df6640787226bc96354e1a9766',
    },
    {
        id: 'uma',
        symbol: 'uma',
        addr: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    {
        id: 'umbra-network',
        symbol: 'umbr',
        addr: '0xa4bbe66f151b22b167127c770016b15ff97dd35c',
    },
    {
        id: 'umbrellacoin',
        symbol: 'umc',
        addr: '0x190fb342aa6a15eb82903323ae78066ff8616746',
    },
    {
        id: 'umbrella-network',
        symbol: 'umb',
        addr: '0x6fc13eace26590b80cccab1ba5d51890577d83b2',
    },
    {
        id: 'unagii-dai',
        symbol: 'udai',
        addr: '0x4ad0b81f92b16624bbcf46fc0030cfbbf8d02376',
    },
    {
        id: 'unagii-eth',
        symbol: 'ueth',
        addr: '0x77607588222e01bf892a29abab45796a2047fc7b',
    },
    {
        id: 'unagii-tether-usd',
        symbol: 'uusdt',
        addr: '0x178bf8fd04b47d2de3ef3f6b3d112106375ad584',
    },
    {
        id: 'unagii-usd-coin',
        symbol: 'uusdc',
        addr: '0xbc5991ccd8caceba01edc44c2bb9832712c29cab',
    },
    {
        id: 'unagii-wrapped-bitcoin',
        symbol: 'uwbtc',
        addr: '0x3af5ba94c29a8407785f5f6d90ef5d69a8eb2436',
    },
    {
        id: 'unbox-art',
        symbol: 'uba',
        addr: '0x817e2addceaa4907623666a7800b1553ca21192d',
    },
    {
        id: 'uncl',
        symbol: 'uncl',
        addr: '0x2f4eb47a1b1f4488c71fc10e39a4aa56af33dd49',
    },
    {
        id: 'u-network',
        symbol: 'uuu',
        addr: '0x3543638ed4a9006e4840b105944271bcea15605d',
    },
    {
        id: 'unfederalreserve',
        symbol: 'ersdl',
        addr: '0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6',
    },
    {
        id: 'unibomb',
        symbol: 'ubomb',
        addr: '0x265ba42daf2d20f3f358a7361d9f69cb4e28f0e6',
    },
    {
        id: 'unibot-cash',
        symbol: 'undb',
        addr: '0xd03b6ae96cae26b743a6207dcee7cbe60a425c70',
    },
    {
        id: 'unibright',
        symbol: 'ubt',
        addr: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
    },
    {
        id: 'unicap-finance',
        symbol: 'ucap',
        addr: '0xbaa70614c7aafb568a93e62a98d55696bcc85dfe',
    },
    {
        id: 'unicly',
        symbol: 'unic',
        addr: '0x94e0bab2f6ab1f19f4750e42d7349f2740513ad5',
    },
    {
        id: 'unicly-aavegotchi-astronauts-collection',
        symbol: 'ugotchi',
        addr: '0x30c2a84aed6db30e31cf4d7059b1836c12c68068',
    },
    {
        id: 'unicly-air-jordan-1st-drop-collection',
        symbol: 'ujord',
        addr: '0xaffdb768e5f909b9a6ed110ad724b5e454670c08',
    },
    {
        id: 'unicly-artblocks-collection',
        symbol: 'uartb',
        addr: '0xf824402747e5142d04892fdc27c73e6460e80080',
    },
    {
        id: 'unicly-autoglyph-collection',
        symbol: 'uglyph',
        addr: '0xf503bf7a7b0962205668ed041140f4af360304be',
    },
    {
        id: 'unicly-beeple-collection',
        symbol: 'ubeeple',
        addr: '0xcb4b17b9fa78bf1fac6d239e5bce291035750b6c',
    },
    {
        id: 'unicly-bored-ape-yacht-club-collection',
        symbol: 'uAPE',
        addr: '0xcc7d3706ea82cdb4ec7d2a3eac0e487e17ab975a',
    },
    {
        id: 'unicly-chris-mccann-collection',
        symbol: 'ucm',
        addr: '0x5fb99a3593d7088e44377a1beb27739bd928f269',
    },
    {
        id: 'unicly-cryptopunks-collection',
        symbol: 'upunk',
        addr: '0x8d2bffcbb19ff14a698c424fbcdcfd17aab9b905',
    },
    {
        id: 'unicly-doki-doki-collection',
        symbol: 'udoki',
        addr: '0x7e6c38d007740931e4b419bf15a68c79a0fb0c66',
    },
    {
        id: 'unicly-formula-revv-collection',
        symbol: 'urevv',
        addr: '0x72b19558b05706708b612fbbe86b71446eafc002',
    },
    {
        id: 'unicly-genesis-collection',
        symbol: 'uunicly',
        addr: '0x3d9233f15bb93c78a4f07b5c5f7a018630217cb3',
    },
    {
        id: 'unicly-gone-studio-collection',
        symbol: 'ugone',
        addr: '0xc9df0ed2e9ef4357b51db171ff08297d10875280',
    },
    {
        id: 'unicly-hashmasks-collection',
        symbol: 'umask',
        addr: '0x5872e64c3f93363822d2b1e4717be3398fdcea51',
    },
    {
        id: 'unicly-mooncats-collection',
        symbol: 'umoon',
        addr: '0x683239a4cab49642c6e025cf81d283f9c87bc07d',
    },
    {
        id: 'unicly-mystic-axies-collection',
        symbol: 'uaxie',
        addr: '0x68b1cadb8d5ab0c97fe9d9fbe0eb60acb329fe3f',
    },
    {
        id: 'unicly-pak-collection',
        symbol: 'upak',
        addr: '0xa46f33694f5b31a6ed27eda16ccd466e94c80f1a',
    },
    {
        id: 'unicly-the-day-by-arc-collection',
        symbol: 'uarc',
        addr: '0x44440bd68b5e4b1e0cb810669097e9573175601b',
    },
    {
        id: 'unicly-waifu-collection',
        symbol: 'uwaifu',
        addr: '0x3ac7a71b97183e3db7722c75eaa8df2c1a0badfc',
    },
    {
        id: 'unicorn-token',
        symbol: 'uni',
        addr: '0x2730d6fdc86c95a74253beffaa8306b40fedecbb',
    },
    {
        id: 'unicrap',
        symbol: 'unicrap',
        addr: '0x64c5572e7a100af9901c148d75d72c619a7f1e9d',
    },
    {
        id: 'unicrypt',
        symbol: 'unc',
        addr: '0xf29e46887ffae92f1ff87dfe39713875da541373',
    },
    {
        id: 'unicrypt-2',
        symbol: 'uncx',
        addr: '0xadb2437e6f65682b85f814fbc12fec0508a7b1d0',
    },
    {
        id: 'unidex',
        symbol: 'unidx',
        addr: '0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c',
    },
    {
        id: 'unidexgas',
        symbol: 'undg',
        addr: '0xa5959e9412d27041194c3c3bcbe855face2864f7',
    },
    {
        id: 'unido-ep',
        symbol: 'udo',
        addr: '0xea3983fc6d0fbbc41fb6f6091f68f3e08894dc06',
    },
    {
        id: 'unidollar',
        symbol: 'uniusd',
        addr: '0x256845e721c0c46d54e6afbd4fa3b52cb72353ea',
    },
    {
        id: 'unifarm',
        symbol: 'ufarm',
        addr: '0x40986a85b4cfcdb054a6cbfb1210194fee51af88',
    },
    {
        id: 'unifi',
        symbol: 'unifi',
        addr: '0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5',
    },
    {
        id: 'unifi-defi',
        symbol: 'unifi',
        addr: '0x0ef3b2024ae079e6dbc2b37435ce30d2731f0101',
    },
    {
        id: 'unifty',
        symbol: 'nif',
        addr: '0x7e291890b01e5181f7ecc98d79ffbe12ad23df9e',
    },
    {
        id: 'unifund',
        symbol: 'ifund',
        addr: '0x04b5e13000c6e9a3255dc057091f3e3eeee7b0f0',
    },
    {
        id: 'unigraph',
        symbol: 'graph',
        addr: '0x165440036ce972c5f8ebef667086707e48b2623e',
    },
    {
        id: 'unii-finance',
        symbol: 'unii',
        addr: '0x825130aa1beef07bdf4f389705321816d05b0d0f',
    },
    {
        id: 'unikoin-gold',
        symbol: 'ukg',
        addr: '0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b',
    },
    {
        id: 'unilayer',
        symbol: 'layer',
        addr: '0x0ff6ffcfda92c53f615a4a75d982f399c989366b',
    },
    {
        id: 'unilayerx',
        symbol: 'layerx',
        addr: '0xfe56e974c1c85e9351325fb2d62963a022ad624f',
    },
    {
        id: 'unilock-network',
        symbol: 'unl',
        addr: '0x354e514c135c8603f840ffadb4c33cde6d2a37e0',
    },
    {
        id: 'unilord',
        symbol: 'peer',
        addr: '0x5dd115eb39a0fc5da9022e4bbb8e8679ca066a74',
    },
    {
        id: 'unimex-network',
        symbol: 'umx',
        addr: '0x10be9a8dae441d276a5027936c3aaded2d82bc15',
    },
    {
        id: 'union-fair-coin',
        symbol: 'ufc',
        addr: '0x995de3d961b40ec6cdee0009059d48768ccbdd48',
    },
    {
        id: 'union-protocol-governance-token',
        symbol: 'unn',
        addr: '0x226f7b842e0f0120b7e194d05432b3fd14773a9d',
    },
    {
        id: 'unipower',
        symbol: 'power',
        addr: '0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509',
    },
    {
        id: 'unipump',
        symbol: 'UPP',
        addr: '0xce25b4271cc4d937a7d9bf75b2068a7892b9961d',
    },
    {
        id: 'uniqly',
        symbol: 'uniq',
        addr: '0x3758e00b100876c854636ef8db61988931bb8025',
    },
    {
        id: 'unique-fans',
        symbol: 'fans',
        addr: '0xd33d0eb1c0c0295c3a2409a9101dd511823bf217',
    },
    {
        id: 'unique-one',
        symbol: 'rare',
        addr: '0x93dfaf57d986b9ca77df9376c50878e013d9c7c8',
    },
    {
        id: 'unique-photo',
        symbol: 'foto',
        addr: '0xf6ea0e60cee427b90aa36f327ee61d1d4cabc49f',
    },
    {
        id: 'uniris',
        symbol: 'uco',
        addr: '0x8a3d77e9d6968b780564936d15b09805827c21fa',
    },
    {
        id: 'unisocks',
        symbol: 'socks',
        addr: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    },
    {
        id: 'unistake',
        symbol: 'unistake',
        addr: '0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e',
    },
    {
        id: 'uniswap',
        symbol: 'uni',
        addr: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    {
        id: 'uniswap-state-dollar',
        symbol: 'usd',
        addr: '0x44086035439e676c02d411880fccb9837ce37c57',
    },
    {
        id: 'unitedcrowd',
        symbol: 'uct',
        addr: '0x6d1dc3928604b00180bb570bdae94b9698d33b79',
    },
    {
        id: 'united-traders-token',
        symbol: 'utt',
        addr: '0x16f812be7fff02caf662b85d5d58a5da6572d4df',
    },
    {
        id: 'unitopia-token',
        symbol: 'uto',
        addr: '0x1f8f123bf24849443a56ed9fc42b9265b7f3a39a',
    },
    {
        id: 'unit-protocol',
        symbol: 'col',
        addr: '0xc76fb75950536d98fa62ea968e1d6b45ffea2a55',
    },
    {
        id: 'unit-protocol-duck',
        symbol: 'duck',
        addr: '0x92e187a03b6cd19cb6af293ba17f2745fd2357d5',
    },
    {
        id: 'unitrade',
        symbol: 'trade',
        addr: '0x6f87d756daf0503d08eb8993686c7fc01dc44fb1',
    },
    {
        id: 'unitydao',
        symbol: 'uty',
        addr: '0xc6bf2a2a43ca360bb0ec6770f57f77cdde64bb3f',
    },
    {
        id: 'universa',
        symbol: 'utnp',
        addr: '0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7',
    },
    {
        id: 'universal-basic-income',
        symbol: 'ubi',
        addr: '0xdd1ad9a21ce722c151a836373babe42c868ce9a4',
    },
    {
        id: 'universal-coin',
        symbol: 'ucoin',
        addr: '0xa918897bd10d6dee614470c24a061b78b021b3a9',
    },
    {
        id: 'universal-dollar',
        symbol: 'u8d',
        addr: '0x888888877a18532b78d259577d00057054c50dd8',
    },
    {
        id: 'universalenergychain',
        symbol: 'uenc',
        addr: '0xb3dd5dce850dca7519e74a943568b69f958df52c',
    },
    {
        id: 'universal-euro',
        symbol: 'upeur',
        addr: '0x6c103d85c15107dce19f5a75fc746227e610aabd',
    },
    {
        id: 'universal-gold',
        symbol: 'upxau',
        addr: '0x0557df767419296474c3f551bb0a0ed4c2dd3380',
    },
    {
        id: 'universal-liquidity-union',
        symbol: 'ulu',
        addr: '0x035bfe6057e15ea692c0dfdcab3bb41a64dd2ad4',
    },
    {
        id: 'universal-marketing-coin',
        symbol: 'umc',
        addr: '0xd3ec111e4e33c0a1c32e3ad0be976214d30dc37e',
    },
    {
        id: 'universal-protocol-token',
        symbol: 'upt',
        addr: '0x6ca88cc8d9288f5cad825053b6a1b179b05c76fc',
    },
    {
        id: 'universal-us-dollar',
        symbol: 'upusd',
        addr: '0x86367c0e517622dacdab379f2de389c3c9524345',
    },
    {
        id: 'universe-xyz',
        symbol: 'xyz',
        addr: '0x618679df9efcd19694bb1daa8d00718eacfa2883',
    },
    {
        id: 'uniwhales',
        symbol: 'uwl',
        addr: '0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5',
    },
    {
        id: 'unizen',
        symbol: 'zcx',
        addr: '0xc52c326331e9ce41f04484d3b5e5648158028804',
    },
    {
        id: 'unlend-finance',
        symbol: 'uft',
        addr: '0x0202be363b8a4820f3f4de7faf5224ff05943ab1',
    },
    {
        id: 'unlimited-fiscusfyi',
        symbol: 'uffyi',
        addr: '0x021576770cb3729716ccfb687afdb4c6bf720cb6',
    },
    {
        id: 'unlimitedip',
        symbol: 'uip',
        addr: '0x4290563c2d7c255b5eec87f2d3bd10389f991d68',
    },
    {
        id: 'unlock-protocol',
        symbol: 'udt',
        addr: '0x90de74265a416e1393a450752175aed98fe11517',
    },
    {
        id: 'unmarshal',
        symbol: 'marsh',
        addr: '0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37',
    },
    {
        id: 'uno-re',
        symbol: 'uno',
        addr: '0x474021845c4643113458ea4414bdb7fb74a01a77',
    },
    {
        id: 'unoswap',
        symbol: 'unos',
        addr: '0xd18a8abed9274edbeace4b12d86a8633283435da',
    },
    {
        id: 'unslashed-finance',
        symbol: 'usf',
        addr: '0xe0e05c43c097b0982db6c9d626c4eb9e95c3b9ce',
    },
    {
        id: 'upbots',
        symbol: 'ubxt',
        addr: '0x8564653879a18c560e7c0ea0e084c516c62f5653',
    },
    {
        id: 'upbtc-token',
        symbol: 'upb',
        addr: '0x114a86d31b8cb3867040b48e7c17d5d04d886ce0',
    },
    {
        id: 'upfiring',
        symbol: 'ufr',
        addr: '0xea097a2b1db00627b2fa17460ad260c016016977',
    },
    {
        id: 'uploadea',
        symbol: 'upl',
        addr: '0x6aca6de211ee17d38d05c7af583e43f9b1ec4c07',
    },
    {
        id: 'upper-dollar',
        symbol: 'usdu',
        addr: '0x41a03e41ef555392c9f0ad60f4f61e263078bf10',
    },
    {
        id: 'upper-euro',
        symbol: 'euru',
        addr: '0x6c139349ee94ebaaff55ed52d382673c263b22d6',
    },
    {
        id: 'upper-pound',
        symbol: 'gbpu',
        addr: '0x27ed129c298c5df130364083f491e2920e5a2f29',
    },
    {
        id: 'uptoken',
        symbol: 'up',
        addr: '0x6ba460ab75cd2c56343b3517ffeba60748654d26',
    },
    {
        id: 'uptrennd',
        symbol: '1up',
        addr: '0x07597255910a51509ca469568b048f2597e72504',
    },
    {
        id: 'uquid-coin',
        symbol: 'uqc',
        addr: '0x8806926ab68eb5a7b909dcaf6fdbe5d93271d6e2',
    },
    {
        id: 'uranus',
        symbol: 'urac',
        addr: '0xff8be4b22cedc440591dcb1e641eb2a0dd9d25a5',
    },
    {
        id: 'ureeqa',
        symbol: 'urqa',
        addr: '0x1735db6ab5baa19ea55d0adceed7bcdc008b3136',
    },
    {
        id: 'urus-token',
        symbol: 'urus',
        addr: '0x6c5fbc90e4d78f70cc5025db005b39b03914fc0c',
    },
    {
        id: 'usda',
        symbol: 'usda',
        addr: '0x3c7b464376db7c9927930cf50eefdea2eff3a66a',
    },
    {
        id: 'usd-bancor',
        symbol: 'usdb',
        addr: '0x309627af60f0926daa6041b8279484312f2bf060',
    },
    {
        id: 'usd-coin',
        symbol: 'usdc',
        addr: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    {
        id: 'usdex-2',
        symbol: 'usdex',
        addr: '0x4726e9de74573255ea41e0d00b49b833c77a671e',
    },
    {
        id: 'usdf',
        symbol: 'usdf',
        addr: '0x05462671c05adc39a6521fa60d5e9443e9e9d2b9',
    },
    {
        id: 'usdfreeliquidity',
        symbol: 'usdfl',
        addr: '0x2b4200a8d373d484993c37d63ee14aee0096cd12',
    },
    {
        id: 'usdk',
        symbol: 'usdk',
        addr: '0x1c48f86ae57291f7686349f12601910bd8d470bb',
    },
    {
        id: 'usdl',
        symbol: 'usdl',
        addr: '0x3e991dbec296e00626e58c33b62e53bec9d54636',
    },
    {
        id: 'usdp',
        symbol: 'usdp',
        addr: '0x1456688345527be1f37e9e627da0837d6f08c925',
    },
    {
        id: 'usdq',
        symbol: 'usdq',
        addr: '0x4954db6391f4feb5468b6b943d4935353596aec9',
    },
    {
        id: 'usdx-stablecoin',
        symbol: 'usdx',
        addr: '0xeb269732ab75a6fd61ea60b06fe994cd32a83549',
    },
    {
        id: 'usechain',
        symbol: 'use',
        addr: '0xd9485499499d66b175cf5ed54c0a19f1a6bcb61a',
    },
    {
        id: 'uservice',
        symbol: 'ust',
        addr: '0xcda4377806cb09f226aa4840a9df8b5c2b7744ec',
    },
    {
        id: 'ustonks-apr21',
        symbol: 'ustonks-apr21',
        addr: '0xec58d3aefc9aaa2e0036fa65f70d569f49d9d1ed',
    },
    {
        id: 'utopia-genesis-foundation',
        symbol: 'uop',
        addr: '0xe4ae84448db5cfe1daf1e6fb172b469c161cb85f',
    },
    {
        id: 'utrin',
        symbol: 'utrin',
        addr: '0x99f2b69ee2468c834a634ff50d930ae64e3e500f',
    },
    {
        id: 'utrust',
        symbol: 'utk',
        addr: '0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c',
    },
    {
        id: 'utu-coin',
        symbol: 'utu',
        addr: '0xa58a4f5c4bb043d2cc1e170613b74e767c94189b',
    },
    {
        id: 'uze-token',
        symbol: 'uze',
        addr: '0xbdcd5fafe4336a844233ebb0aff845d6b2100899',
    },
    {
        id: 'vaiot',
        symbol: 'vai',
        addr: '0x9f801c1f02af03cc240546dadef8e56cd46ea2e9',
    },
    {
        id: 'valid',
        symbol: 'vld',
        addr: '0x922ac473a3cc241fd3a0049ed14536452d58d73c',
    },
    {
        id: 'valireum',
        symbol: 'vlm',
        addr: '0x3989f36540052668c340a53aaeacb46d6cf0dd6c',
    },
    {
        id: 'valix',
        symbol: 'vlx',
        addr: '0x8d6b0fcdc476dac3529f6f8cada214612892b347',
    },
    {
        id: 'valobit',
        symbol: 'vbit',
        addr: '0xb8366948b4a3f07bcbf14eb1739daa42a26b07c4',
    },
    {
        id: 'valuechain',
        symbol: 'vlc',
        addr: '0x8f7b0b40e27e357540f90f187d90ce06366ac5a5',
    },
    {
        id: 'valuecybertoken',
        symbol: 'vct',
        addr: '0x9746953f5b1324a78132895cfd263f417b0faae3',
    },
    {
        id: 'value-liquidity',
        symbol: 'value',
        addr: '0x49e833337ece7afe375e44f4e3e8481029218e5c',
    },
    {
        id: 'value-network-token',
        symbol: 'vntw',
        addr: '0xd0f05d3d4e4d1243ac826d8c6171180c58eaa9bc',
    },
    {
        id: 'value-set-dollar',
        symbol: 'vsd',
        addr: '0x35de3eccaccb02e627062b5d63aa941b137288fe',
    },
    {
        id: 'value-usd',
        symbol: 'vusd',
        addr: '0x3479b0acf875405d7853f44142fe06470a40f6cc',
    },
    {
        id: 'vampire-protocol',
        symbol: 'vamp',
        addr: '0xb2c822a1b923e06dbd193d2cfc7ad15388ea09dd',
    },
    {
        id: 'va-na-su',
        symbol: 'vns',
        addr: '0x97941ff1962026955852e9609e202d1058bc0f48',
    },
    {
        id: 'vanilla',
        symbol: 'vnl',
        addr: '0x1017b147b05942ead495e2ad6d606ef3c94b8fd0',
    },
    {
        id: 'vanilla-network',
        symbol: 'vnla',
        addr: '0xb97faf860045483e0c7f08c56acb31333084a988',
    },
    {
        id: 'vanywhere',
        symbol: 'vany',
        addr: '0x4edd66235349e353eb8cb8e40596599644bfe91c',
    },
    {
        id: 'variable-time-dollar',
        symbol: 'vtd',
        addr: '0xf0e3543744afced8042131582f2a19b6aeb82794',
    },
    {
        id: 'vault12',
        symbol: 'vgt',
        addr: '0xcc394f10545aeef24483d2347b32a34a44f20e6f',
    },
    {
        id: 'vaultz',
        symbol: 'vaultz',
        addr: '0x861b2456ac1a6ab5fb5c72aa456091f23ddec1cc',
    },
    {
        id: 'vbt',
        symbol: 'vbt',
        addr: '0x1ffe24629f1b3df74fc0f6e5d086f2fd09258ff2',
    },
    {
        id: 'vbzrx',
        symbol: 'vbzrx',
        addr: '0xb72b31907c1c95f3650b64b2469e08edacee5e8f',
    },
    {
        id: 'vecrv-dao-yvault',
        symbol: 'yve-crvdao',
        addr: '0xc5bddf9843308380375a611c18b50fb9341f502a',
    },
    {
        id: 'vectoraic',
        symbol: 'vt',
        addr: '0x38405fa410c6eba342f9eb5ac66b2aaf6498c8e9',
    },
    {
        id: 'vectorspace',
        symbol: 'vxv',
        addr: '0x7d29a64504629172a429e64183d6673b9dacbfce',
    },
    {
        id: 'vegawallet-token',
        symbol: 'vgw',
        addr: '0x94236591125e935f5ac128bb3d5062944c24958c',
    },
    {
        id: 'vela',
        symbol: 'vela',
        addr: '0x3de46d6b13314ec944100ad4dce8a730b6314315',
    },
    {
        id: 'velo-token',
        symbol: 'vlo',
        addr: '0x98ad9b32dd10f8d8486927d846d4df8baf39abe2',
    },
    {
        id: 'venjocoin',
        symbol: 'vjc',
        addr: '0x5c62da804298d5972a323c80b539b8e7517a0dde',
    },
    {
        id: 'vera',
        symbol: 'vera',
        addr: '0x166f1a7ecae00bd43876a25b10a63c575e05c0e7',
    },
    {
        id: 'veraone',
        symbol: 'vro',
        addr: '0x10bc518c32fbae5e38ecb50a612160571bd81e44',
    },
    {
        id: 'verasity',
        symbol: 'vra',
        addr: '0xf411903cbc70a74d22900a5de66a2dda66507255',
    },
    {
        id: 'veridocglobal',
        symbol: 'vdg',
        addr: '0x57c75eccc8557136d32619a191fbcdc88560d711',
    },
    {
        id: 'verify',
        symbol: 'cred',
        addr: '0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd',
    },
    {
        id: 'verisafe',
        symbol: 'vsf',
        addr: '0xac9ce326e95f51b5005e9fe1dd8085a01f18450c',
    },
    {
        id: 'veritaseum',
        symbol: 'veri',
        addr: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
    },
    {
        id: 'veros',
        symbol: 'vrs',
        addr: '0xabc430136a4de71c9998242de8c1b4b97d2b9045',
    },
    {
        id: 'verox',
        symbol: 'vrx',
        addr: '0x87de305311d5788e8da38d19bb427645b09cb4e5',
    },
    {
        id: 'versoview',
        symbol: 'vvt',
        addr: '0x755be920943ea95e39ee2dc437b268917b580d6e',
    },
    {
        id: 'vesper-finance',
        symbol: 'vsp',
        addr: '0x1b40183efb4dd766f11bda7a7c3ad8982e998421',
    },
    {
        id: 'vesta',
        symbol: 'vesta',
        addr: '0x3aef8e803bd9be47e69b9f36487748d30d940b96',
    },
    {
        id: 'vestchain',
        symbol: 'vest',
        addr: '0x37f04d2c3ae075fad5483bb918491f656b12bdb6',
    },
    {
        id: 'veth2',
        symbol: 'veth2',
        addr: '0x898bad2774eb97cf6b94605677f43b41871410b1',
    },
    {
        id: 'vether',
        symbol: 'veth',
        addr: '0x4ba6ddd7b89ed838fed25d208d4f644106e34279',
    },
    {
        id: 'vey',
        symbol: 'vey',
        addr: '0x70a63225bcadacc4430919f0c1a4f0f5fcffbaac',
    },
    {
        id: 'vgtgtoken',
        symbol: 'vgtg',
        addr: '0xe61eecfdba2ad1669cee138f1919d08ced070b83',
    },
    {
        id: 'vibe',
        symbol: 'vibe',
        addr: '0xe8ff5c9c75deb346acac493c463c8950be03dfba',
    },
    {
        id: 'viberate',
        symbol: 'vib',
        addr: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
    },
    {
        id: 'vice-industry-token',
        symbol: 'vit',
        addr: '0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c',
    },
    {
        id: 'vid',
        symbol: 'vi',
        addr: '0x8b6c3b7c01d9db4393f9aa734750f36df1543e9a',
    },
    {
        id: 'v-id-blockchain',
        symbol: 'vidt',
        addr: '0xfef4185594457050cc9c23980d301908fe057bb1',
    },
    {
        id: 'videocoin',
        symbol: 'vid',
        addr: '0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5',
    },
    {
        id: 'vidiachange',
        symbol: 'vida',
        addr: '0xe35f19e4457a114a951781aaf421ec5266ef25fe',
    },
    {
        id: 'vidy',
        symbol: 'vidy',
        addr: '0xc77b230f31b517f1ef362e59c173c2be6540b5e8',
    },
    {
        id: 'vidya',
        symbol: 'vidya',
        addr: '0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30',
    },
    {
        id: 'vikkytoken',
        symbol: 'vikky',
        addr: '0xd2946be786f35c3cc402c29b323647abda799071',
    },
    {
        id: 'vinci',
        symbol: 'vinci',
        addr: '0x3db99ab08006aefcc9600972eca8c202396b4300',
    },
    {
        id: 'vinx-coin',
        symbol: 'vxc',
        addr: '0x14f0a12a43c36c49d4b403dd6e1a9b8222be456c',
    },
    {
        id: 'vinx-coin-sto',
        symbol: 'vinx',
        addr: '0x010c282118aa76174ce5952572ba715cf60a0c9b',
    },
    {
        id: 'virgox-token',
        symbol: 'vxt',
        addr: '0x8ba009cad493c7646e31d69428ab9a54f47b3779',
    },
    {
        id: 'virtual-goods-token',
        symbol: 'vgo',
        addr: '0x8e87f1811de0025d2335174dbc7338a43df6d7cc',
    },
    {
        id: 'virtue-poker',
        symbol: 'vpp',
        addr: '0x5eeaa2dcb23056f4e8654a349e57ebe5e76b5e6e',
    },
    {
        id: 'vision-network',
        symbol: 'vsn',
        addr: '0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff',
    },
    {
        id: 'visor',
        symbol: 'visr',
        addr: '0xf938424f7210f31df2aee3011291b658f872e91e',
    },
    {
        id: 'vixco',
        symbol: 'vix',
        addr: '0x49bf0220c9ce17e52dcca3d217231746d676085b',
    },
    {
        id: 'vndc',
        symbol: 'vndc',
        addr: '0x1f3f677ecc58f6a1f9e2cf410df4776a8546b5de',
    },
    {
        id: 'vntchain',
        symbol: 'vnt',
        addr: '0x69d2779533a4d2c780639713558b2cc98c46a9b7',
    },
    {
        id: 'vnx-exchange',
        symbol: 'vnxlu',
        addr: '0x00fc270c9cc13e878ab5363d00354bebf6f05c15',
    },
    {
        id: 'voda-token',
        symbol: 'wdt',
        addr: '0xd110bb8a24b100c37af7310416e685af807c1f10',
    },
    {
        id: 'vodi-x',
        symbol: 'vdx',
        addr: '0x91e64f39c1fe14492e8fdf5a8b0f305bd218c8a1',
    },
    {
        id: 'voise',
        symbol: 'voise',
        addr: '0x83eea00d838f92dec4d1475697b9f4d3537b56e3',
    },
    {
        id: 'volt',
        symbol: 'acdc',
        addr: '0xfc44ec51c80e35a87bc2140299b1636ec83dfb04',
    },
    {
        id: 'voltium',
        symbol: 'vltm',
        addr: '0xaf5db2cc35ef9bba3cfa5f8faeedcf9b4e2f286f',
    },
    {
        id: 'volts-finance',
        symbol: 'volts',
        addr: '0x14d1c83df4decee9deb14ee851f109f0101a6631',
    },
    {
        id: 'voltz',
        symbol: 'voltz',
        addr: '0x60715e436c37444e29772c0d26a98ae1e8e1a989',
    },
    {
        id: 'volume-network-token',
        symbol: 'vol',
        addr: '0x2e2e0a28f6585e895dd646a363bae29b77b88a31',
    },
    {
        id: 'vortex-defi',
        symbol: 'vtx',
        addr: '0xceb286c9604c542d3cc08b41aa6c9675b078a832',
    },
    {
        id: 'vortex-network',
        symbol: 'vtx',
        addr: '0xd957e08ac5421e2c28510586b57d095e5094836a',
    },
    {
        id: 'voucher-eth',
        symbol: 'veth',
        addr: '0xc3d088842dcf02c13699f936bb83dfbbc6f721ab',
    },
    {
        id: 'vox-finance',
        symbol: 'vox',
        addr: '0x12d102f06da35cc0111eb58017fd2cd28537d0e1',
    },
    {
        id: 'voyager',
        symbol: 'vgr',
        addr: '0x16987c021c14ca1045cd0afebb33c124a58bf16c',
    },
    {
        id: 'vslice',
        symbol: 'vsl',
        addr: '0xdb144cd0f15ee40aac5602364b470d703d7e16b6',
    },
    {
        id: 'vspacex',
        symbol: 'vspacex',
        addr: '0x44e28f2acc84c36373badcd681749d38e01e2cc4',
    },
    {
        id: 'vsportcoin',
        symbol: 'vsc',
        addr: '0x36b4b58de030e93775e151a78d796039a11a2548',
    },
    {
        id: 'vspy',
        symbol: 'vspy',
        addr: '0x3e1e15afd5d50b090adcc88160dd84a48ea1b80e',
    },
    {
        id: 'vulcan-forged',
        symbol: 'pyr',
        addr: '0x9534ad65fb398e27ac8f4251dae1780b989d136e',
    },
    {
        id: 'vulcano',
        symbol: 'quo',
        addr: '0xefd720c94659f2ccb767809347245f917a145ed8',
    },
    {
        id: 'vvsp',
        symbol: 'vvsp',
        addr: '0xba4cfe5741b357fa371b506e5db0774abfecf8fc',
    },
    {
        id: 'vybe',
        symbol: 'vybe',
        addr: '0x3a1c1d1c06be03cddc4d3332f7c20e1b37c97ce9',
    },
    {
        id: 'w3bpush',
        symbol: 'w3b',
        addr: '0x777ba4d2393ea77893322743c7d817efef872204',
    },
    {
        id: 'wabi',
        symbol: 'wabi',
        addr: '0x286bda1413a2df81731d4930ce2f862a35a609fe',
    },
    {
        id: 'wadzpay-token',
        symbol: 'wtk',
        addr: '0xdf9d4674a430bdcc096a3a403128357ab36844ba',
    },
    {
        id: 'wagerr',
        symbol: 'wgr',
        addr: '0xc237868a9c5729bdf3173dddacaa336a0a5bb6e0',
    },
    {
        id: 'waifu-token',
        symbol: 'waif',
        addr: '0xb2279b6769cfba691416f00609b16244c0cf4b20',
    },
    {
        id: 'waletoken',
        symbol: 'wtn',
        addr: '0x0ea984e789302b7b612147e4e4144e64f21425eb',
    },
    {
        id: 'wallet-plus-x',
        symbol: 'wpx',
        addr: '0xb3bace433288645114fe8e8aa91f87659cbf665b',
    },
    {
        id: 'wall-street-baby',
        symbol: 'wsb',
        addr: '0x62f8dbdea37a4ed40ff3d2631001e4490c13218f',
    },
    {
        id: 'walnut-finance',
        symbol: 'wtf',
        addr: '0x0501e7a02c285b9b520fdbf1badc74ae931ad75d',
    },
    {
        id: 'waltonchain',
        symbol: 'wtc',
        addr: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74',
    },
    {
        id: 'wandx',
        symbol: 'wand',
        addr: '0x27f610bf36eca0939093343ac28b1534a721dbb4',
    },
    {
        id: 'warlord-token',
        symbol: 'wlt',
        addr: '0xb7bc7b0a32455f7e7a924f832ca4f0a0ac3b6b88',
    },
    {
        id: 'warp-finance',
        symbol: 'warp',
        addr: '0xed40834a13129509a89be39a9be9c0e96a0ddd71',
    },
    {
        id: 'wasabix',
        symbol: 'wasabi',
        addr: '0x896e145568624a498c5a909187363ae947631503',
    },
    {
        id: 'wasder',
        symbol: 'was',
        addr: '0x0c572544a4ee47904d54aaa6a970af96b6f00e1b',
    },
    {
        id: 'waterdrop',
        symbol: 'wdp',
        addr: '0xd61b60ccbdaf09c2e036c72734adb3270ed27192',
    },
    {
        id: 'wav3',
        symbol: 'wav3',
        addr: '0x14c38e90a593b0bd5b7e9896a8ef4ae0a119d6ae',
    },
    {
        id: 'wave-platform',
        symbol: 'wae',
        addr: '0x2f7b88458f4e6d9abb19396b5a08b8ba7f3d4b20',
    },
    {
        id: 'waves',
        symbol: 'waves',
        addr: '0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a',
    },
    {
        id: 'waxe',
        symbol: 'waxe',
        addr: '0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd',
    },
    {
        id: 'webcoin',
        symbol: 'web',
        addr: '0xf344490abd414dafa97f34c8ca501b0aa5bf8873',
    },
    {
        id: 'webflix',
        symbol: 'wfx',
        addr: '0xba1ed22c69ad00739ee2b4abd70e270be9e87ee2',
    },
    {
        id: 'web-innovation-ph',
        symbol: 'webn',
        addr: '0x15a664416e42766a6cc0a1221d9c088548a6e731',
    },
    {
        id: 'weblock',
        symbol: 'won',
        addr: '0x1eddee3fa21591a9637f88dab9615c33ee636b9d',
    },
    {
        id: 'web-token-pay',
        symbol: 'wtp',
        addr: '0x1680cfdad75da2bb56ded4f36bb9423c86ffa7b7',
    },
    {
        id: 'wecoown',
        symbol: 'wcx',
        addr: '0xc014186cf1ba36032aaec7f96088f09eb3934347',
    },
    {
        id: 'welltrado',
        symbol: 'wtl',
        addr: '0x9a0587eae7ef64b2b38a10442a44cfa43edd7d2a',
    },
    {
        id: 'wenburn',
        symbol: 'wenb',
        addr: '0x46f4e420c75401494a39b70653f4bbb88ad2d728',
    },
    {
        id: 'wepower',
        symbol: 'wpr',
        addr: '0x4cf488387f035ff08c371515562cba712f9015d4',
    },
    {
        id: 'werewolf-coin',
        symbol: 'wwc',
        addr: '0x38118bdb3b480f570837a4c2e88fac6e83be6689',
    },
    {
        id: 'weshow',
        symbol: 'wet',
        addr: '0x36d10c6800d569bb8c4fe284a05ffe3b752f972c',
    },
    {
        id: 'wesing-coin',
        symbol: 'wsc',
        addr: '0x2dcd9b1a7ed408ff48bd4918a1f9c0535dc54ead',
    },
    {
        id: 'weth',
        symbol: 'weth',
        addr: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    {
        id: 'wetrust',
        symbol: 'trst',
        addr: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b',
    },
    {
        id: 'w-green-pay',
        symbol: 'wgp',
        addr: '0xdd94842c15abfe4c9bafe4222ade02896beb064c',
    },
    {
        id: 'whale',
        symbol: 'whale',
        addr: '0x9355372396e3f6daf13359b7b607a3374cc638e0',
    },
    {
        id: 'whale-coin',
        symbol: 'whale',
        addr: '0x804e26c4eff0bb196b805bdfb5b29ab828cf0b1f',
    },
    {
        id: 'whaleroom',
        symbol: 'whl',
        addr: '0x2af72850c504ddd3c1876c66a914caee7ff8a46a',
    },
    {
        id: 'whalesburg',
        symbol: 'wbt',
        addr: '0xe2ee1ac57b2e5564522b2de064a47b3f98b0e9c9',
    },
    {
        id: 'when-token',
        symbol: 'when',
        addr: '0xf4fe95603881d0e07954fd7605e0e9a916e42c44',
    },
    {
        id: 'whey',
        symbol: 'whey',
        addr: '0xca5d29b3e74d59ebcdf09111495d86f319886a40',
    },
    {
        id: 'whiteheart',
        symbol: 'white',
        addr: '0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44',
    },
    {
        id: 'whiterockcasino',
        symbol: 'wrc',
        addr: '0x7c9d8fb3bde3d9ea6e89170618c2dc3d16695d36',
    },
    {
        id: 'whole-network',
        symbol: 'node',
        addr: '0x0c3ef32f802967db75b9d49fe1e76620151ccb81',
    },
    {
        id: 'wibx',
        symbol: 'wbx',
        addr: '0xbb97e381f1d1e94ffa2a5844f6875e6146981009',
    },
    {
        id: 'wick-finance',
        symbol: 'wick',
        addr: '0xbbe460dc4ac73f7c13a2a2feecf9acf6d5083f9b',
    },
    {
        id: 'wider-coin',
        symbol: 'wdr',
        addr: '0x78b6174cc8a3848251704b8a5ced7f86e5d8ddf1',
    },
    {
        id: 'wifi-coin',
        symbol: 'wifi',
        addr: '0xe202873079913858f9ba8795ba957a4ad561ca24',
    },
    {
        id: 'wiix-coin',
        symbol: 'wxc',
        addr: '0x86225481747c774b24c7c3bac4c1b7382f787c7f',
    },
    {
        id: 'wiki-token',
        symbol: 'wiki',
        addr: '0x66bad545596fb17a0b4ebdc003a85def10e8f6ae',
    },
    {
        id: 'wild-crypto',
        symbol: 'wild',
        addr: '0xd3c00772b24d997a812249ca637a921e81357701',
    },
    {
        id: 'wilder-world',
        symbol: 'wild',
        addr: '0x2a3bff78b79a009976eea096a51a948a3dc00e34',
    },
    {
        id: 'winco',
        symbol: 'wco',
        addr: '0xd44bb6663936cab1310584a277f7daa6943d4904',
    },
    {
        id: 'winding-tree',
        symbol: 'lif',
        addr: '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
    },
    {
        id: 'wings',
        symbol: 'wings',
        addr: '0x667088b212ce3d06a1b553a7221e1fd19000d9af',
    },
    {
        id: 'wing-shop',
        symbol: 'wing',
        addr: '0xcb3df3108635932d912632ef7132d03ecfc39080',
    },
    {
        id: 'winsor-token',
        symbol: 'wst',
        addr: '0x2cf2f4e07ecc54740293df6d6fb4150d725a919f',
    },
    {
        id: 'winstars',
        symbol: 'wnl',
        addr: '0xcfbf70e33d5163e25b0dad73955c1bd9e8cd8ba2',
    },
    {
        id: 'wirex',
        symbol: 'wxt',
        addr: '0xa02120696c7b8fe16c09c749e4598819b2b0e915',
    },
    {
        id: 'wise-token11',
        symbol: 'wise',
        addr: '0x66a0f676479cee1d7373f3dc2e2952778bff5bd6',
    },
    {
        id: 'wishchain',
        symbol: 'wish',
        addr: '0x13de0b0c1507d424fad4c6212830a0b2e59587c5',
    },
    {
        id: 'witchain',
        symbol: 'wit',
        addr: '0xe13ef257cf4d5df928ca11d230427c037666d466',
    },
    {
        id: 'wixlar',
        symbol: 'wix',
        addr: '0x7ba19b7f7d106a9a1e0985397b94f38eee0b555e',
    },
    {
        id: 'wizard',
        symbol: 'wiz',
        addr: '0x7a82c573b378ceea29772afb93891f0d0afa93b7',
    },
    {
        id: 'wiz-coin',
        symbol: 'wiz1',
        addr: '0x018a6106cb540af1ae6da985361afd5e176d1c00',
    },
    {
        id: 'wm-professional',
        symbol: 'wmpro',
        addr: '0x687a790e4e94a8abf9952aed635c80a5540d7e5c',
    },
    {
        id: 'wolfy',
        symbol: 'wolfy',
        addr: '0x7dbbcae15d4db168e01673400d7844870cc1e36f',
    },
    {
        id: 'wolves-of-wall-street',
        symbol: 'wows',
        addr: '0x672ef7e4fe230b5ca1466c5fdd40588d30fdf90a',
    },
    {
        id: 'wom-token',
        symbol: 'wom',
        addr: '0xbd356a39bff2cada8e9248532dd879147221cf76',
    },
    {
        id: 'woofy',
        symbol: 'woofy',
        addr: '0xd0660cd418a64a1d44e9214ad8e459324d8157f1',
    },
    {
        id: 'wooshcoin-io',
        symbol: 'xwo',
        addr: '0x5cc00cca0692b9b34af816e5439cdb47d3b63691',
    },
    {
        id: 'wootrade-network',
        symbol: 'woo',
        addr: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    },
    {
        id: 'work-quest',
        symbol: 'wqt',
        addr: '0x06677dc4fe12d3ba3c7ccfd0df8cd45e4d4095bf',
    },
    {
        id: 'worldcore',
        symbol: 'wrc',
        addr: '0x72adadb447784dd7ab1f472467750fc485e4cb2d',
    },
    {
        id: 'world-credit-diamond-coin',
        symbol: 'wcdc',
        addr: '0xab51e836bdcbc7cc06d926c50d88328f1bb17148',
    },
    {
        id: 'worldpet',
        symbol: 'wpt',
        addr: '0xe04491d64eaa464ec8fdf53c7a4c92bf5b2278cd',
    },
    {
        id: 'world-token',
        symbol: 'world',
        addr: '0xbf494f02ee3fde1f20bee6242bce2d1ed0c15e47',
    },
    {
        id: 'woyager',
        symbol: 'wyx',
        addr: '0x05edffbda103d90d5040829a105f687443e0ca3e',
    },
    {
        id: 'wozx',
        symbol: 'wozx',
        addr: '0x34950ff2b487d9e5282c5ab342d08a2f712eb79f',
    },
    {
        id: 'wpp-token',
        symbol: 'wpp',
        addr: '0x056dd20b01799e9c1952c7c9a5ff4409a6110085',
    },
    {
        id: 'wrapped-anatha',
        symbol: 'wanatha',
        addr: '0x3383c5a8969dc413bfddc9656eb80a1408e4ba20',
    },
    {
        id: 'wrapped-atromg8',
        symbol: 'wag8',
        addr: '0x0a8b16b27d5219c8c6b57d5442ce31d81573eee4',
    },
    {
        id: 'wrapped-bind',
        symbol: 'wbind',
        addr: '0x15334dcb171e8b65d6650321581dca83be870115',
    },
    {
        id: 'wrapped-bitcoin',
        symbol: 'wbtc',
        addr: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    {
        id: 'wrapped-bitcoin-diamond',
        symbol: 'wbcd',
        addr: '0x6a6d430573d3f070aeab97b3a189d698ea130454',
    },
    {
        id: 'wrapped-celo',
        symbol: 'wcelo',
        addr: '0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a',
    },
    {
        id: 'wrapped-celo-dollar',
        symbol: 'wcusd',
        addr: '0xad3e3fc59dff318beceaab7d00eb4f68b1ecf195',
    },
    {
        id: 'wrapped-conceal',
        symbol: 'wccx',
        addr: '0x21686f8ce003a95c99acd297e302faacf742f7d4',
    },
    {
        id: 'wrapped-crescofin',
        symbol: 'wcres',
        addr: '0xa0afaa285ce85974c3c881256cb7f225e3a1178a',
    },
    {
        id: 'wrapped-cryptokitties',
        symbol: 'wck',
        addr: '0x09fe5f0236f0ea5d930197dce254d77b04128075',
    },
    {
        id: 'wrapped-dgld',
        symbol: 'wdgld',
        addr: '0x123151402076fc819b7564510989e475c9cd93ca',
    },
    {
        id: 'wrapped-ecomi',
        symbol: 'womi',
        addr: '0x04969cd041c0cafb6ac462bd65b536a5bdb3a670',
    },
    {
        id: 'wrapped-filecoin',
        symbol: 'wfil',
        addr: '0x6e1a19f235be7ed8e3369ef73b196c07257494de',
    },
    {
        id: 'wrapped-gen-0-cryptokitties',
        symbol: 'wg0',
        addr: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
    },
    {
        id: 'wrapped-leo',
        symbol: 'wleo',
        addr: '0x73a9fb46e228628f8f9bb9004eca4f4f529d3998',
    },
    {
        id: 'wrapped-moon-cats',
        symbol: 'mcat20',
        addr: '0xf961a1fa7c781ecd23689fe1d0b7f3b6cbb2f972',
    },
    {
        id: 'wrapped-nxm',
        symbol: 'wnxm',
        addr: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
    },
    {
        id: 'wrapped-origin-axie',
        symbol: 'woa',
        addr: '0xec0a0915a7c3443862b678b0d4721c7ab133fdcf',
    },
    {
        id: 'wrapped-polis',
        symbol: 'polis',
        addr: '0x622f2962ae78e8686ecc1e30cf2f9a6e5ac35626',
    },
    {
        id: 'wrapped-shift',
        symbol: 'wshift',
        addr: '0x4b4571925e94ccd8c546b39462a270cc9b3ed1e4',
    },
    {
        id: 'wrapped-shuttleone',
        symbol: 'wszo',
        addr: '0x5538ac3ce36e73bb851921f2a804b4657b5307bf',
    },
    {
        id: 'wrapped-statera',
        symbol: 'wsta',
        addr: '0xedeec5691f23e4914cf0183a4196bbeb30d027a0',
    },
    {
        id: 'wrapped-terra',
        symbol: 'luna',
        addr: '0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9',
    },
    {
        id: 'wrapped-tezos',
        symbol: 'wxtz',
        addr: '0x2a69655c22eda32ff48d315bb26ed45f150700b4',
    },
    {
        id: 'wrapped-usd',
        symbol: 'wusd',
        addr: '0x7c974104df9dd7fb91205ab3d66d15aff1049de8',
    },
    {
        id: 'wrapped-virgin-gen-0-cryptokitties',
        symbol: 'wvg0',
        addr: '0x25c7b64a93eb1261e130ec21a3e9918caa38b611',
    },
    {
        id: 'wrapped-xbtc',
        symbol: 'wxbtc',
        addr: '0x5592c5aa89492ea918d55b804e177b5ca7dccd5a',
    },
    {
        id: 'wrapped-xmr-btse',
        symbol: 'wxmr',
        addr: '0x465e07d6028830124be2e4aa551fbe12805db0f5',
    },
    {
        id: 'wrapped-zcash',
        symbol: 'wzec',
        addr: '0x4a64515e5e1d1073e83f30cb97bed20400b66e10',
    },
    {
        id: 'x8-project',
        symbol: 'x8x',
        addr: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c',
    },
    {
        id: 'xaavea',
        symbol: 'xaavea',
        addr: '0x80dc468671316e50d4e9023d3db38d3105c1c146',
    },
    {
        id: 'xaaveb',
        symbol: 'xaaveb',
        addr: '0x704de5696df237c5b9ba0de9ba7e0c63da8ea0df',
    },
    {
        id: 'xank',
        symbol: 'xank',
        addr: '0x0e7f79e89ba8c4a13431129fb2db0d4f444b5b9a',
    },
    {
        id: 'xaurum',
        symbol: 'xaur',
        addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81',
    },
    {
        id: 'xaviera-tech',
        symbol: 'xts',
        addr: '0x36232b1328e49a043434e71c02c0dc2be278e975',
    },
    {
        id: 'xbe-token',
        symbol: 'xbe',
        addr: '0x5de7cc4bcbca31c473f6d2f27825cfb09cc0bb16',
    },
    {
        id: 'x-block',
        symbol: 'ix',
        addr: '0x53f0c9f1b6e283a59bcd672e80e2222b97e534cb',
    },
    {
        id: 'xbtc',
        symbol: 'xbtc',
        addr: '0xecbf566944250dde88322581024e611419715f7a',
    },
    {
        id: 'xbullion',
        symbol: 'gold',
        addr: '0x670f9d9a26d3d42030794ff035d35a67aa092ead',
    },
    {
        id: 'xcad-network',
        symbol: 'xcad',
        addr: '0x7659ce147d0e714454073a5dd7003544234b6aa0',
    },
    {
        id: 'xceltoken-plus',
        symbol: 'xlab',
        addr: '0x8c4e7f814d40f8929f9112c5d09016f923d34472',
    },
    {
        id: 'xchain-token',
        symbol: 'nxct',
        addr: '0x41ab75435668919bb507f871dd01e9762c2d173a',
    },
    {
        id: 'xcoinpay',
        symbol: 'dyx',
        addr: '0x042f972ac93404f0fcbe4e3a0729f0b395232106',
    },
    {
        id: 'xcredit',
        symbol: 'xfyi',
        addr: '0x6be7e93e45740c314c89a3be52473a0ddf2450fe',
    },
    {
        id: 'xdai-stake',
        symbol: 'stake',
        addr: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
    },
    {
        id: 'xdef-finance',
        symbol: 'xdef2',
        addr: '0x5166d4ce79b9bf7df477da110c560ce3045aa889',
    },
    {
        id: 'xdefi-governance-token',
        symbol: 'xdex',
        addr: '0x000000000000d0151e748d25b766e77efe2a6c83',
    },
    {
        id: 'xels',
        symbol: 'xels',
        addr: '0xe748269494e76c1cec3f627bb1e561e607da9161',
    },
    {
        id: 'xend-finance',
        symbol: 'xend',
        addr: '0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903',
    },
    {
        id: 'xeniumx',
        symbol: 'xemx',
        addr: '0x59321ace77c8087ff8cb9f94c8384807e4fd8a3c',
    },
    {
        id: 'xenon-2',
        symbol: 'xen',
        addr: '0x5fbdb42bb048c685c990a37f2c87fe087c586655',
    },
    {
        id: 'xeno-token',
        symbol: 'xno',
        addr: '0x05bbe7240de66f6480c9aeda77c1376b13393f83',
    },
    {
        id: 'xensor',
        symbol: 'xsr',
        addr: '0x6bc1f3a1ae56231dbb64d3e82e070857eae86045',
    },
    {
        id: 'xeonbit-token',
        symbol: 'xns',
        addr: '0x79c71d3436f39ce382d0f58f1b011d88100b9d91',
    },
    {
        id: 'xeuro',
        symbol: 'xeuro',
        addr: '0xe577e0b200d00ebdecbfc1cd3f7e8e04c70476be',
    },
    {
        id: 'xfii',
        symbol: 'xfii',
        addr: '0x1fa21b20222076d7465fb901e5f459289c95f66a',
    },
    {
        id: 'xfinance',
        symbol: 'xfi',
        addr: '0x5befbb272290dd5b8521d4a938f6c4757742c430',
    },
    {
        id: 'xfit',
        symbol: 'xfit',
        addr: '0x4aa41bc1649c9c3177ed16caaa11482295fc7441',
    },
    {
        id: 'xfund',
        symbol: 'xfund',
        addr: '0x892a6f9df0147e5f079b0993f486f9aca3c87881',
    },
    {
        id: 'xido-finance',
        symbol: 'xido',
        addr: '0xf6650117017ffd48b725b4ec5a00b414097108a7',
    },
    {
        id: 'xiglute-coin',
        symbol: 'xgc',
        addr: '0x89d3c0249307ae570a316030764d12f53bb191fd',
    },
    {
        id: 'xincha',
        symbol: 'xINCHa',
        addr: '0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b',
    },
    {
        id: 'xinchb',
        symbol: 'xINCHb',
        addr: '0x6b33f15360cedbfb8f60539ec828ef52910aca9b',
    },
    {
        id: 'xio',
        symbol: 'xio',
        addr: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
    },
    {
        id: 'xiotri',
        symbol: 'xiot',
        addr: '0x31024a4c3e9aeeb256b825790f5cb7ac645e7cd5',
    },
    {
        id: 'xknca',
        symbol: 'xknca',
        addr: '0x0bfec35a1a3550deed3f6fc76dde7fc412729a91',
    },
    {
        id: 'xkncb',
        symbol: 'xkncb',
        addr: '0x06890d4c65a4cb75be73d7ccb4a8ee7962819e81',
    },
    {
        id: 'xmark',
        symbol: 'xmark',
        addr: '0x36b679bd64ed73dbfd88909cdcb892cb66bd4cbb',
    },
    {
        id: 'xmax',
        symbol: 'xmx',
        addr: '0x0f8c45b896784a1e408526b9300519ef8660209c',
    },
    {
        id: 'xmon',
        symbol: 'xmon',
        addr: '0x3aada3e213abf8529606924d8d1c55cbdc70bf74',
    },
    {
        id: 'xov',
        symbol: 'xov',
        addr: '0x153ed9cc1b792979d2bde0bbf45cc2a7e436a5f9',
    },
    {
        id: 'x-power-chain',
        symbol: 'xpo',
        addr: '0x1a3564852d8ede7c8249805e71718bd7aa93dd6d',
    },
    {
        id: 'xptoken-io',
        symbol: 'xpt',
        addr: '0xf0814d0e47f2390a8082c4a1bd819fdde50f9bfc',
    },
    {
        id: 'xriba',
        symbol: 'xra',
        addr: '0x7025bab2ec90410de37f488d1298204cd4d6b29d',
    },
    {
        id: 'xrp-classic',
        symbol: 'xrpc',
        addr: '0xd4ca5c2aff1eefb0bea9e9eab16f88db2990c183',
    },
    {
        id: 'xsgd',
        symbol: 'xsgd',
        addr: '0x70e8de73ce538da2beed35d14187f6959a8eca96',
    },
    {
        id: 'xsigma',
        symbol: 'sig',
        addr: '0x7777777777697cfeecf846a76326da79cc606517',
    },
    {
        id: 'xstable-protocol',
        symbol: 'xst',
        addr: '0x91383a15c391c142b80045d8b4730c1c37ac0378',
    },
    {
        id: 'xsushi',
        symbol: 'xsushi',
        addr: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
    },
    {
        id: 'xswap',
        symbol: 'xsp',
        addr: '0x9b06d48e0529ecf05905ff52dd426ebec0ea3011',
    },
    {
        id: 'xtake',
        symbol: 'xtk',
        addr: '0xbff0e42eec4223fbd12260f47f3348d29876db42',
    },
    {
        id: 'xtcom-token',
        symbol: 'xt',
        addr: '0x4be10da47a07716af28ad199fbe020501bddd7af',
    },
    {
        id: 'xtock',
        symbol: 'xtx',
        addr: '0x1822126feedb4c7d61eecdbe3682fe61e91383d6',
    },
    {
        id: 'xtoken',
        symbol: 'xtk',
        addr: '0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb',
    },
    {
        id: 'xtrade',
        symbol: 'xtrd',
        addr: '0x9c794f933b4dd8b49031a79b0f924d68bef43992',
    },
    {
        id: 'xvix',
        symbol: 'xvix',
        addr: '0x4bae380b5d762d543d426331b8437926443ae9ec',
    },
    {
        id: 'xyo-network',
        symbol: 'xyo',
        addr: '0x55296f69f40ea6d20e478533c15a6b08b654e758',
    },
    {
        id: 'yakuza-dao',
        symbol: 'ykz',
        addr: '0x87047986e8e4961c11d2edcd94285e3a1331d97b',
    },
    {
        id: 'yam-2',
        symbol: 'yam',
        addr: '0x0aacfbec6a24756c20d41914f2caba817c0d8521',
    },
    {
        id: 'yam-v2',
        symbol: 'YAMv2',
        addr: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
    },
    {
        id: 'yap-stone',
        symbol: 'yap',
        addr: '0x245392ee7ce736ec6a0908b67dc5d0a218230005',
    },
    {
        id: 'yaxis',
        symbol: 'yaxis',
        addr: '0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73',
    },
    {
        id: 'ybusd',
        symbol: 'ybusd',
        addr: '0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae',
    },
    {
        id: 'y-coin',
        symbol: 'yco',
        addr: '0x3d0293f06daf4311b482564330d57c8db6c10893',
    },
    {
        id: 'yd-btc-jun21',
        symbol: 'yd-btc-jun21',
        addr: '0x4b7fb448df91c8ed973494f8c8c4f12daf3a8521',
    },
    {
        id: 'yd-btc-mar21',
        symbol: 'yd-btc-mar21',
        addr: '0x002f0b1a71c5730cf2f4da1970a889207bdb6d0d',
    },
    {
        id: 'yd-eth-jun21',
        symbol: 'yd-eth-jun21',
        addr: '0xcbe430927370e95b4b10cfc702c6017ec7abefc3',
    },
    {
        id: 'yd-eth-mar21',
        symbol: 'yd-eth-mar21',
        addr: '0x90f802c7e8fb5d40b0de583e34c065a3bd2020d8',
    },
    {
        id: 'yeafinance',
        symbol: 'yea',
        addr: '0x40b92fce37cefa03baf7603e7913c1d34dd1a4ec',
    },
    {
        id: 'yearn20moonfinance',
        symbol: 'ymf20',
        addr: '0x16be21c08eb27953273608629e4397556c561d26',
    },
    {
        id: 'yearn4-finance',
        symbol: 'yf4',
        addr: '0x38acefad338b870373fb8c810fe705569e1c7225',
    },
    {
        id: 'yearn-ecosystem-token-index',
        symbol: 'yeti',
        addr: '0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d',
    },
    {
        id: 'yearn-ethereum-finance',
        symbol: 'yefi',
        addr: '0xcf282ba0bc91d2aa6e775bcfd90da6b7912f1b1a',
    },
    {
        id: 'yearn-finance',
        symbol: 'yfi',
        addr: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    {
        id: 'yearn-finance-bit2',
        symbol: 'yfb2',
        addr: '0x59e7b5db9be0bdd26fa048d39e01fee456ab674e',
    },
    {
        id: 'yearn-finance-center',
        symbol: 'yfc',
        addr: '0xe8ed08a581777f112654e28de507e11613da0379',
    },
    {
        id: 'yearn-finance-diamond-token',
        symbol: 'yfdt',
        addr: '0x1378ec93ab2b07ba5a0eaef19cf354a33f64b9fd',
    },
    {
        id: 'yearn-finance-dot',
        symbol: 'yfdot',
        addr: '0x2e6539edc3b76f1e21b71d214527faba875f70f3',
    },
    {
        id: 'yearn-finance-ecosystem',
        symbol: 'yfiec',
        addr: '0x2e6e152d29053b6337e434bc9be17504170f8a5b',
    },
    {
        id: 'yearn-finance-infrastructure-labs',
        symbol: 'ylab',
        addr: '0x454cb9d0845bb4a28462f98c21a4fafd16ceb25f',
    },
    {
        id: 'yearn-finance-management',
        symbol: 'yefim',
        addr: '0x4b34c0cbeef271f895d339c5f76322d71a60782b',
    },
    {
        id: 'yearn-finance-network',
        symbol: 'yfn',
        addr: '0x3dd66732113af9981a861cf489431533aeba33b8',
    },
    {
        id: 'yearn-finance-passive-income',
        symbol: 'yfpi',
        addr: '0x05d27cdd23e22ca63e7f9c7c6d1b79ede9c4fcf5',
    },
    {
        id: 'yearn-finance-protocol',
        symbol: 'yfp',
        addr: '0x96d62cdcd1cc49cb6ee99c867cb8812bea86b9fa',
    },
    {
        id: 'yearn-finance-red-moon',
        symbol: 'yfrm',
        addr: '0xbe685c5e06866cfb94a4242e3df8f2fa3e7c2b73',
    },
    {
        id: 'yearn-finance-value',
        symbol: 'yfiv',
        addr: '0x519083fc539f23131c3b7046992584592772d12a',
    },
    {
        id: 'yearn-global',
        symbol: 'yg',
        addr: '0xd811e485cb4ab1fad56233de4464fb5d1c9f3e99',
    },
    {
        id: 'yearn-hold-finance',
        symbol: 'yhfi',
        addr: '0x5a143f78bb66294ff37c47b5164584475b932bab',
    },
    {
        id: 'yearn-land',
        symbol: 'yland',
        addr: '0xd0658324074d6249a51876438916f7c423075451',
    },
    {
        id: 'yearn-lazy-ape',
        symbol: 'YLA',
        addr: '0x9ba60ba98413a60db4c651d4afe5c937bbd8044b',
    },
    {
        id: 'yearn-secure',
        symbol: 'ysec',
        addr: '0xeea9ae787f3a620072d13b2cdc8cabffb9c0ab96',
    },
    {
        id: 'yearn-shark-finance',
        symbol: 'yskf',
        addr: '0x9c664f20c0a00a4949dffca76748c02754c875aa',
    },
    {
        id: 'yee',
        symbol: 'yee',
        addr: '0x922105fad8153f516bcfb829f56dc097a0e1d705',
    },
    {
        id: 'yefam-finance',
        symbol: 'fam',
        addr: '0x9d24364b97270961b2948734afe8d58832efd43a',
    },
    {
        id: 'yeld-finance',
        symbol: 'yeld',
        addr: '0x468ab3b1f63a1c14b361bc367c3cc92277588da1',
    },
    {
        id: 'yfarmland-token',
        symbol: 'yfarmer',
        addr: '0x7b0f66fa5cf5cc28280c1e7051af881e06579362',
    },
    {
        id: 'yfarm-token',
        symbol: 'yfarm',
        addr: '0xf5d0fefaab749d8b14c27f0de60cc6e9e7f848d1',
    },
    {
        id: 'yfbeta',
        symbol: 'yfbeta',
        addr: '0x89ee58af4871b474c30001982c3d7439c933c838',
    },
    {
        id: 'yfdai-finance',
        symbol: 'yf-dai',
        addr: '0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577',
    },
    {
        id: 'yfdfi-finance',
        symbol: 'yfd',
        addr: '0x4f4f0ef7978737ce928bff395529161b44e27ad9',
    },
    {
        id: 'yfedfinance',
        symbol: 'yfed',
        addr: '0x2dbd330bc9b7f3a822a9173ab52172bdddcace2a',
    },
    {
        id: 'yfe-money',
        symbol: 'YFE',
        addr: '0x33811d4edbcaed10a685254eb5d3c4e4398520d2',
    },
    {
        id: 'yfet',
        symbol: 'yfet',
        addr: '0xc151ca64d66ea44ee4be9d47c3ce7e031b2fccb7',
    },
    {
        id: 'yffc-finance',
        symbol: 'yffc',
        addr: '0xea004e8fa3701b8e58e41b78d50996e0f7176cbd',
    },
    {
        id: 'yff-finance',
        symbol: 'yff',
        addr: '0x8be6a6158f6b8a19fe60569c757d16e546c2296d',
    },
    {
        id: 'yffi-finance',
        symbol: 'yffi',
        addr: '0xcee1d3c3a02267e37e6b373060f79d5d7b9e1669',
    },
    {
        id: 'yffii-finance',
        symbol: 'yffii',
        addr: '0x6c4b85cab20c13af72766025f0e17e0fe558a553',
    },
    {
        id: 'yffs',
        symbol: 'yffs',
        addr: '0x90d702f071d2af33032943137ad0ab4280705817',
    },
    {
        id: 'yfi3-money',
        symbol: 'yfi3',
        addr: '0x09843b9137fc5935b7f3832152f9074db5d2d1ee',
    },
    {
        id: 'yfia',
        symbol: 'yfia',
        addr: '0xd778e4f5450ede47289fef874a37b79db77c4cf1',
    },
    {
        id: 'yfibalancer-finance',
        symbol: 'yfib',
        addr: '0x03829f5675f3b51d0f8c2a74417a757625acf22f',
    },
    {
        id: 'yfi-business',
        symbol: 'yfib',
        addr: '0x47632da9227e322eda59f9e7691eacc6430ac87c',
    },
    {
        id: 'yfi-credits-group',
        symbol: 'yficg',
        addr: '0x9080e92296a176883aab1d7d1b7e50bc055b0caa',
    },
    {
        id: 'yfidapp',
        symbol: 'yfid',
        addr: '0x61266424b904d65ceb2945a1413ac322185187d5',
    },
    {
        id: 'yfii-finance',
        symbol: 'yfii',
        addr: '0xa1d0e215a23d7030842fc67ce582a6afa3ccab83',
    },
    {
        id: 'yfii-gold',
        symbol: 'yfiig',
        addr: '0xef8ba8cba86f81b3108f60186fce9c81b5096d5c',
    },
    {
        id: 'yfiii',
        symbol: 'yfiii',
        addr: '0x649ebf73043ffcc70a59855ecd8a568fd996415a',
    },
    {
        id: 'yfiking-finance',
        symbol: 'yfiking',
        addr: '0x5f7fa1a0ae94b5dd6bb6bd1708b5f3af01b57908',
    },
    {
        id: 'yfilend-finance',
        symbol: 'yfild',
        addr: '0xcec2387e04f9815bf12670dbf6cf03bba26df25f',
    },
    {
        id: 'yfimobi',
        symbol: 'yfim',
        addr: '0x2e2f3246b6c65ccc4239c9ee556ec143a7e5de2c',
    },
    {
        id: 'yfione',
        symbol: 'yfo',
        addr: '0xac0c8da4a4748d8d821a0973d00b157aa78c473d',
    },
    {
        id: 'yfi-paprika',
        symbol: 'yfip',
        addr: '0xb9782532fa7062a6f73df1ce71d75c0e16046ebc',
    },
    {
        id: 'yfiscurity',
        symbol: 'yfis',
        addr: '0x86965a86539e2446f9e72634cefca7983cc21a81',
    },
    {
        id: 'yfive-finance',
        symbol: 'yfive',
        addr: '0xd3e8695d2bef061eab38b5ef526c0f714108119c',
    },
    {
        id: 'yfix-finance',
        symbol: 'yfix',
        addr: '0xa4f779074850d320b5553c9db5fc6a8ab15bd34a',
    },
    {
        id: 'yflink',
        symbol: 'yfl',
        addr: '0x28cb7e841ee97947a86b06fa4090c8451f64c0be',
    },
    {
        id: 'yflink-synthetic',
        symbol: 'syfl',
        addr: '0x8282df223ac402d04b2097d16f758af4f70e7db0',
    },
    {
        id: 'yfmoonbeam',
        symbol: 'yfmb',
        addr: '0x7afac1d878c66a47263dce57976c371ae2e74882',
    },
    {
        id: 'yfmoonshot',
        symbol: 'yfms',
        addr: '0xfef3bef71a5eb97e097039038776fd967ae5b106',
    },
    {
        id: 'yfos-finance',
        symbol: 'YFOS',
        addr: '0xcd254568ebf88f088e40f456db9e17731243cb25',
    },
    {
        id: 'yfox-finance',
        symbol: 'yfox',
        addr: '0x706cb9e741cbfee00ad5b3f5acc8bd44d1644a74',
    },
    {
        id: 'yfpro-finance',
        symbol: 'yfpro',
        addr: '0x0fdc5313333533cc0c00c22792bff7383d3055f2',
    },
    {
        id: 'yfrb-finance',
        symbol: 'yfrb',
        addr: '0x5d1b1019d0afa5e6cc047b9e78081d44cc579fc4',
    },
    {
        id: 'yfscience',
        symbol: 'yfsi',
        addr: '0x1df6f1bb7454e5e4ba3bca882d3148fbf9b5697a',
    },
    {
        id: 'yfst-protocol',
        symbol: 'yfst',
        addr: '0x32a18b15985a290604dd9b2ebc39a1035b1a6b9c',
    },
    {
        id: 'yftether',
        symbol: 'yfte',
        addr: '0x94f31ac896c9823d81cf9c2c93feceed4923218f',
    },
    {
        id: 'yfuel',
        symbol: 'yfuel',
        addr: '0xbd301be09eb78df47019aa833d29edc5d815d838',
    },
    {
        id: 'yfx',
        symbol: 'yfx',
        addr: '0xf55a93b613d172b86c2ba3981a849dae2aecde2f',
    },
    {
        id: 'yggdrash',
        symbol: 'yeed',
        addr: '0xca2796f9f61dc7b238aab043971e49c6164df375',
    },
    {
        id: 'yi12-stfinance',
        symbol: 'yi12',
        addr: '0x03e4bdce611104289333f35c8177558b04cc99ff',
    },
    {
        id: 'yield',
        symbol: 'yld',
        addr: '0xdcb01cc464238396e213a6fdd933e36796eaff9f',
    },
    {
        id: 'yield-app',
        symbol: 'yld',
        addr: '0xf94b5c5651c888d928439ab6514b93944eee6f48',
    },
    {
        id: 'yield-coin',
        symbol: 'yld',
        addr: '0x7f927f984177323c4ac49e6b1d398e40cd1a78f6',
    },
    {
        id: 'yield-farming-known-as-ash',
        symbol: 'yfka',
        addr: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
    },
    {
        id: 'yield-farming-token',
        symbol: 'YFT',
        addr: '0x26b3038a7fc10b36c426846a9086ef87328da702',
    },
    {
        id: 'yield-optimization-platform',
        symbol: 'yop',
        addr: '0xae1eaae3f627aaca434127644371b67b18444051',
    },
    {
        id: 'yield-protocol',
        symbol: 'yield',
        addr: '0xa8b61cff52564758a204f841e636265bebc8db9b',
    },
    {
        id: 'yieldwars-com',
        symbol: 'war',
        addr: '0xf4a81c18816c9b0ab98fac51b36dcb63b0e58fde',
    },
    {
        id: 'yieldx',
        symbol: 'yieldx',
        addr: '0xe52d53c8c9aa7255f8c2fa9f7093fea7192d2933',
    },
    {
        id: 'ymax',
        symbol: 'ymax',
        addr: '0x062f90480551379791fbe2ed74c1fe69821b30d3',
    },
    {
        id: 'ymen-finance',
        symbol: 'ymen',
        addr: '0xd0c59798f986d333554688cd667033d469c2398e',
    },
    {
        id: 'ympl',
        symbol: 'ympl',
        addr: '0xb7ba8461664de526a3ae44189727dfc768625902',
    },
    {
        id: 'yobit-token',
        symbol: 'yo',
        addr: '0xebf4ca5319f406602eeff68da16261f1216011b5',
    },
    {
        id: 'yoink',
        symbol: 'ynk',
        addr: '0x87c00817abe35ed4c093e59043fae488238d2f74',
    },
    {
        id: 'yokcoin',
        symbol: 'yok',
        addr: '0x05fcc72cfb4150abae415c885f7a433ff523296f',
    },
    {
        id: 'yolo-cash',
        symbol: 'ylc',
        addr: '0x21d5678a62dfe63a47062469ebb2fac2817d8832',
    },
    {
        id: 'yoo-ecology',
        symbol: 'yoo',
        addr: '0xc7596f3fc97ae603e1d7ffa61e6efb7b6a59bed2',
    },
    {
        id: 'yottacoin',
        symbol: 'yta',
        addr: '0x5edc1a266e8b2c5e8086d373725df0690af7e3ea',
    },
    {
        id: 'youcash',
        symbol: 'youc',
        addr: '0x3d371413dd5489f3a04c07c0c2ce369c20986ceb',
    },
    {
        id: 'you-chain',
        symbol: 'you',
        addr: '0x34364bee11607b1963d66bca665fde93fca666a8',
    },
    {
        id: 'youforia',
        symbol: 'yfr',
        addr: '0xd6940a1ffd9f3b025d1f1055abcfd9f7cda81ef9',
    },
    {
        id: 'youlive-coin',
        symbol: 'uc',
        addr: '0xf84df2db2c87dd650641f8904af71ebfc3dde0ea',
    },
    {
        id: 'yoyow',
        symbol: 'yoyow',
        addr: '0xcbeaec699431857fdb4d37addbbdc20e132d4903',
    },
    {
        id: 'yplutus',
        symbol: 'yplt',
        addr: '0x40e7705254494a7e61d5b7c86da50225ddc3daae',
    },
    {
        id: 'yrise-finance',
        symbol: 'yrise',
        addr: '0x6051c1354ccc51b4d561e43b02735deae64768b8',
    },
    {
        id: 'ystar',
        symbol: 'ysr',
        addr: '0xd9a947789974bad9be77e45c2b327174a9c59d71',
    },
    {
        id: 'ytho-online',
        symbol: 'ytho',
        addr: '0x48cf0e2eca22eae0ad33fee16a5cb6e62207a8ab',
    },
    {
        id: 'ytsla-finance',
        symbol: 'ytsla',
        addr: '0x5322a3556f979ce2180b30e689a9436fddcb1021',
    },
    {
        id: 'ytusd',
        symbol: 'ytusd',
        addr: '0x73a052500105205d34daf004eab301916da8190f',
    },
    {
        id: 'yuan-chain-coin',
        symbol: 'ycc',
        addr: '0x37e1160184f7dd29f00b78c050bf13224780b0b0',
    },
    {
        id: 'yuang-coin',
        symbol: 'yuang',
        addr: '0x8ae005c97aa6853478c7f373b1d0f72aa92880a7',
    },
    {
        id: 'yui-hinata',
        symbol: 'yui',
        addr: '0x4c10bd19688b906665fbd53415f279f34b44ece7',
    },
    {
        id: 'yuki-coin',
        symbol: 'yuki',
        addr: '0x5ab793e36070f0fac928ea15826b0c1bc5365119',
    },
    {
        id: 'yuno-finance',
        symbol: 'yuno',
        addr: '0x4b4f5286e0f93e965292b922b9cd1677512f1222',
    },
    {
        id: 'yup',
        symbol: 'yup',
        addr: '0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9',
    },
    {
        id: 'yusdc-busd-pool',
        symbol: 'yusdc',
        addr: '0x26ea744e5b887e5205727f55dfbe8685e3b21951',
    },
    {
        id: 'yusd-synthetic-token-expiring-31-december-2020',
        symbol: 'uUSDwETH-DEC',
        addr: '0xd16c79c8a39d44b2f3eb45d2019cd6a42b03e2a9',
    },
    {
        id: 'yvault-lp-ycurve',
        symbol: 'yvault-lp-ycurve',
        addr: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
    },
    {
        id: 'yvboost',
        symbol: 'yvboost',
        addr: '0x9d409a0a012cfba9b15f6d4b36ac57a46966ab9a',
    },
    {
        id: 'yvs-finance',
        symbol: 'yvs',
        addr: '0xec681f28f4561c2a9534799aa38e0d36a83cf478',
    },
    {
        id: 'yyfi-protocol',
        symbol: 'yyfi',
        addr: '0xaf20b44c1c651d1d29cfb916ee2a0630b828eb7a',
    },
    {
        id: 'zac-finance',
        symbol: 'zac',
        addr: '0x98a90499b62ae48e151a66b0f647570b5a473b1c',
    },
    {
        id: 'zantepay',
        symbol: 'zpay',
        addr: '0xeffea57067e02999fdcd0bb45c0f1071a29472d9',
    },
    {
        id: 'zap',
        symbol: 'zap',
        addr: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
    },
    {
        id: 'zbank-token',
        symbol: 'zbk',
        addr: '0x29257908879c5792f1bb25449a7209205434dc3f',
    },
    {
        id: 'zb-token',
        symbol: 'zb',
        addr: '0xbd0793332e9fb844a52a205a233ef27a5b34b927',
    },
    {
        id: 'zcnox-coin',
        symbol: 'zcnox',
        addr: '0x8b83116e05f722554e1089b9850e731ee20dd692',
    },
    {
        id: 'zcore-token',
        symbol: 'zcrt',
        addr: '0xc7e43a1c8e118aa2965f5eabe0e718d83db7a63c',
    },
    {
        id: 'zebi',
        symbol: 'zco',
        addr: '0x2008e3057bd734e10ad13c9eae45ff132abc1722',
    },
    {
        id: 'zedxe',
        symbol: 'zfl',
        addr: '0x19fffd124cd9089e21026d10da97f8cd6b442bff',
    },
    {
        id: 'zeedex',
        symbol: 'zdex',
        addr: '0x5150956e082c748ca837a5dfa0a7c10ca4697f9c',
    },
    {
        id: 'zelda-elastic-cash',
        symbol: 'zelda elastic cash',
        addr: '0xcf55a7f92d5e0c6683debbc1fc20c0a6e056df13',
    },
    {
        id: 'zelda-spring-nuts-cash',
        symbol: 'zelda spring nuts cash',
        addr: '0x654eebac62240e6c56bab5f6adf7cfa74a894510',
    },
    {
        id: 'zelda-summer-nuts-cash',
        symbol: 'zelda summer nuts cash',
        addr: '0xb3f83a3be59e71876659c5cecc6a3c4d690d258e',
    },
    {
        id: 'zelwin',
        symbol: 'zlw',
        addr: '0x5319e86f0e41a06e49eb37046b8c11d78bcad68c',
    },
    {
        id: 'zenfuse',
        symbol: 'zefu',
        addr: '0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229',
    },
    {
        id: 'zenswap-network-token',
        symbol: 'znt',
        addr: '0xe95990825aab1a7f0af4cc648f76a3bcc99f25b2',
    },
    {
        id: 'zeon',
        symbol: 'zeon',
        addr: '0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532',
    },
    {
        id: 'zero-carbon-project',
        symbol: 'zcc',
        addr: '0x6737fe98389ffb356f64ebb726aa1a92390d94fb',
    },
    {
        id: 'zero-collateral-dai',
        symbol: 'zai',
        addr: '0x9d1233cc46795e94029fda81aaadc1455d510f15',
    },
    {
        id: 'zero-exchange',
        symbol: 'zero',
        addr: '0xf0939011a9bb95c3b791f0cb546377ed2693a574',
    },
    {
        id: 'zeroswap',
        symbol: 'zee',
        addr: '0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5',
    },
    {
        id: 'zero-utility-token',
        symbol: 'zut',
        addr: '0x83f873388cd14b83a9f47fabde3c9850b5c74548',
    },
    {
        id: 'zeusshield',
        symbol: 'zsc',
        addr: '0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63',
    },
    {
        id: 'zeuxcoin',
        symbol: 'zuc',
        addr: '0x6b4689e4514957699edeb2ee91c947f18e439806',
    },
    {
        id: 'zg-blockchain-token',
        symbol: 'zgt',
        addr: '0xa72b32f11c49f3f9aa14125c4c89a9c60c390eb4',
    },
    {
        id: 'zhegic',
        symbol: 'zhegic',
        addr: '0x837010619aeb2ae24141605afc8f66577f6fb2e7',
    },
    {
        id: 'zignaly',
        symbol: 'zig',
        addr: '0x7bebd226154e865954a87650faefa8f485d36081',
    },
    {
        id: 'zild-finance',
        symbol: 'zild',
        addr: '0x006699d34aa3013605d468d2755a2fe59a16b12b',
    },
    {
        id: 'zilla',
        symbol: 'zla',
        addr: '0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16',
    },
    {
        id: 'zin',
        symbol: 'Zin',
        addr: '0x033e223870f766644f7f7a4b7dc2e91573707d06',
    },
    {
        id: 'zinc',
        symbol: 'zinc',
        addr: '0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea',
    },
    {
        id: 'ziot',
        symbol: 'ziot',
        addr: '0xfb22ced41b1267da411f68c879f4defd0bd4796a',
    },
    {
        id: 'zip',
        symbol: 'zip',
        addr: '0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd',
    },
    {
        id: 'zipmex-token',
        symbol: 'zmt',
        addr: '0xaa602de53347579f86b996d2add74bb6f79462b2',
    },
    {
        id: 'zippie',
        symbol: 'zipt',
        addr: '0xedd7c94fd7b4971b916d15067bc454b9e1bad980',
    },
    {
        id: 'ziticoin',
        symbol: 'ziti',
        addr: '0x8dd4228605e467671941ffb4cae15cf7959c8d9d',
    },
    {
        id: 'zjlt-distributed-factoring-network',
        symbol: 'zjlt',
        addr: '0xbc34985b4d345aea933d5cac19f3a86bd1fb398f',
    },
    {
        id: 'zkswap',
        symbol: 'zks',
        addr: '0xe4815ae53b124e7263f08dcdbbb757d41ed658c6',
    },
    {
        id: 'zloadr',
        symbol: 'zdr',
        addr: '0xbdfa65533074b0b23ebc18c7190be79fa74b30c2',
    },
    {
        id: 'zlot',
        symbol: 'zlot',
        addr: '0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e',
    },
    {
        id: 'zmine',
        symbol: 'zmn',
        addr: '0x554ffc77f4251a9fb3c0e3590a6a205f8d4e067d',
    },
    {
        id: 'zodiac',
        symbol: 'zdc',
        addr: '0x1cf402135d7bd27dc9d21c03ae2d8375bc43e9ec',
    },
    {
        id: 'zom',
        symbol: 'zom',
        addr: '0x5091aed52ad421969254e48d29aa1d1807e1870b',
    },
    {
        id: 'zoom-protocol',
        symbol: 'zom',
        addr: '0x1a231e75538a931c395785ef5d1a5581ec622b0e',
    },
    {
        id: 'zoo-token',
        symbol: 'zoot',
        addr: '0x1341a2257fa7b770420ef70616f888056f90926c',
    },
    {
        id: 'zoracles',
        symbol: 'zora',
        addr: '0xd8e3fb3b08eba982f2754988d70d57edc0055ae6',
    },
    {
        id: 'zper',
        symbol: 'zpr',
        addr: '0xb5b8f5616fe42d5ceca3e87f3fddbdd8f496d760',
    },
    {
        id: 'zrocor',
        symbol: 'zcor',
        addr: '0x83ff572a1757b9e4508cb08f13a79ed162c756c4',
    },
    {
        id: 'ztcoin',
        symbol: 'zt',
        addr: '0xfe39e6a32acd2af7955cb3d406ba2b55c901f247',
    },
    {
        id: 'zucoinchain',
        symbol: 'zcc',
        addr: '0x26548041e3a78fdc60f3cce21977e1f5e46561b7',
    },
    {
        id: 'zuescrowdfunding',
        symbol: 'zeus',
        addr: '0xe7e4279b80d319ede2889855135a22021baf0907',
    },
    {
        id: 'zum-token',
        symbol: 'zum',
        addr: '0xe0b9bcd54bf8a730ea5d3f1ffce0885e911a502c',
    },
    {
        id: 'zuplo',
        symbol: 'zlp',
        addr: '0x94d8db14831c2c08943798542c450df2844913e5',
    },
    {
        id: 'zusd',
        symbol: 'zusd',
        addr: '0xc56c2b7e71b54d38aab6d52e94a04cbfa8f604fa',
    },
    {
        id: 'zuz-protocol',
        symbol: 'zuz',
        addr: '0x202f1877e1db1120ca3e9a98c5d505e7f035c249',
    },
    {
        id: 'zynecoin',
        symbol: 'zyn',
        addr: '0xe65ee7c03bbb3c950cfd4895c24989afa233ef01',
    },
    {
        id: 'zytara-dollar',
        symbol: 'zusd',
        addr: '0xbf0f3ccb8fa385a287106fba22e6bb722f94d686',
    },
    {
        id: 'zzz-finance',
        symbol: 'zzz',
        addr: '0xc75f15ada581219c95485c578e124df3985e4ce0',
    },
    {
        id: 'zzz-finance-v2',
        symbol: 'zzzv2',
        addr: '0x93ed140172ff226dad1f7f3650489b8daa07ae7f',
    },
];
