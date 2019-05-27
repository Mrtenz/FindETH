pragma solidity 0.5.1;

/**
 * @title Minimal ERC-20 token implementation
 * @author Maarten Zuidhoorn
 * @dev This contract exists purely for testing purposes
 */
contract FixedBalanceToken {
  /**
   * @dev This function always returns the same value, regardless of the address provided
   * @return A fixed value of 100000000000000000000
   */
  function balanceOf(address who) public pure returns (uint balance) {
    return 100000000000000000000;
  }
}
