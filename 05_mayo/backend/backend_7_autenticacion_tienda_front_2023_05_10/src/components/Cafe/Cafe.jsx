import { useContext } from "react";
import "./Cafe.css"
import { modeContext } from "../../context/modeProvider";
import { flags } from "../../data/data";

const Cafe = ({ cafe }) => {

    /* console.log(props.cafe);

    const { cafe } = props; */

    const { darkMode } = useContext(modeContext);

  return (
    <div className={darkMode ? "cafe dark" : "cafe"}>
      <h3>{cafe.nombre}</h3>
      <div className="img_wrp">
        <img src={cafe.imagen} alt={cafe.nombre} />
      </div>
      <p>{cafe.precio}€</p>
      <img
        className="icon"
        src={cafe.cafeinado ? "/assets/insomnio.png" : "/assets/sueño.png"}
        title={cafe.cafeinado ? "cafeinado" : "descafeinado"}
      />
      <img src={flags[cafe.origen]} className="flag"/>
    </div>
  );
};

export default Cafe;
