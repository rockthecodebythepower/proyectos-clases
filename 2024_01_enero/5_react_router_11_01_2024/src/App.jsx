import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Characters from "./pages/Characters/Characters";
import CharacterById from "./pages/CharacterById/CharacterById";

//! BrowserRouter > Routes > Route

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/character/:id" element={<CharacterById/>}/>
      </Routes>
    </div>
  );
};

export default App;
