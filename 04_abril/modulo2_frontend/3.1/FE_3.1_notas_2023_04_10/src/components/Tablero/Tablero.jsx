import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import useModal from "../../customHooks/useModal";
import Formulario from "../Formulario/Formulario";
import Nota from "../Nota/Nota";

const Tablero = () => {
  // JSON.parse(localStorage.getItem("notas")) ||
  const [notas, setNotas] = useState(
    JSON.parse(localStorage.getItem("notas")) || []
  );

  const { isOpen, onOpen, onClose } = useModal();
  /* const { isOpen, onOpen, onClose } = useDisclosure(); */

  return (
    <Flex>
      <Button
        border="solid 3px black"
        borderRadius="10px"
        fontSize="40px"
        h="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="30px"
        left="30px"
        onClick={onOpen}
      >
        <Text>Crear nota</Text>
      </Button>
      <Formulario
        notas={notas}
        setNotas={setNotas}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex flexWrap="wrap">
        {notas.map((nota) => (
          <Nota nota={nota} key={JSON.stringify(nota)} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Tablero;
