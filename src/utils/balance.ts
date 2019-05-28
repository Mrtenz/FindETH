import { Address, Balance } from '../store/network';
import { Token } from '../store/tokens';
import { chunk } from './chunk';
import { Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import { BALANCE_SCANNER_ABI } from '../config';

const SCANNER_ADDRESS = '0x82Ea2E7834Bb0D6224dd6fd7125d44b83d6D6809';

/**
 * Batch a function call per `batchSize` items.
 *
 * @param {Input} what An array of the items to batch.
 * @param {number} batchSize The size of the batches.
 * @param {Handler} handler A function that takes an array of the items, that returns an array of
 *   other items.
 * @param {...any[]} args Optional args to pass to the handler function.
 * @return {Promise<Output>} A Promise with the output of all function calls.
 */
const batch = async <
  Input,
  Output,
  Args,
  Handler extends (input: Input[], ...args: Args[]) => Promise<Output[]>
>(
  what: Input[],
  batchSize: number,
  handler: Handler,
  ...args: Args[]
): Promise<Output[]> => {
  const chunks = chunk(what, batchSize);

  return chunks.reduce<Promise<Output[]>>(async (current, next) => {
    return Promise.resolve([...(await current), ...(await handler(next, ...args))]);
  }, Promise.resolve([]));
};

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
  const contract = new Contract(SCANNER_ADDRESS, BALANCE_SCANNER_ABI, provider);

  const balances = await batch<
    string,
    BigNumber,
    undefined,
    (addresses: string[]) => Promise<BigNumber[]>
  >(addresses.map(address => address.address), 1000, contract.etherBalances);

  return balances.reduce<Balance[]>((current, next, index) => {
    return [
      ...current,
      {
        ...addresses[index],
        balance: formatUnits(next, 18)
      }
    ];
  }, []);
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
  const contract = new Contract(SCANNER_ADDRESS, BALANCE_SCANNER_ABI, provider);

  const balances = await batch<
    string,
    BigNumber,
    string,
    (addresses: string[]) => Promise<BigNumber[]>
  >(addresses.map(address => address.address), 1000, contract.tokenBalances, token.address);

  return balances.reduce<Balance[]>((current, next, index) => {
    return [
      ...current,
      {
        ...addresses[index],
        balance: formatUnits(next, token.decimals)
      }
    ];
  }, []);
};
