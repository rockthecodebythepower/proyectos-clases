import { Button, FormLabel, Input, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import "./Formulario.css"
import { useForm } from "react-hook-form";

const Formulario = ({ isOpen, onClose, setNotas, notas }) => {

    const { register, handleSubmit } = useForm();

    const crearNota = (nuevaNota) => {

        const date = new Date();

        const dia = "0" + date.getDate();
        const mes = "0" + (date.getMonth() + 1);
        const anio = date.getFullYear();

        const fecha = `${dia.slice(-2)}/${mes.slice(-2)}/${anio}`;

        nuevaNota.fecha = fecha;
        nuevaNota.estado = "pendiente";

        setNotas([...notas, nuevaNota]);

        localStorage.setItem("notas", JSON.stringify([...notas, nuevaNota]));
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="300px"
        h="300px"
        bg="white"
        borderRadius="10px"
        border="3px solid black"
      >
        <form onSubmit={handleSubmit(crearNota)}>
            <FormLabel>Titulo de la nota: </FormLabel>
            <Input w="80%" {...register("titulo")}/>
            <FormLabel>Texto de la nota: </FormLabel>
            <Input w="80%" {...register("texto")}/>
            {/* <FormLabel>Nivel de importancia: </FormLabel>
            <Input w="80%" {...register("texto")}/> */}
            <Button type="submit" onClick={onClose}>Crear nota</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Formulario;
