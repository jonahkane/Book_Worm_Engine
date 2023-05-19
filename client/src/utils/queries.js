import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
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

