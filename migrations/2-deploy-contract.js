const BalanceScanner = artifacts.require('BalanceScanner');

const deploy = deployer => {
  deployer.deploy(BalanceScanner);
};

module.exports = deploy;
