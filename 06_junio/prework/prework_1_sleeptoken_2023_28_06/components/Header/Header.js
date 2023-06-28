import "./Header.css";

const Header = () => {
  //Creamos el nodo
  const header = document.createElement("header");
  //Le damos contenido
  header.innerHTML = `
  <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/01/sleep-token-logo.png" alt="Sleep Token logo"/>
  `;
  //Lo inyectamos en el body
  document.body.appendChild(header);
};

const HeaderScrolling = () => {
  //Recuperamos el header
  const header = document.querySelector("header");
  //Creamos una variable que vaya almacenando el valor de la posición en booleano si esta pasa de cierta medida de pixeles
  let position = window.scrollY > 80;
  //Mediante el método toggle le añadimos o le quitamos la clase header-active
  header.classList.toggle("header-active", position);
};

window.addEventListener("scroll", HeaderScrolling);

export default Header;
