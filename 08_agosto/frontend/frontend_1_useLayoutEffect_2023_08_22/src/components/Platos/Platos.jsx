import { useEffect, useState } from "react";
import { recetas } from "../../data/recetas";
import "./Platos.css";
import Loading from "../Loading/Loading";
import Plato from "../Plato/Plato";

const Platos = () => {
  const [platos, setPlatos] = useState();

  useEffect(() => {
    setTimeout(() => {
      setPlatos([...recetas]);
    }, 3000);
  }, []);

  let rotacion = -50;

  return (
    <div className="platos">
      {platos ? (
        platos.map((plato) => <Plato key={plato.id} rotacion={rotacion += 50} plato={plato} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Platos;
