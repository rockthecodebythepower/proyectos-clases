import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './component/Header/Header';

function App() {

  const id = 4;

  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about/:id" element={<About/>}/>
    </Routes>      
    <button onClick={() => navigate("/about/" + id)}>Ir a about con el id: {id}</button>
    </>
  )
}

export default App