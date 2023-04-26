import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Botones from "./pages/Botones/Botones";
import Avatares from "./pages/Avatares/Avatares";
import Selects from "./pages/Selects/Selects";
import "./App.css"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/botones' element={<Botones/>}/>
        <Route path='/avatares' element={<Avatares/>}/>
        <Route path='/selects' element={<Selects/>}/>
      </Routes>
    </Router>
  )
}

export default App
