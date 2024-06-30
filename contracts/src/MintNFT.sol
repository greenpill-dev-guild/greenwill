// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract MintNFT is ERC721{

    uint private s_tokenCounter; // Internal counter for NFTs minted
    mapping(uint256 => string) private s_tokenURIs;

    constructor() ERC721("RegenRep", "RRP") {
      s_tokenCounter = 0;
    }

    //"ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";
    function mint(string memory tokenURI) public {
      _safeMint(msg.sender, s_tokenCounter);
      s_tokenURIs[s_tokenCounter] = tokenURI;
      s_tokenCounter = s_tokenCounter + 1;
    }

}