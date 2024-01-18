import { useRef, useState } from "react";
import "./UseRef.css";
import { useModal } from "../../custom/useModal";

const UseRef = () => {
  /* const [inputValue, setInputValue] = useState(""); */
  const refInput = useRef();
  const { open, cerrar } = useModal(true);

  const enviar = () => {
    console.log("valor del input: " + refInput.current.value);
  };

  console.log("SOY EL COMPONENTE Y ME RENDERIZO");

  return (
    <div className="useref">
      <input ref={refInput} className="input" />
      <button onClick={enviar}>Enviar</button>
      <button onClick={cerrar}>Cerrar Modal</button>
      <div className="modal" style={{ display: open ? "flex" : "none" }}>
        <h1>Este es el modal del useRef</h1>
      </div>
    </div>
  );
};

export default UseRef;
