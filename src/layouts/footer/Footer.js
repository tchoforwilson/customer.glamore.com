import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="flex-row">
          <div className="columns-4">
            <div className="footer__logo">
              <img
                src={require("../../assets/logos/glamore-logo.png")}
                alt="logo"
              />
              <span>Glamore</span>
            </div>
          </div>
          <div className="columns-3">
            <h2 className="footer__header">About</h2>
            <menu className="footer__nav">
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/faq">
                  FAQs
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/delivery-information">
                  Delivery Information
                </Link>
              </li>
            </menu>
          </div>
          <div className="columns-3">
            <h2 className="footer__header">Services</h2>
            <menu className="footer__nav">
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/privacy-and-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/contact-us">
                  Contact us
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/return-and-refund">
                  Return & Refund
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/sitemap">
                  Sitemap
                </Link>
              </li>
            </menu>
          </div>
          <div className="columns-3">
            <h2 className="footer__header">For users</h2>
            <menu className="footer__nav">
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/account-setting">
                  Account Setting
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/my-orders">
                  My Orders
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link" to="/my-wishlist">
                  My Wishlist
                </Link>
              </li>
            </menu>
          </div>
        </div>
        <div className="footer__social"></div>
        <div className="footer__line"></div>
        <div className="footer__rights">
          <p className="footer__info">
            &copy; {new Date().getFullYear()} Glamore. All rights reserved.
          </p>
          <p className="footer__policy">
            <span>Privacy</span>
            <span>Return & Refund</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
