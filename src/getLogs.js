const blocknumber = require('./blocknumber');

// recursive getLogs wrapper to handle calls that go over the event
// limit (some APIs error out on getLogs calls that would return more
// than 10k events).
async function getLogs(web3, fromBlock, toBlock, address, topics) {
  let bn = await web3.eth.getBlockNumber();
  return getLogs_(web3, fromBlock, toBlock, bn, address, topics);
}

async function getLogs_(
  web3,
  fromBlock,
  toBlock,
  curHeadBlock,
  address,
  topics,
) {
  if (!blocknumber.isValid(fromBlock)) {
    throw `invalid fromBlock ${fromBlock}`;
  }
  if (!blocknumber.isValid(toBlock)) {
    throw `invalid toBlock ${toBlock}`;
  }
  if (!typeof curHeadBlock == 'number') {
    throw `invalid curHeadBlock ${curHeadBlock}`;
  }

  let all = [];
  if (blocknumber.less(fromBlock, toBlock)) {
    try {
      console.log(`Getting ${fromBlock} to ${toBlock}...`);
      return await web3.eth.getPastLogs({
        address,
        topics: topics,
        fromBlock,
        toBlock,
      });
      console.log('success!');
    } catch (error) {
      console.log('failed!');
      if (!error.message.includes('Log response size exceeded')) {
        console.log(`unexpeted error ${error}`);
        throw error;
      }
      const midBlock =
        toBlock == 'latest' || toBlock == 'pending'
          ? (blocknumber.toNumber(fromBlock) + curHeadBlock) >> 1
          : (blocknumber.toNumber(fromBlock) + blocknumber.toNumber(toBlock)) >>
            1;
      const arr1 = await getLogs(
        web3,
        fromBlock,
        midBlock,
        curHeadBlock,
        address,
        topics,
      );
      const arr2 = await getLogs(
        web3,
        midBlock + 1,
        toBlock,
        curHeadBlock,
        address,
        topics,
      );
      return [...arr1, ...arr2];
    }
  }
  return [];
}


module.exports = getLogs;
