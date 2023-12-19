import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {String} title Title of the nav bar item
 * @param {String} to Link to the nav bar item
 * @returns
 */
const NavBarItem = ({ title, to }) => {
  return (
    <li className="nav__item">
      <Link className="nav__link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavBarItem;
