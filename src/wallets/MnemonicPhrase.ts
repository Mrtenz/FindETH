import Wallet from './Wallet';

// TODO
export default class MnemonicPhrase implements Wallet {
  public async initialize(): Promise<void> {
    throw new Error('Not implemented');
  }

  public async getAddress(dPath: string, index: number): Promise<string> {
    throw new Error('Not implemented');
  }
}
