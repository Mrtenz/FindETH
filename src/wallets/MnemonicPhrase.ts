import Wallet from './Wallet';
import { utils, wordlists } from 'ethers';

// TODO: Temporary workaround for a bug in Ethers.js
const HDNode = require('ethers').utils.HDNode;

export default class MnemonicPhrase implements Wallet {
  private readonly mnemonicPhrase: string;
  private readonly passPhrase: string;

  public constructor(mnemonicPhrase: string, passPhrase: string) {
    this.mnemonicPhrase = mnemonicPhrase;
    this.passPhrase = passPhrase;
  }

  public async getAddress(dPath: string, index: number): Promise<string> {
    const hdNode = await this.getHDNode();
    const address = hdNode.derivePath(`${dPath}/${index}`).address;

    console.log(dPath, address);

    return address;
  }

  public async initialize(): Promise<void> {
    if (!utils.HDNode.isValidMnemonic(this.mnemonicPhrase)) {
      throw new Error('The mnemonic phrase you provided is invalid.');
    }
  }

  /**
   * Get an instance of the HDNode class.
   *
   * @return {Promise<HDNode>} A Promise with an instance of the HDKey class.
   */
  private async getHDNode(): Promise<typeof HDNode> {
    return utils.HDNode.fromMnemonic(this.mnemonicPhrase, wordlists.en, this.passPhrase);
  }
}
