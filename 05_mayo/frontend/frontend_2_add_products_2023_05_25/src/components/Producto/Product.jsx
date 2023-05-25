import "./Product.css"

const Product = ({ producto }) => {

  return (
    <div className="producto">
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}€</p>
        <p>stock: {producto.stock}</p>
    </div>
  )
}

export default Product