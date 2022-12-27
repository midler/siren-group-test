import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Button.scss";

export const Button = ({ ...props }) => {
  return (
    <button
      type="button"
      className={clsx("button", props.wide && 'button--wide', props.className)}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string || PropTypes.element,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
};
