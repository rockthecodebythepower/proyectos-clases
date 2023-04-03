import "./App.css";
import { Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Detalle from "./components/Detalle/Detalle";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<Detalle/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;