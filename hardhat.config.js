require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    polygon: {
      url: process.env.ALCHEMY_CONNECTION_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KAY]
    }
  }
};

//Twitter Contract Address:: ==> 0x1a6E1c892130ea6E4177d94A3B49e2dF72a2d252
