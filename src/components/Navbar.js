import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>
      <Link to="/about" className="header_link">
        <p className="nav_link">About Us</p>
      </Link>
      <Link to="/projects" className="header_link">
        <p className="nav_link">Projects</p>
      </Link>
      <Link to="/services" className="header_link">
        <p className="nav_link">Sevices</p>
      </Link>
      <Link to="/contact" className="header_link">
        <p className="nav_link">Contact</p>
      </Link>
    </>
  );
};

export default Navbar;
