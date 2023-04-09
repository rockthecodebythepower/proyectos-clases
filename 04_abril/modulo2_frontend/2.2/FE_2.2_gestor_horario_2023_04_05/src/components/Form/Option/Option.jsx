import React from "react";
import "./Option.css";

const Option = ({ labelText, type, formState, setFormState, propiedad }) => {
  return (
    <div className="option">
      <label className="pregunta">{labelText}</label>
      <input
        className="respuesta"
        type={type}
        max={40}
        onChange={(e) =>
          setFormState({ ...formState, [propiedad]: e.target.value })
        }
      />
    </div>
  );
};

export default Option;
