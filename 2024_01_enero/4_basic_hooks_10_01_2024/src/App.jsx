import "./App.css";
import Desplegable from "./components/Desplegable/Desplegable";
import Header from "./components/Header/Header";
import Peticion from "./components/Peticion/Peticion";

const App = () => {
  return (
    <div>
      <Header/>
      <Desplegable/>
      <Peticion/>
    </div>
  )
}

export default App