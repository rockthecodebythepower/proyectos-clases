import { useModal } from "../../custom/useModal";
import "./Card.css";

const Card = () => {
  
  const { open, abrir, cerrar } = useModal();

  return (
    <div className="card">
      <button onClick={open ? cerrar : abrir}>
        {open ? "Cerrar" : "Abrir"}
      </button>
      <div className="modal" style={{ display: open ? "flex" : "none" }}>
        <h1>Lo que sea</h1>
      </div>
    </div>
  );
};

export default Card;
