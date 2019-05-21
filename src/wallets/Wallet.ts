export default interface Wallet {
  initialize(): Promise<void>;

  getAddress(dPath: string, index: number): Promise<string>;
}
