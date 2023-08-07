import { useContext } from "react";
import "./Pokemons.css";
import { PokemonsContext } from "../../context/PokemonsProvider";
import Pokemon from "../Pokemon/Pokemon";

const Pokemons = () => {
  const { pokemons } = useContext(PokemonsContext);

  return (
    <div className="pokemons">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
      {pokemons.length === 0 && <img referrerPolicy="no-referrer" src="https://i.imgur.com/aMz1Qtu.gif"/>}
    </div>
  );
};

export default Pokemons;
