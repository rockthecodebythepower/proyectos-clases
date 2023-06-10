import Servicios from "../Servicios/Servicios";
import "./Destino.css";

const Destino = ({ destino }) => {
  return (
    <div id="destino">
      <div className="portada">
        <img src={destino.imagen} />
      </div>
      <Servicios servicios={destino.servicios_de_habitacion}/>
      <h3>{destino.tipo_de_alojamiento}</h3>
    </div>
  );
};

export default Destino;
