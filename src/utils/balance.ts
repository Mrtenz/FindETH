import { Address, Balance } from '../store/network';
import { Token } from '../store/tokens';
import { chunk } from './chunk';
import { Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import { BALANCE_SCANNER_ABI } from '../config';
import { Token } from '../store/tokens';
import EthScan, { EthersProvider } from 'eth-scan';

const SCANNER_ADDRESS = '0x82Ea2E7834Bb0D6224dd6fd7125d44b83d6D6809';

/**
 * Get the Ether balance for multiple addresses in a single call. Note that this is limited by the
 * block gas limit, so it's not possible to fetch an unlimited number of addresses at once, so
 * calls are batched per 1000 items.
 *
 * @param {Provider} provider The provider to use.
 * @param {Address[]} addresses The addresses to get the balance for.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the
 *   balance.
 */
export const getEtherBalances = async (
  provider: Provider,
  addresses: Address[]
): Promise<Balance[]> => {
  const scanner = new EthScan(new EthersProvider(provider));
  const balances = await scanner.getEtherBalances(addresses.map(address => address.address));

  return addresses.map(address => {
    return {
      ...address,
      balance: balances[address.address].toString(10)
    };
  });
};

/**
 * Get the token balance for multiple addresses in a single call. Note that this is limited by the
 * block gas limit, so it's not possible to fetch an unlimited number of addresses at once, so
 * calls are batched per 1000 items.
 *
 * @param {Provider} provider The provider to use.
 * @param {Address[]} addresses The addresses to get the balance for.
 * @param {Token} token The token to fetch the balances from.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the
 *   balance.
 */
export const getTokenBalances = async (
  provider: Provider,
  addresses: Address[],
  token: Token
): Promise<Balance[]> => {
  const scanner = new EthScan(new EthersProvider(provider));
  const balances = await scanner.getTokenBalances(
    token.address,
    addresses.map(address => address.address)
  );

  return addresses.map(address => {
    return {
      ...address,
      balance: balances[address.address].toString(10)
    };
  });
};
