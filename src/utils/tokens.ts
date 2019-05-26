import { Token } from '../store/tokens';
import { Contract, providers, utils } from 'ethers';

/**
 * Partial ERC-20 token ABI, with the functions we're interested in:
 *  - name()
 *  - decimals()
 *  - symbol()
 *  - balanceOf()
 */
const TOKEN_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

/**
 * The ABI above breaks with some contracts due to a bug in Ethers.js. To work around this issue,
 * we have to query the contract again, with `bytes32` instead of `string` as output.
 */
const ALTERNATIVE_METADATA_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

const getMetaData = async (contract: Contract): Promise<{ name: string; symbol: string }> => {
  try {
    return {
      name: await contract.name(),
      symbol: await contract.symbol()
    };
  } catch {
    // Workaround for issue in Ethers.js
    const alternativeContract = new Contract(
      contract.address,
      ALTERNATIVE_METADATA_ABI,
      contract.provider
    );

    const name = Buffer.from((await alternativeContract.name()).substring(2), 'hex');
    const symbol = Buffer.from((await alternativeContract.symbol()).substring(2), 'hex');

    const decoder = new TextDecoder();

    return {
      name: decoder.decode(name),
      symbol: decoder.decode(symbol)
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

/**
 * Get the token balance for an address. This returns the raw balance and ignores the token
 * decimals. If the specified address is not an ERC-20 (compatible) token, an error is thrown.
 *
 * @param {Provider} provider The provider to use.
 * @param {Token} token The token to get the balance for.
 * @param {string} address The address to get the balance for.
 * @return {Promise<BigNumber>} A Promise with the token balance as BigNumber.
 */
export const getTokenBalance = async (
  provider: providers.Provider,
  token: Token,
  address: string
): Promise<utils.BigNumber> => {
  const contract = new Contract(token.address, TOKEN_ABI, provider);
  return contract.balanceOf(address);
};
