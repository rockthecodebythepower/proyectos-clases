import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import Header from "./components/Header/Header";
import Madre from "./components/Madre/Madre";

const App = () => {

  //! el componente app conviene recargarlo las mínimas veces posibles
  //? necesito repintar el componente app? -> lo haré

  // tengo una funcionalidad que me requiere un repintado general
  // no significa que sea menos eficiente o menos óptimo
  // funcionalidad es lo que quiero que haga nuestra página
  // optimización es que lo haga de la mejor manera posible

  console.log("SOY EL COMPONENTE APP Y ME RE-RENDERIZO");

  return (
    <div>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Madre/>
    </div>
  );
};

export default App;
