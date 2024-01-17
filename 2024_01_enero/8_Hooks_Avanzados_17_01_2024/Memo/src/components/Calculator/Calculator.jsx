/* import { useState } from "react"; */
import "./Calculator.css";

const Calculator = ({ numero, setNumero }) => {
  /* const [numero, setNumero] = useState(0); */

  console.log("Soy Calculator y me renderizo");

  return (
    <div className="useState">
      <button onClick={() => setNumero(numero - 1)}>-</button>
      <h3>{numero}</h3>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  );
};

export default Calculator;
