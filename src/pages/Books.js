import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queryGetBooks";
import SelectDropdown from "../components/SelectDropdown";
import FilterModal from "../components/FilterModal";

const Books = () => {
  const [pageNo, setPageNo] = useState(1);
  const [field, setField] = useState("");
  const [filter, setFilter] = useState("");

  const { data, loading, error, fetchMore } = useQuery(GET_BOOKS, {
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
      <h1 className="text-center text-4xl font-bold mb-8">Books</h1>
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
          <div className="mb-4 flex justify-end">
            <FilterModal />
            {/* <SelectDropdown
              options={[
                {
                  text: "Title",
                  key: "title",
                },
              ]}
              selected={field}
              setSelected={setField}
              title="Fields"
            />
            <SelectDropdown
              options={[
                {
                  text: "Contains",
                  key: "contains",
                },
                {
                  text: "Equals",
                  key: "equals",
                },
                {
                  text: "Not Equals",
                  key: "not",
                },
                {
                  text: "Starts With",
                  key: "startsWith",
                },
                {
                  text: "Ends With",
                  key: "endsWith",
                },
              ]}
              selected={filter}
              setSelected={setFilter}
              title="Filter"
            /> */}
          </div>
          <div>
            {data?.books?.list.map((book) => (
              <div
                key={book.title}
                className="border-2 rounded py-4 px-8 mb-2 flex flex-col sm:flex-row sm:justify-between"
              >
                <h4 className="text-lg">{book.title}</h4>
                <p className="text-gray-600 text-sm">{book.author.name}</p>
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
            {data?.books?.hasMore && (
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

export default Books;
