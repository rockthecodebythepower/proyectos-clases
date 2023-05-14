import React, { useEffect, useRef } from "react";
import "./Ruleta.css";
import { useRoulette } from "../../customHooks/useRoulette";

const Ruleta = ({ size = 300, buttonColor = "black", buttonText = "Spin", children }) => {

  const elements = [];

  const childrenArray = [...children];

  for (const child of childrenArray) {
    const newElement = {
      color: child.props.color,
      text: child.props?.text,
      url: child.props?.url
    }
    elements.push(newElement);
  }

  console.log(elements);

  const { canvasRef, disabled, rotar } = useRoulette(elements, size);

  return (
    <div id="canvas_wrp" style={{ width: `${size}px`, height: `${size}px` }}>
      <button
        disabled={disabled}
        onClick={rotar}
        id="spin"
        style={{
          width: `${size / 10}px`,
          height: `${size / 10}px`,
          background: buttonColor,
        }}
      >
        <div
          id="arrow"
          style={{
            width: `${size / 10}px`,
            height: `${size / 11}px`,
            background: buttonColor,
            color: buttonColor === "black" ? "white" : "black",
          }}
        ><p style={{fontSize: `${size / 32}px`}}>{buttonText}</p></div>
      </button>
      <canvas
        id="rulette"
        height={`${size}px`}
        width={`${size}px`}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Ruleta;
