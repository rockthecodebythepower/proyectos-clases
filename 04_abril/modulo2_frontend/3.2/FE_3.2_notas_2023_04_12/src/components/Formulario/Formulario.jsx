import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";

let VOZATEXTO = "";

const Formulario = ({ isOpen, onClose, setNotas, notas }) => {
  const { register, handleSubmit } = useForm();
  const [grabando, setGrabando] = useState(false);

  const reconocedorDeVoz = new webkitSpeechRecognition();
  reconocedorDeVoz.lang = "es-ES";
  reconocedorDeVoz.interimResults = true;

  const crearNota = (nuevaNota) => {
    const date = new Date();

    const dia = "0" + date.getDate();
    const mes = "0" + (date.getMonth() + 1);
    const anio = date.getFullYear();

    const fecha = `${dia.slice(-2)}/${mes.slice(-2)}/${anio}`;

    nuevaNota.fecha = fecha;
    nuevaNota.estado = "pendiente";
    nuevaNota.texto = VOZATEXTO;

    setNotas([...notas, nuevaNota]);

    localStorage.setItem("notas", JSON.stringify([...notas, nuevaNota]));
  };

  reconocedorDeVoz.addEventListener("result", (e) => {
    VOZATEXTO = Array.from(e.results).map((result) => result[0]).map((result) => result.transcript).join("");
  })

  reconocedorDeVoz.addEventListener("end", () => {
    setGrabando(false);
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="300px"
        h="500px"
        bg="white"
        borderRadius="10px"
        border="3px solid black"
      >
        <form onSubmit={handleSubmit(crearNota)}>
          <FormLabel>Titulo de la nota: </FormLabel>
          <Input w="80%" {...register("titulo")} />
          <FormLabel>Texto de la nota: </FormLabel>
          <Input w="80%" {...register("texto")} />
          <FormLabel marginX="20px">Selecciona la importancia de tu nota: </FormLabel>
          <Select marginX="20px" w="80%" {...register("importancia")} defaultValue="baja">
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </Select>

          <FormLabel marginX="20px">Puedes grabar tu nota con audio con este botón: </FormLabel>
          <Button className={grabando ? "activo" : ""} onClick={() => {reconocedorDeVoz.start(); setGrabando(true)}} w="30px" h="40px" borderRadius="100%" background="red" _hover="background: red"></Button>

          {/* <FormLabel>Nivel de importancia: </FormLabel>
            <Input w="80%" {...register("texto")}/> */}
          <Button type="submit" onClick={onClose}>
            Crear nota
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Formulario;
