import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import useModal from "../../customHooks/useModal";
import DetalleNota from "../DetalleNota/DetalleNota";

const Nota = ({ nota, notas, setNotas }) => {

  const {isOpen, onOpen, onClose} = useModal();

  const cambiarEstado = () => {
    const arrayNotas = [...notas];
    const nuevaNota = { ...nota, estado: "hecho" };

    arrayNotas.splice(arrayNotas.indexOf(nota), 1, nuevaNota);

    setNotas(arrayNotas);

    localStorage.setItem("notas", JSON.stringify([...arrayNotas]));
  };

  const eliminarNota = () => {
    const arrayNotas = [...notas];
    arrayNotas.splice(arrayNotas.indexOf(nota), 1);
    setNotas(arrayNotas);
    localStorage.setItem("notas", JSON.stringify([...arrayNotas]));
  };

  return (
    <Flex
      borderRadius="10px"
      justify="flex-start"
      align="center"
      flexDir="column"
      h="200px"
      maxW="400px"
      minW="300px"
      w="100%"
      bg="gray.100"
      overflow="hidden"
      m="15px"
    >
      <DetalleNota nota={nota} isOpen={isOpen} onClose={onClose}/>
      <Flex h="70px" bg="black" w="100%" p="10px" justify="space-between">
        <Flex>
          <Flex
            w="10px"
            h="10px"
            backgroundColor={
              nota.importancia === "alta"
                ? "red"
                : nota.importancia === "media"
                ? "orange"
                : "green"
            }
            borderRadius="100%"
          ></Flex>
          <Heading color="white">Notes</Heading>
        </Flex>
        <Flex w="120px">
          {nota.estado === "pendiente" ? (
            <Image
              src="/tick.png"
              filter="grayscale(1)"
              cursor="pointer"
              onClick={cambiarEstado}
            />
          ) : (
            <Image src="/tick.png" />
          )}
          <Button
            borderRadius="100%"
            bg="red"
            w="50px"
            h="50px"
            ml="10px"
            _hover={{ background: "red" }}
            onClick={eliminarNota}
          >
            <Image
              src="/suma.png"
              alt="operador suma"
              w="100%"
              transform="rotate(45deg)"
              h="100%"
              objectFit="contain"
            />
          </Button>
          {/* <Button borderRadius="100%" bg="white" w="50px" h="50px" ml="10px">
            <Image
              src="/suma.png"
              alt="operador suma"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Button> */}
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        align="flex-start"
        w="100%"
        h="100%"
        pl="20px"
        onClick={onOpen}
        cursor="pointer"
        _hover={{ border: "3px solid black" }}
        borderRadius="0px 0px 10px 10px"
      >
        <Heading mb="10px">{nota.titulo}</Heading>
        <Flex align="center" pl="20px">
          <Flex
            w="50px"
            h="50px"
            bg="gray.200"
            borderRadius="100%"
            justify="center"
            align="center"
            mr="10px"
          >
            <Image
              src="/tortuga.png"
              w="100%"
              h="100%"
              objectFit="contain"
              objectPosition="center"
            />
          </Flex>
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight="bolder" whiteSpace="nowrap">
              {nota.texto.slice(0, 20)}...
            </Text>
            <Text>{nota.fecha} - Rock The Code</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nota;
