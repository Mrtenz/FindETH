import Wallet from './Wallet';
import HDKey from 'hdkey';
import { utils } from 'ethers';

export interface KeyInfo {
  publicKey: string;
  chainCode: string;
}

export default abstract class HardwareWallet implements Wallet {
  private cachedDPath?: string;
  private cachedKeyInfo?: KeyInfo;

  public async getAddress(dPath: string, index: number): Promise<string> {
    const hdKey = await this.getHDKey(dPath);
    const publicKey = hdKey.derive(`m/${index}`).publicKey;

    return utils.computeAddress(publicKey);
  }

  public abstract initialize(): Promise<void>;

  /**
   * Get KeyInfo (public key, chain code) from the device.
   *
   * @param {string} dPath The derivation path to get the KeyInfo for.
   * @return {Promise<KeyInfo>} A Promise with the KeyInfo.
   */
  protected abstract getKeyInfo(dPath: string): Promise<KeyInfo>;

  /**
   * Get an instance of the HDKey class.
   *
   * @param {string} dPath The derivation path without the address index.
   * @return {Promise<HDKey>} A Promise with an instance of the HDKey class.
   */
  private async getHDKey(dPath: string): Promise<HDKey> {
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
