const { gql } = require("@apollo/client");

export const ADD_AUTHOR = gql`
  mutation addAuthor($name: String!, $email: String!) {
    addAuthor(name: $name, email: $email) {
      id
      name
    }
  }
`;
