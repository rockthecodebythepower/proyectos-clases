import { useEffect, useState } from 'react';
import './App.css'

// una página que tenga un número y que sume cada vez que se haga click

function App() {

  /* let numero = 0; */

  const [numero, setNumero] = useState(0);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json()).then((res) => console.log(res));
  }, []);
  // no depende de nada es decir el array de dependencias está vacío

  const sumar = () => {
    /* numero++; */
    setNumero(numero + 1);
  }

  return (
    <>
      <h1 onClick={sumar}>{numero}</h1>
      <p onClick={() => setCambio(!cambio)}>Cambio</p>
    </>
  )
}

export default App;