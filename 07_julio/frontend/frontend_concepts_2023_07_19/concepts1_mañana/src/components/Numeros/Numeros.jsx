import { useState } from "react";
import { tallas } from "../../data/tallas";
import "./Numeros.css";
import Numero from "../Numero/Numero";

const Numeros = () => {

    //! en este caso en concreto como quiero que al cambiar la variable elegido se cambie visualmente algo en mi página SIN manipular el dom
  /* let elegido = 0; */

  console.log("SOY EL COMPONENTE NUMEROS Y ME RENDERIZO");

  return (
    <div>
      <ul className="numeros">
        {tallas.map((talla, index) => (
                            //  clave = valor   clave = valor
          <Numero key={index} tallaPROP={talla} indice={index}/>
        ))} 
      </ul>
    </div>
  );
};

//! las props sirven para enviar datos, variables... lo que quiera de un componente padre a un componente hijo
//? las props se escriben dentro de la etiqueta del componente <Numero props/>

export default Numeros;