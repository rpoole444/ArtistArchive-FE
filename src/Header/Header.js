import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/turntable.png";
import "./Header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const { location } = props;

  let navLink;
  if (location === "favorites") {
    navLink = (
      <Link className="landing-page-link" to="/">
        <h1>Return Home »</h1>
      </Link>
    );
  } else {
    navLink = (
      <Link className="favorites-link" to="/favorites">
        <h1>Your Favorites »</h1>
      </Link>
    );
  }

  return (
    <nav className="header">
      <Link to="/">
        <img className="record-icon" src={logo} alt="turntable" />
      </Link>
      <div className="title-container">
        <h1 className="app-title">Artist Archive</h1>
      </div>
      <div className="nav-link-container">
        {navLink}
      </div>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.string,
};
