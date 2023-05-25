import { useContext } from "react";
import Product from "../Producto/Product"
import "./Productos.css"
import { ProductContext } from "../../context/Context";

const Productos = () => {

  const { productos } = useContext(ProductContext);

  return (
    <div className="productos">
        {productos.map((producto) => <Product key={producto.nombre} producto={producto}/>)}
    </div>
  )
}

export default Productos