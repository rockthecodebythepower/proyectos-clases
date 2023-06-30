import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./components/Pokemon/Pokemon";
import Flechas from "./components/Flechas/Flechas";

function App() {
  /* realizar una petición para pintar unos datos */
  /* fetch vs axios */

  /* coger los datos de un pokemon y pintar el pokemon */

  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  /* useEffect(() => {
    // tarda un tiempo en recoger los datos       
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      // cuando acabe de recogerlos ejecuta esta función
      .then((respuesta) => respuesta.json())
      // caundo acabe de pasar la respuesta que me había dado el fetch a json() para interpretarla ejecuto lo siguiente
      .then((respuesta) => console.log(respuesta));
  }, []); */

  useEffect(() => {
    // cualquier petición va a tardar un tiempo en traerme la respuesta
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      // cuando acabe de recogerlos ejecuta esta función
      .then((respuesta) => setPokemon(respuesta.data));
  }, [id]);

  return (
    <>
      {pokemon && <Pokemon pokemon={pokemon} />}
      <Flechas setId={setId} id={id}/>
    </>
  );
}

export default App;
