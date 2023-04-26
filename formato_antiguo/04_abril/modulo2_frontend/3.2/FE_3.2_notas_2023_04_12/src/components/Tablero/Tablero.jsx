import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import useModal from "../../customHooks/useModal";
import Formulario from "../Formulario/Formulario";
import Nota from "../Nota/Nota";

const Tablero = () => {
  // JSON.parse(localStorage.getItem("notas")) ||
  const [notas, setNotas] = useState(
    JSON.parse(localStorage.getItem("notas")) || []
  );

  //! utilizamos useMemo para memoizar la funcionalidad de la ordenación y sólo ejecutarla cuando se cambie nuestro local storage, es decir, se actualicen las notas
  useMemo(() => {
    const arrayNotas = [...notas];
    //! ordenamos las notas según su estado, sólo tenemos estado pendiente o hecho y por lo tanto ordenamos según la longitud de la palabra hecho o pendiente
    arrayNotas.sort((a, b) => {
      if (a.estado.length < b.estado.length) {
        return 1;
      } else {
        return -1;
      }
    });
    setNotas(arrayNotas)
  }, [localStorage.getItem("notas")]);

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
      <Flex flexWrap="wrap" marginTop="100px">
        {notas.map((nota) => (
          <Nota
            nota={nota}
            notas={notas}
            setNotas={setNotas}
            key={JSON.stringify(nota)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Tablero;
