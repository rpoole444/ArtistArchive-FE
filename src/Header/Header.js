import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/turntable.png";
import "./Header.css";

const Header = (location, props) => {
  console.log("header:", props);

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
  const { onUpdateSearch } = props;
  const onSearch = (e) => {
    onUpdateSearch(e.currentTarget.value);
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="record-icon" src={logo} alt="turntable" />
      </Link>
      <h1 className="app-title">Artist Archive</h1>
      <input
        className="search"
        name="search"
        type="text"
        placeholder=" Search"
        onChange={onSearch}
      ></input>
      {navLink}
    </nav>
  );
};

export default Header;
