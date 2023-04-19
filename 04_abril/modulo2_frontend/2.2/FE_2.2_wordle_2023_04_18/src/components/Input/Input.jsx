import React from "react";
import "./Input.css";
import { comprobar } from "../../functions/comprobar";
import { useEffect, useState } from "react";

const Input = ({
  setPalabraIntento,
  palabraIntento,
  palabra,
  index,
  indexIntento,
  setInputsState,
  inputsState,
}) => {

  return (
    <input
      className={`input ${
        inputsState.length &&
        inputsState[indexIntento] &&
        inputsState[indexIntento][index]
      }`}
      type="text"
      maxLength="1"
      onInput={(e) => setPalabraIntento(palabraIntento + e.target.value)}
    />
  );
};

export default Input;
