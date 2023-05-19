import { gql } from '@apollo/client';

export const QUERY_SINGLEUSER = gql`
query me {
    User {
      _id
      username
      email
      bookcount
      savedBooks
    }
  }
`;

