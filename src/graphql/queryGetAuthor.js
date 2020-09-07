const { gql } = require("@apollo/client");

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      name
      email
    }
  }
`;
