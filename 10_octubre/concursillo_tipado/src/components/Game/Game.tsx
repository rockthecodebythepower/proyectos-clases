import { useState, useEffect } from "react";
import "./Game.css";
import { preguntas } from "../../data/concursillo.js";
import Resumen from "../Resumen/Resumen.js";

const Game = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(0);
  const [selected, setSelected] = useState<number | undefined>();
  const [check, setCheck] = useState<boolean | undefined>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCheck(undefined);
    setSelected(undefined);
  }, [numberOfQuestion]);

  const evaluate = (opcion: string, index: number): void => {
    if (opcion === preguntas[numberOfQuestion].respuestaCorrecta) {
      setSelected(index);
      setCheck(true);
      setCount(count + 1);
    } else {
      setSelected(index);
      setCheck(false);
    }
    setTimeout(() => {
      setNumberOfQuestion(numberOfQuestion + 1);
    }, 1000);
  };

  return (
    <div id="gameBoard">
      {numberOfQuestion < preguntas.length ? (
        <div className="pregunta">
          <h2>{preguntas[numberOfQuestion].pregunta}</h2>
          <div className="respuestas">
            {preguntas[numberOfQuestion].opciones.map(
              (opcion: string, index: number) => {
                console.log(selected);
                console.log(index);
                return (
                  <p
                    key={opcion}
                    onClick={() => evaluate(opcion, index)}
                    className={
                      selected === index && check
                        ? "acertada"
                        : selected === index
                        ? "fallada"
                        : ""
                    }
                  >
                    {opcion}
                  </p>
                );
              }
            )}
          </div>
        </div>
      ) : (
        <Resumen aciertos={count} posibles={preguntas.length} />
      )}
    </div>
  );
};

export default Game;
