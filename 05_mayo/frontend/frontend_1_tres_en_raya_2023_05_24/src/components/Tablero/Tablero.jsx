import { useState } from "react";
import { tablero } from "../../data/tablero";
import Casilla from "../Casilla/Casilla";
import "./Tablero.css";

const Tablero = () => {

    const [tableroState, setTableroState] = useState(tablero);

  return (
    <div className="tablero">
      {tableroState.map((fila, indexFila) =>
        fila.map((columna, indexColumna) => {
          return (
            <Casilla
              key={`${indexFila}${indexColumna}`}
              numFila={indexFila}
              numColumna={indexColumna}
              tableroState={tableroState}
              setTableroState={setTableroState}
              contenido={columna}
            />
          );
        })
      )}
    </div>
  );
};

export default Tablero;
