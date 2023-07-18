import "./Header.css";

const Header = () => {
  //Creamos el elemento header
  const header = document.createElement("header");
  //Creamos el título
  const title = document.createElement("h1");
  title.innerText = "Neil Blomkamp";
  header.appendChild(title);
  //Creamos un navegador
  const navigator = document.createElement("nav");
  //Vamos a darle contenido HTML al navigator
  navigator.innerHTML = `
  <ul>
    <li>
      <a href="#null" id="about-link">About</a>
    </li>
    <li>
      <a href="#null" id="films-link">Filmography</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
  `;
  //Insertamos el navegador en el header
  header.appendChild(navigator)
  //Insertar el header en el body
  document.body.appendChild(header);
};

export default Header;
