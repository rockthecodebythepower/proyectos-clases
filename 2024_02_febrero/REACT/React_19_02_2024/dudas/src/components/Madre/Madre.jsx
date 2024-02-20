import { useState } from "react";
import Hija from "../Hija/Hija";
import "./Madre.css";

const Madre = () => {
  console.log("SOY EL COMPONENTE MADRE Y ME RE-RENDERIZO");

  const [interruptor, setInterruptor] = useState(false);

  return (
    <>
      <h1
        className="h1"
        onClick={() => setInterruptor(!interruptor)}
        style={{ color: interruptor ? "green" : "red" }}
      >
        Madre
      </h1>
      <Hija />
    </>
  );
};

export default Madre;
