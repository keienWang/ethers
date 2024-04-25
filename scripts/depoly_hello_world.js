const hre = require("hardhat");





async function main(){
    const accounts =await hre.ethers.getSigners();

    console.log(accounts)
    const hello_world = await hre.ethers.getContractFactory("Hello_World")

    const contract = await hello_world.connect(accounts[1]).deploy();
    await contract.waitForDeployment();
    console.log("部署后合约地址:", contract.target,contract.name());

}

 main()