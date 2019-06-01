import { getFullPath } from './dPaths';
import { DEFAULT_ETH, LEDGER_LIVE_ETH } from '../config';

it('returns a derivation path with an address index (non-hardened)', () => {
  expect(getFullPath(DEFAULT_ETH, 5)).toBe(`m/44'/60'/0'/0/5`);
  expect(getFullPath(DEFAULT_ETH, 10)).toBe(`m/44'/60'/0'/0/10`);
});

it('returns a derivation path with an account index (hardened)', () => {
  expect(getFullPath(LEDGER_LIVE_ETH, 5)).toBe(`m/44'/60'/5'/0/0`);
  expect(getFullPath(LEDGER_LIVE_ETH, 10)).toBe(`m/44'/60'/10'/0/0`);
});
