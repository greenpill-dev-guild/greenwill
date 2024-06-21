import { request, gql } from "graphql-request";

const AIRSTACK_API = "https://grants-stack-indexer-v2.gitcoin.co/graphql";
const GRANTS_STACK_API = "https://grants-stack-indexer-v2.gitcoin.co/graphql";

const queryGreenWill = gql`
  query Rounds {
    rounds {
      id
      matchAmount
      matchAmountInUsd
      chainId
      createdByAddress
      applicationsStartTime
      applicationsEndTime
      donationsStartTime
      donationsEndTime
      project {
        name
        createdByAddress
      }
      # roundMetadata
      applications {
        id
        project {
          name
          projectType
          createdByAddress
        }
        status
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

export async function fetchGreenWill() {
  const data = await request<{ rounds: any[] }>(AIRSTACK_API, queryGreenWill);

  return data.rounds;
}

export async function fetchGrants(id: string) {
  const data = await request<{ round: any }>(GRANTS_STACK_API, queryGrants, {
    id,
    chainId: 42161, // TBD Probably Optimism or Abritrum
  });

  return data.round;
}
