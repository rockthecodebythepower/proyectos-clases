import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEditProduct from "../../customHooks/useEditProduct";
import "./EditProduct.css";

const EditProduct = ({ isDarkProp, productsProp, setProductsProp }) => {
  const [product, setProduct] = useState();

  const navigate = useNavigate();

  const { disabled, editar, guardar, formState, setFormState, eliminar } = useEditProduct(
    { productsProp, setProductsProp, navigate }
  );

  const { id } = useParams();

  const peticion = async () => {
    const resultado = await fetch(
      "http://localhost:4000/api/v1/producto/" + id
    );
    const res = await resultado.json();
    setProduct(res);
  };

  useEffect(() => {
    peticion();
  }, []);

  console.log("SOY EDITPRODUCT Y ME RE-RENDERIZO");

  return (
    <div
      className={isDarkProp ? "editProduct__dark editProduct" : "editProduct"}
    >
      {product && (
        <>
          <div
            className={
              isDarkProp
                ? "editProduct_img__dark editProduct_img"
                : "editProduct_img"
            }
          >
            <img src={product.imagen} alt={product.nombre} />
          </div>
          <div>
            <input
              disabled={disabled}
              defaultValue={product.nombre}
              onChange={(e) =>
                setFormState({ ...formState, nombre: e.target.value })
              }
            />
            <input
              disabled={disabled}
              defaultValue={product.precio}
              onChange={(e) =>
                setFormState({ ...formState, precio: e.target.value })
              }
            />
          </div>
          <div>
            <button
              onClick={() => {
                disabled ? editar(product) : guardar(product._id);
              }}
            >
              {disabled ? "Editar" : "Guardar"}
            </button>
            <button onClick={() => eliminar(product._id)}>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditProduct;
