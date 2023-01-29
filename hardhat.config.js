require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
    },
    matic: {
      chainId: 137,
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.OWNER_PRIVATE_KEY]
    }
  },
};