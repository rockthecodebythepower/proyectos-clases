import React from 'react'
import "./Habilidades.css"

const Habilidades = ({ habilidades }) => {

  return (
    <div className='habilidades'>
        <h2>HABILIDADES</h2>
        {habilidades.map((habilidad) => {
            return <p>{habilidad}</p>
        })}
    </div>
  )
}

export default Habilidades