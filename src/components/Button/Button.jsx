import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Button.scss";

export const Button = ({
  type,
  onClick,
  disabled,
  wide,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("button", wide && "button--wide", className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  onClick: () => {},
  disabled: false,
  className: "",
  type: "button",
};
