import { imgTipos } from "../../types/types"
import Filter from "../Filter/Filter"
import "./Filters.css"

const Filters = () => {
  return (
    <div className="filters">
        {Object.keys(imgTipos).map((tipo) => <Filter key={tipo} tipo={tipo}/>)}
    </div>
  )
}

export default Filters