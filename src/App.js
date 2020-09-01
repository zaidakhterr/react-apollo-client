import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_AUTHORS = gql`
  query getAuthors {
    authors(pageNo: 1) {
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  return (
    <div className="app">
      <h1>Authors</h1>
      {loading && (
        <p>
          Loading{" "}
          <span role="img" aria-label="loading">
            &#128260;
          </span>
        </p>
      )}
      {error && (
        <p>
          Error
          <span role="img" aria-label="error">
            &#10060;
          </span>
        </p>
      )}
      {data && (
        <p>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </p>
      )}
    </div>
  );
}

export default App;
