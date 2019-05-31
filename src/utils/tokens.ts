import { Token } from '../store/tokens';
import { Contract, providers, utils } from 'ethers';

/**
 * Partial ERC-20 token ABI, with the functions we're interested in.
 */
const TOKEN_ABI = [
  'name() view returns (string name)',
  'decimals() view returns (uint8 decimals)',
  'symbol() view returns (string symbol)'
];

/**
 * The ABI above breaks with some contracts that are technically not ERC-20 compliant. To work
 * around this issue, we have to query the contract again, with `bytes32` instead of `string` as
 * output.
 */
const ALTERNATIVE_TOKEN_ABI = [
  'name() view returns (bytes32 name)',
  'decimals() view returns (uint8 decimals)',
  'symbol() view returns (bytes32 symbol)'
];

const getMetaData = async (contract: Contract): Promise<{ name: string; symbol: string }> => {
  try {
    return {
      name: await contract.name(),
      symbol: await contract.symbol()
    };
  } catch {
    const alternativeContract = new Contract(
      contract.address,
      ALTERNATIVE_TOKEN_ABI,
      contract.provider
    );

    return {
      name: utils.parseBytes32String(await alternativeContract.name()),
      symbol: utils.parseBytes32String(await alternativeContract.symbol())
    };
  }
};

/**
 * Get token info for an address. If the specified address is not an ERC-20 (compatible) token, an
 * error is thrown.
 *
 * @param {Provider} provider The provider to use.
 * @param {string} address The address of the token contract.
 * @return {Promise<Token>} A Promise with the Token info.
 */
export const getTokenInfo = async (
  provider: providers.Provider,
  address: string
): Promise<Token> => {
  const contract = new Contract(address, TOKEN_ABI, provider);

  const { name, symbol } = await getMetaData(contract);

  return {
    name,
    symbol,
    decimals: await contract.decimals(),
    address
  };
};
