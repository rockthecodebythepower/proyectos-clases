import { useState } from "react";
import "./Destinos.css";
import { alojamientos } from "../../data/alojamientos";
import Destino from "../../components/Destino/Destino";
import Filtros from "../../components/Filtros/Filtros";

const Destinos = () => {

  const [destinos, setDestinos] = useState([...alojamientos]);

  return (
    <div>
      <Filtros destinos={destinos} setDestinos={setDestinos}/>
      <div id="destinos">
        {destinos.map((destino) => {
          return <Destino key={JSON.stringify(destino)} destino={destino} />;
        })}
      </div>
    </div>
  );
};

export default Destinos;
