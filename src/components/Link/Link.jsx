import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Link.scss";

export const Link = ({ href, className, handleClick, children }) => {
  return href ? (
    <a
      className={clsx("link", className)}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  ) : (
    <button
      className={clsx("link", className)}
      onClick={handleClick}
    >
      {children}
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
