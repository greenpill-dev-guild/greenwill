// /* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

import { frames } from "./frames";

const handler = frames(async () => {
  return {
    image: (
      <div className="bg-green-300">
        <h2>Check Your GreenWill!</h2>
        <img alt="Green Pill" src="/pill.png" className="aspect-square w-1/2 h-1/2"/>
      </div>
    ),
    buttons: [
      <Button action="post" target="/calculate">
        Calculate
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
