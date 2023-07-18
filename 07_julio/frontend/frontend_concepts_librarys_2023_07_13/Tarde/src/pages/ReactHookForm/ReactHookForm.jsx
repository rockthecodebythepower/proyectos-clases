import { useForm } from "react-hook-form";
import "./ReactHookForm.css";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crearPerfil = (datos) => {
    console.log(datos);
  };

  return (
    <div id="hookform">
      <h1>Crea tu perfil con React Hook Forms</h1>
      <form onSubmit={handleSubmit(crearPerfil)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: { value: true, message: "El email es requerido" },
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Tienes que introducir un email válido" }
            })}
          />
          {console.log(errors)}
          {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
        </div>
        <div>
          <label>Selecciona porfesion</label>
          <select {...register("profesion")}>
            <option value="medico">Médico</option>
            <option value="pescador">Pescador</option>
            <option value="programador">Programador</option>
            <option value="cientifico">Científico</option>
          </select>
        </div>
        <div>
          <label>Edad</label>
          <input type="range" {...register("edad")} />
        </div>
        <div>
          <label>Color favorito</label>
          <input type="color" {...register("color")} />
        </div>
        <button>Enviar formulario</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
