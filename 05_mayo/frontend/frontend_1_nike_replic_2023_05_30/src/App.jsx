import ButtonTroll from 'buttontroll';
import './App.css'
import Header from './components/Header/Header'
import Tenis from './components/Tenis/Tenis'
import Verano from './components/Verano/Verano';

function App() {

  return (
    <>
      <Header/>
      <Tenis/>
      <Verano/>
      <ButtonTroll text="Aritxa" textColor="white" bgColor="orange"/>
    </>
  )
}

export default App;