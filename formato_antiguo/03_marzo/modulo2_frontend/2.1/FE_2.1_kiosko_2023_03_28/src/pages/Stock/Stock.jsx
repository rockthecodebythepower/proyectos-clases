import React from "react";
import "./Stock.css";
import { Link } from "react-router-dom";

const Stock = ({ isDarkProp, productsProp }) => {
  console.log("SOY STOCK Y ME RE-RENDERIZO");

  return (
    <div className={isDarkProp ? "stock__dark" : "stock__light"}>
      {productsProp.map((producto, index) => {
        return (
          <Link
            to={`/stock/${producto.id}`}
            key={index}
            className={isDarkProp ? "product__dark product" : "product"}
          >
            <div
              className={
                isDarkProp ? "product-wrp__dark product-wrp" : "product-wrp"
              }
            >
              <h3>{producto.nombreProducto}</h3>
              <div className="img-wrap">
                <img src={producto.imagen} alt={producto.nombreProducto} />
              </div>
              <p>{producto.precio}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Stock;
