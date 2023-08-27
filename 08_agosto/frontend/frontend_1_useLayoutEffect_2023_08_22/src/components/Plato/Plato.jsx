import { useState } from "react";
import "./Plato.css";

const Plato = ({ plato, rotacion }) => {
  const [front, setFront] = useState(true);

  return (
    <div className="flip-card" onClick={() => setFront(!front)}>
      <div className={`flip-card-inner ${!front ? "voltear" : ""}`}>
        <div className="flip-card-front" title={plato.descripcion}>
          <div className="telon">
            <h1>{plato.nombre}</h1>
          </div>
          <img src={plato.imagen} />
        </div>
        <div className="flip-card-back">
          <div>
            <h3>Ingredientes: </h3>
            <ul>
              {plato.ingredientes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Pasos: </h3>
            <ul>
              {plato.pasos.map((paso, index) => (
                <li key={paso}><span>{index + 1}.  </span>{paso}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plato;
