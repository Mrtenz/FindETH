import TrezorConnect from '@trezor/connect-web';
import Trezor from './Trezor';
import { DEFAULT_ETH, LEDGER_LIVE_ETH, TESTNET_ETH } from '../config';

jest.mock('@trezor/connect-web');

describe('Trezor', () => {
  it('generates an address from a derivation path', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    expect(TrezorConnect.init).toHaveBeenCalledTimes(1);

    await expect(wallet.getAddress(DEFAULT_ETH, 10)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(DEFAULT_ETH, 15)).resolves.toMatchSnapshot();
  });

  it('generates an address from a hardened derivation path', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    expect(TrezorConnect.init).toHaveBeenCalledTimes(2);

    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 10)).resolves.toMatchSnapshot();
    await expect(wallet.getAddress(LEDGER_LIVE_ETH, 15)).resolves.toMatchSnapshot();
  });

  it('pre-fetches multiple addresses', async () => {
    const wallet = new Trezor();
    await wallet.initialize();

    const paths = [DEFAULT_ETH, TESTNET_ETH];

    await expect(wallet.prefetch(paths)).resolves.toMatchSnapshot();
  });
});
