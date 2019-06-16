/**
 * Returns `true` if a string is a valid ENS name, or `false` otherwise. Note: this does not check
 * the minimum length requirement or if a ENS name actually resolves.
 *
 * @param {string} name The name to check.
 * @return {boolean}
 */
export const isEnsName = (name: string): boolean => {
  return name.length >= 4 && name.endsWith('.eth');
};
