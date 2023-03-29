import React from "react";
import "./Modo.css";

const Modo = ({ isDarkProp, setIsDarkProp }) => {
  return (
    <p className="change-modo"
      onClick={() => (isDarkProp ? setIsDarkProp(false) : setIsDarkProp(true))}
    >
      {isDarkProp ? "🌚" : "🌞"}
    </p>
  );
};

export default Modo;
