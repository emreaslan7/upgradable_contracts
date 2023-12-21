const { ethers, upgrades } = require("hardhat");

async function main() {
  const contractV1 = await ethers.getContractFactory("contractV1");
  const proxy = await upgrades.deployProxy(contractV1, [23]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();
