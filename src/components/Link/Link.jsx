import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Link.scss";

export const Link = ({ ...props }) => {
  return props.href ? (
    <a
      className={clsx("link", props.className)}
      href={props.href}
      onClick={props.handleClick}
    >
      {props.children}
    </a>
  ) : (
    <button
      className={clsx("link", props.className)}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

Link.propTypes = {
  children: PropTypes.string || PropTypes.element,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  className: "",
  handleClick: (e) => {
    console.log(e);
  },
};
