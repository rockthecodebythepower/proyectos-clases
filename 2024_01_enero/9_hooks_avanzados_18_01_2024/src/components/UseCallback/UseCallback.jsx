import { useCallback, useState } from "react";
import "./UseCallback.css";

//! useCallback me permite guardar una función para que aunque re-rendericemos nuestro componente esa función no se vuelva a DECLARAR
const UseCallback = () => {
  const [numero, setNumero] = useState(0);

  console.log("Re-renderiza el componente");

  const saludar = useCallback(() => {
    console.log("Hola como estás?");
  }, []);

  return (
    <div className="usecallback">
      <h1 onClick={() => setNumero(numero + 1)}>{numero}</h1>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};

export default UseCallback;
