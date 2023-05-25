import "./FormularioNativo.css";
import { useModal } from "../../customHooks/useModal";
import OpenForm from "../OpenForm/OpenForm";
import { useState } from "react";
import ButtonCierre from "../ButtonCierre/ButtonCierre";
import { useContext } from "react";
import { ProductContext } from "../../context/Context";

const INITIAL_STATE = {
  nombre: "",
  precio: 0,
  stock: 0,
};

const FormularioNativo = () => {

  const { productos, setProductos } = useContext(ProductContext);

  const { abrir, cerrar, abierto } = useModal();

  const [formData, setFormData] = useState(INITIAL_STATE);

  const crearProducto = () => {
    setProductos([...productos, formData]);
  }

  return (
    <>
      <OpenForm titulo="Formulario nativo" posicion="right" funcion={abrir} />
      <form className={abierto ? "native-form abierto" : "native-form"}>
        <ButtonCierre funcion={cerrar}  posicion="right"/>
        <div>
          <label>Nombre producto</label>
          <input
            placeholder="nombre..."
            required
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            placeholder="Precio..."
            type="number"
            required
            onChange={(e) =>
              setFormData({ ...formData, precio: e.target.value })
            }
          />
        </div>
        <div>
          <label>Stock</label>
          <input
            placeholder="Stock..."
            type="number"
            required
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
          />
        </div>
        <button type="button" onClick={crearProducto} className="boton-enviar">Crear producto</button>
      </form>
    </>
  );
};

export default FormularioNativo;
