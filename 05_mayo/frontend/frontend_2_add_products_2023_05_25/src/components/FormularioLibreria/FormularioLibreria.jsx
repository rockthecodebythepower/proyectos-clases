import "./FormularioLibreria.css";
import { useModal } from "../../customHooks/useModal";
import OpenForm from "../OpenForm/OpenForm";
import { useForm } from "react-hook-form";
import ButtonCierre from "../ButtonCierre/ButtonCierre";
import { useContext } from "react";
import { ProductContext } from "../../context/Context";

const FormularioLibreria = () => {

  const { productos, setProductos } = useContext(ProductContext);

  const { abrir, cerrar, abierto } = useModal();

  const { handleSubmit, register } = useForm();

  const crearProducto = (formData) => {
    setProductos([...productos, formData])
  }

  return (
    <>
      <OpenForm titulo="Formulario librería" posicion="left" funcion={abrir} />
      <form
        className={abierto ? "library-form abierto" : "library-form"}
        onSubmit={handleSubmit(crearProducto)}
      >
        <ButtonCierre funcion={cerrar} posicion="left"/>
        <div>
          <label>Nombre producto</label>
          <input placeholder="nombre..." {...register("nombre")} />
        </div>
        <div>
          <label>Precio</label>
          <input
            placeholder="Precio..."
            type="number"
            {...register("precio")}
          />
        </div>
        <div>
          <label>Stock</label>
          <input placeholder="Stock..." type="number" {...register("stock")} />
        </div>
        <button className="boton-enviar">Crear producto</button>
      </form>
    </>
  );
};

export default FormularioLibreria;