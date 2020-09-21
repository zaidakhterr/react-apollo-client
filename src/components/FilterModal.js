import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";

const FilterModal = () => {
  const [open, setOpen] = useState(false);
  const [field, setField] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="text-center inline-block bg-green-400 hover:bg-green-500 text-sm font-medium text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out"
      >
        Filter
      </button>
      {open && (
        <div className="fixed left-0 z-10 inset-0 overflow-y-auto">
          <div className="px-4 pt-40">
            <div className="fixed left-0 inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-50"
                onClick={() => {
                  setOpen(false);
                }}
              ></div>
            </div>
            <div
              className="mx-auto max-w-lg bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white p-5">
                <div className="mt-3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Filter
                  </h3>
                  <div className="mt-2">
                    <SelectDropdown
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
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 py-3 px-6 flex flex-row-reverse">
                <button
                  type="button"
                  className="text-center inline-block bg-green-400 hover:bg-green-500 text-sm font-medium text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                >
                  Apply Filter
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  type="button"
                  className="rounded border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-300  mr-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterModal;
