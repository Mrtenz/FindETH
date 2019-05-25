import { DerivationPath } from '../config';

export default interface Wallet {
  initialize(): Promise<void>;

  getAddress(dPath: DerivationPath, index: number): Promise<string>;
}
