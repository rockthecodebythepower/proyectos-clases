import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./PostShow.scss";

const PostShow = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const enviar = async (datos: any):Promise<void> => {
    datos.release_year = parseInt(datos.release_year.slice(0, 4));

    /* temporal para poder superar la clase*/
    datos.genre = ["Drama"];

    const datosJSON = JSON.stringify(datos);

    await fetch("https://video-club-back.vercel.app/api/v1/entertainments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: datosJSON,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(enviar)}>
      <div>
        <label>Título</label>
        <input {...register("title")} />
      </div>
      <fieldset {...register("genre")}>
        <legend>Género</legend>
        <div>
          <label>Drama</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Science Fiction</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Comedy</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Fantasy</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Adventure</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Crime</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Mistery</label>
          <input type="checkbox" />
        </div>
      </fieldset>
      <div>
        <label>Año de salida</label>
        <input type="date" {...register("release_year")} />
      </div>
      <div>
        <label>Plataforma</label>
        <input {...register("platform")} />
      </div>
      <div>
        <label>Estado</label>
        <select {...register("status")}>
          <option value="Ongoing">En emisión</option>
          <option value="Finished">Terminada</option>
        </select>
      </div>
      <div>
        <label>Portada</label>
        <input {...register("portrait")} />
      </div>
      <div>
        <label>Carátula</label>
        <input {...register("cover")} />
      </div>
      <div>
        <label>Tipo</label>
        <select {...register("type")}>
          <option value="show">Show</option>
          <option value="movie">Movie</option>
        </select>
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default PostShow;
