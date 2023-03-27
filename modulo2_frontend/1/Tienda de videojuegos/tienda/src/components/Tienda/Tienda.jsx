import React from "react";
import "./Tienda.css";

const Tienda = ({ juegosClaveProp, compraProp, setCompraProp }) => {

  const modificarCarrito = (accion, juego) => {

    if (accion === "añadir") {
      setCompraProp([...compraProp, juego]);
    } else {
        const arrayNuevo = [...compraProp];
        const posicion = arrayNuevo.indexOf(juego);
        arrayNuevo.splice(posicion, 1);
        setCompraProp(arrayNuevo);
    }
    
  };

  return (
    <div className="juegos">
      {juegosClaveProp.map((juego, index) => {
        return (
          <div key={index} className="juego">
            <img
              className="iconoCorazon"
              src={
                compraProp.indexOf(juego) >= 0
                  ? "/heart.png"
                  : "/empty-heart.png"
              }
              alt="corazon vacío"
              onClick={() =>
                compraProp.indexOf(juego) >= 0
                  ? modificarCarrito("eliminar", juego)
                  : modificarCarrito("añadir", juego)
              }
            />
            <h3>{juego.titulo}</h3>
            <div className="portada">
              <img src={juego.portada} alt={juego.titulo} />
            </div>
            <div>
              <p>{juego.precio} €</p>
              <p className="descripcion">{juego.descripcion}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tienda;
