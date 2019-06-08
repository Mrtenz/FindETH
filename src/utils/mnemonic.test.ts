import { swapMnemonicPhrase } from './mnemonic';
import { isValidMnemonic } from '@ethersproject/hdnode';

const SWAPPED_MNEMONIC_PHRASE =
  'measure soup awake dawn inject rare because wave stay news profit cook';

describe('swapMnemonicPhrase()', () => {
  it('swaps a mnemonic phrase in an incorrect order', () => {
    expect(swapMnemonicPhrase('foo qux bar quux baz quuz')).toBe('foo bar baz qux quux quuz');
    expect(swapMnemonicPhrase('foo quuz bar corge baz grault qux garply quux waldo')).toBe(
      'foo bar baz qux quux quuz corge grault garply waldo'
    );

    expect(isValidMnemonic(SWAPPED_MNEMONIC_PHRASE)).toBe(false);
    expect(isValidMnemonic(swapMnemonicPhrase(SWAPPED_MNEMONIC_PHRASE))).toBe(true);
  });
});
