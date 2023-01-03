import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./List.scss";

export const List = ({ horizontal, align, className, children }) => {
  return (
    <ul
      className={clsx(
        "list",
        horizontal ? "list--horizontal" : "",
        align ? `list--align-${align}` : "",
        className
      )}
    >
      {children?.map((item, key) => {
        return (
          <li
            key={key}
            className={clsx(
              'list__item',
               className ? `${className}__item` : ""
            )}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  align: PropTypes.string,
};

List.defaultProps = {
  horizontal: false,
};
