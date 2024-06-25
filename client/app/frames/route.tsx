// /* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { frames } from "./frames";

const handler = frames(async (ctx) => {
  //   if (ctx.message) {
  //     if (!ctx.message.inputText) {
  //       console.log("error");
  //       error("Invalid input: Empty text");
  //     }
  //   }

  return {
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className=""
      >
        <h2>Check Your GreenWill</h2>
        <p></p>
      </div>
    ),
    buttons: [
      <Button action="post" target="/calculate">
        Calculate GreenWill
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
