const hardhat = require('hardhat');

async function main() {
    const TwitterContract = await hardhat.ethers.getContractFactory("Twitter");
    const twitterContract = await TwitterContract.deploy();
    await twitterContract.deployed();

    console.log("Twitter Contract deployed to the address:: ", twitterContract.address);
}

main().then(() => {
    console.log("Success!!");
    process.exit(0);
}).catch(error => {
    console.log("ERROR:: ", error);
    process.exit(1);
})