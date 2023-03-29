import React from "react";
import "./Carrito.css";

const Carrito = ({ visibleProp, setVisibleProp, compraProp }) => {
  return (
    <div className={visibleProp ? "carrito-visible" : "carrito-oculto"}>
      <h1 onClick={() => setVisibleProp(!visibleProp)}>Carrito</h1>
      <div className="compra">
        {compraProp.length > 0 ? (
          compraProp.map((juego, index) => {
            return (
              <div className="compra-juego" key={index}>
                <div className="compra-img-wrp">
                  <img
                    src={juego.portada}
                    alt={juego.titulo}
                    title={juego.titulo}
                  />
                </div>
                <p className="precio">{juego.precio} €</p>
              </div>
            );
          })
        ) : (
          <img
            src="https://www.gifss.com/alimentos/carritos/carrito-de-compra-2.gif"
            alt="oops..."
          />
        )}
      </div>
    </div>
  );
};

export default Carrito;
