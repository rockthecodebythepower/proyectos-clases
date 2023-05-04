import React, { useContext } from 'react'
import { ContadoresContext } from '../../context/contadoresContext'

const Button = () => {

    const { contadores } = useContext(ContadoresContext);

    console.log(contadores);

  return (
    <div>Button</div>
  )
}

export default Button