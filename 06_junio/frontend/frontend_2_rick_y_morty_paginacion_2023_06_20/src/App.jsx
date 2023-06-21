import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Paginacion from "./components/Paginacion/Paginacion";
import Personajes from "./components/Personajes/Personajes";
import Loading from "./components/Loading/Loading";
import { myContext } from "./context/ContextProvider";

function App() {

  const { loading, dispatch, pagina } = useContext(myContext);

  const getCharacters = async () => {
    dispatch({ type: "LOADING" });
    setTimeout(async () => {
      const resultado = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + pagina
      );
      const respuesta = await resultado.json();
      dispatch({ type: "CHARACTERS_OK", contenido: [...respuesta.results] });
    }, 4000);
  };

  useEffect(() => {
    getCharacters();
  }, [pagina]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Personajes />
          <Paginacion />
        </>
      )}
    </>
  );
}

export default App;