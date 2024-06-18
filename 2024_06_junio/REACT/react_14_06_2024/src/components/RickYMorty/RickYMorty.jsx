import { useEffect, useState } from "react";
import "./RickYMorty.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const RickYMorty = () => {
  const [characters, setCharacters] = useState([]);

  // [] -> está cargando
  // [datos] -> ya ha cargado y están bien
  // undefined -> está rota la petición

  const getCharacters = () => {
    setTimeout(async () => {
      const res = await fetch("https://rickandmortyapi.com/api/characte");
      const response = await res.json();
      setCharacters(response.results);
    }, 5000);
  };

  useEffect(() => {
    getCharacters(); // sólo se ha ejecutado la primera vez que se ha montado el componente
  }, []); // si el array de dependencias está vacío, sólo se ejecuta una vez lo de dentro

  return (
    <div className="rickContainer">
      {characters && characters.length === 0 && <Loading/>}
      {characters &&
        characters.length > 0 &&
        characters.map((character) => (
          <div>
            <img src={character.image} />
          </div>
        ))}
      {!characters && <Error/>}
    </div>
  );
};

export default RickYMorty;
