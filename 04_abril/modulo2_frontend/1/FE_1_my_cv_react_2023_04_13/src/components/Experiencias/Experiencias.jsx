import React from "react";
import "./Experiencias.css";

const Experiencias = ({ experiencias }) => {
  return (
    <div className="experiencias">
      <h2>EXPERIENCIAS</h2>
      {experiencias.map((experiencia) => {
        return (
          <p>
            {experiencia.sitio} ~ {experiencia.fecha} ~{" "}
            {experiencia.aprendizaje}
          </p>
        );
      })}
    </div>
  );
};

export default Experiencias;
