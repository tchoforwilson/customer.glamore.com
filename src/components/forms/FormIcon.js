import React from "react";
import sprite from "../../assets/icons/icomoon/sprite.svg";

/**
 * @breif Render a form button
 * @param {String} name Form icon name
 * @param {Any} otherProps Other properties
 * @returns {JSX}
 */
const FormIcon = ({ name, ...otherProps }) => {
  return (
    <button className="form__btn" type="button" {...otherProps}>
      <svg {...otherProps}>
        <use xlinkHref={`${sprite}#icon-${name}`}></use>
      </svg>
    </button>
  );
};

export default FormIcon;
