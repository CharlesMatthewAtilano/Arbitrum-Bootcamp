import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("HUBS", [
    "0x1F4F4f64545e895B60d919Ca3f543aed89BA87B8"
  ]);

  await token.waitForDeployment();

  console.log(
    `Token deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});