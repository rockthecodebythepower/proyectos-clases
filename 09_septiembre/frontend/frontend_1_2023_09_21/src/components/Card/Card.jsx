import { useState } from "react";
import "./Card.css";

const Card = ({ character, setPerfil }) => {

  console.log("SOY EL COMPONENTE CARD Y ME RENDERIZO");

  const { name, status, image } = character;
  const [voltear, setVoltear] = useState(false);

  const funcionalidadCarta = () => {
    setPerfil(image);
    setVoltear(!voltear);
  }

  return (
    <div className="card">
      <div className={`image ${voltear ? "vuelta" : "normal"}`} onClick={funcionalidadCarta}>
        <img
          src={image}
          className={status !== "Alive" ? "grayscale" : "normal"}
        />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
