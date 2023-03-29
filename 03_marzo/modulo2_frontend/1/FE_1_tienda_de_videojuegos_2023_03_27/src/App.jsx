import { useEffect, useState } from "react";
import "./App.css";
import Carrito from "./components/Carrito/Carrito";
import Tienda from "./components/Tienda/Tienda";
import juegosData from "./data/data.json";

function App() {
  
  const [mostrarCarritoState, setMostrarCarritoState] = useState(false);
  const [juegosState, setJuegosState] = useState([]);
  const [compraState, setCompraState] = useState([]);

  useEffect(() => {
    //! fetch con la petición...
    setJuegosState([...juegosData]);
  }, []);

  return (
    <div>
      <header>
        <img src="/icono.png" />
        <button onClick={() => setMostrarCarritoState(!mostrarCarritoState)} className="boton-carrito">
          <p>🛒</p>
          {compraState.length !== 0 && <p className="contador">{compraState.length}</p>}
        </button>
      </header>
      <Carrito
        visibleProp={mostrarCarritoState}
        setVisibleProp={setMostrarCarritoState}
        compraProp={compraState}
      />
      <Tienda
        juegosClaveProp={juegosState}
        compraProp={compraState}
        setCompraProp={setCompraState}
      />
    </div>
  );
}

export default App;
