import { useFormulario } from "../../customHooks/useFormulario";
import "./FormularioAdicional.css";

const INITIAL_STATE = {
  mensaje: "",
  remitente: "",
  dinero: null,
  numero: null,
  cuenta: "",
};

const FormularioAdicional = () => {

    //? object destructuring
    //! RECOJO data y añadirDato que son variables que estoy retornando desde el useFormulario
  const { data, añadirDato } = useFormulario(INITIAL_STATE);

  console.log(nombre);

  const enviar = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form_adicional">
      <h2>FORMULARIO ADICIONAL</h2>
      <form onSubmit={enviar}>
        <input
          type="text"
          onInput={(e) => añadirDato("mensaje", e.target.value)}
          placeholder="mensaje"
        />
        <input
          type="text"
          onInput={(e) => añadirDato("remitente", e.target.value)}
          placeholder="remitente"
        />
        <input
          type="number"
          onInput={(e) => añadirDato("dinero", e.target.value)}
          placeholder="dinero"
        />
        <input
          type="number"
          onInput={(e) => añadirDato("numero", e.target.value)}
          placeholder="numero"
        />
        <input
          type="text"
          onInput={(e) => añadirDato("cuenta", e.target.value)}
          placeholder="cuenta"
        />
        <button>ENVIAR</button>
      </form>
    </div>
  );
};

export default FormularioAdicional;
