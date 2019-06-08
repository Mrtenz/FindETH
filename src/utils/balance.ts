import { Balance } from '../store/network';
import { Token } from '../store/tokens';
import { Provider } from '@ethersproject/providers';
import EthScan, { EthersProvider } from 'eth-scan';
import { formatUnits } from '@ethersproject/units';
import { WalletResult } from '../store/wallet';

/**
 * Get the Ether balance for multiple addresses in a single call. Note that this is limited by the
 * block gas limit, so it's not possible to fetch an unlimited number of addresses at once, so
 * calls are batched per 1000 items.
 *
 * @param {Provider} provider The provider to use.
 * @param {Address[]} results The results to get the balance for.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the
 *   balance.
 */
export const getEtherBalances = async (
  provider: Provider,
  results: WalletResult[]
): Promise<Balance[]> => {
  const scanner = new EthScan(new EthersProvider(provider));
  const balances = await scanner.getEtherBalances(results.map(address => address.address));

  return results.map(result => {
    return {
      result,
      balance: formatDecimals(balances[result.address])
    };
  });
};

/**
 * Get the token balance for multiple addresses in a single call. Note that this is limited by the
 * block gas limit, so it's not possible to fetch an unlimited number of addresses at once, so
 * calls are batched per 1000 items.
 *
 * @param {Provider} provider The provider to use.
 * @param {WalletResult[]} results The addresses to get the balance for.
 * @param {Token} token The token to fetch the balances from.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the
 *   balance.
 */
export const getTokenBalances = async (
  provider: Provider,
  results: WalletResult[],
  token: Token
): Promise<Balance[]> => {
  const scanner = new EthScan(new EthersProvider(provider));
  const balances = await scanner.getTokenBalances(
    token.address,
    results.map(result => result.address)
  );

  return results.map(result => {
    return {
      result,
      balance: formatDecimals(balances[result.address], token.decimals)
    };
  });
};

/**
 * Format a bigint as a string with decimals.
 *
 * @param {string} balance The big integer to format.
 * @param {number} decimals The number of decimals for the balance. Defaults to 18.
 * @return {string} A formatted string with decimals.
 */
export const formatDecimals = (balance: bigint, decimals: number = 18): string => {
  const newBalance = formatUnits(balance.toString(10), decimals);
  if (newBalance === '0.0') {
    return '0';
  }
  return newBalance;
};
