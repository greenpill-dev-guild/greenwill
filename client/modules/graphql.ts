import { request, gql } from "graphql-request";

const AIRSTACK_API = "https://api.airstack.xyz/graphql";
const GRANTS_STACK_API = "https://grants-stack-indexer-v2.gitcoin.co/graphql";


const mapFollowers = new Map<string, boolean>([["owocki", true], ["jimicohen", true], ["luciano", true]]);


const mapFollowings = new Map<string, boolean>([["owocki", true], ["jimicohen", true], ["luciano", true], ["octant", true], ["sophia", true], ["jessepollak", true]]);

const mapChannels = new Map<string, boolean>([["Green-pill", true], ["Regen", true], ["Greenpill", true]]);

const queryFollowers = gql`
  query GetFarcasterFollowers($user: Identity!) {
    SocialFollowers(
      input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 50}
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


const queryFollowings = gql`
  query GetFarcasterFollowings($user: Identity!) {
  SocialFollowings(
    input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 50}
  ) {
    Following {
      followingAddress {
        socials(input: {filter: {dappName: {_eq: farcaster}}}) {
          profileName
        }
      }
    }
  }
}
`;

const queryRegenTokens = gql`
  query GetRegenTokensForWusp($user: Identity!) {
  Socials(input: {filter: {profileName: {_eq: $user}}, blockchain: ALL}) {
    Social {
      dappName
      profileName
      userAddressDetails {
        tokenBalances(input: {filter: {tokenAddress: {_eq: "0xEc482De9569a5EA3Dd9779039b79e53F15791fDE"}}, limit: 50}) {
          amount
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

const queryChannels = gql`
query GetFarcasterChannelsSubscribedByWusp($user: Identity!) {
  FarcasterChannelParticipants(
    input: {filter: {participant: {_eq: $user}}, blockchain: ALL, limit: 50}
  ) {
    FarcasterChannelParticipant {
      channelId
      channelName
      channel {
        createdAtTimestamp
        description
        imageUrl
      }
      channelActions
    }
  }
}
`;

export async function calculateGreenWill(userId: string) {

  let score = 0;
  // get the score from followers
  const dataFollowers = await request<{ data: any }>(AIRSTACK_API, queryFollowers, {
    user: "fc_fid:" + userId
  });

  let followers = []
  const temp = dataFollowers.SocialFollowers.Follower;
  for(let i = 0; i < temp.length; i++) {
    for(let j = 0; j < temp[i].followerAddress.socials.length; j++) {
      followers.push(temp[i].followerAddress.socials[j].profileName);
    }
  }
  const followersCount = followers.filter(follower => mapFollowers.get(follower)).length;
  if (followersCount >= 1) score += 10;

  //get the score from followings
  const dataFollowings = await request<{ data: any }>(AIRSTACK_API, queryFollowings, {
    user: "fc_fid:" + userId
  });
  let followings = []
  const temp2 = dataFollowings.SocialFollowings.Following;
  for(let i = 0; i < temp2.length; i++) {
    for(let j = 0; j < temp2[i].followingAddress.socials.length; j++) {
      followings.push(temp2[i].followingAddress.socials[j].profileName);
    }
  }
  const followingCount = followings.filter(following => mapFollowings.get(following)).length;
  if (followingCount >= 5) score += 5;
  

  //get the score from regen tokens
  // const dataRegenTokens = await request<{data: any}>(AIRSTACK_API, queryRegenTokens);
  // const tokens = dataRegenTokens.Socials.Social.userAddressDetails.tokenBalances.amount;
  // if(tokens > 0) score += 5;


  //get the score from channel subscriptions
  const dataChannels = await request<{data: any}>(AIRSTACK_API, queryChannels, {
    user: "fc_fid:" + userId
  });

  let subscribedChannels = [];
  const tempChannels = dataChannels.FarcasterChannelParticipants.FarcasterChannelParticipant;
  for (let i = 0; i < tempChannels.length; i++) {
    subscribedChannels.push(tempChannels[i].channelName);
  }

  const subscribedChannelsCount = subscribedChannels.filter(channel => mapChannels.get(channel)).length;
  if (subscribedChannelsCount >= 1) score += 10;
  return score;
}

export async function fetchGrants(id: string) {
  const data = await request<{ round: any }>(GRANTS_STACK_API, queryGrants, {
    id,
    chainId: 42161, // TBD Probably Optimism or Abritrum
  });

  return data.round;
}
