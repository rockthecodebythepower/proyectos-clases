import { Route, Routes } from "react-router-dom";
import "./App.css";
import StarsBackground from "./components/StarsBackground/StarsBackground";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";
import Game from "./pages/Game/Game";

const App = () => {
  return (
    <>
      <StarsBackground />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </>
  );
};

export default App;


/* 
  utilizar react-router-dom ✅
  responsive ✅
  buenas prácticas de html y css ✅
  componentes ✅
  props ✅
  rutas y links ✅
  jsx ✅
*/