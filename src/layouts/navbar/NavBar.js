import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import { SearchWidget } from "../../components/searchwidget";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link className="nav__logo" to="/">
          <img
            src={require("../../assets/logos/glamore-logo.png")}
            alt="logo"
          />
          <span>Glamore</span>
        </Link>
        <div className="nav__collapse">
          <ul className="nav__menu">
            <NavBarItem title="home" to="/home" />
            <NavBarItem title="shop" to="/shop" />
          </ul>
        </div>
        <SearchWidget />
      </div>
    </nav>
  );
};

export default NavBar;
