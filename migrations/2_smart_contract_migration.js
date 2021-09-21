const SmartContract = artifacts.require("RandomBeez"); // Change this to what your Contract Name is in Solidity

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Random Beez", "Beez", "ipfs://QmSaRbXF6Gqqm6cHcBKF5s6JQahT6pKmXgo2Kw4iQHGLJQ/"); //
};
