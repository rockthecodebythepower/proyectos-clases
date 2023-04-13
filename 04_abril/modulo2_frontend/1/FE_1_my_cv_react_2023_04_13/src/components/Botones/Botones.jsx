import React from "react";
import "./Botones.css";
import Boton from "../Boton/Boton";

const Botones = ({ setMostrar }) => {
  return (
    <div className="botones">
      <Boton
        src="/assets/estudios.png"
        alt="estudios"
        setMostrar={setMostrar}
        mostrar="estudios"
      />
      <Boton
        src="/assets/experiencias.png"
        alt="experiencias"
        setMostrar={setMostrar}
        mostrar="experiencias"
      />
      <Boton
        src="/assets/habilidades.png"
        alt="habilidades"
        setMostrar={setMostrar}
        mostrar="habilidades"
      />
    </div>
  );
};

export default Botones;
