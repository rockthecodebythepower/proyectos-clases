// calcular
const calcularMedia = (productos) => {
  return (
    productos.reduce((acc, product) => (acc += product.sellCount), 0) /
    productos.length
  );
};

// pintar media
export const pintarMedia = (productos) => {
  const pMediaHTML = document.querySelector(".media");
  const media = calcularMedia(productos);

  pMediaHTML.textContent = `La media de ventas de los productos es: ${media}`;
};