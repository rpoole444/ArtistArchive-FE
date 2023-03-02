import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ location }) => {
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
        <img className="record-icon" src="turntable.png" alt="turntable" />
      </Link>
      <h1 className="app-title">Artist Archive</h1>
      <input
        className="search"
        name="search"
        type="text"
        placeholder=" Search"
      ></input>
    </nav>
  );
};

export default Header;
