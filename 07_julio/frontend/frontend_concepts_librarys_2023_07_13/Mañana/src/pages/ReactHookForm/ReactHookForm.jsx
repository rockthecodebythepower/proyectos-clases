import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviar = (datos) => {
    console.log(datos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(enviar)}>
        <input {...register("nombreUsuario", { required: true })} />
        <div>
          <input
            {...register("password", {
              maxLength: {
                value: 8,
                message: "Tu contraseña debe ser menor de 8 dígitos",
              },
            })}
          />
          {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
        </div>
        <select {...register("opciones")}>
          <option value="pepito">Pepito</option>
          <option value="juanito">Juanito</option>
        </select>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
