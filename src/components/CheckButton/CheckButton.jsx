import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./CheckButton.scss";

export const CheckButton = ({
  type,
  onClick,
  disabled,
  wide,
  className,
  children,
  active
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("checkButton", className, active && 'checkButton--active')}
    >
      {children}
    </button>
  );
};

CheckButton.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
  active: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

CheckButton.defaultProps = {
  wide: false,
  active: false,
  onClick: () => {},
  disabled: false,
  className: "",
  type: "button",
};
