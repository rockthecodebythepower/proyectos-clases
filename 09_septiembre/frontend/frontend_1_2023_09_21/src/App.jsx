import { useState } from "react";
import "./App.css";
import Characters from "./page/Characters/Characters";
import Perfil from "./components/Perfil/Perfil";

function App() {
  console.log("SOY EL COMPONENTE APP Y ME RENDERIZO");

  const [perfil, setPerfil] = useState(
    "https://rhinoshield.es/cdn/shop/collections/R_M_collab_logo.jpg?v=1623834383"
  );
  const [mouseLocation, setMouseLocation] = useState();

  return (
    <div onMouseMove={(e) => setMouseLocation({ x: e.clientX, y: e.clientY })}>
      <div
        className="foco"
        style={{
          left: `${mouseLocation?.x - 250}px`,
          top: `${mouseLocation?.y - 250}px`,
        }}
      ></div>
      <div
        className="blur"
        style={{
          left: `${mouseLocation?.x - 250}px`,
          top: `${mouseLocation?.y - 250}px`,
        }}
      ></div>
      <Characters setPerfil={setPerfil} />
      <Perfil perfil={perfil}/>
    </div>
  );
}

export default App;
