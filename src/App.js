import { gql } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import client from "./apolloClient";

function App() {
  useEffect(() => {
    client
      .query({
        query: gql`
          query getAuthors {
            authors(pageNo: 1) {
              name
            }
          }
        `,
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
