import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Botones from "./pages/Botones/Botones";
import "./App.css";
import Alerts from "./pages/Alerts/Alerts";
import Badges from "./pages/Badges/Badges";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botones" element={<Botones />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/badges" element={<Badges />} />
      </Routes>
    </Router>
  );
}

export default App;
