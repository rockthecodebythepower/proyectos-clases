import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import { INITIAL_STATE, reducer } from "./reducer/colors";

/* la petición en mi árbol de componentes tengo que pensar cuales necesitan esa información y cuales no */

const getRgb = (num, paleta) => {
  return `rgb(${paleta.result[num][0]}, ${paleta.result[num][1]}, ${paleta.result[num][2]})`
}

function App() {
  const [state, dispatch] = useReducer(INITIAL_STATE, reducer);

  const peticion = () => {
    fetch("https://saddly-hues-back.vercel.app/palettes")
      .then((respuesta) => respuesta.json())
      .then((paletas) => {
        let paleta = { ...paletas[Math.floor(Math.random() * paletas.length)] };

        dispatch({
          type: "ADD_COLORS",
          contenido: {
            primary: getRgb(0, paleta),
            secondary: getRgb(1, paleta),
            terciary: getRgb(2, paleta),
            text: getRgb(3, paleta),
            stroke: getRgb(4, paleta),
          },
        });
      });
  };

  useEffect(() => {
    peticion();
  }, []);
  // el useEffect con el array de dependencias vacío me indica que el contenido del interior se va a ejecutar una única vez

  return (
    <>
      <Header
        state={state}
        peticion={peticion}
      />
      <Hero
        state={state}
        stroke={stroke}
      />
      <Main />
    </>
  );
}

export default App;