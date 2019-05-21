import Wallet from './Wallet';
import Transport from '@ledgerhq/hw-transport';
import EthereumApp from '@ledgerhq/hw-app-eth';

export default abstract class Ledger implements Wallet {
  protected abstract transport: Transport<USBDevice> | null = null;
  protected abstract app: EthereumApp | null = null;

  public async initialize(): Promise<void> {
    await this.checkConnection();

    // Fetch a random address to ensure the connection works
    await this.app!.getAddress("m/44'/60'/0'/0");
  }

  public async getAddress(dPath: string, index: number): Promise<string> {
    const data = await this.app!.getAddress(`${dPath}/${index}`);
    return data.address;
  }

  protected abstract async checkConnection(): Promise<void>;
}
