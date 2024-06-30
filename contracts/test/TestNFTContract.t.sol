//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import {Test} from "forge-std/Test.sol";
import {MintNFT} from "../src/MintNFT.sol";
import {DeployNFTContract} from "../script/DeployNFTContract.s.sol";
contract TestNFTContract is Test{

    address public constant USER = address(1);
    MintNFT public mintNft;

    function setUp() public {
        DeployNFTContract deployer = new DeployNFTContract();
        mintNft = deployer.run();
    }
    function testNFTName() public view {
        string memory expectedNFTname = "RegenRep";
        string memory actualNFTname = mintNft.name();
        assert(keccak256(abi.encodePacked(expectedNFTname)) == keccak256(abi.encodePacked(actualNFTname)));
    }
    function testMintFunction() public {
        vm.prank(USER);
        mintNft.mint("");
        vm.stopPrank();
        assert(mintNft.balanceOf(USER) == 1);
        assert(keccak256(abi.encodePacked("")) == keccak256(abi.encodePacked(mintNft.tokenURI(0))));
    }
}