import React from "react";
import Logo from "../Images/jenis-care-logo-1.png";
import { Link } from "react-router-dom";
import "./components.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <img src={Logo} alt="" className="footer-logo" />
      </div>
      <div className="footer-tabs">
        <div>
          <Link className="footer-tabs" to="/">
            Home
          </Link>
          <Link to="/" className="footer-tabs">
            About Us
          </Link>
          <Link to="/" className="footer-tabs">
            Products
          </Link>
          <Link to="/" className="footer-tabs">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
