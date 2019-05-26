import { DerivationPath } from '../config';

/**
 * Get the full derivation path with address index.
 *
 * @param {DerivationPath} derivationPath The derivation path to get the full path for.
 * @param {number} addressIndex The address index or account index.
 */
export const getFullPath = (derivationPath: DerivationPath, addressIndex: number): string => {
  if (derivationPath.isHardened) {
    return derivationPath.getIndex(addressIndex);
  }
  return `${derivationPath.prefix}/${addressIndex}`;
};
