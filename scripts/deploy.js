const hre = require("hardhat");
const {
    time,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");



    async function main() {
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const ONE_GWEI = 1_000_000_000;

        const now = new Date();
        const timestamp = now.getTime();
        const lockedAmount = ONE_GWEI;
        // const unlockTime = (await time.late st()) + ONE_YEAR_IN_SECS;
        // const lockcontract = await hre.ethers.getContractFactory("Lock");
        const Lock = await  hre.ethers.getContractFactory("Lock");
    
        const accounts = await hre.ethers.getSigners();



        
        // const lock = await Lock.deploy(timestamp+ ONE_YEAR_IN_SECS);
        console.log(accounts)
        const lock = await Lock.connect(accounts[0]).deploy(timestamp+ ONE_YEAR_IN_SECS)
       await lock.waitForDeployment();
        console.log("success ", lock.target);
    }
    
    // 运行脚本
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });