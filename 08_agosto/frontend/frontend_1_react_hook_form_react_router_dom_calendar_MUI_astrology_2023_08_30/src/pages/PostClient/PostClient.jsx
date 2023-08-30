import { useForm, Controller } from "react-hook-form";
import { signos } from "../../utils/signos";
import "./PostClient.css";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const PostClient = () => {
  const { register, handleSubmit, control } = useForm();

  const [fecha, setFecha] = useState("");

  const darAlta = (datos) => {
    datos.fechaNac = fecha;
    datos.edad = parseInt(datos.edad);
    const datosString = JSON.stringify(datos);

    fetch("http://localhost:3000/api/v1/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: datosString,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="postClient">
      <form onSubmit={handleSubmit(darAlta)}>
        <div>
          <label>Nombre</label>
          <input {...register("nombre")} />
        </div>
        <div>
          <label>Primer apellido</label>
          <input {...register("primerApellido")} />
        </div>
        <div>
          <label>Segundo apellido</label>
          <input {...register("segundoApellido")} />
        </div>
        <div>
          <label>Fecha de nacimiento</label>
          {/* <input type="date" {...register("fechaNac")}/> */}
          <DatePicker
            label="selecciona una fecha"
            onChange={(value) =>
              setFecha(`${value.$D}-${value.$M + 1}-${value.$y}`)
            }
          />
          {/* <Controller
            name="fechaNac"
            control={control}
            render={({ field }) => <DatePicker {...field} defaultValue={dayjs('2022-04-17')} label="selecciona una fecha" />}
          /> */}
        </div>
        <div>
          <label>Hora</label>
          <input type="time" {...register("hora")} />
        </div>
        <div>
          <label>Signo</label>
          <select {...register("signo")}>
            {signos.map((signo) => (
              <option key={signo} value={signo}>
                {signo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Edad</label>
          <input type="number" max="150" {...register("edad")} />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input {...register("correo")} />
        </div>
        {/* <div>
          <label>Carta Astral</label>
          <input {...register("cartaAstral")} />
        </div> */}
        <button>Dar de alta</button>
      </form>
    </div>
  );
};

export default PostClient;
