import React, { useEffect, useState } from "react";
import "./Horario.css";

const Horario = ({ horario }) => {

    /* const [horarioState, setHorarioState] = useState({...horario}); */
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

  return (
    <div className="horario" style={{ backgroundColor: horario.color }}>
        {!timerOn && <button onClick={() => setTimerOn(true)}>Comenzar</button>}
        {timerOn && <button onClick={() => setTimerOn(false)}>Pausar</button>}
      <h2 className="nombre_horario">{horario.nombre}</h2>
      <h3 className="tiempo_horario">
      <span>{("0" + Math.floor((tiempo / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((tiempo / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((tiempo / 10) % 100)).slice(-2)}</span>
      </h3>
      <div className="info">
        <h4 className="tarea_horario">{horario.tarea}</h4>
        <h4 className="precio_horario">{horario.precio} €/hora</h4>
      </div>
    </div>
  );
};

export default Horario;
