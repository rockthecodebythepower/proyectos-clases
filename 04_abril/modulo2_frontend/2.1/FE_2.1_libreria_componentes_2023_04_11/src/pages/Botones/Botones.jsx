import React from 'react'
import Button1 from '../../components/Button1/Button1'

const Botones = () => {
  return (
    <div>

        <Button1 texto="pepito" tamaño="l"/>
        <Button1 texto="juanillo" estilo='blue'/>
        <Button1 tamaño='s' estilo="green"/>
        <Button1 tamaño='s' estilo="yellow"/>
        <Button1 tamaño='m' estilo="red"/>
        <Button1 tamaño='m' estilo="pink"/>

    </div>
  )
}

export default Botones