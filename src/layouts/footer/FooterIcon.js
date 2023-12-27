import React from "react";
import sprite from "../../assets/icons/icomoon/sprite.svg";

/**
 * @breif Display footer social icons
 * @param {String} name Icon name
 * @param {String} otherProps other properties
 * @returns {JSX}
 */
const FooterIcon = ({ name, ...otherProps }) => {
  return (
    <svg {...otherProps}>
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

export default FooterIcon;
