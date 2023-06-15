import { useState } from "react";
import "./NativeForm.css";
import { useFormulario } from "../../customHooks/useFormulario";

//? lo ponemos fuera del componente para que si se re-renderiza el componente por algún casual NO vuelva a ejecutarse esta declaración de la variable que me estaría limpiando los datos de recogida del formulario
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const NativeForm = () => {

  const { data, añadirDato } = useFormulario(INITIAL_STATE);

  const enviar = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h2>FORMULARIO NATIVO</h2>
      <form onSubmit={enviar}>
        <input
          placeholder="nombre"
          onInput={(e) => añadirDato("name", e.target.value)}
        />
        <input
          placeholder="email"
          onInput={(e) => añadirDato("email", e.target.value)}
        />
        <input
          placeholder="*****"
          type="password"
          onInput={(e) => añadirDato("password", e.target.value)}
        />
        <button>ENVIAR</button>
      </form>
    </div>
  );
};

export default NativeForm;
