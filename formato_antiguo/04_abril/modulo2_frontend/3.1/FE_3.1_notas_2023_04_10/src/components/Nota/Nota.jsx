import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Nota = ({ nota }) => {
  return (
    <Flex
      borderRadius="10px"
      justify="flex-start"
      align="center"
      flexDir="column"
      h="200px"
      w="400px"
      bg="gray.100"
      overflow="hidden"
      m="50px"
    >
      <Flex h="70px" bg="black" w="100%" p="10px" justify="space-between">
        <Heading color="white">Notes</Heading>
        <Flex w="110px">
          {nota.estado === "pendiente" ? (
            <Image src="/tick.png" filter="grayscale(1)" />
          ) : (
            <Image src="/tick.png" />
          )}
          <Button borderRadius="100%" bg="white" w="50px" h="50px" ml="10px">
            <Image
              src="/suma.png"
              alt="operador suma"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir="column" align="flex-start" w="100%" pl="20px">
        <Heading mb="10px">{nota.titulo}</Heading>
        <Flex align="center" pl="20px">
          <Flex
            w="50px"
            h="50px"
            bg="gray.200"
            borderRadius="100%"
            justify="center"
            align="center"
            mr="20px"
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
            <Text fontSize="25px" fontWeight="bolder">
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
