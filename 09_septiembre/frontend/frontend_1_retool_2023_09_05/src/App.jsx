import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Retool from './pages/Retool/Retool'
import { useEffect, useState } from 'react'
import ButtonTroll from 'buttontroll'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const cerrarSesion = () => {

    localStorage.clear();
    window.location.reload();

  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} setToken={setToken}/>} />
        {user && <Route path="/projects" element={<Projects user={user} />} />}
        {user?.rol === "admin" && <Route path="/retool" element={<Retool />} />}
        <Route path="*" element={<Home user={user} />}/>
      </Routes>
      {user && <button id="closeSession" onClick={cerrarSesion}>Cerrar sesión</button>}
    </>
  )
}

export default App