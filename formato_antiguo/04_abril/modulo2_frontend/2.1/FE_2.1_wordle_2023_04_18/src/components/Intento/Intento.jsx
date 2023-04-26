import React, { useEffect, useState } from "react";
import "./Intento.css";
import Input from "../Input/Input";

const Intento = ({
  palabra,
  setPalabraIntento,
  palabraIntento,
  indexIntento,
  setInputsState,
  inputsState,
}) => {
  const pintarInputs = () => {
    const arrayInputs = [];
    for (let i = 0; i < palabra.length; i++) {
      arrayInputs.push(
        <Input
          key={i}
          index={i}
          indexIntento={indexIntento}
          setInputsState={setInputsState}
          inputsState={inputsState}
          palabra={palabra}
          setPalabraIntento={setPalabraIntento}
          palabraIntento={palabraIntento}
        />
      );
    }
    return arrayInputs;
  };

  return <div className="intento">{pintarInputs()}</div>;
};

export default Intento;
