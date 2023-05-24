import { comprobar } from "../../functions/comprobar";
import "./Casilla.css";

const Casilla = ({
  numFila,
  numColumna,
  contenido,
  tableroState,
  setTableroState,
}) => {
  const jugar = () => {
    const tableroMock = [...tableroState];
    tableroMock[numFila][numColumna] = "X";

    setTableroState(tableroMock);

    if (!comprobar(tableroMock)) {
      setTimeout(() => {
        turnoPaquito();
      }, 500);
    } else {
      if (!comprobar(tableroMock) === "Empate") {
        setTimeout(() => {
          alert("Ha habido un empate");
        }, 200);
      } else {
        setTimeout(() => {
          alert("Han ganado las X");
        }, 200);
      }
    }
  };

  const turnoPaquito = () => {
    const tableroMock = [...tableroState];

    let filaAleatoria = Math.floor(Math.random() * tableroMock.length);
    let columnaAleatoria = Math.floor(Math.random() * tableroMock[0].length);

    //! TENGO QUE NO HACER ESTO CUANDO NO TIENE POSIBILIDAD
    while (
      tableroMock[filaAleatoria][columnaAleatoria] === "X" ||
      tableroMock[filaAleatoria][columnaAleatoria] === "O"
    ) {
      filaAleatoria = Math.floor(Math.random() * tableroMock.length);
      columnaAleatoria = Math.floor(Math.random() * tableroMock[0].length);
    }

    tableroMock[filaAleatoria][columnaAleatoria] = "O";

    setTableroState(tableroMock);

    if (comprobar(tableroMock)) {
      if (!comprobar(tableroMock) === "Empate") {
        setTimeout(() => {
          alert("Ha habido un empate");
        }, 200);
      } else {
        setTimeout(() => {
          alert("Han ganado las O");
        }, 200);
      }
    }
  };

  return (
    <div
      className="casilla"
      onClick={contenido === "" ? jugar : null}
      id={contenido}
    >
      {contenido}
    </div>
  );
};

export default Casilla;
