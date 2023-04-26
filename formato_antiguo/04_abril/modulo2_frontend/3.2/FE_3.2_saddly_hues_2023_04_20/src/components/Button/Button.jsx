import React, { useEffect, useState } from "react";
import "./Button.css";
import CopyToClipboard from "react-copy-to-clipboard";

const Button = ({ color, index }) => {
  const descripcion = {
    0: "Background",
    1: "Headline",
    2: "Paragraph",
    3: "Secondary",
    4: "Main",
  };

  const [copied, setCopied] = useState(false);

  const copiar = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard
      text={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
      onCopy={() => copiar()}
    >
      <button className="boton">
        <div
          style={{
            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          }}
          className="ball"
        ></div>
        <p>{descripcion[index]}</p>
        <p>{`rgb(${color[0]}, ${color[1]}, ${color[2]})`}</p>
        {copied ? (
          <img src="/assets/tick.png" className="copia" />
        ) : (
          <img src="/assets/copia.png" className="copia" />
        )}
      </button>
    </CopyToClipboard>
  );
};

export default Button;
