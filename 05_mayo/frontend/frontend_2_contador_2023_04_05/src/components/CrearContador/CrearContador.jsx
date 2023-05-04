import { useContext, useState } from "react";
import "./CrearContador.css";
import { ContadoresContext } from "../../context/contadoresContext";
import { colors } from "../../colors/colors";

const CrearContador = ({ isVisible, setIsVisible }) => {
  const [inputValue, setInputValue] = useState("");

  const { contadores, setContadores } = useContext(ContadoresContext);

  const crearContador = () => {

    const newContador = {
      id: contadores.length,
      titulo: inputValue,
      color: colors[Math.floor(Math.random() * colors.length)],
      value: 0,
      sum: 1
    };

    setContadores([...contadores, newContador]);
    setIsVisible(false);

    localStorage.setItem(
      "contadores",
      JSON.stringify([...contadores, newContador])
    );
  };

  return (
    <div className={isVisible ? "overlay visible" : "overlay"}>
      <div className="formulario_contador">
        <h2>Nuevo contador</h2>
        <p>Ingrese un nombre para este contador.</p>
        <input
          placeholder="Nombre del contador"
          onInput={(e) => setInputValue(e.target.value)}
        />
        <div>
          <button onClick={() => setIsVisible(false)}>Cancelar</button>
          <button disabled={!inputValue} onClick={crearContador}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrearContador;