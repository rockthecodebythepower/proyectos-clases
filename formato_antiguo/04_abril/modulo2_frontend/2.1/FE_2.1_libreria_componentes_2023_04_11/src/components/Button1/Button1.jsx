import React from "react";
import "./Button1.css";
import { altura, anchura, colores, fuente } from "../../config/Boton1";

const Button1 = ({ texto = "Botón", tamaño = "m", tipo, estilo = "orange" }) => {

  return (
    <button
      style={{
        width: anchura[tamaño],
        height: altura[tamaño],
        fontSize: fuente[tamaño],
        backgroundColor: estilo,
        color: colores[estilo],
        border: `${colores[estilo]} 3px solid`
      }}
      className="button1"
    >
      {texto.toUpperCase()}
    </button>
  );
};

export default Button1;