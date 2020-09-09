const { gql } = require("@apollo/client");

export const GET_BOOKS = gql`
  query getBooks($pageNo: Int!, $filter: FilterBooks) {
    books(pageNo: $pageNo, filter: $filter) {
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
