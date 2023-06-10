import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Destinos from "./pages/Destinos/Destinos";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
