const { ethers, upgrades } = require("hardhat");

const proxyAddress = "YOUR_PROXY_ADDRESS";

async function main() {
  const contractV2 = await ethers.getContractFactory("contractV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, contractV2);

  console.log(upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
