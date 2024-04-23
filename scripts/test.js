const ethers = require("ethers");

const INFURA_ID = 'b673d25f6d0547d68bc54c603728209e'
// 连接以太坊主网
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)


const abiWETH = ["function name() view returns (string)",
"function symbol() view returns (string)",
"function totalSupply() view returns (uint256)",
"function balanceOf(address) view returns (uint)",
];
const addressWETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' // WETH Contract


const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)

const main = async () => {
    // 1. 读取WETH合约的链上信息（WETH abi）
    const nameWETH = await contractWETH.name()
    const symbolWETH = await contractWETH.symbol()
    const totalSupplyWETH = await contractWETH.totalSupply()
    console.log("\n1. 读取WETH合约信息")
    console.log(`合约地址: ${addressWETH}`)
    console.log(`名称: ${nameWETH}`)
    console.log(`代号: ${symbolWETH}`)
    console.log(`总供给: ${ethers.formatEther(totalSupplyWETH)}`)
    const balanceWETH = await contractWETH.balanceOf('vitalik.eth')
    console.log(`Vitalik持仓: ${ethers.formatEther(balanceWETH)}\n`)
    // console.log(111)

}

main()


