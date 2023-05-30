import "./ArticuloTenis.css";

function ArticuloTenis({ articulo }) {

  return (
    <div className="articulo_tenis">
      <img src={articulo.imagen} alt={articulo.nombre} />
      <div>
        <h4>{articulo.nombre}</h4>
        <p className={articulo.rebajado ? "precio_rebajado" : "precio"}>{articulo.precio}€</p>
      </div>
      <p>{articulo.descrip}</p>
    </div>
  );
}

export default ArticuloTenis;