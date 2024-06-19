import { Button } from "frames.js/next";

import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: ctx.message ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        GM, {ctx.message.requesterUserData?.displayName}! Your FID is{" "}
        {ctx.message.requesterFid}
        {", "}
        {ctx.message.requesterFid < 20_000
          ? "you're OG!"
          : "welcome to the Farcaster!"}
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Say GM
      </div>
    ),
    buttons: !ctx.url.searchParams.has("saidGm")
      ? [
          <Button action="post" target={{ query: { saidGm: true } }}>
            Say GM
          </Button>,
        ]
      : [],
  };
});

// /* eslint-disable react/jsx-key */
// import { frames } from "./frames";
// import { Button } from "frames.js/next";

// const handler = frames(async () => {
//   return {
//     image: <div tw="flex">Welcome</div>,
//     buttons: [
//       // With query params
//       <Button
//         action="post"
//         target={{ pathname: "/route1", query: { foo: "bar" } }}
//       >
//         Go to route 1
//       </Button>,
//       // Without query params
//       <Button action="post" target="/route2">
//         Go to route 2
//       </Button>,
//     ],
//   };
// });

// export const GET = handler;
// export const POST = handler;

/* eslint-disable react/jsx-key */

// const handler = frames(async (ctx) => {
//   if (ctx.message) {
//     if (!ctx.message.inputText) {
//       console.log("error");
//       error("Invalid input: Empty text");
//     }
//   }

//   return {
//     image: ctx.message?.inputText ? (
//       <div tw="flex">Entered text: {ctx.message.inputText}</div>
//     ) : (
//       <div tw="flex flex-col">
//         <div tw="flex">Enter text</div>
//         <div tw="flex">Empty text input will throw an error</div>
//       </div>
//     ),
//     textInput: "Enter text or leave empty",
//     buttons: [<Button action="post">Enter</Button>],
//   };
// });

export const GET = handleRequest;
export const POST = handleRequest;
