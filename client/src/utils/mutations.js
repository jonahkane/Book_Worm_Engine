import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: bookInput!) {
    saveBook (bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook (bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
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
