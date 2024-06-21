/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { frames } from "../frames";

// const fdk = new PinataFDK({
//   pinata_jwt: process.env.PINATA_JWT as string,
//   pinata_gateway: process.env.GATEWAY_URL as string,
// });

export const POST = frames(async () => {
  return {
    image: <div tw="flex">Route 2</div>,
    buttons: [
      <Button action="post" target="/">
        Go to initial route
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/route1", query: { foo: "baz" } }}
      >
        Go to route 1
      </Button>,
    ],
  };
});

// const fdk = new PinataFDK({
//   pinata_jwt: process.env.PINATA_JWT as string,
//   pinata_gateway: process.env.GATEWAY_URL as string,
// });

// export async function GET(req: NextRequest, res: NextResponse) {
//   try {
//     const frameMetadata = await fdk.getFrameMetadata({
//       post_url: `${process.env.BASE_URL}/frame`,
//       buttons: [{ label: "Mint NFT", action: "post" }],
//       aspect_ratio: "1:1",
//       cid: "QmSYN7KT847Nado3fxFafYZgG6NXTMZwbaMvU9jhu5nPmJ",
//     });
//     return new NextResponse(frameMetadata);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: error });
//   }
// }

// export async function POST(req: NextRequest, res: NextResponse) {
//   const body = await req.json();
//   const fid = body.untrustedData.fid;
//   const address = await getConnectedAddressForUser(fid);
//   const balance = await balanceOf(address);
//   const { isValid, message } = await fdk.validateFrameMessage(body);
//   console.log(balance);
//   if (typeof balance === "number" && balance !== null && balance < 1) {
//     try {
//       const mint = await mintNft(address);
//       console.log(mint);
//       const frameMetadata = await fdk.getFrameMetadata({
//         post_url: `${process.env.BASE_URL}/redirect`,
//         buttons: [
//           { label: "Blog Tutorial", action: "post_redirect" },
//           { label: "Video Tutorial", action: "post_redirect" },
//         ],
//         aspect_ratio: "1:1",
//         cid: "QmUx3kQH4vR2t7mTmW3jHJgJgJGxjoBsMxt6z1fkZEHyHJ",
//       });
//       if (isValid) {
//         await fdk.sendAnalytics("frame-mint-tutorial-mint", body);
//       }

//       return new NextResponse(frameMetadata);
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json({ error: error });
//     }
//   } else {
//     const frameMetadata = await fdk.getFrameMetadata({
//       post_url: `${process.env.BASE_URL}/redirect`,
//       buttons: [
//         { label: "Blog Tutorial", action: "post_redirect" },
//         { label: "Video Tutorial", action: "post_redirect" },
//       ],
//       aspect_ratio: "1:1",
//       cid: "QmaaEbtsetwamJwfFPAQAFC6FAE1xeYsvF7EBKA8NYMjP2",
//     });
//     if (isValid) {
//       await fdk.sendAnalytics("frame-mint-tutorial-mint", body);
//     }

//     return new NextResponse(frameMetadata);
//   }
// }
