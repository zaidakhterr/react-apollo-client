const { gql } = require("@apollo/client");

export const GET_BOOKS = gql`
  query getBooks($pageNo: Int!, $filter: FilterBooks) {
    books(pageNo: $pageNo, filter: $filter) {
      list {
        id
        title
        author {
          name
        }
      }
      hasMore
    }
  }
`;
