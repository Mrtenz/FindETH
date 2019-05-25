import HardwareWallet, { KeyInfo } from './HardwareWallet';
import TrezorConnect from 'trezor-connect';
import { DEFAULT_ETH, DerivationPath } from '../config';
import { getFullPath } from '../utils';

export default class Trezor extends HardwareWallet {
  public async initialize(): Promise<void> {
    TrezorConnect.manifest({
      email: 'maarten@zuidhoorn.com',
      appUrl: 'https://findeth.io'
    });

    // Fetch a random address to ensure the connection works
    await this.getAddress(DEFAULT_ETH, 0);
  }

  protected async getKeyInfo(dPath: DerivationPath): Promise<KeyInfo> {
    /**
     * TODO: Add support for getting multiple public keys / chain codes at the same time. For
     * reference: https://github.com/trezor/connect/blob/develop/docs/methods/getPublicKey.md
     */
    const response = await TrezorConnect.getPublicKey({ path: dPath.prefix });

    return {
      publicKey: response.payload.publicKey,
      chainCode: response.payload.chainCode
    };
  }

  protected async getHardenedAddress(dPath: DerivationPath, index: number): Promise<string> {
    /**
     * TODO: Add support for getting multiple addresses at the same time. For reference:
     * https://github.com/trezor/connect/blob/develop/docs/methods/ethereumGetAddress.md
     */
    const response = await TrezorConnect.ethereumGetAddress({ path: getFullPath(dPath, index) });

    return response.payload.address;
  }
}
