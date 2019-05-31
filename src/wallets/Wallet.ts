import { DerivationPath } from '../config';

export default interface Wallet {
  /**
   * Initialize the wallet. Can be used to connect to the device and check the connection.
   */
  initialize(): Promise<void>;

  /**
   * Optional function that can be used to prefetch necessary info from a device.
   *
   * @param {DerivationPath[]} paths The derivation paths to prefetch.
   */
  prefetch?(paths: DerivationPath[]): Promise<void>;

  /**
   * Get an address for a derivation path at a specific index.
   *
   * @param {DerivationPath} dPath The derivation path.
   * @param {number} index The address or account index.
   * @return {Promise<string>} A Promise with the address.
   */
  getAddress(dPath: DerivationPath, index: number): Promise<string>;

  /**
   * Get the derivation paths that are supported by the wallet.
   */
  getDerivationPaths(): DerivationPath[];
}
