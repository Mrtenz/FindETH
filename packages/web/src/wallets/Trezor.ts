import HardwareWallet, { KeyInfo } from './HardwareWallet';
import TrezorConnect from 'trezor-connect';
import { DEFAULT_ETH, DerivationPath, TREZOR_DERIVATION_PATHS } from '../config';
import { getFullPath } from '../utils';
import { WalletType } from '../store/wallet';

export default class Trezor extends HardwareWallet {
  private cache: { [key: string]: KeyInfo } = {};

  public async initialize(): Promise<void> {
    TrezorConnect.manifest({
      email: 'maarten@zuidhoorn.com',
      appUrl: 'https://findeth.io'
    });

    this.cache = {};

    // Fetch a random address to ensure the connection works
    await this.getAddress(DEFAULT_ETH, 50);
  }

  public async prefetch(paths: DerivationPath[]): Promise<{ [key: string]: KeyInfo }> {
    const bundle = paths.filter(path => !path.isHardened).map(path => ({ path: path.prefix }));

    const response = await TrezorConnect.getPublicKey({ bundle });

    for (const { serializedPath, chainCode, publicKey } of response.payload) {
      this.cache[serializedPath] = { chainCode, publicKey };
    }

    return this.cache;
  }

  public getDerivationPaths(): DerivationPath[] {
    return TREZOR_DERIVATION_PATHS;
  }

  protected getWalletType(): WalletType.Trezor {
    return WalletType.Trezor;
  }

  protected async getKeyInfo(path: DerivationPath): Promise<KeyInfo> {
    if (this.cache[path.prefix]) {
      return this.cache[path.prefix];
    }

    const response = await TrezorConnect.getPublicKey({ path: path.prefix });

    return {
      publicKey: response.payload.publicKey,
      chainCode: response.payload.chainCode
    };
  }

  protected async getHardenedAddress(path: DerivationPath, index: number): Promise<string> {
    /**
     * TODO: Add support for getting multiple addresses at the same time. For reference:
     * https://github.com/trezor/connect/blob/develop/docs/methods/ethereumGetAddress.md
     */
    const response = await TrezorConnect.ethereumGetAddress({ path: getFullPath(path, index) });

    return response.payload.address;
  }
}
