import { Link } from "react-router-dom";
import "./House.css";

const House = () => {
  return (
    <div className="house">
      <Link to="/attic">
        <div className="desvan"></div>
      </Link>
      <img src="/assets/lucasHouse.jpg" />
      <div className="instrucciones">
        <h2>Instrucciones</h2>
        <p>Haz click en la habitación deseada para buscar</p>
      </div>
    </div>
  );
};

export default House;
