import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import DivNaranja from "./components/DivNaranja/DivNaranja";
import PintarNumero from "./components/PintarNumero/PintarNumero";

const App = () => {
  const [numero, setNumero] = useState(0);

  console.log("Soy App y me renderizo");

  return (
    <>
      <Calculator numero={numero} setNumero={setNumero}/>
      <DivNaranja/>
      <PintarNumero numero={numero}/>
    </>
  );
};

export default App;
