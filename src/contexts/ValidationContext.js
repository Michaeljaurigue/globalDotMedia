import { createContext } from "react";
import { CONFIGVALIDATE } from "../utils/constants";

const ValidationContext = createContext();

function showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.add(CONFIGVALIDATE.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(CONFIGVALIDATE.errorClass);
}

function hideInputError(inputElement) {
  const errorElement = document.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.remove(CONFIGVALIDATE.inputErrorClass);
  errorElement.classList.remove(CONFIGVALIDATE.errorClass);
  errorElement.textContent = "";
}

function errorMessageHandler(err) {
  if (err === "Error: 400") {
    return "Bad Request";
  } else if (err === "Error: 401") {
    return "Invalid email or password";
  } else if (err === "Error: 403") {
    return "Access denied";
  } else if (err === "Error: 404") {
    return "Not found";
  } else if (err === "Error: 409") {
    return "Email already in use";
  } else if (err === "Error: 500") {
    return "Internal server error";
  } else {
    return "Something went wrong! Please try again.";
  }
}

export {
  ValidationContext,
  showInputError,
  hideInputError,
  errorMessageHandler,
};
