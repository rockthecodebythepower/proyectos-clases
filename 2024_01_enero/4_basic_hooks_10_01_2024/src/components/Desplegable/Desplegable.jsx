import { useState } from "react";
import Header from "../Header/Header";
import "./Desplegable.css";

//! un estado no es más que una variable muy importante en ese componente que norma general provoca un cambio visual en el componente

const Desplegable = () => {
  /* let openned = false; */
  const [openned, setOpenned] = useState(false);

  const toggle = () => {
    /* openned = !openned; */
    setOpenned(!openned);
  };

  return (
    <>
      <img
        src="/assets/menu.png"
        alt="menu"
        className="menu"
        onClick={toggle}
      />
      {console.log(openned)}
      <div className="desplegable">
        <Header
          h="90svh"
          w={openned ? "300px" : "0px"}
          flexDir="column"
          bgColor="orange"
          r={0}
        />
      </div>
    </>
  );
};

export default Desplegable;
