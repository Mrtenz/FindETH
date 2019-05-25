import HardwareWallet, { KeyInfo } from '../HardwareWallet';
import Transport from '@ledgerhq/hw-transport';
import EthereumApp from '@ledgerhq/hw-app-eth';

export default abstract class Ledger extends HardwareWallet {
  protected abstract transport: Transport<USBDevice> | null = null;
  protected abstract app: EthereumApp | null = null;

  public async initialize(): Promise<void> {
    await this.checkConnection();

    // Fetch a random address to ensure the connection works
    await this.getAddress(`m/44'/60'/0'`, 0);
  }

  protected abstract async checkConnection(): Promise<void>;

  protected async getKeyInfo(dPath: string): Promise<KeyInfo> {
    await this.checkConnection();

    const response = await this.app!.getAddress(dPath, false, true);
    return {
      publicKey: response.publicKey,
      chainCode: response.chainCode!
    };
  }
}
