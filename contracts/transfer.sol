// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;


contract Relay {
   constructor (address  _to1)  payable {
        (bool success, ) = payable(_to1).call{value: msg.value}("");
        // selfdestruct(payable (_to1));
    }
}
contract Relay2 {
   constructor (address _to1)  payable {
        new Relay{value:msg.value}((_to1));
        // selfdestruct(payable (_to1));
    }
}

contract Transfer{
     constructor(address  to) payable {
        new Relay2{value:msg.value}(to);
    }
}

