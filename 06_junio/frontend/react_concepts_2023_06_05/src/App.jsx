import { useState } from 'react';
import './App.css';
import Contador from './components/Contador/Contador';

function App() {
  //! lógica del componente -> funciones, variables, datos

  //* VARIABLE -> SI QUEREMOS QUE CAMBIE REACTIVAMENTE SERÍA CON ESTADOS
  /* let numero = 0; */

  /* const sumar = () => {
    numero++;
  } */

  //? ESTADO 
  /* const [numero, setNumero] = useState(0);

  console.log("soy app y me renderizo");

  const sumar = () => {
    setNumero(numero + 1);
  } */

  console.log("soy app y me renderizo");

  return (
    <div className='app'>
      <h1>No cambio nunca</h1>
      <Contador/>
    </div>
  )
}

export default App
