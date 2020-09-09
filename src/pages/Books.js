import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queryGetBooks";

const SelectDropdown = ({ options, selected, setSelected, type = "Options" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setOpen((v) => !v)}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 capitalize"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selected || type}
            <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <span
                  key={option.key}
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setSelected(option.value);
                    setOpen(false);
                  }}
                >
                  {option.key}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  type: PropTypes.string,
};

const Books = () => {
  const [pageNo, setPageNo] = useState(1);
  const [field, setField] = useState("");
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
          <div className="flex justify-end">
            <SelectDropdown
              options={[
                {
                  key: "Title",
                  value: "title",
                },
              ]}
              selected={field}
              setSelected={setField}
              type="Fields"
            />
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
