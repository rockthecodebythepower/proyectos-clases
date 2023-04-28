import React from 'react'
import "./Header.css"

const Header = ({ setShowDoc }) => {
  return (
    <div className='header'>
        <button onClick={() => setShowDoc(true)}>Documentación</button>
        <button onClick={() => setShowDoc(false)}>CodeSandbox</button>
    </div>
  )
}

export default Header