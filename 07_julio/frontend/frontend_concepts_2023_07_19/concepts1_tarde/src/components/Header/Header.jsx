import { useState } from "react";
import "./Header.css";

// tengo un array de objetos que necesito crear un ul pero un li por cada uno de ellos, el contenido de texto del li debería ser la propiedad link de cada objeto
const enlaces = [
    {
        link: "Home"
    },
    {
        link: "About"
    },
    {
        link: "Shop"
    },
    {
        link: "Exit"
    },
    {
        link: "Manu"
    },
];

const Header = (props) => {

    props = "lsdafklas";

    console.log(props);

  /* let orientation = "top"; */
  // si necesito cambiar visualmente algo en mi página necesitaré una variable especial que cada vez que cambie me pida volver a renderizar mi componente o función para que el return vuelva a ocurrir - si yo tengo algo en el return que está cambiando necesito volver a ejecutar el return para ver ese cambio

  // un estado es una variable especial que caundo se cambia nos renderiza de nuevo el componente
  const [orientation, setOrientation] = useState("top");
  //         leer         escribir               valor inicial
  //        getter         setter                valor inicial

  const changeOrientation = () => {
    switch (orientation) {
        case "top":
            setOrientation("right")
            break;
        case "right":
            setOrientation("bottom")
            break;
        case "bottom":
            setOrientation("left")
            break;
        case "left":
            setOrientation("top")
            break;
        default:
            break;
    }
  }

  return (
    <header className={orientation} onClick={changeOrientation}>
      {orientation === "bottom" ? (
        <p style={{ color: "red" }}>La orientación es bottom</p>
      ) : (
        <p style={{ color: "blue" }}>La orientación NO es bottom</p>
      )}

      <p>esto es una suma {3 + 5}</p>
      <p>esto es una concatenación {"3" + 5}</p>

        <ul>
            {enlaces.map((enlace) => <li key={enlace.link}>{enlace.link}</li>)}
        </ul>
    </header>
  );
};

//.map devolver un array con las mismas posiciones que el array que estamos recorriendo y normalmente se utiliza para cambiar algo del array antiguo en el nuevo

export default Header;