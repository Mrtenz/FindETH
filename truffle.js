const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const INFURA_PROJECT_ID = 'bfea47cc97c440a687c8762553739a94';

// The mnemonic phrase is read from a file called '.secret'.
let MNEMONIC_PHRASE;
try {
  MNEMONIC_PHRASE = fs.readFileSync('./.secret', 'utf8').split(/\n/)[0];
} catch {}

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },

    ropsten: {
      provider: () =>
        new HDWalletProvider(MNEMONIC_PHRASE, `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: '3',
      gas: 5500000,
      gasPrice: 5000000000
    },

    live: {
      provider: () =>
        new HDWalletProvider(MNEMONIC_PHRASE, `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: '1',
      gas: 5500000,
      timeoutBlocks: 200,
      gasPrice: 5000000000
    }
  },

  compilers: {
    solc: {
      version: '0.5.1'
    }
  }
};
