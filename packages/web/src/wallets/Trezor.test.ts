import TrezorConnect from 'trezor-connect';
import { Trezor } from './Trezor';
import {
  ALL_DERIVATION_PATHS,
  DEFAULT_ETH,
  LEDGER_LIVE_ETH,
  TESTNET_ETH,
  TREZOR_DERIVATION_PATHS
} from '@findeth/shared';

jest.mock('trezor-connect');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Trezor', () => {
  it('generates an address from a derivation path', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    expect(TrezorConnect.manifest).toHaveBeenCalledTimes(1);

    await expect(wallet.getAddress(DEFAULT_ETH, 10)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(DEFAULT_ETH, 15)).resolves.toMatchSnapshot();
  });

  it('generates an address from a hardened derivation path', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    expect(TrezorConnect.manifest).toHaveBeenCalledTimes(1);

    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 10)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 15)).resolves.toMatchSnapshot();
  });

  it('pre-fetches multiple addresses', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    const paths = [DEFAULT_ETH, TESTNET_ETH];

    await expect(wallet.prefetch(paths)).resolves.toMatchSnapshot();
  });

  it('caches the public key and chain code', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    const paths = [DEFAULT_ETH, TESTNET_ETH];

    await wallet.prefetch(paths);
    await wallet.getAddress(DEFAULT_ETH, 10);
    await wallet.getAddress(DEFAULT_ETH, 15);
    await wallet.getAddress(TESTNET_ETH, 10);
    await wallet.getAddress(TESTNET_ETH, 15);

    expect(TrezorConnect.getPublicKey).toHaveBeenCalledTimes(2);
  });

  it(`doesn't support all derivation paths'`, () => {
    const wallet = new Trezor();
    expect(wallet.getDerivationPaths()).not.toStrictEqual(ALL_DERIVATION_PATHS);
    expect(wallet.getDerivationPaths()).toStrictEqual(TREZOR_DERIVATION_PATHS);
  });
});
