import Wallet from './Wallet';
import { HDNode, isValidMnemonic } from '@ethersproject/hdnode';
import { ALL_DERIVATION_PATHS, DerivationPath } from '../config';
import { getFullPath } from '../utils';
import { MnemonicPhraseResult, WalletType } from '../store/wallet';

export default class MnemonicPhrase implements Wallet {
  private readonly mnemonicPhrase: string;
  private readonly password: string;

  public constructor(mnemonicPhrase: string, password: string) {
    this.mnemonicPhrase = mnemonicPhrase;
    this.password = password;
  }

  public async getAddress(dPath: DerivationPath, index: number): Promise<MnemonicPhraseResult[]> {
    const hdNode = await this.getHDNode();
    const results: MnemonicPhraseResult[] = [];

    const path = getFullPath(dPath, index);

    results.push({
      type: WalletType.MnemonicPhrase,
      address: hdNode.derivePath(path).address,
      withPassword: !!this.password,
      path
    });

    // Extra check without a password if a password was specified
    if (this.password) {
      const passwordlessHdNode = await this.getHDNode(false);

      results.push({
        type: WalletType.MnemonicPhrase,
        address: passwordlessHdNode.derivePath(path).address,
        withPassword: false,
        path
      });
    }

    return results;
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
   * @param {boolean} withPassword Whether to get the HDNode initialized with a password or not.
   * @return {Promise<HDNode>} A Promise with an instance of the HDKey class.
   */
  private async getHDNode(withPassword: boolean = true): Promise<HDNode> {
    return HDNode.fromMnemonic(this.mnemonicPhrase, withPassword ? this.password : undefined);
  }
}
