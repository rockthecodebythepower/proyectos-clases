import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import BotonLang from "../components/BotonLang";

const Characters = () => {
  const [characters, setCharacters] = useState();
  

  const peticion = async () => {
    const resultado = await fetch("https://thronesapi.com/api/v2/Characters");
    const res = await resultado.json();
    setCharacters(res);
  };

  useEffect(() => {
    setTimeout(() => {
      peticion();
    }, 2000);
  }, []);

  return (
    <>
        <h1><FormattedMessage id="app.characters.titulo"/></h1>
        <BotonLang/>
      <Personajes>
        {characters ? (
          characters.map((character, index) => {
            return (
              <Personaje key={index} family={character.family}>
                <Nombre><FormattedMessage id="app.characters.character.nombre"/>{character.firstName}</Nombre>
                <Foto src={character.imageUrl}></Foto>
              </Personaje>
            );
          })
        ) : (
          <Loading src="https://pa1.narvii.com/6576/4a0e54d46f5d300d2bfcea75f7c736f888cc0fb4_hq.gif" />
        )}
      </Personajes>
    </>
  );
};

const Personajes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fabada;
`;

const Loading = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

const Personaje = styled.div`
  background-color: ${({ family }) =>
    family === "House Stark" ? "blue" : "grey"};
  width: 300px;
  height: 400px;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-intems: center;
  flex-direction: column;
`;

const Nombre = styled.h3`
  font-size: 30px;
`;

const Foto = styled(Loading)`
  border-radius: 15px;
`;

export default Characters;
