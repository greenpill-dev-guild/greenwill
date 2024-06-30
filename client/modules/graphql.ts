import { request, gql } from "graphql-request";

const AIRSTACK_API = "https://grants-stack-indexer-v2.gitcoin.co/graphql";
const GRANTS_STACK_API = "https://grants-stack-indexer-v2.gitcoin.co/graphql";

const map = new Map();
map.set("owocki", true);
map.set("jimicohen", true);
map.set("luciano", true);

const queryGreenWill = gql`
  query GetFollowers {
    SocialFollowers(
      input: {
        filter: {
          identity: { _eq: "fc_fname:wusp" }
          dappName: { _eq: farcaster }
        }
        blockchain: ALL
        limit: 50
      }
    ) {
      Follower {
        dappName
        followerProfileId
        followerAddress {
          addresses
          socials {
            profileName
          }
        }
      }
    }
  }
`;

const queryGrants = gql`
  query QueryRound($id: String!, $chainId: Int!) {
    round(chainId: $chainId, id: $id) {
      id
      chainId
      matchAmountInUsd
      roundMetadata
    }
  }
`;

export async function calculateGreenWill() {
  const data = await request<{ rounds: any[] }>(AIRSTACK_API, queryGreenWill);
  let followers = [];
  const temp = data.data.SocialFollowers.Follower;
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].followerAddress.socials.length; j++) {
      followers.push(temp[i].followerAddress.socials[j].profileName);
    }
  }
  console.log(followers);

  let score = 0;
  for (let i = 0; i < followers.length; i++) {
    if (map.get(followers[i]) === true) {
      score++;
    }
  }
}

export async function fetchGrants(id: string) {
  const data = await request<{ round: any }>(GRANTS_STACK_API, queryGrants, {
    id,
    chainId: 42161, // TBD Probably Optimism or Abritrum
  });

  return data.round;
}
