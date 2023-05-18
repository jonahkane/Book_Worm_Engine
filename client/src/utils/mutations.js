import { gql } from '@apollo/client';

export const QUERY_USER = gql`

query user {
    User {
        _id
        username
        email
        bookCount
        savedBooks
    }
}

`;

export const QUERY_BOOK = gql`
query book {
    book {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
}

`;

// mutations.js:

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

// ADD_USER will execute the addUser mutation.

// SAVE_BOOK will execute the saveBook mutation.

// REMOVE_BOOK will execute the removeBook mutation.


//EXAMPLE MUTATOINS LISTED BELOW 


// import { gql } from '@apollo/client';

// export const CREATE_MATCHUP = gql`
//   mutation createMatchup($tech1: String!, $tech2: String!) {
//     createMatchup(tech1: $tech1, tech2: $tech2) {
//       _id
//       tech1
//       tech2
//     }
//   }
// `;

// export const CREATE_VOTE = gql`
//   mutation createVote($_id: String!, $techNum: Int!) {
//     createVote(_id: $_id, techNum: $techNum) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;
