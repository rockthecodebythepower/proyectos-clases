import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Img,
  Box,
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const peticion = async () => {
    const resultado = await fetch(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    const res = await resultado.json();
    setCharacters([...res.results]);
  };

  useEffect(() => {
    setTimeout(() => {
      peticion();
    }, 5000);
  }, []);

  return (
    <Flex minH="100vh" justify="center" align="center" wrap="wrap">
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
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
      <Flex></Flex>
    </Flex>
  );
};

export default Home;
