import { useEffect, useState } from 'react'
import './App.css'
import Peces from './components/Peces/Peces';
import Header from './components/Header/Header';

function App() {

  //! vamos a hacer una petición a una api para traerme unos datos los meteré en un array y luego eliminaré uno de los datos con un componente hijo

  // https://acnhapi.com/v1/fish/

  //? necesitaremos de un estado para meter los datos que recibamos de la petición, puesto que esta tarda un tiempo en realizarse, y por lo tanto el lugar donde queramos guardar los datos al principio será undefined o array vacío... y como cuando se rellene queremos que se pinte pues necesitamos un estado para que cuando pongamos los datos en el se re-renderice el componente y deje de ser un array vacío
  const [peces, setPeces] = useState([]);

  //* el principio más importante de un estado, es que CUANDO CAMBIAS SU VALOR, ESTE, RE-RENDERIZA EL COMPONENTE EN EL QUE SE ENCUENTRA

  //! las peticiones las vamos a hacer normalmente en un useEffect();
  useEffect(() => {
    console.log("realizando la petición");
    fetch("https://acnhapi.com/v1/fish").then((res) => res.json()).then((res) => {

      const pecesArray = []

      for (const key in res) {
        let pez = res[key];
        pecesArray.push(pez);
      }

      setPeces([...pecesArray]);
      console.log("petición realizada");

    });
  }, [])
  //* el array de dependencias vacío [] -> indica que sólo se va a ejecutar este código la primera vez que se ejecute el componente

  const nombre = "Paula"

  return (
    <>
          {/* CLAVE = VALOR */}
      <Header aguacate={nombre} edad={45} gafas={false}/>
      <Peces peces={peces} setPeces={setPeces}/>
    </>
  )
}

export default App
