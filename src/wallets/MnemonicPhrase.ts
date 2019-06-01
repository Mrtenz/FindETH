import Wallet from './Wallet';
import { HDNode, isValidMnemonic } from '@ethersproject/hdnode';
import { ALL_DERIVATION_PATHS, DerivationPath } from '../config';
import { getFullPath } from '../utils';

export default class MnemonicPhrase implements Wallet {
  private readonly mnemonicPhrase: string;
  private readonly passPhrase: string;

  public constructor(mnemonicPhrase: string, passPhrase: string) {
    this.mnemonicPhrase = mnemonicPhrase;
    this.passPhrase = passPhrase;
  }

  public async getAddress(dPath: DerivationPath, index: number): Promise<string> {
    const hdNode = await this.getHDNode();
    return hdNode.derivePath(getFullPath(dPath, index)).address;
  }

  public async initialize(): Promise<void> {
    if (!isValidMnemonic(this.mnemonicPhrase)) {
      throw new Error('The mnemonic phrase you provided is invalid.');
    }
  }

  public getDerivationPaths(): DerivationPath[] {
    return ALL_DERIVATION_PATHS;
  }

  /**
   * Get an instance of the HDNode class.
   *
   * @return {Promise<HDNode>} A Promise with an instance of the HDKey class.
   */
  private async getHDNode(): Promise<HDNode> {
    return HDNode.fromMnemonic(this.mnemonicPhrase, this.passPhrase);
  }
}
