// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  const Winner = await hre.ethers.getContractFactory("Winner");
  const winner = await Winner.deploy(contractAddress);

  await winner.deployed();

  console.log(
    `Contract deployed to:${winner.address}`
  );

  
  const result = await winner.callWinner();
  console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
