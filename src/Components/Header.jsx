import React from "react";
import Logo from "../Images/janiscare-logo.svg";
import "./components.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src={Logo} alt="" className="logo" />
      </div>

      <div>
        <Link className="header-tabs" to="/">
          Home
        </Link>
        <Link to="/" className="header-tabs">
          About Us
        </Link>
        <Link to="/" className="header-tabs">
          Products
        </Link>
        <Link to="/" className="header-tabs">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
