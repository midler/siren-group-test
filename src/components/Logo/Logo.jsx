import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';

import LogoSVG from "./Logo.svg";

import "./Logo.scss";

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ ...props }) => {
  return (
    <a className={clsx("logo", props.className)} href={props.href}>
      <img
        src={props.src}
        className="logo__svg"
        alt={props.description}
        width={props.width}
        height={props.height}
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
