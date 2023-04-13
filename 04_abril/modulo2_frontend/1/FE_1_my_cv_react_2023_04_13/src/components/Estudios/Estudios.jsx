import React from "react";
import "./Estudios.css";

const Estudios = ({ estudios }) => {

  return (
    <div className="estudios">
      <h2>ESTUDIOS</h2>
      {estudios.map((estudio) => {
        return (
          <p>
            {estudio.sitio} ~ {estudio.fecha} ~ {estudio.estudio}
          </p>
        );
      })}
    </div>
  );
};

export default Estudios;
