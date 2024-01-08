import { useState } from "react";
import { colors } from "../../utils/colors";
import "./DivMulticolor.css";

const DivMulticolor = () => {
  /* let colorAleatorio = colors[Math.floor(Math.random() * colors.length)]; */
  const [colorAleatorio, setColorAleatorio] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  console.log("Operación súper pesada");

  /* const [nombreDelEstado, setNombreDelEstado] = useState(valorInicial); */
  /* const [lectura, escritura] = useState(); */

  const cambiarColor = () => {
    setColorAleatorio(colors[Math.floor(Math.random() * colors.length)]);
    console.log("cambio el color");
    console.log(colorAleatorio);
  };

  return (
    <div
      className="multi"
      style={{ background: colorAleatorio }}
      onClick={cambiarColor}
    ></div>
  );
};

export default DivMulticolor;
