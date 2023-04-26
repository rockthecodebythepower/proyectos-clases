import React from "react";
import "./Mostrar.css";
import Habilidades from "../Habilidades/Habilidades";
import Experiencias from "../Experiencias/Experiencias";
import Estudios from "../Estudios/Estudios";

const Mostrar = ({ mostrar, cv }) => {
  return (
    <div className="mostrar">
      {mostrar === "habilidades" && <Habilidades habilidades={cv.habilidades} />}
      {mostrar === "estudios" && <Estudios estudios={cv.estudios} />}
      {mostrar === "experiencias" && <Experiencias experiencias={cv.experiencias} />}
    </div>
  );
};

export default Mostrar;
