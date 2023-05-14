import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Acertadas = ({ acertadas }) => {
  return (
    <Flex h="10vh" align="center" justify="center" gap="10px" position="absolute" bottom="30px" w="100%">
      <Box
        h="10px"
        w="40px"
        background={acertadas >= 1 ? "var(--acierto)" : "var(--secondary)"}
        borderRadius="50px"
      ></Box>
      <Box
        h="10px"
        w="40px"
        background={acertadas >= 2 ? "var(--acierto)" : "var(--secondary)"}
        borderRadius="50px"
      ></Box>
      <Box
        h="10px"
        w="40px"
        background={acertadas === 3 ? "var(--acierto)" : "var(--secondary)"}
        borderRadius="50px"
      ></Box>
    </Flex>
  );
};

export default Acertadas;
