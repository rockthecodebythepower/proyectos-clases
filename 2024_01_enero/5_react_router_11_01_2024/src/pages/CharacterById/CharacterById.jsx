import { useParams } from "react-router-dom";
import "./CharacterById.css";
import { useEffect, useState } from "react";

const CharacterById = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, []);

  return (
    <div className="character">
      {character && (
        <>
          <div className="img_wrp">
            <p>{character.id}</p>
            <img
              src={character.image}
              alt={character.name}
              style={{ filter: character.status !== "Alive" && "invert(1)" }}
            />
          </div>
          <h1>{character.name}</h1>
          <p>Origen: {character.origin.name}</p>
          <p>Está en: {character.location.name}</p>
          <p className="specie">
            {character.species === "Human" ? "🤺" : "👽"}
          </p>
        </>
      )}
    </div>
  );
};

export default CharacterById;
