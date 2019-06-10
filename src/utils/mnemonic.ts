/**
 * Swaps the order of the words in a mnemonic phrase. Assuming we have a word list with:
 *
 * 1. foo   4. qux
 * 2. bar   5. quux
 * 3. baz   6. quuz
 *
 * If you accidentally enter the list from left to right (foo qux bar quux baz quuz), this function
 * will swap the words to put them in regular order.
 *
 * @param {string} mnemonicPhrase The mnemonic phrase to swap.
 * @return {string} The mnemonic phrase with swapped words.
 */
export const swapMnemonicPhrase = (mnemonicPhrase: string): string => {
  const words = mnemonicPhrase.split(' ');

  return [
    ...words.filter((_, index) => index % 2 === 0),
    ...words.filter((_, index) => index % 2 === 1)
  ].join(' ');
};
