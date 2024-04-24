// const hre  = require("hardhat");
// const ethers = require("ethers");


// const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");

// // const provider = ethers.getDefaultProvider();

// // const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/7cefad5b809b42d5a46924701044ab7f")
// // const  provider = new hre.ethers.InfuraProvider("mainnet","https://mainnet.infura.io/v3/7cefad5b809b42d5a46924701044ab7f")


// const abiWETH = ["function name() view returns (string)",
// "function symbol() view returns (string)",
// "function totalSupply() view returns (uint256)",
// "function balanceOf(address) view returns (uint)",
// ];


// const  a = (a,b)=>{
//     return a+b
// }

// const Contractaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"

// const Usdtcontract =new  ethers.Contract(Contractaddress,abiWETH,provider)

// async function  main(){
//     // const  b =  await provider.getBalance("0xE02E2F8D2052f72A20E48c39dFD12Dd1EF2fdF4A")
//     // console.log("balance :",b)
//      console.log(a(1,3));
// //    const name = await Usdtcontract.name();
// //    const symbol = await Usdtcontract.symbol();
// //    const totalSupply = await Usdtcontract.totalSupply();
// //    console.log(name,symbol,totalSupply)

// };

// main().catch( (error) =>
//     {
//         console.log("main is error!")
// });

function add(a,b){
    return a+b;
}


module.exports= add;