import React, { useEffect, useState } from "react";
import "./Horario.css";

const Horario = ({ horario, setHorarios, horarios }) => {

    const [tiempo, setTiempo] = useState(horario.tiempo);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTiempo((prevTime) => prevTime + 10);
            }, 10)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn])

    const pausar = () => {
      
      setTimerOn(false);
      horario.tiempo = tiempo;

      //! tengo un array y quiero sustituir un elemento que puede estar en cualquier parte del array
      const arrayApoyo = [...horarios];
      arrayApoyo.splice(horarios.indexOf(horario), 1, horario);
      setHorarios(arrayApoyo);

    }

  return (
    <div className="horario" style={{ backgroundColor: horario.color }}>
        {!timerOn && tiempo === 0 && <button onClick={() => setTimerOn(true)}>Comenzar</button>}
        {tiempo !== 0 && !timerOn && <button onClick={() => setTimerOn(true)}>Continuar</button>}
        {timerOn && <button onClick={() => pausar()}>Pausar</button>}
      <h2 className="nombre_horario">{horario.nombre}</h2>
      <h3 className="tiempo_horario">
      <span>{"0" + Math.floor(tiempo / 3600000)}:</span>
      <span>{("0" + Math.floor((tiempo / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((tiempo / 1000) % 60)).slice(-2)}</span>
      </h3>
      <div className="info">
        <h4 className="tarea_horario">{horario.tarea}</h4>
        <h4 className="precio_horario">{horario.precio} €/hora</h4>
      </div>
    </div>
  );
};

export default Horario;
