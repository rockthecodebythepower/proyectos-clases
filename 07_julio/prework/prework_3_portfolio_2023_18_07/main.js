import "./style.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Filmography from "./components/Filmography/Filmography";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";

Header();
Main();
Contact();

//La vista por defecto es About
About();

document.querySelector("#about-link").addEventListener("click", About);
document.querySelector("#films-link").addEventListener("click", Filmography);

//Para hacer una SPA
//Creamos un elemento y lo pintamos como hemos pintado los componentes de arriba, por ejemplo un elemento main
//Ese elemento main tiene que tener un contenido por defecto (por ejemplo la Home)
//Creamos otros componentes que son los sustitutos de Home que serian las diferentes paginas (about, gallery, etc...);
//Cada uno de estos componentes lo que hace es buscar la etiqueta main y le hacen un innerHTML con otro contenido

//A los enlaces del header le añadimos un evento click que ejecute la funcion about, la funcion gallery o cualquier otra pagina
//Y entonces al clicar en ellos se va a sustituir el contenido del main por otra cosa
