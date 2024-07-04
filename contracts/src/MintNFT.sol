// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract MintNFT is ERC721{

    address private owner;
    uint private s_tokenCounter; // Internal counter for NFTs minted
    mapping(uint256 => string) private s_tokenURIs;

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    constructor() ERC721("GreenWill", "GWLL") {
      s_tokenCounter = 0;
      owner = msg.sender;
    }

    function mint(string memory tokenURI) public onlyOwner{ 
      _safeMint(msg.sender, s_tokenCounter);
      s_tokenURIs[s_tokenCounter] = tokenURI;
      s_tokenCounter = s_tokenCounter + 1;
    }

}

//contract deployed at: 0x0dFfe76472E7698e5D411dd5bF21Fe22F5C6337C
