import HardwareWallet, { KeyInfo } from './HardwareWallet';
import TrezorConnect from 'trezor-connect';

export default class Trezor extends HardwareWallet {
  public async initialize(): Promise<void> {
    TrezorConnect.manifest({
      email: 'maarten@zuidhoorn.com',
      appUrl: 'https://findeth.io'
    });

    // Fetch a random address to ensure the connection works
    await this.getAddress(`m/44'/60'/0'/0`, 0);
  }

  protected async getKeyInfo(dPath: string): Promise<KeyInfo> {
    /**
     * TODO: Add support for getting multiple public keys / chain codes at the same time. For
     * reference: https://github.com/trezor/connect/blob/develop/docs/methods/getPublicKey.md
     */
    const response = await TrezorConnect.getPublicKey({ path: dPath });

    return {
      publicKey: response.payload.publicKey,
      chainCode: response.payload.chainCode
    };
  }
}
