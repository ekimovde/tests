import React from "react";

import "./Input.scss";

const Input = ({ name, type = "text", value, disabled, onChange, onBlur }) => {
  return (
    <input
      className="input"
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event)}
      onBlur={onBlur}
    />
  );
};

export default Input;
