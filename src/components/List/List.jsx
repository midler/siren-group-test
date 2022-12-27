import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./List.scss";

export const List = ({ ...props }) => {
  return (
    <ul
      className={clsx(
        "list",
        props.horizontal ? "list--horizontal" : "",
        props.align ? `list--align-${props.align}` : "",
        props.className ? props.className : ""
      )}
    >
      {props.children?.map((item, key) => {
        return (
          <li
            key={key}
            className={clsx(
              'list__item',
               props.className ? `${props.className}__item` : ""
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
  align: "top",
};
