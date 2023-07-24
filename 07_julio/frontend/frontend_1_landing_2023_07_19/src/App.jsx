import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [tabletOrLess, setTabletOrLess] = useState(false);

  // se ejecuta la primera vez que abro la aplicación
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true)
    }
  }, []);

  return (
    <>
  {/* envío de props clave={valor}*/}
      <Header tabletOrLess={tabletOrLess}/>
      <Main/>
    </>
  )
}

export default App
