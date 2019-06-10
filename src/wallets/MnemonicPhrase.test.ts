import MnemonicPhrase from './MnemonicPhrase';
import { DEFAULT_ETH, LEDGER_LIVE_ETH } from '../config';

const VALID_MNEMONIC = 'measure awake inject because stay profit soup dawn rare wave news cook';
const INVALID_MNEMONIC = 'setup safe obscure bus poem very fatal sock color design bridge garden';

describe('MnemonicPhrase', () => {
  it('generates an address from a derivation path', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, '');
    await expect(wallet.getAddress(DEFAULT_ETH, 0)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(DEFAULT_ETH, 1)).resolves.toMatchSnapshot();
  });

  it('generates an address from a hardened derivation path', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, '');
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 3)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 4)).resolves.toMatchSnapshot();
  });

  it('generates different addresses with a passphrase provided', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, 'foobar');
    await expect(wallet.getAddress(DEFAULT_ETH, 0)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(DEFAULT_ETH, 1)).resolves.toMatchSnapshot();
  });

  it('throws an error on invalid mnemonic phrases', async () => {
    const wallet = new MnemonicPhrase(INVALID_MNEMONIC, '');
    await expect(wallet.initialize()).rejects.toThrow();
  });
});
