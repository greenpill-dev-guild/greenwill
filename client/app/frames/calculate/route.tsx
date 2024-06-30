/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { frames } from "../frames";

const PASSING_SCORE = 40;

function scoreMessage(score: number) {
  if (score >= 80) {
    return "Claim";
  } else if (score >= 60) {
    return "Claim";
  } else if (score >= 40) {
    return "Claim your badge";
  } else {
    return "Sorry, you don't have enough GreenWill to claim token";
  }
}

export const POST = frames(async (ctx) => {
  const greenWillScore = 50; /// TODO: Update with function returning score

  const canClaim = greenWillScore > PASSING_SCORE;

  const updatedState = {
    ...ctx.state,
    greenWillScore,
  };

  {
    /* // {greenWillScore} */
  }
  return {
    state: updatedState,
    image: (
      <div tw={canClaim ? "bg-green-400" : "bg-red-200"}>
        {scoreMessage(greenWillScore)}
      </div>
    ),
    buttons: canClaim
      ? [
          <Button action="post" target={{ pathname: "/claim", query: {} }}>
            Claim GreenWill
          </Button>,
        ]
      : [],
  };
});

// export async function POST(req: NextRequest, res: NextResponse) {
//   const body = await req.json();
//   const buttonId = body.untrustedData.buttonIndex;
//   const { isValid, message } = await fdk.validateFrameMessage(body);
//   if (buttonId === 1) {
//     try {
//       if (isValid) {
//         await fdk.sendAnalytics("frame-mint-tutorial-blog", body);
//       }
//       return NextResponse.redirect(
//         "https://www.pinata.cloud/blog/how-to-build-a-farcaster-frame-that-mints-nfts",
//         { status: 302 },
//       );
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json({ error: error });
//     }
//   } else {
//     try {
//       if (isValid) {
//         await fdk.sendAnalytics("frame-mint-tutorial-video", body);
//       }
//       return NextResponse.redirect("https://youtu.be/5VVOMolm-TA", {
//         status: 302,
//       });
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json({ error: error });
//     }
//   }
// }
