const Migrations = artifacts.require('Migrations');

const deploy = deployer => {
  deployer.deploy(Migrations);
};

module.exports = deploy;
