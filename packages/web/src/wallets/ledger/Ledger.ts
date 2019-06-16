import HardwareWallet, { KeyInfo } from '../HardwareWallet';
import Transport from '@ledgerhq/hw-transport';
import EthereumApp from '@ledgerhq/hw-app-eth';
import { DerivationPath, LEDGER_DERIVATION_PATHS, LEDGER_ETH } from '../../config';
import { getFullPath } from '../../utils';
import { WalletType } from '../../store/wallet';

export default abstract class Ledger extends HardwareWallet {
  protected abstract transport: Transport<any> | null = null;
  protected abstract app: EthereumApp | null = null;

  public async initialize(): Promise<void> {
    await this.checkConnection();

    // Fetch a random address to ensure the connection works
    await this.getAddress(LEDGER_ETH, 50);
  }

  public getDerivationPaths(): DerivationPath[] {
    return LEDGER_DERIVATION_PATHS;
  }

  protected getWalletType(): WalletType.Ledger {
    return WalletType.Ledger;
  }

  protected abstract async checkConnection(): Promise<void>;

  protected async getKeyInfo(dPath: DerivationPath): Promise<KeyInfo> {
    await this.checkConnection();

    const response = await this.app!.getAddress(dPath.prefix, false, true);
    return {
      publicKey: response.publicKey,
      chainCode: response.chainCode!
    };
  }

  protected async getHardenedAddress(dPath: DerivationPath, index: number): Promise<string> {
    await this.checkConnection();

    const response = await this.app!.getAddress(getFullPath(dPath, index));

    return response.address;
  }
}
