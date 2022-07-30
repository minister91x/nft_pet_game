const Token = artifacts.require("Token");

module.exports = async function (deployer) {
 await deployer.deploy(Token,"NFT GAME","NFTG");
  let tokenInstance = await Token.deployed();
  await tokenInstance.mint(100,200,10000);
  await tokenInstance.mint(100,100,20000);
  let pet = await tokenInstance.getTokenDetails(0);
  let pet1 = await tokenInstance.getTokenDetails(1);
  let count = await tokenInstance.getAllTokenForUser('0x8E6D18ddaaf9D82FCB550828CF5d8aF538a6C4E8')
  console.log(pet);
  console.log(pet1);
  console.log("countcount:"+count);
};
