const BalanceScanner = artifacts.require('BalanceScanner');
const FixedBalanceToken = artifacts.require('FixedBalanceToken');

describe('BalanceScanner', () => {
  it('should get the Ether balance for all accounts', async () => {
    const scanner = await BalanceScanner.deployed();

    const accounts = await web3.eth.getAccounts();
    // First account was used to deploy the contract
    accounts.shift();

    const balances = await scanner.etherBalances(accounts);
    expect(accounts.length).to.equal(balances.length);

    for (let i = 0; i < accounts.length; i++) {
      const balance = web3.utils.toBN(await web3.eth.getBalance(accounts[i]));
      expect(balances[i].eq(balance)).to.equal(true);
    }
  });

  it('should get the token balance for all accounts', async () => {
    const scanner = await BalanceScanner.deployed();
    const token = await FixedBalanceToken.new();

    const accounts = await web3.eth.getAccounts();
    const balances = await scanner.tokenBalances(accounts, token.address);
    expect(accounts.length).to.equal(balances.length);

    const FIXED_BALANCE = web3.utils.toBN('100000000000000000000');

    for (let i = 0; i < accounts.length; i++) {
      expect(balances[i].eq(FIXED_BALANCE)).to.equal(true);
    }
  });
});
