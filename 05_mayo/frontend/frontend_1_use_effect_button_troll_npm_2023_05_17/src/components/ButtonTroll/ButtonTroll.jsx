import React, { useState } from "react";
import "./ButtonTroll.css";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const ButtonTroll = ({ text, bgColor, textColor, funcion }) => {
  
  const [clase, setClase] = useState();
  const [randomPosition, setRandomPosition] = useState({
    top: Math.random() * windowHeight,
    left: Math.random() * windowWidth,
  });

  const cambiarPosicion = () => {
    setRandomPosition({
      top: Math.random() * windowHeight, 
      left: Math.random() * windowWidth, 
    });
  };

  return (
    <button
      className={clase ? `buttonTroll ${clase}` : "buttonTroll"}
      style={{
        backgroundColor: bgColor && bgColor,
        color: textColor && textColor,
        top: clase && randomPosition.top,
        left: clase && randomPosition.left,
      }}
      onClick={funcion}
      onMouseOver={() => {
        setClase("troll");
        cambiarPosicion();
      }}
    >
      {text}
    </button>
  );
};

export default ButtonTroll;
