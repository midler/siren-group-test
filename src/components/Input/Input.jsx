import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Input.scss";

export const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  className,
}) => {
  const [focus, useFocus] = useState(false);

  const useFocusOnHandler = () => {
    useFocus(true);
  };

  const useFocusOffHandler = () => {
    useFocus(false);
  };

  return (
    <div className={clsx("input", className)}>
      <label
        className={clsx(
          "input__wrapper",
          value ? "input__wrapper--not-empty" : "input__wrapper--empty",
          focus && "input__wrapper--focus"
        )}
      >
        <span className="input__label">{label}</span>
        <input
          className="input__field"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={useFocusOnHandler}
          onBlur={useFocusOffHandler}
        />
      </label>

      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  placeholder: "",
  error: "",
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
