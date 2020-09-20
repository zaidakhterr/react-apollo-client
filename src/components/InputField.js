import React from "react";
import PropTypes from "prop-types";

const InputField = ({ id, name, type, placeholder, value, onChange, required }) => {
  return (
    <input
      className="bg-white text-sm focus:outline-none focus:border-green-300 focus:shadow-outline-green border border-gray-300 rounded-lg py-2 px-4 block appearance-none flex-1"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete="off"
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputField;
