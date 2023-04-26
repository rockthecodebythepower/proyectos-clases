import React from 'react'
import "./Alerts.css";
import Alert from '../../components/Alert/Alert';

const Alerts = () => {
  return (
    <div className='alerts'>
        <h1>Estos son nuestros alerts</h1>
        <h3>Alert sin icono, sin estado (informative) sin texto y sin título</h3>
        <Alert ></Alert>
        <h3>Alert con icono, sin estado (informative) sin texto y sin título</h3>
        <Alert icon ></Alert>
        <h3>Alert con icono, con estado (danger) con texto y sin título</h3>
        <Alert icon state="danger" canClose>Esto es un texto que es el children de mi alert holaaaaaa</Alert>
        <h3>Alert con icono, con estado (sucess) sin texto y con título</h3>
        <Alert icon state="success" canClose title="Esto es un titulo"></Alert>
        <h3>Alert con icono, con estado (warning) sin texto y sin título</h3>
        <Alert icon state="warning" canClose></Alert>
    </div>
  )
}

export default Alerts