import React, { useState } from "react";
import "./Gestor.css";
import Form from "../../components/Form/Form";
import Horario from "../../components/Horario/Horario";

export const INITIAL_FORM = {
  nombre: null,
  color: null,
  precio: 0,
  tarea: null,
  tiempo: 0,
};

const Gestor = () => {
  const [abierto, setAbierto] = useState(false);
  const [formState, setFormState] = useState({ ...INITIAL_FORM });
  const [horarios, setHorarios] = useState([]);

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
            <Horario horario={horario} key={index} />
          ))
        ) : (
          <h3>No tenemos horarios aún</h3>
        )}
      </div>
    </div>
  );
};

export default Gestor;
