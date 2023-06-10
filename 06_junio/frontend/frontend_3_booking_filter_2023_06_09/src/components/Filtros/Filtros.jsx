import { posibilidades } from "../../data/posibilidades"
import Filtro from "../Filtro/Filtro"
import "./Filtros.css"

const Filtros = ({ destinos, setDestinos }) => {

  return (
    <div className="filtros">
        {Object.keys(destinos[0]).map((clave) => {
            if (clave !== "imagen") {
                return <Filtro clave={clave} key={clave} posibilidades={posibilidades[clave]} destinos={destinos} setDestinos={setDestinos}/>
            }
        })}
        <button>LIMPIAR</button>
    </div>
  )
}

export default Filtros