import React from "react";
import { Link } from "react-router-dom";
import eLogo from "../assets/headphone.png";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Link className="link" to="/">
        Go Home
      </Link>
      <h2>404 Error</h2>
      <h2>Page Not Found</h2>
      <img className="headphones" src={eLogo} alt="headphones" />
    </div>
  );
};

export default ErrorPage;
