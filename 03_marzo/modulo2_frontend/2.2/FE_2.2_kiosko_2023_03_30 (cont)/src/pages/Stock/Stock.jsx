import React, { useMemo } from "react";
import "./Stock.css";
import { Link } from "react-router-dom";

const Stock = ({ isDarkProp, productsProp }) => {
  console.log("SOY STOCK Y ME RE-RENDERIZO");

  //! FUNCIÓN ORDENACIÓN CON USEMEMO -> SE LANZA ÚNICAMENTE CUANDO LOS PRODUCTOS HAN CAMBIADO, SI NO CAMBIAR (POR EJEMPLO CUANDO CAMBIAMOS EL MODO) ENTONCES NO SE VUELVEN A ORDENAR, PORQUE NO HAN CAMBIADO Y POR LO TANTO NO NECESITAN VOLVER A SER ORDENADOS
  const orderedProducts = useMemo(() => {
    console.log("ORDENO DESDE EL MEMO");
    if (productsProp) {
      return productsProp.sort((a, b) => {
        return a.precio - b.precio;
      });
    }
  }, [productsProp]);


  //! FUNCIÓN ORDENACIÓN SIN USEMEMO -> SE LANZA CADA VEZ QUE CAMBIO DE MODO (NOCHE/DIA) -> ESTÁ ORDENANDO TODOS LOS ELEMENTOS, POR LO TANTO SI FUESEN 1 MILLÓN SERÍA UNA LOCURA ESTAR RELÁNZANDOLO UNA Y OTRA VEZ CUANDO CAMBIA EL TEMA DE LA PÁGINA
  if (productsProp) {
    console.log("ORDENO");
    productsProp.sort((a, b) => {
      return a.precio - b.precio;
    });
  }

  return (
    <div className={isDarkProp ? "stock__dark" : "stock__light"}>
      {orderedProducts &&
        orderedProducts.map((producto, index) => {
          return (
            <Link
              to={`/stock/${producto._id}`}
              key={index}
              className={isDarkProp ? "product__dark product" : "product"}
            >
              <div
                className={
                  isDarkProp ? "product-wrp__dark product-wrp" : "product-wrp"
                }
              >
                <h3>{producto.nombre}</h3>
                <div className="img-wrap">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <p>{producto.precio} €/Unidad</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Stock;
