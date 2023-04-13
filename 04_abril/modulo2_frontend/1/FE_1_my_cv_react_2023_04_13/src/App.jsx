import { useState } from "react";
import "./App.css";
import ImagenPerfil from "./components/ImagenPerfil/ImagenPerfil";
import Info from "./components/Info/Info";
import Botones from "./components/Botones/Botones";
import { cv } from "./data/datos";
import Mostrar from "./components/Mostrar/Mostrar";

function App() {

  const [mostrar, setMostrar] = useState("experiencias");

  return (
    <>
      <ImagenPerfil cv={cv}/>
      <Info cv={cv}/>
      <Botones setMostrar={setMostrar}/>
      <Mostrar mostrar={mostrar} cv={cv}/>
    </>
  );
}

export default App;