import { useEffect, useReducer, useState } from "react";
import "./UseReducer.css";
import {
  INITIAL_STATE,
  peticionReducer,
} from "../../peticion/peticion.reducer";
import { peticion } from "../../peticion/peticion.actions";

//! useReducer lo vamos a utilizar en proyectos medianos / grandes para mejorar la legibilidad de nuestros componentes o páginas, la abstracción de la funcionalidad por un lado y por otro la maquetación y por aglutinar varios estados de una misma colección (si tengo una página de personajes de rick y morty, todo lo que tenga que ver con esa página es lo que meto en el reducer)
const UseReducer = () => {

  const [state, dispatch] = useReducer(peticionReducer, INITIAL_STATE);
  const { page, characters, loading } = state;

  useEffect(() => {
    peticion(dispatch, page);
  }, [page]);

  return (
    <div className="usereducer">
      {loading ? (
        <img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" />
      ) : (
        characters.map((character) => (
          <img key={character.id} src={character.image} />
        ))
      )}
      <div>
        <button onClick={() => dispatch({ type: "SUBSTRACT_PAGE" })}>-</button>
        <h2>{page}</h2>
        <button onClick={() => dispatch({ type: "SUM_PAGE" })}>+</button>
      </div>
    </div>
  );
};

export default UseReducer;
