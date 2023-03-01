import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img className="record-icon" src="turntable.png" alt="turntable" />
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
