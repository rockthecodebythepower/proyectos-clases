import "./Precio.css";

export const setPrecios = (precio, descuento) => {

  return `
    ${
      descuento
        ? `<p class="precio-final">${(
            precio -
            (precio * descuento) / 100
          ).toFixed(2)}€</p>`
        : ""
    }
      <p class=${descuento ? "tachado" : "precio-final"}>${precio}€</p>
    `;
    
};
