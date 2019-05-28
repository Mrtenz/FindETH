import { Token } from '../store/tokens';
import { Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { ALT_TOKEN_METADATA_ABI, TOKEN_METADATA_ABI } from '../config';

const getMetaData = async (contract: Contract): Promise<{ name: string; symbol: string }> => {
  try {
    return {
      name: await contract.name(),
      symbol: await contract.symbol()
    };
  } catch {
    const alternativeContract = new Contract(
      contract.address,
      ALT_TOKEN_METADATA_ABI,
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
export const getTokenInfo = async (provider: Provider, address: string): Promise<Token> => {
  const contract = new Contract(address, TOKEN_METADATA_ABI, provider);

  const { name, symbol } = await getMetaData(contract);

  return {
    name,
    symbol,
    decimals: await contract.decimals(),
    address
  };
};
