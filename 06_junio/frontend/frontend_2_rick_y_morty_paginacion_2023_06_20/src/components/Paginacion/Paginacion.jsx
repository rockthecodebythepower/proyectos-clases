import { useContext } from "react";
import "./Paginacion.css";
import { myContext } from "../../context/ContextProvider";

const Paginacion = () => {

    let flechaIzquierda = "<";
    let flechaDerecha = ">";

    const { pagina, dispatch } = useContext(myContext);

  return (
    <div className="botones">
      <button onClick={() => dispatch({ type: "RESTAR_PAGE" })}>{flechaIzquierda}</button>
      <h3>{pagina}</h3>
      <button onClick={() => dispatch({ type: "SUMAR_PAGE" })}>{flechaDerecha}</button>
    </div>
  );
};

export default Paginacion;
