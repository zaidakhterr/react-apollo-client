const { gql } = require("@apollo/client");

export const GET_AUTHORS = gql`
  query getAuthors($pageNo: Int!) {
    authors(pageNo: $pageNo) {
      list {
        name
        email
      }
      hasMore
    }
  }
`;
