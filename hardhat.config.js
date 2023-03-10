require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    ploygon: {
      url: process.env.ALCHEMY_CONNECTION_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KAY]
    }
  }
};
