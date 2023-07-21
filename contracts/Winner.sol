// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

interface ContractInterface {
    function attempt() external;
}

contract Winner {
    address contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }
    function callWinner() external {
        ContractInterface(contractAddress).attempt();
    }
}