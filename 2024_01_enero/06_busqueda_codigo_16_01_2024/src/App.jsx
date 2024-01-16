import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import House from "./components/House/House";
import Attic from "./components/Attic/Attic";
import BedRoom from "./components/BedRoom/BedRoom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/house" element={<House/>}/>
        <Route path="/attic" element={<Attic/>}/>
        <Route path="/bedroom" element={<BedRoom/>}/>
      </Routes>
    </div>
  )
}

export default App