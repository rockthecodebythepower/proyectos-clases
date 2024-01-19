import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()

  useEffect(() => {
    setTimeout(() => {
      toast({
        title: 'Error en el envío.',
        description: "Tienes que rellenar todos los campos del formulario.",
        status: 'warning',
        duration: 9000,
        position: "top-right",
        isClosable: true,
      })
    }, 2000);
  }, [])

  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      gap="50px"
      p="100px"
      bg="pink"
    >
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent w="500px" h="500px" bg="white">
          <Button colorScheme="red" onClick={onClose}>
            Cerrar
          </Button>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default App;
