// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

interface Map {
        function Other_Set(address c)external;
}

contract A{
    event Transfer(address from, address to , uint value);
   
    constructor(address _map){
        Map(_map).Other_Set(address(this));
    }
    fallback() external { 
        emit  Transfer(msg.sender,  address(this) , block.timestamp);
        
    }
}