import { useReducer } from "react";
import "./App.css";
import { INITIAL_STATE, gameReducer } from "./utils/reducer";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const { points, countries, levels } = state;

  return (
    <div>
      <p>POINTS: {points}</p>
      <p>COUNTRIES: {console.log(countries)}</p>
      <p>LEVELS: {levels}</p>
      <button onClick={() => dispatch({ type: "SUMAR_PUNTUACION" })}>
        sumar puntacion
      </button>
      <button onClick={() => dispatch({ type: "RESTAR_PUNTUACION" })}>
        restar puntuacion
      </button>
      <button onClick={() => dispatch({ type: "SIGUIENTE_NIVEL" })}>
        siguiente nivel
      </button>
      <button onClick={() => dispatch({ type: "RELLENAR_COUNTRIES" })}>
        rellenar paises
      </button>
    </div>
  );
};

export default App;