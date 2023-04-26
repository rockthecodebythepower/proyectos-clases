import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Flex,
  Heading,
  Img,
  Box,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useDisclosureCustom from "../../customHooks/useDisclosure";
import { useForm } from "react-hook-form";
let CHARACTERSTOFILTER = [];

const Home = () => {
  const [characters, setCharacters] = useState();
  const { isOpen, onOpen, onClose } = useDisclosureCustom();
  const { register, handleSubmit } = useForm();

  const peticion = async () => {
    const resultado = await fetch(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    const res = await resultado.json();
    setCharacters([...res.results]);
    CHARACTERSTOFILTER = [...res.results];
  };

  //! el useEffect con el array de dependencias vacío sólo se ejectua la primera vez que se renderiza mi componente
  useEffect(() => {
    setTimeout(() => {
      peticion();
    }, 2000);
  }, []);

  const filtrar = (datos) => {
    const { nombre, especie, status } = datos;

    setCharacters(
      CHARACTERSTOFILTER.filter((character) => {
        return (
          character.name.toLowerCase().includes(nombre.toLowerCase()) &&
          character.status === status &&
          character.species.toLowerCase() === especie.toLowerCase()
        );
      })
    );

  };
  
  return (
    <Flex minH="100vh" justify="center" align="center" wrap="wrap">
      <Button onClick={onOpen}>Abrir Filtro</Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="30vh">
          <form onSubmit={handleSubmit(filtrar)}>
            <Input placeholder="nombre" {...register("nombre")} />
            <Select {...register("especie")}>
              <option value="Alien">Alien</option>
              <option value="Human">Human</option>
              {/* <option value="Unknown">Unknown</option> */}
            </Select>
            <Select {...register("status")}>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
              <option value="Alive">Alive</option>
            </Select>
            <Button
              bg="orange"
              _hover={{ backgroundColor: "blue", color: "white" }}
              onClick={onClose}
              type="submit"
            >
              Filtrar
            </Button>
          </form>
        </ModalContent>
      </Modal>

      {characters ? (
        characters.map((character, index) => {
          return (
            <Link key={index} to={`/detail/${character.id}`}>
              <Box m="20px">
                <Heading fontSize="10px">{character.name}</Heading>
                <Img
                  w="100px"
                  src={
                    character.status === "Dead"
                      ? "https://cdn-icons-png.flaticon.com/512/96/96349.png"
                      : character.status === "unknown"
                      ? "https://cdn.pixabay.com/photo/2014/05/21/19/14/the-question-mark-350168_640.png"
                      : character.image
                  }
                  alt={character.name}
                />
              </Box>
            </Link>
          );
        })
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </Flex>
  );
};

export default Home;
