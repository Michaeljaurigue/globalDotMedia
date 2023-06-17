import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonstyle,
  buttonsize,
  path,
}) => {
  // if buttonstyle is not defined, then default to 'btn--primary'
  // if buttonsize is not defined, then default to 'btn--medium'
  const checkbuttonstyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];
  const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <Link to="/contact" className="btn-mobile">
      <button
        className={`btn ${checkbuttonstyle} ${checkbuttonsize}`}
        onClick={onClick}
        type={type}
        path={path}
      >
        {children}
      </button>
    </Link>
  );
};