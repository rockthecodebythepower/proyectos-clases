//Esta función renderizará toda la aplicación
const renderApp = () => {
  Header();
  addListenerHeaderBtn();
  Nav();
  SectionDescription();
  navListeners();
  MethodsSection();
  Footer()
};

//Función que pinta el header y su contenido
const Header = () => {
  //Creamos una etiqueta header vacía
  const headerTag = document.createElement("header");
  //Creamos el titulo
  const titleHeading = document.createElement("h1");
  titleHeading.innerText = "JavaScript DOM";
  //Le añadimos el titulo al header
  headerTag.appendChild(titleHeading);
  //Creamos un botón
  const headerBtn = document.createElement("button");
  headerBtn.innerText = "☀ / ☾";
  headerBtn.id = "headerbtn";
  //Le añadimos el botón al header
  headerTag.appendChild(headerBtn);
  //Añadimos el header al body
  document.body.appendChild(headerTag);
};
//Función que le añade el poder cambiar el tema al botón que tiene el header
const addListenerHeaderBtn = () => {
  //Recuperamos el botón de header
  const headerBtn = document.querySelector("#headerbtn");
  //Le añadimos un evento click a este boton
  headerBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      headerBtn.innerText = "☾ / ☀";
    } else {
      headerBtn.innerText = "☀ / ☾";
    }
  });
};

//Función que pinta el nav
const Nav = () => {
  const navTag = document.createElement("nav");
  const ulTag = document.createElement("ul");
  ulTag.innerHTML = `
  <li>
    <button id="queryBtn">querySelector</button>
  </li>
  <li>
    <button id="getElementBtn">getElementById</button>
  </li>
  <li>
    <button id="createBtn">createElement</button>
  </li>
  <li>
    <button id="appendBtn">appendChild</button>
  </li>
  `;
  navTag.appendChild(ulTag);
  document.body.appendChild(navTag);
};

//Función que pinta la sección de descripción
const SectionDescription = () => {
  const sectionTag = document.createElement("section");
  sectionTag.className = "description";
  sectionTag.innerHTML = `
  <h2>Selecciona un método para ver su descripción</h2>
  `;
  document.body.appendChild(sectionTag);
};

//Función que le añade click a los botones del nav y modifica el description
const navListeners = () => {
  //Recupero el elemento description
  const section = document.querySelector(".description");
  //Recupero los botones
  const queryBtn = document.querySelector("#queryBtn");
  const getElementBtn = document.querySelector("#getElementBtn");
  const createBtn = document.querySelector("#createBtn");
  const appendBtn = document.querySelector("#appendBtn");
  //Le añadimos un click diferente a cada uno
  queryBtn.addEventListener("click", () => {
    section.innerHTML = `
    <p><strong>querySelector()</strong>: Este método permite seleccionar un elemento del DOM utilizando selectores CSS.</p>
    <div>
    <code>//Selecciona el primer elemento con la clase "mi-clase"</code>
    <code>const elemento = document.querySelector(".mi-clase");</code>
    </div>
    `;
  });

  getElementBtn.addEventListener("click", () => {
    section.innerHTML = `
    <p><strong>getElementById()</strong>: Este método selecciona un elemento por su atributo "id".</p>
    <div>
    <code>//Selecciona el elemento con el id "mi-elemento"</code>
    <code>const elemento = document.getElementById("mi-elemento");</code>
    </div>
    `;
  });

  createBtn.addEventListener("click", () => {
    section.innerHTML = `
    <p><strong>createElement()</strong>: Este método crea un nuevo elemento HTML.</p>
    <div>
    <code>//Crea un nuevo elemento <p> y le asigna contenido de texto</code>
    <code>const nuevoParrafo = document.createElement("p");</code>
    <code>nuevoParrafo.textContent = "Este es un nuevo párrafo creado con JavaScript.";</code>
    </div>
    `;
  });

  appendBtn.addEventListener("click", () => {
    section.innerHTML = `
    <p><strong>appendChild()</strong>: Este método permite agregar un elemento hijo a otro elemento en el DOM.</p>
    <div>
    <code>//Agrega el nuevo párrafo al elemento con el id "contenedor"</code>
    <code>const contenedor = document.getElementById("contenedor");</code>
    <code>contenedor.appendChild(nuevoParrafo);</code>
    </div>
    `;
  });
};

//Función que pinta todos los métodos de DOM
const domMethods = [
  "querySelector()",
  "querySelectorAll()",
  "getElementById()",
  "getElementsByClassName()",
  "getElementsByTagName()",
  "createElement()",
  "createTextNode()",
  "appendChild()",
  "removeChild()",
  "replaceChild()",
  "setAttribute()",
  "getAttribute()",
  "classList.add()",
  "classList.remove()",
  "classList.toggle()",
  "classList.contains()",
  "addEventListener()",
  "removeEventListener()",
  "innerHTML",
  "textContent",
  "style",
  "classList",
  "parentElement",
  "children",
  "nextElementSibling",
  "previousElementSibling",
  "firstElementChild",
  "lastElementChild",
  "parentNode",
  "childNodes",
];

const MethodsSection = () => {
  const section = document.createElement("section");
  section.className = "methods";
  const list = document.createElement("ul");
  for (const item of domMethods) {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  }
  section.appendChild(list);
  document.body.appendChild(section);
};

const Footer = () => {
  const footer = document.createElement("footer");
  const paragraph = document.createElement("p");
  paragraph.innerText = "Rock the Code - 2023";
  footer.appendChild(paragraph);
  document.body.appendChild(footer);
};

renderApp();
