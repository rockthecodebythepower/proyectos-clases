import { useLayoutEffect, useState } from 'react'
import './App.css'
import Mobile from './components/Mobile/Mobile';
import Desktop from './components/Desktop/Desktop';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const cambiarAncho = () => {
    setWidth(window.innerWidth);
  }

  useLayoutEffect(() => {
    
    window.addEventListener("resize", cambiarAncho)
  
    return () => {
      window.removeEventListener("resize", cambiarAncho);
    }
  }, [])
  

  return (
    <>
      {width < 400 ? <Mobile/> : <Desktop/>}
    </>
  )
}

export default App
