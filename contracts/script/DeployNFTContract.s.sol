//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {MintNFT} from "../src/MintNFT.sol";

contract DeployNFTContract is Script{
    function run() external returns(MintNFT){
        vm.startBroadcast();
        MintNFT mintnft = new MintNFT();
        vm.stopBroadcast();
        return mintnft;
    }
}