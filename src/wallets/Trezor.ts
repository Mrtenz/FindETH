import Wallet from './Wallet';
import TrezorConnect from 'trezor-connect';

export default class Trezor implements Wallet {
  public async initialize(): Promise<void> {
    TrezorConnect.manifest({
      email: 'maarten@zuidhoorn.com',
      appUrl: 'https://findeth.io'
    });

    await TrezorConnect.ethereumGetAddress({
      path: `m/44'/60'/0'/0/0`
    });
  }

  public async getAddress(dPath: string, index: number): Promise<string> {
    // TODO: This implementation is far from ideal, as you have to press to export for every new
    // address
    const data = await TrezorConnect.ethereumGetAddress({
      path: `${dPath}/${index}`
    });

    return data.payload.address;
  }
}
