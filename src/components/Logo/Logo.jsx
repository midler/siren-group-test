import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';

import LogoSVG from "./Logo.svg";

import "./Logo.scss";

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ className, href,src, description, width, height }) => {
  return (
    <a className={clsx("logo", className)} href={href}>
      <img
        src={src}
        className="logo__svg"
        alt={description}
        width={width}
        height={height}
      />
    </a>
  );
};

Logo.propTypes = {
  href: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Logo.defaultProps = {
  href: "#",
  description: "Company Logo",
  src: LogoSVG,
  width: 106,
  height: 45,
};
