import { useState } from "react";

const useEditProduct = ({ productsProp, setProductsProp, navigate }) => {
  const [disabled, setDisabled] = useState(true);
  const [formState, setFormState] = useState({});

  const editar = (product) => {
    setDisabled(false);
    setFormState({...product})
  };

  const guardar = (id) => {
    setDisabled(true);
    const products = [...productsProp];
    const product = products.find((p) => p._id === id);
    const posicion = products.indexOf(product);
    products.splice(posicion, 1, formState);
    setProductsProp(products);
    navigate("/stock");
  };

  const eliminar = async (id) => {

    //! petición del back
    const resultado = await fetch(
      "http://localhost:4000/api/v1/producto/" + id,
      { method: "DELETE" }
    );
    await resultado.json();
    const products = [...productsProp];
    const product = products.find((p) => p._id === id);
    const posicion = products.indexOf(product);
    products.splice(posicion, 1);
    setProductsProp(products);

    navigate("/stock");
  };

  return {
    disabled,
    editar,
    guardar,
    formState,
    setFormState,
    eliminar,
  };
};

export default useEditProduct;
