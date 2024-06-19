/* eslint-disable react/jsx-key */
import { frames } from "../../../../multi-page/frames/frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    image: <div tw="flex">Route 1 foo: {foo}</div>, // foo: bar
    buttons: [
      <Button action="post" target="/">
        Go back
      </Button>,
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
    ],
  };
});

// const fdk = new PinataFDK({
//   pinata_jwt: process.env.PINATA_JWT as string,
//   pinata_gateway: process.env.GATEWAY_URL as string,
// });

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

// export const POST = frames(async (ctx) => {
//   let i = parseInt(ctx.searchParams.i);
//   let roundID = ctx.searchParams.roundId;
//   getRoundDetails(roundID);
//   if(i < 0) i = 0;
//   //condition for upper check
//   let projNames = await getProjs();
//   // console.log("HEHE", projNames);
//   console.log("variable i ", i);
//   return {
//     // image: <div tw="flex">GM {projNames[i]}</div>, // foo: bar
//     image:
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         GM {projNames[parseInt(i)]}

//        <input>Enter </input>
//       </div>
//     ,
//     buttons: [
//       <Button action="post" target={{pathname: "../frames/route1", query: { i : parseInt(i) - 1 }}}>
//         Prev Project
//       </Button>,

//       <Button action="link" target="https://www.gitcoin.co">
//         View Project
//       </Button>,

//       <Button action="post" target={{pathname: "../frames/route1", query: { i : parseInt(i) + 1 }}}>
//         Next Project
//       </Button>,
//     ],
//   };
// });
