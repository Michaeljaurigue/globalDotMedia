import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not_found">
      <p className="not_found__title">
        404 Error. Page Not Found.{" "}
        <Link className="not_found__link" to="/">
          Go Home
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
