import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                description
                authors
                link
                image
            }
        }
    }
    `;

//queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

//EXAMPLE QUERIES LISTED BELOW

// import { gql } from '@apollo/client';

// export const QUERY_TECH = gql`
//   query tech {
//     tech {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_MATCHUPS = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;
