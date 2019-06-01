import { providers } from 'ethers';
import { Address } from '../../src/store/network';
import { getEtherBalances, getTokenBalances } from '../../src/utils';
import { Token } from '../../src/store/tokens';

const provider = new providers.InfuraProvider(1, 'bfea47cc97c440a687c8762553739a94');

it('fetches Ether balances for multiple addresses', async () => {
  const addresses: Address[] = [
    {
      address: '0x0000000000000000000000000000000000000000',
      path: `m/44'/60'/0'/0/0`
    },
    {
      address: '0x0000000000000000000000000000000000000001',
      path: `m/44'/60'/0'/0/1`
    },
    {
      address: '0x0000000000000000000000000000000000000002',
      path: `m/44'/60'/0'/0/2`
    }
  ];

  const balances = await getEtherBalances(provider, addresses);

  expect(balances.length).toBe(3);
  expect(balances[0].address).toBe(addresses[0].address);
  expect(balances[0].balance).not.toBe('0');
});

it('fetches token balances for multiple addresses', async () => {
  const addresses: Address[] = [
    {
      address: '0x0000000000000000000000000000000000000000',
      path: `m/44'/60'/0'/0/0`
    },
    {
      address: '0x0000000000000000000000000000000000000001',
      path: `m/44'/60'/0'/0/1`
    },
    {
      address: '0x0000000000000000000000000000000000000002',
      path: `m/44'/60'/0'/0/2`
    }
  ];

  const token: Token = {
    name: 'Dai Stablecoin v1.0',
    symbol: 'DAI',
    decimals: 18,
    address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'
  };

  const balances = await getTokenBalances(provider, addresses, token);

  expect(balances.length).toBe(3);
  expect(balances[0].address).toBe(addresses[0].address);
  expect(balances[0].balance).not.toBe('0');
});
