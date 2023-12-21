const { ethers } = require("ethers");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.PROXY_V1;

// import the ABI of contractV1
const { abi } = require("./artifacts/contracts/contractV2.sol/contractV2.json");

// create a provider and signer to connect to the network
const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// create an instance of the upgradeable contract
const contractV1Instance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

const main = async () => {
  let a = await contractV1Instance.getValue();
  console.log(parseInt(a));
  // const tx = await contractV1Instance.increaseValue(25);
  // await tx.wait();
  let tx = await contractV1Instance.setValue(56);
  await tx.wait();
  let c = await contractV1Instance.getValue();
  console.log(parseInt(c));
};
main();
