const { gql } = require("@apollo/client");

export const GET_BOOKS = gql`
  query getBooks($pageNo: Int!) {
    books(pageNo: $pageNo) {
      list {
        title
        author {
          name
        }
      }
      hasMore
    }
  }
`;
