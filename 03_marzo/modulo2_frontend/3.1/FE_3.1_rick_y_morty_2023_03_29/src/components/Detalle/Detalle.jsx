import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Heading, Img, Box, Spinner, Text } from "@chakra-ui/react";

const Detalle = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();

  const peticion = async () => {
    const resultado = await fetch(
      "https://rickandmortyapi.com/api/character/" + id
    );
    const res = await resultado.json();
    setCharacter({ ...res });
  };

  useEffect(() => {
    setTimeout(() => {
      peticion();
    }, 3000);
  }, []);

  return (
    <Flex minH="100vh" justify="center" align="center" wrap="wrap">
      {character ? (
        <Box
          bgColor={
            character.status === "Alive"
              ? "green"
              : character.status === "unknown"
              ? "orange"
              : "red"
          }
        >
          <Heading fontSize="40px">{character.name}</Heading>
          <Img w="400px" src={character.image} alt={character.name} />
          <Text>{character.species}</Text>
        </Box>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <Flex></Flex>
    </Flex>
  );
};

export default Detalle;
