import { useState } from "react";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  /* hacemos click en la imagen y se cambia */

  const [cara, setCara] = useState(true);

  return (
    <div className="pokemon">
      <h3>{pokemon.name}</h3>
      <img
        src={
          cara ? pokemon.sprites.front_default : pokemon.sprites.back_default
        }
        onClick={() => setCara(!cara)}
      />
    </div>
  );
};

export default Pokemon;

/* En javascript addEventListener a la imagen que cuando le hagas click llame a una funcion tener una variable que fuese un interruptor cara = false; */
