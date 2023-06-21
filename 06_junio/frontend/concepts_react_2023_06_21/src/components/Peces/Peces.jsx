import Pez from "../Pez/Pez";
import "./Peces.css"

const Peces = ({ peces, setPeces }) => {

  return (
    <div className="peces">
    {/* recorrer el array de peces, coger un pez de cada vuelta del bucle y llamo al componente Pez enviándole todos los datos que quiera por las props ->  */}
        {peces.map((pez) => <Pez key={pez.id} pez={pez} clase={pez.price > 900 ? "pez_caro" : "pez"} peces={peces} setPeces={setPeces}/>)}
    </div>
  )
}

export default Peces