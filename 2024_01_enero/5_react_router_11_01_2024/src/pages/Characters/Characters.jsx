import { useEffect, useState } from "react";
import "./Characters.css";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, []); //! el array de dependencias vacío me permite renderizar el código de dentro de la función del useEffect únicamente cuando se monta el componente por primera vez

  return (
    <div className="characters">
      {characters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <img src={character.image} />
        </Link>
      ))}
    </div>
  );
};

export default Characters;
