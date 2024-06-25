import { createFrames } from "frames.js/next";
import { farcasterHubContext, openframes } from "frames.js/middleware";
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from "frames.js/xmtp";
import { getLensFrameMessage, isLensFrameActionPayload } from "frames.js/lens";

// import { appURL } from "../../../utils";

export type State = {
  step: "connect" | "calculate" | "claim";
  hasClaimedToken: boolean;
  greenWillScore: number;
  error: string;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: {
    step: "connect",
    hasClaimedToken: false,
    greenWillScore: 0,
    error: "",
  },
  stateSigningSecret: "my-secret-key",
  // baseUrl: appURL(),
  middleware: [
    // imagesWorkerMiddleware({
    //   imagesRoute: "/images",
    // }),
    farcasterHubContext({
      // remove if you aren't using @frames.js/debugger or you just don't want to use the debugger hub
      ...(process.env.NODE_ENV === "production"
        ? {}
        : {
            hubHttpUrl: "http://localhost:3010/hub",
          }),
    }),
    openframes({
      clientProtocol: {
        id: "xmtp",
        version: "2024-02-09",
      },
      handler: {
        isValidPayload: (body: JSON) => isXmtpFrameActionPayload(body),
        getFrameMessage: async (body: JSON) => {
          if (!isXmtpFrameActionPayload(body)) {
            return undefined;
          }
          const result = await getXmtpFrameMessage(body);

          return { ...result };
        },
      },
    }),
    openframes({
      clientProtocol: {
        id: "lens",
        version: "1.0.0",
      },
      handler: {
        isValidPayload: (body: JSON) => isLensFrameActionPayload(body),
        getFrameMessage: async (body: JSON) => {
          if (!isLensFrameActionPayload(body)) {
            return undefined;
          }
          const result = await getLensFrameMessage(body);

          return { ...result };
        },
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
});
