import { useState } from "react";
import "./Numero.css";

const Numero = ({ indice, tallaPROP }) => {

    const [elegido, setElegido] = useState(0);

    const cambiar = (index) => {
        setElegido(index);
    };

    console.log("SOY NUMERO Y ME RENDERIZO");

  return (
    <li
      onClick={() => cambiar(indice)}
      id={elegido === indice ? "elegido" : ""}
    >
      {tallaPROP}
    </li>
  );
};

export default Numero;
