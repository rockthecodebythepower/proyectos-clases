import React from "react";

const Form = ({ handleChange, values, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input name="email" onInput={handleChange}/>
      </div>
      <div>
        <label>Selecciona porfesion</label>
        <select name="profesion" onChange={handleChange}>
          <option value="medico">Médico</option>
          <option value="pescador">Pescador</option>
          <option value="programador">Programador</option>
          <option value="cientifico">Científico</option>
        </select>
      </div>
      <div>
        <label>Edad</label>
        <input type="range" name="edad" onChange={handleChange}/>
      </div>
      <div>
        <label>Color favorito</label>
        <input type="color" name="color" onChange={handleChange}/>
      </div>
      <button>Enviar formulario</button>
    </form>
  );
};

export default Form;
