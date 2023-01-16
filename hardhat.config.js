require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
    },
    matic: {
      chainId: 137,
      url: "https://polygon-mainnet.infura.io/v3/<key>",
      accounts: ["a private key"]
    }
  },
};