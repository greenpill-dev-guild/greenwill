import { Button } from "frames.js/next";

import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="bg-green-300">
        Check Your GreenWill!
        {/* <img
          alt="Green Pill"
          src="/pill.png"
          className="aspect-square w-1/2 h-1/2"
        /> */}
      </div>
    ),
    buttons: [
      <Button action="post" target="/calculate">
        Calculate
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
