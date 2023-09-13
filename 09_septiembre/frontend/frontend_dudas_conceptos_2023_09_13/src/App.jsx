import './App.css'
import Marte from './components/Marte/Marte';
import Nasa from './components/Nasa/Nasa';
import { useState } from "react";
import Pepe from './components/Pepe';
import Alejandro from './components/Alejandro';

function App() {

  /* la mayor parte de la lógica va aquí */
  const [page, setPage] = useState("nasa");

  // para hacer peticiones puedo utilizar fetch -> nativo -> primero devuelve como ha ido la petición y si pasamos a json los datos
  // para hacer peticiones puedo utilizar axios -> librería -> cuando realiza la petición la devuelve ya formateada

  return (
    /* aquí va la mayor parte de lo visual HTML */
    <>
      <h1>Soy App</h1>
      <nav>
        <ul>
          <li onClick={() => setPage("nasa")}>Ir a la nasa</li>
          <li onClick={() => setPage("marte")}>Ir a marte</li>
        </ul>
      </nav>
      <h3>El valor de page es: {page}</h3>
      { page === "nasa" && <Nasa/> }
      { page === "marte" && <Marte/> }
    </>
  )
}

export default App;