import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Tablero from './components/Tablero/Tablero'
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

function App() {

  //! parte de lógica
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    /* parte que se va a pintar */
    <div className='app'>
      <Login setUser={setUser} setToken={setToken}/>
      <Tablero user={user} token={token}/>
      <ScoreBoard token={token}/> 
    </div>
  )
}

export default App