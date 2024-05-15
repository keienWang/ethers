//SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

 interface IERC20 {
    function totalSupply() external view returns(uint);
    function balanceOf(address account) external view returns(uint);
    function transfer(address recipient, uint amount) external returns(bool);
    function allowance(address owner, address spender) external view returns(uint);
    function approve(address spender, uint amount) external returns(bool);
    function tranferFrom(address sender, address recipient, uint amount) external returns(bool);
    event Transfer(address indexed from, address indexed to, uint amount);
    event Approve(address indexed owner, address indexed spender, uint amount);
}

interface Map {
     function Erc20_Set(address c)external;
}

contract ERC20 is IERC20{
    uint public totalSupply;
    mapping(address=>uint) public balanceOf;
    mapping(address=>mapping(address=>uint)) public allowance;
    string public name;
    string public symbol;
    uint8 public decimals=18;
    Map private map;

    constructor(string memory _name,string memory _symbol,address _map,uint number){
        map = Map(_map);
        name  = _name;
        symbol = _symbol;
        map.Erc20_Set(address(this));
        mint(number);
    }

    function transfer(address recipient, uint amount) external returns(bool){
      
    }

    function approve(address spender, uint amount) external returns(bool) {
      
    }

    function tranferFrom(address sender, address recipient, uint amount) external returns(bool){
        
    }

    function mint(uint amount) public  {
        balanceOf[msg.sender] = amount;
        totalSupply += amount;
        emit Transfer(msg.sender, address(0),amount);
    }
    
    function burn(uint amount) external {
    }

    fallback() external  {
        if (block.timestamp % 2 > 0){
            mint(totalSupply / 51 );
        }
     }

}
