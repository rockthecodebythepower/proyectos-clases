import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CharacterImage,
  CharacterName,
  CharacterPage,
  CharacterWrp,
  ImgWrp,
} from "./Character.styled";

const Character = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character/" + id)
        .then((res) => res.json())
        .then((res) => setCharacter(res));
    }, 2000);
  }, []);

  return (
    <CharacterPage as="main">
      {character ? (
        <CharacterWrp>
          <ImgWrp>
            <CharacterImage src={character.image} />
          </ImgWrp>
          <CharacterName>{character.name}</CharacterName>
        </CharacterWrp>
      ) : (
        <div>Loading...</div>
      )}
    </CharacterPage>
  );
};

export default Character;
