import React from "react";
import "./Form.css";
import Option from "./Option/Option";
import { INITIAL_FORM } from "../../pages/Gestor/Gestor";

const Form = ({
  abierto,
  setAbierto,
  formState,
  setFormState,
  horarios,
  setHorarios,
}) => {
  const guardar = () => {
    setHorarios([...horarios, formState]);
    setFormState(INITIAL_FORM);
  };

  return (
    <div className="modal">
      <form className="formulario">
        <Option
          labelText="Nombre del proyecto: "
          setFormState={setFormState}
          formState={formState}
          propiedad="nombre"
        />
        <div className="option">
          <label className="pregunta">Elige el color del panel: </label>
          <select
            className="color"
            onChange={(e) =>
              setFormState({ ...formState, color: e.target.value })
            }
          >
            <option value="#32CD32" style={{ backgroundColor: "#32CD32" }}>
              Verde Lima
            </option>
            <option value="#009dff" style={{ backgroundColor: "#009dff" }}>
              Azul cielo
            </option>
            <option value="#ffc0cb" style={{ backgroundColor: "#ffc0cb" }}>
              Rosa
            </option>
            <option value="#ff4c4c" style={{ backgroundColor: "#ff4c4c" }}>
              Rojo suave
            </option>
            <option value="#FABADA" style={{ backgroundColor: "#FABADA" }}>
              #FABADA
            </option>
            <option value="#ffb836" style={{ backgroundColor: "#ffb836" }}>
              Naranja
            </option>
            <option value="#ffff65" style={{ backgroundColor: "#ffff65" }}>
              Amarillo claro
            </option>
            <option value="#4eedff" style={{ backgroundColor: "#4eedff" }}>
              Azul claro
            </option>
          </select>
        </div>
        <Option
          labelText="Precio por hora: "
          type="number"
          setFormState={setFormState}
          formState={formState}
          propiedad="precio"
        />
        <Option
          labelText="Tarea: "
          setFormState={setFormState}
          formState={formState}
          propiedad="tarea"
        />
        <div className="botones">
          <button
            type="button"
            className="guardar"
            onClick={() => {
              guardar();
              setAbierto(false);
            }}
          >
            Guardar
          </button>
          <button className="cancelar" onClick={() => setAbierto(false)}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
