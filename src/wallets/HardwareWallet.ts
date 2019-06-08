import Wallet from './Wallet';
import HDKey from 'hdkey';
import { computeAddress } from '@ethersproject/transactions';
import { DerivationPath } from '../config';
import { WalletResult, WalletType } from '../store/wallet';
import { getFullPath } from '../utils';

export interface KeyInfo {
  publicKey: string;
  chainCode: string;
}

export default abstract class HardwareWallet implements Wallet {
  private cachedDPath?: DerivationPath;
  private cachedKeyInfo?: KeyInfo;

  public async getAddress(dPath: DerivationPath, index: number): Promise<WalletResult> {
    let address: string;
    if (dPath.isHardened) {
      address = await this.getHardenedAddress(dPath, index);
    } else {
      const hdKey = await this.getHDKey(dPath);
      const publicKey = hdKey.derive(`m/${index}`).publicKey;

      address = computeAddress(publicKey);
    }

    return {
      type: this.getWalletType(),
      address,
      path: getFullPath(dPath, index)
    };
  }

  public abstract initialize(): Promise<void>;

  public abstract getDerivationPaths(): DerivationPath[];

  /**
   * Get the wallet type for the implementation.
   *
   * @return {WalletType} The type of wallet.
   */
  protected abstract getWalletType(): WalletType.Ledger | WalletType.Trezor;

  /**
   * Get KeyInfo (public key, chain code) from the device.
   *
   * @param {string} dPath The derivation path to get the KeyInfo for.
   * @return {Promise<KeyInfo>} A Promise with the KeyInfo.
   */
  protected abstract getKeyInfo(dPath: DerivationPath): Promise<KeyInfo>;

  /**
   * Get an address for a hardened derivation path from the device.
   *
   * @param {string} dPath The derivation path.
   * @param {number} index The account index.
   * @return {Promise<string>} A Promise with the address.
   */
  protected abstract getHardenedAddress(dPath: DerivationPath, index: number): Promise<string>;

  /**
   * Get an instance of the HDKey class.
   *
   * @param {string} dPath The derivation path without the address index.
   * @return {Promise<HDKey>} A Promise with an instance of the HDKey class.
   */
  private async getHDKey(dPath: DerivationPath): Promise<HDKey> {
    if (dPath !== this.cachedDPath || !this.cachedKeyInfo) {
      this.cachedKeyInfo = await this.getKeyInfo(dPath);
    }
    this.cachedDPath = dPath;

    const keyInfo = this.cachedKeyInfo;
    const hdKey = new HDKey();
    hdKey.publicKey = Buffer.from(keyInfo.publicKey, 'hex');
    hdKey.chainCode = Buffer.from(keyInfo.chainCode, 'hex');

    return hdKey;
  }
}
