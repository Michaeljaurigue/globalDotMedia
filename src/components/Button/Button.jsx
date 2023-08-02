import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["button--primary", "button--outline"];

const SIZES = ["button--medium", "button--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonstyle,
  buttonsize,
  path,
}) => {
  // if buttonstyle is not defined, then default to 'button--primary'
  // if buttonsize is not defined, then default to 'button--medium'
  const checkbuttonstyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];
  const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <Link to="/contact" className="button-mobile">
      <button
        className={`button ${checkbuttonstyle} ${checkbuttonsize}`}
        onClick={onClick}
        type={type}
        path={path}
      >
        {children}
      </button>
    </Link>
  );
};
