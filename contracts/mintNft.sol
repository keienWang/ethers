// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;


contract ScrollOriginsNFT {
   
    struct Metadata {
        address deployer;
        address firstDeployedContract;
        address bestDeployedContract;
        uint256 rarityData;
    }

    constructor(
       
    ) {}

    function mint(
        address receiver,
        Metadata memory meta,
        bytes32[] calldata proof
    ) external  {
       
    }

}