/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { error as frameError } from "frames.js/core";

// import { balanceOf, mintNft } from "../../../utils/mint";
// import { getConnectedAddressForUser } from "../../../utils/fc";

import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  if (ctx.state) {
    if (ctx.state.greenWillScore === null) {
      console.log("error");
      frameError("No Greenwill score found.");
    }
  }
  //       if (isValid) {
  //         await fdk.sendAnalytics("frame-mint-tutorial-mint", body);
  //       }

  // const address = await getConnectedAddressForUser(ctx.message?.requesterFid!);
  // const balance = await balanceOf(address);

  // console.log(balance);

  // if (balance === 0) {
  //   const mint = await mintNft(address);
  //   console.log(mint);
  // }

  const updatedState = {
    ...ctx.state,
  };

  const error = "";
  return {
    state: updatedState,
    image: (
      <div className={error ? "" : ""}>
        {error
          ? "Error minting token"
          : "Congratulations you've received your greenwill token"}
      </div>
    ),
    buttons: [
      <Button action="link" target="">
        View NFT
      </Button>,
    ],
  };
});
