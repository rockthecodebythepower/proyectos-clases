import "./Productos.css";
import { setPrecios } from "../Precio/Precio";

export const pintarProductos = (productos, bgColor) => {
    let productos$$ = ``;
  
    for (const producto of productos) {
      const { nombre, imagen, descuento, precio } = producto;
  
      productos$$ += `
              <div class="producto" style="background-color: ${bgColor}">
                  ${descuento ? `<p class="descuento">${descuento}%</p>` : ""}
                  <h3>${nombre}</h3>
                  <img src="${imagen}" alt="${nombre}"/>
                  <div class="precios">
                    ${setPrecios(precio, descuento)}
                  </div>
              </div>
          `;
    }
  
    return productos$$;
  };