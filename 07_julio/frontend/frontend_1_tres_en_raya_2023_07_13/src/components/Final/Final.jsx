import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Final = ({ ganador, setJuego, setTurno }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const reiniciar = () => {
    onClose();
    setJuego([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setTurno("");
  };

  return (
    <Modal isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent w="500px" h="300px">
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          flexDir="column"
          gap="50px"
        >
          <Heading>Ha ganado el jugador {ganador}</Heading>
          <Button onClick={reiniciar}>Reiniciar juego</Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default Final;
