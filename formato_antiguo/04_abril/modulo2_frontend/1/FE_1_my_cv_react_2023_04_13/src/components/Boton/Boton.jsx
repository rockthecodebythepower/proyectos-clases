import React from "react";
import "./Boton.css";

const Boton = ({ src, alt, setMostrar, mostrar }) => {
  return (
    <button onClick={() => setMostrar(mostrar)} title={alt}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default Boton;