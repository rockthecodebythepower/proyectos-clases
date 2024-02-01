import "./App.css";
import { Route, Routes } from "react-router-dom";
import GuessCountry from "./pages/GuessCountry/GuessCountry";
import Country from "./pages/Country/Country";
import Header from "./components/Header/Header";
import GuessPopulation from "./pages/GuessPopulation/GuessPopulation";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<GuessCountry />} />
        <Route path="/guessPopulation" element={<GuessPopulation />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;
