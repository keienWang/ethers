// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.25;

contract Map {
    uint256 public TransferNum = 1;
    mapping(uint256 => address) public contracts;

    function Transfer_Set(address c)public{
        contracts[TransferNum] = c;
        TransferNum++;
    }

    uint256 public Erc20_Num = 1;
    mapping(uint256 => address) public Erc20_Contracts;


    function Erc20_Set(address c)public{
        Erc20_Contracts[Erc20_Num] = c;
        Erc20_Num++;
    }

    uint256 public Erc721_Num = 1;
    mapping(uint256 => address) public Erc721_Contracts;

    function Erc721_Set(address c)public{
        Erc721_Contracts[Erc721_Num] = c;
        Erc721_Num++;
    }


    uint256 public Other_Num = 1;
    mapping(uint256 => address) public Other_Contracts;

    function Other_Set(address c)public{
        Other_Contracts[Other_Num] = c;
        Other_Num++;
    }
}