import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../generalStyledComponents";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((res) => setCharacters(res.results));
    }, 2000);
  }, []);

  return (
    <CharactersPage as="main">
      {characters ? (
        characters.map((character) => {
          return (
            <Link key={character.id} to={`/character/${character.id}`}>
              <CharacterArticle>
                <ImgWrp>
                  <CharacterImage
                    src={character.image}
                    alt={character.name}
                    status={character.status}
                  />
                </ImgWrp>
              </CharacterArticle>
            </Link>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </CharactersPage>
  );
};

export default Characters;

const CharactersPage = styled(Flex)`
  min-height: 100svh;
  background-color: rgb(255, 214, 138);
  gap: 50px;
  padding: 50px;
`;

const CharacterArticle = styled(Flex)`
  flex-direction: column;
`;

const ImgWrp = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 5px solid black;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    border-radius: 20%;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  filter: ${({ status }) =>
    status === "Alive"
      ? "grayscale(0)"
      : status === "unknown"
      ? "hue-rotate(145deg)"
      : "grayscale(1)"};
`;
