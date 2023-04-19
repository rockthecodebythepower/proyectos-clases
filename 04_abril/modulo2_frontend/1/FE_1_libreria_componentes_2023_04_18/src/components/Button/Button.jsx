import React from "react";
import "./Button.css";
import { altura, fuente, padding } from "../../config/Boton";

const Button = ({
  texto = "Botón",
  tipo = "high",
  leftIcon,
  rightIcon,
  size = "m",
  disabled,
  funcion
}) => {
  if (leftIcon && tipo !== "high") {
    const rutaArray = leftIcon.split(".");
    rutaArray[0] += "_Dark";
    leftIcon = rutaArray.join(".");
  }

  if (rightIcon && tipo !== "high") {
    const rutaArray = rightIcon.split(".");
    rutaArray[0] += "_Dark";
    rightIcon = rutaArray.join(".");
  }

  return (
    <button
      type="button"
      className={`button ${tipo}`}
      disabled={disabled}
      style={{
        padding: padding[size],
        height: altura[size],
        fontSize: fuente[size],
      }}
      onClick={funcion}
    >
      {leftIcon && <img className={`img_${tipo}`} src={leftIcon} />}
      {texto}
      {rightIcon && <img className={`img_${tipo}`} src={rightIcon} />}
    </button>
  );
};

export default Button;
