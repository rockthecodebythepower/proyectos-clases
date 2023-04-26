import {
  Flex,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const DetalleNota = ({ isOpen, onClose, nota }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="300px"
        bg="white"
        borderRadius="10px"
        border="3px solid black"
      >
        <Flex flexDir="column" align="flex-start" w="100%" h="100%" p="20px" gap="30px">
          <Heading fontSize="20px">
            {nota.titulo}
          </Heading>
          <Text fontSize="15px">{nota.texto}</Text>
          <Text fontSize="12px" fontWeight="bolder">
            {nota.fecha} - Rock The Code
          </Text>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default DetalleNota;
