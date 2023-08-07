import { useState } from 'react'
import './App.css'
import Alert from './components/Alert/Alert'
import ButtonTroll from 'buttontroll';

function App() {

  // con el paso del tiempo tenemos que intentar desacoplar los componentes
  // componente totalmente desacoplado 
  // tenemos que intentar sacar la funcionalidad del componente y conseguir que mis componentes no DEPENDAN de nada;

  const [enviado, setEnviado] = useState(false);

  const enviar = (e) => {

    e.preventDefault();
    setEnviado(true);

  }

  return (
    <div className='app'>
        <form onSubmit={enviar}>
          <label>Nombre: </label>
          <input />
          <button>Enviar</button>
          <ButtonTroll text="Esto es un botón reutilizable" textColor="pink" bgColor="black"/>
          <ButtonTroll text="Rocío entendió" textColor="yellow" bgColor="grey" funcion={() => console.log("")}/>
        </form>
        {enviado && <Alert status="success" title='se ha enviado el formulario' description=''/>}
    </div>
  )
}

export default App