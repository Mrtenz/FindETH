import { providers } from 'ethers';
import { getTokenInfo } from '../../src/utils';

jest.setTimeout(100000);

const provider = new providers.InfuraProvider(1, 'bfea47cc97c440a687c8762553739a94');

it('fetches token metadata for ERC-20 tokens', async () => {
  await expect(
    getTokenInfo(provider, '0xa74476443119A942dE498590Fe1f2454d7D4aC0d')
  ).resolves.toMatchSnapshot();
});

it('fetches token metadata for non-compliant ERC-20 tokens', async () => {
  await expect(
    getTokenInfo(provider, '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359')
  ).resolves.toMatchSnapshot();
});

it('throws an error if an address is not a token', async () => {
  await expect(
    getTokenInfo(provider, '0x0000000000000000000000000000000000000000')
  ).rejects.toThrow();
});
