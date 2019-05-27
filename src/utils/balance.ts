import { Address } from '../store/network';
import { Contract, providers, utils } from 'ethers';
import { Token } from '../store/tokens';

// TODO: Deploy contract
const SCANNER_ADDRESS = '0x0';

const SCANNER_ABI = ['etherBalances(address[])', 'tokenBalances(address[],address)'];

/**
 * Get the Ether balance for multiple addresses in a single call. Note that this is limited by the block gas limit, so
 * it's not possible to fetch an unlimited number of addresses at once.
 *
 * @param {Provider} provider The provider to use.
 * @param {Address[]} addresses The addresses to get the balance for.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the balance.
 */
export const getEtherBalances = async (
  provider: providers.Provider,
  addresses: Address[]
): Promise<Map<Address, utils.BigNumber>> => {
  const contract = new Contract(SCANNER_ADDRESS, SCANNER_ABI, provider);
  const balances: utils.BigNumber[] = await contract.etherBalances(
    addresses.map(address => address.address)
  );

  return balances.reduce<Map<Address, utils.BigNumber>>((current, next, index) => {
    current.set(addresses[index], next);
    return current;
  }, new Map<Address, utils.BigNumber>());
};

/**
 * Get the token balance for multiple addresses in a single call. Note that this is limited by the block gas limit, so
 * it's not possible to fetch an unlimited number of addresses at once.
 *
 * @param {Provider} provider The provider to use.
 * @param {Address[]} addresses The addresses to get the balance for.
 * @param {Token} token The token to fetch the balances from.
 * @return {Promise<Map<Address, BigNumber>>>} A Promise with a Map containing the address and the balance.
 */
export const getTokenBalances = async (
  provider: providers.Provider,
  addresses: Address[],
  token: Token
): Promise<Map<Address, utils.BigNumber>> => {
  const contract = new Contract(SCANNER_ADDRESS, SCANNER_ABI, provider);
  const balances: utils.BigNumber[] = await contract.tokenBalances(
    addresses.map(address => address.address),
    token.address
  );

  return balances.reduce<Map<Address, utils.BigNumber>>((current, next, index) => {
    current.set(addresses[index], next);
    return current;
  }, new Map<Address, utils.BigNumber>());
};
