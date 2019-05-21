import Wallet from './Wallet';
import HDKey from 'hdkey';
import { mnemonicToSeed, validateMnemonic } from 'bip39';
import { publicToAddress } from 'ethereumjs-util';

export default class MnemonicPhrase implements Wallet {
  private readonly mnemonicPhrase: string;
  private readonly passPhrase: string;
  private seed?: Buffer;

  public constructor(mnemonicPhrase: string, passPhrase: string) {
    this.mnemonicPhrase = mnemonicPhrase;
    this.passPhrase = passPhrase;
  }

  public async getAddress(dPath: string, index: number): Promise<string> {
    const hdKey = await this.getHDKey(dPath);
    const publicKey = hdKey.derive(`${dPath}/${index}`).publicKey;

    return `0x${publicToAddress(publicKey, true).toString('hex')}`;
  }

  public async initialize(): Promise<void> {
    if (!validateMnemonic(this.mnemonicPhrase)) {
      throw new Error('The mnemonic phrase you provided is invalid.');
    }

    this.seed = await mnemonicToSeed(this.mnemonicPhrase, this.passPhrase);
  }

  /**
   * Get an instance of the HDKey class.
   *
   * @param {string} dPath The derivation path without the address index.
   * @return {Promise<HDKey>} A Promise with an instance of the HDKey class.
   */
  private async getHDKey(dPath: string): Promise<HDKey> {
    return HDKey.fromMasterSeed(this.seed!);
  }
}
