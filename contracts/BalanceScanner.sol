pragma solidity 0.5.1;

/**
 * @title Partial ERC-20 token interface
 */
contract Token {
  function balanceOf (address) public view returns (uint);
}

/**
 * @title An Ether or token balance scanner
 * @author Maarten Zuidhoorn
 */
contract BalanceScanner {
  /**
   * @notice Get the Ether balance for all addresses specified
   * @param addresses The addresses to get the Ether balance for
   * @return The Ether balance for all addresses in the same order as specified
   */
  function etherBalances(address[] calldata addresses) external view returns (uint[] memory balances) {
    balances = new uint[](addresses.length);

    for (uint i = 0; i < addresses.length; i++) {
      balances[i] = addresses[i].balance;
    }
  }

  /**
   * @notice Get the ERC-20 token balance of `token` for all addresses specified
   * @dev This does not check if the `token` address specified is actually an ERC-20 token
   * @param addresses The addresses to get the token balance for
   * @param token The address of the ERC-20 token contract
   * @return The token balance for all addresses in the same order as specified
   */
  function tokenBalances(address[] calldata addresses, address token) external view returns (uint[] memory balances) {
    balances = new uint[](addresses.length);
    Token tokenContract = Token(token);

    for (uint i = 0; i < addresses.length; i++) {
      balances[i] = tokenContract.balanceOf(addresses[i]);
    }
  }

  /**
   * @notice This contract does not accept ETH payments.
   */
  function() external payable {
    revert();
  }
}
