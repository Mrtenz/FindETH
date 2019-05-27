require('regenerator-runtime/runtime');
const LedgerProvider = require('truffle-ledger-provider');

const INFURA_PROJECT_ID = 'bfea47cc97c440a687c8762553739a94';

const LEDGER_OPTIONS = {
  askConfirm: true,
  accountsLength: 1,
  accountsOffset: 0
};

const LEDGER_ROPSTEN_OPTIONS = {
  ...LEDGER_OPTIONS,
  networkId: 3,
  path: `44'/1'/0'/0`
};

const LEDGER_MAINNET_OPTIONS = {
  ...LEDGER_OPTIONS,
  networkId: 1,
  path: `44'/60'/0'/0`
};

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },

    ropsten: {
      provider: () =>
        new LedgerProvider(LEDGER_ROPSTEN_OPTIONS, `ropsten.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: 3,
      gas: 5500000,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    live: {
      provider: () =>
        new LedgerProvider(LEDGER_MAINNET_OPTIONS, `mainnet.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: 3,
      gas: 5500000,
      timeoutBlocks: 200
    }
  },

  compilers: {
    solc: {
      version: '0.5.1'
    }
  }
};
