import MnemonicPhrase from './MnemonicPhrase';
import { DEFAULT_ETH, LEDGER_LIVE_ETH } from '../config';

const VALID_MNEMONIC = 'measure awake inject because stay profit soup dawn rare wave news cook';
const INVALID_MNEMONIC = 'setup safe obscure bus poem very fatal sock color design bridge garden';

describe('MnemonicPhrase', () => {
  it('generates an address from a derivation path', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, '');
    await expect(wallet.getAddress(DEFAULT_ETH, 0)).resolves.toBe(
      '0xBa0310bEE9fDd582530cd1cD0C29aCF7f03cC548'
    );
    await expect(wallet.getAddress(DEFAULT_ETH, 1)).resolves.toBe(
      '0x3B2006f42edfb0ABFDBB848A7fBe028A8E984e65'
    );
  });

  it('generates an address from a hardened derivation path', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, '');
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 3)).resolves.toBe(
      '0x9F8708a7091B34797a6810ab01Eacf2594e1e93d'
    );
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 4)).resolves.toBe(
      '0x4029471cEA2B1cB785A5045d517523E91AB92569'
    );
  });

  it('generates different addresses with a passphrase provided', async () => {
    const wallet = new MnemonicPhrase(VALID_MNEMONIC, 'foobar');
    await expect(wallet.getAddress(DEFAULT_ETH, 0)).resolves.toBe(
      '0x91F81204910ab591d8ab1e7ab5db42D8FB48c646'
    );
    await expect(wallet.getAddress(DEFAULT_ETH, 1)).resolves.toBe(
      '0x65CF9d2AC5DFe4A27d22A48A9b898d7B01Ee1c4a'
    );
  });

  it('throws an error on invalid mnemonic phrases', async () => {
    const wallet = new MnemonicPhrase(INVALID_MNEMONIC, '');
    await expect(wallet.initialize()).rejects.toThrow();
  });
});
