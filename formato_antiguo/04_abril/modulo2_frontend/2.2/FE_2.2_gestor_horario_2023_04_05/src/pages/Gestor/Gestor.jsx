import React, { useEffect, useState } from "react";
import "./Gestor.css";
import Form from "../../components/Form/Form";
import Horario from "../../components/Horario/Horario";

export const INITIAL_FORM = {
  nombre: null,
  color: "#32CD32",
  precio: 0,
  tarea: null,
  tiempo: 0,
};

const Gestor = () => {
  const [abierto, setAbierto] = useState(false);
  const [formState, setFormState] = useState({ ...INITIAL_FORM });
  const [horarios, setHorarios] = useState(
    JSON.parse(localStorage.getItem("horarios")) || []
  );

  useEffect(() => {
    localStorage.setItem("horarios", JSON.stringify(horarios));
  }, [horarios]);

  return (
    <div className="gestor">
      <button onClick={() => setAbierto(true)}>Crear nuevo horario</button>
      {abierto && (
        <Form
          abierto={abierto}
          setAbierto={setAbierto}
          formState={formState}
          setFormState={setFormState}
          horarios={horarios}
          setHorarios={setHorarios}
        />
      )}
      <div className="horarios">
        {horarios.length > 0 ? (
          horarios.map((horario, index) => (
            <Horario
              horario={horario}
              key={index}
              horarios={horarios}
              setHorarios={setHorarios}
            />
          ))
        ) : (
          <div className="no-horarios-wrp">
            <h3 className="no-horarios">No tenemos horarios aún</h3>
            <img className="bailonga" src="https://i.gifer.com/47tv.gif" alt="oveja bailonga"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gestor;
