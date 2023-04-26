import React, { useEffect, useState } from "react";
import "./Wordle.css";
import { palabras } from "../../data/palabras";
import Intento from "../Intento/Intento";
import { comprobar } from "../../functions/comprobar";

let PALABRA = palabras[Math.round(Math.random() * (palabras.length - 1))];

const Wordle = () => {
  const [palabraIntento, setPalabraIntento] = useState("");
  const [inputsState, setInputsState] = useState([]);

  useEffect(() => {
    if (palabraIntento.length === PALABRA.length) {
      setInputsState([...inputsState, comprobar(palabraIntento, PALABRA)]);
      setPalabraIntento("");
    }
  }, [palabraIntento]);

  const pintarIntentos = () => {
    const arrayIntentos = [];
    for (let i = 0; i < PALABRA.length; i++) {
      arrayIntentos.push(
        <Intento
          indexIntento={i}
          palabra={PALABRA}
          key={i}
          setPalabraIntento={setPalabraIntento}
          palabraIntento={palabraIntento}
          setInputsState={setInputsState}
          inputsState={inputsState}
        />
      );
    }
    return arrayIntentos;
  };

  return <div>{pintarIntentos()}</div>;
};

export default Wordle;
