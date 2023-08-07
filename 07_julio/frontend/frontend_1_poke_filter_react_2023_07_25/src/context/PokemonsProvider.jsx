import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokemonsContext = createContext();

const pokemonsArray = [];

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const peticion = async () => {
    for (let i = 1; i < 152; i++) {
      const respuesta = await axios("https://pokeapi.co/api/v2/pokemon/" + i);

      pokemonsArray.push(respuesta.data);

      if (pokemonsArray.length === 151) {
        setPokemons([...pokemonsArray]);
      }
    }
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons, pokemonsArray }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
