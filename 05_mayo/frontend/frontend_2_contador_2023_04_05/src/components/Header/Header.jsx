import React, { useState } from 'react'
import "./Header.css"
import CrearContador from '../CrearContador/CrearContador'

const Header = () => {

    const [todos, setTodos] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

  return (
    <nav>
        <img src='/assets/icons/mas.svg' alt='crear contador' onClick={() => setIsVisible(true)}/>
        <CrearContador isVisible={isVisible} setIsVisible={setIsVisible}/>
        <div>
            <p className={todos ? 'filtro_seleccionado' : ""} onClick={() => setTodos(true)}>Todos</p>
            <p className={!todos ? 'filtro_seleccionado' : ""} onClick={() => setTodos(false)}>Hoy</p>
        </div>
        <img src='/assets/icons/filtro.svg' alt='ordenacion'/>
    </nav>
  )
}

export default Header