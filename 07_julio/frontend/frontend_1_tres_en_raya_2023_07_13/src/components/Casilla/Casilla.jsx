import { Flex, Heading, useToast } from "@chakra-ui/react";
import { comprobacion } from "../../functions/comprobacion";

const Casilla = ({ id, juego, setJuego, turno, setTurno, dato, ganador, setGanador }) => {

  const toast = useToast();

  const comprobar = () => {

    setGanador(comprobacion(juego, turno) && turno);

  }

  const jugar = () => {

    if (dato) {
        return;
    }

    if (!turno) {
      toast({
        title: "Selecciona un jugador",
        status: "info",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    const juegoVar = [...juego];
    juegoVar[parseInt(id[0])][parseInt(id[1])] = turno;
    setJuego([...juegoVar]);

    comprobar();

    if (turno === "X") {
        setTurno("O")
    } else {
        setTurno("X")
    }

  };

  return (
    <Flex
      w="150px"
      h="150px"
      borderRadius="20px"
      m="10px"
      align="center"
      justify="center"
      border="10px solid var(--secondary)"
      cursor="pointer"
      id={id}
      onClick={jugar}
    >
      <Heading fontSize="100px">{dato}</Heading>
    </Flex>
  );
};

export default Casilla;
