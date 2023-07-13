import { Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Casilla from "../Casilla/Casilla";
import Final from "../Final/Final";

const Tablero = () => {
  const [juego, setJuego] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turno, setTurno] = useState("");

  const [ganador, setGanador] = useState(false);

  return (
    <Flex flexDir="column" align="center" justify="center" gap="50px">

        {ganador && <Final ganador={ganador} setJuego={setJuego} setTurno={setTurno}></Final>}

      {turno && (
        <Heading position="absolute" top="20px" left="20px">
          Es el turno de {turno}
        </Heading>
      )}

      <Flex w="510px" flexWrap="wrap">
        {juego.map((fila, indexFila) =>
          fila.map((columna, indexColumna) => (
            <Casilla
              key={`${indexFila}${indexColumna}`}
              id={`${indexFila}${indexColumna}`}
              turno={turno}
              setTurno={setTurno}
              juego={juego}
              setJuego={setJuego}
              dato={columna}
              ganador={ganador}
              setGanador={setGanador}
            ></Casilla>
          ))
        )}
      </Flex>
      {!turno && (
        <Flex flexDir="column" align="center" gap="20px">
          <Heading>Selecciona el jugador que empieza</Heading>
          <Flex gap="20px">
            <Button onClick={() => setTurno("X")}>X</Button>
            <Button onClick={() => setTurno("O")}>O</Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Tablero;
