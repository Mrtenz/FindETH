import { JsonRpcProvider } from '@ethersproject/providers';
import { Address } from '../store/network';
import { formatDecimals, getEtherBalances, getTokenBalances } from './balance';
import { Token } from '../store/tokens';

jest.setTimeout(100000);

const provider = new JsonRpcProvider(
  'https://mainnet.infura.io/v3/bfea47cc97c440a687c8762553739a94'
);

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

it('formats a bigint to a string with decimals', () => {
  const balance = BigInt(123456789);

  expect(formatDecimals(balance, 8)).toBe('1.23456789');
  expect(formatDecimals(balance, 9)).toBe('0.123456789');
  expect(formatDecimals(balance, 10)).toBe('0.0123456789');
  expect(formatDecimals(BigInt(0), 10)).toBe('0');
});
