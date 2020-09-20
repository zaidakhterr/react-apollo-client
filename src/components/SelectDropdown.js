import React, { useState } from "react";
import PropTypes from "prop-types";

const SelectDropdown = ({ options, selected, setSelected, title = "Options", left = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-48">
      <div>
        <span className="rounded-md shadow-sm" onBlur={() => setOpen(false)}>
          <button
            onClick={() => setOpen((v) => !v)}
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 capitalize"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {options.find((op) => op.key === selected)?.text || title}
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <div
        className={`${
          left ? "left-0" : "right-0"
        } origin-top-right absolute mt-2 w-56 rounded-md shadow-lg transition ease-out duration-100 ${
          open ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95"
        }`}
      >
        <div className="rounded-md bg-white shadow-xs">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <span
                key={option.key}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setSelected(option.key);
                  setOpen(false);
                }}
              >
                {option.text}
              </span>
            ))}
          </div>
        </div>
      </div>
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
  title: PropTypes.string,
  left: PropTypes.bool,
};

export default SelectDropdown;
