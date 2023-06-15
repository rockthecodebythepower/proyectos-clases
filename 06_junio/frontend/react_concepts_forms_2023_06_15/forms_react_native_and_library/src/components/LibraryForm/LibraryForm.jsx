import { useForm } from "react-hook-form";
import "./LibraryForm.css";

const LibraryForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className="library_form">
      <h2>FORMULARIO REACT-HOOK-FORM</h2>

      <form onSubmit={handleSubmit(enviar)}>

        <input placeholder="nombre del producto" {...register("nombre", { required: "ESTE CAMPO ES REQUERIDO" })} />
        {console.log(errors)}
        {errors?.nombre?.type === "required" && <p style={{color: "red"}}>{errors.nombre.message}</p>}
        <input placeholder="precio" type="number" {...register("precio")} />
        <input type="file" {...register("imagen")} />
        <input placeholder="categoria" {...register("categoria")} />
        <button>ENVIAR</button>

      </form>
    </div>
  );
};

export default LibraryForm;
