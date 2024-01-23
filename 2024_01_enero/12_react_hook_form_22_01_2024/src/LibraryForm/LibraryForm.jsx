import { useForm } from "react-hook-form";
import "./LibraryForm.css";

const LibraryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrp">
      <h2>Este es el formulario manejado por la librería</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Fecha de nacimiento</label>
          <input type="date" {...register("fechaNac")} />
        </div>
        <div>
          <label style={{ color: errors.userName && "red" }}>
            Nombre de usuario
          </label>
          <input
            {...register("userName", { required: "Este campo es requerido" })}
            style={{
              borderColor: errors.userName && "red",
              outline: errors.userName && "red",
            }}
            placeholder={errors.userName && errors.userName.message}
          />
          {errors.userName && (
            <p style={{ color: "red" }}>{errors.userName.message}</p>
          )}
        </div>
        <div>
          <label>Contaseña</label>
          <input
            type="password"
            {...register("password", {
              required: "Este campo es requerido",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                message:
                  "La contraseña debe tener mayúsculas, minúsculas y números",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          {console.log(errors)}
        </div>
        <button>Registro</button>
      </form>
    </div>
  );
};

export default LibraryForm;
