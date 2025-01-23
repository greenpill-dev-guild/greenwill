# GreenWill 
## Overview
GreenWill is a **Regen Reputation Meter** that will be implemented as a Frame on the Farcaster social platform.

- Web3 Integration: Utilizes Farcaster's web3 workflow with connected wallets.
- GreenWill Score: Calculates a Regen score based on user attributes, such as showing up, staying social, and paying forward.
- Sharing & Propagation: Enables users to share their score and mint a utility NFT as proof. The frame is accessible in pinned casts, shares, and embedded in casts promoting activity that contributes to the score.

Future versions will expand the scope in collaboration with sister orgs (ReFi DAO, RegensUnite, VDAO etc).

## Architecture

This project has two main folders:

```bash
.
├── contracts
│   ├── src
│   ├── broadcast
│   ├── script
│   └── test
└── web
    ├── app
    └── src
```

[contracts](/contracts/README.md) folder contains all the solidity code

[web](/web/README.md) folder contains all the frontend code

## Description

### Reputation Meters

After impact measurement for organizations matured in 2024, now individual Regens see a need to confirm their positive impact and activity. This desire works in two directions. One, Regen citizens enjoy having their impact verified and often share it to showcase their reputation. Two, Regen orgs need to confirm that members are real people, have a track record, and possess demonstrable skills. 

GreenWill is conceived as an evolving application, expanding over time to interact with apps and data from sister initiatives beyond the Greenpill Network. The intention is to enrich the larger Regen ecosystem.

## Specification

The initial implementation is deliberately simple: GreenWill will function in a Frame (an embedded app) on the Farcaster social platform. 

### Platform
Among the alternative social networks Farcaster has become a hotbed of activity. Many developers are building apps on the platform and Regens are active, creating channels, casting (Farcaster jargon for posting), exchanging news and info.

Farcaster is a web3 platform. New users are prompted to connect their Ethereum or Solana wallets. Once configured, this makes interacting with web3 apps easy. When transacting the user stays in-app, approving transactions via the connected wallet. It’s a seamless workflow.

### Functionality
GreenWill enables a citizen to introspect their onchain activity, resulting in a GreenWill Score based on values of attributes. After a citizen taps on the “Check my score” button the app inspects the citizen’s connected wallets for key properties. The app displays the results, tallies the score, and offers a Share option where the citizen can cast (post) their ‘GreenWill’. A second button offers to mint an NFT as a record.

In the initial version activities are segmented into three categories. Some examples of verifiable attributes are:
- **Showing Up:** e.g. owning a specific POAP, proving attendance at an event.
- **Staying Social:** e.g. following certain Regen organizations and channels on Farcaster.
- **Paying Forward:** e.g. donations made to Octant, Gitcoin, or sponsored grant rounds.

In future versions additional attributes will be added, especially as we collaborate with sister orgs. For instance, attending a sister org’s workshop could gain points for the GreenWill Score.

The GreenWill Frame will be accessible in a pinned cast on Farcaster Greenpill channels. It’ll also be embedded in marketing casts that promote activities which contribute to the GreenWill Score.

### Propagation
Once a citizen has obtained their score in the GreenWill Frame a “Share” button displays. If tapped a cast dialog comes up with pre-filled content. It includes a Greenpill branded image containing the score and editable textual content such as:

> Just checked my GreenWill score. It’s rising and I’m feeling regenerative! :mushroom:

When published the citizen’s cast will render with the content plus the GreenWill Frame embedded below. It includes an action button that reads “Check my score”.

In this way other citizens who read the cast will be able to check their own GreenWill Score. This makes the GreenWill Frame propagate.

After retrieving their score a citizen can mint an NFT as proof. The NFT contains an attractive image plus metadata that will be useful in the ReFi ecosystem.

## Similar Initiatives

We believe Reputation Meters are in the zeitgeist for 2025. Several other orgs are building or planning similar apps. We’re in contact with them and are exploring collaboration. As opposed to ‘reinventing the wheel’ we believe in collective action. Be regenerative! Especially on a data level, collaboration and integration should coalesce. 

