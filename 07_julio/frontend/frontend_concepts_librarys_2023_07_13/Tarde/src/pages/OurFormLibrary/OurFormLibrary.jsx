import { useState } from "react";
import "./OurFormLibrary.css";
import { useMyForm } from "./hooks/useMyForm";

const OurFormLibrary = () => {

    const { saveData, controladorDeSubmits } = useMyForm();

    const enviar = (datos) => {
        console.log(datos);
    }

  return (
    <div id="ourform">
      <h1>Crea tu perfil con nuestra nueva librería super chula</h1>
      <form onSubmit={(e) => controladorDeSubmits(e, enviar)}>
        <div>
          <label>Email</label>
          <input onInput={(e) => saveData("email", e)}/>
        </div>
        <div>
          <label>Selecciona porfesion</label>
          <select onChange={(e) => saveData("profesion", e)}>
            <option value="medico">Médico</option>
            <option value="pescador">Pescador</option>
            <option value="programador">Programador</option>
            <option value="cientifico">Científico</option>
          </select>
        </div>
        <div>
          <label>Edad</label>
          <input type="range" onChange={(e) => saveData("edad", e)}/>
        </div>
        <div>
          <label>Color favorito</label>
          <input type="color" onChange={(e) => saveData("color", e)}/>
        </div>
        <button>Enviar formulario</button>
      </form>
    </div>
  );
};

export default OurFormLibrary;
