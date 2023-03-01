import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  <div className="error-page">
    <h2>404 Error</h2>
    <h2>Page Not Found</h2>
    <Link className="link" to="/">
      Go Home
    </Link>
  </div>;
};

export default ErrorPage;
