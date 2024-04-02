import { useEffect, useReducer } from "react";
import "./App.css";
import Character from "./components/Character/Character";
import {
  INITIAL_STATE,
  whoiswhoReducer,
} from "./reducer/WhoIsWho/whoiswho.reducer";
import {
  addGuessCharacter,
  reinciar,
} from "./reducer/WhoIsWho/whoiswho.actions";
import Swal from "sweetalert2";

const App = () => {
  const [state, dispatch] = useReducer(whoiswhoReducer, INITIAL_STATE);

  const { characters, victory, characterToGuess } = state;

  useEffect(() => {
    addGuessCharacter(dispatch, characters);
  }, []);

  const victoria = () => {
    Swal.fire({
      icon: "success",
      title: "Has Ganado!",
      text: "Enhorabuena!",
    });
  };

  const derrota = () => {
    {
      Swal.fire({
        icon: "error",
        title: `Has perdido...`,
        text: `El personaje correcto era: ${characterToGuess.nombre}`,
      });
    }
  };

  return (
    <div className="characters">
      {victory === "VICTORIA" && victoria()}

      {victory === "DERROTA" && derrota()}
      {characters.map((character) => (
        <Character
          key={character.nombre}
          img={character.imagen}
          name={character.nombre}
          vivo={character.vivo}
          state={state}
          dispatch={dispatch}
        />
      ))}
      <button onClick={() => reinciar(dispatch)}>Reiniciar</button>
    </div>
  );
};

export default App;
