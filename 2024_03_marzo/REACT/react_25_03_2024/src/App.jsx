import { Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experiences from "./pages/Experiences/Experiences";
import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMe/AboutMe";

const App = () => {
  return (
    <main>
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
