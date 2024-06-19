import { request, gql } from 'graphql-request'

const GRANT_STACK_INDEXER = 'https://grants-stack-indexer-v2.gitcoin.co/graphql'

const queryRounds = gql`
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
`

const queryRound = gql`
    query QueryRound($id: String! $chainId: Int!) {
        round(chainId: $chainId, id: $id) {
            id
            chainId
            matchAmountInUsd
            roundMetadata
        }
    }  
`

const queryProject = gql`
    query QueryProject($id: String! $chainId: Int!) {
        project(chainId: $chainId, id: $id) {
            id
            chainId
            name
            createdByAddress
            metadata
        }
    }  
`

export async function fetchRounds () {
 const data = await request<{ rounds: any[] }>(GRANT_STACK_INDEXER, queryRounds);

 return data.rounds;
}

export async function fetchRound (id: string) {
 const data = await request<{ round: any }>(GRANT_STACK_INDEXER, queryRound, {
    id,
    chainId: 42161 // TBD Probably Optimism or Abritrum
 });

 return data.round;
}

export async function fetchProject (id: string) {
    const data = await request<{ project: any }>(GRANT_STACK_INDEXER, queryProject, {
       id,
       chainId: 42161
    });
   
    return data.project;
}
   


// query Rounds {
//     rounds {
//     id
//     matchAmount
//     matchAmountInUsd
//     chainId
//     createdByAddress
//     applicationsStartTime
//     applicationsEndTime
//     donationsStartTime
//     donationsEndTime
//     project {
//         name
//         createdByAddress
//     }
//     # roundMetadata
//     applications {
//         id
//         project {
//         name
//         projectType
//         createdByAddress
//         }
//         status
//     }
// }
// }

