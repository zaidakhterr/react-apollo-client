import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/queryGetAuthor";

const Authors = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS, {
    variables: {
      pageNo: 1,
    },
  });

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-center text-4xl font-bold mb-8">Authors</h1>
      {loading && (
        <div className="text-center">
          <span role="img" aria-label="loading">
            🔄
          </span>
        </div>
      )}
      {error && (
        <div className="text-center">
          <span role="img" aria-label="error">
            💔
          </span>
        </div>
      )}
      {data && (
        <div>
          {data?.authors?.list.map((author) => (
            <div className="border-2 rounded py-4 px-8 mb-2 flex flex-col sm:flex-row sm:justify-between">
              <h4 className="text-lg">{author.name}</h4>
              <p className="text-gray-600 text-sm">{author.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Authors;
