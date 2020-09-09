import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/queryGetAuthors";

const Authors = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(GET_AUTHORS, {
    variables: {
      pageNo,
    },
  });

  useEffect(() => {
    fetchMore({
      variables: {
        pageNo,
      },
    });
  }, [pageNo, fetchMore]);

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
        <>
          <div>
            {data?.authors?.list.map((author) => (
              <div
                key={author.email}
                className="border-2 rounded py-4 px-8 mb-2 flex flex-col sm:flex-row sm:justify-between"
              >
                <h4 className="text-lg">{author.name}</h4>
                <p className="text-gray-600 text-sm">{author.email}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            {pageNo !== 1 && (
              <button
                className="float-left text-center inline-block bg-green-400 hover:bg-green-500 text-white py-1 px-4 rounded transition-colors duration-300 ease-in-out"
                onClick={() => setPageNo((n) => n - 1)}
              >
                PREV
              </button>
            )}
            {data?.authors?.hasMore && (
              <button
                className="float-right text-center inline-block bg-green-400 hover:bg-green-500 text-white py-1 px-4 rounded transition-colors duration-300 ease-in-out"
                onClick={() => setPageNo((n) => n + 1)}
              >
                NEXT
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Authors;
