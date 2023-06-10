import "./style.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
Header();
Footer();

//Por defecto, nada más se lanza la aplicación se pinta Home
Home();

//Atacando a los links de los anchor, vamos a añadirle un evento click que ejecute las funciones de las paginas
document.querySelector("#homelink").addEventListener("click", (ev) => {
	console.log(ev);
	Home();
});
/* document.querySelector("#homelink").onclick = Home; */
document.querySelector("#gallerylink").onclick = Gallery;
document.querySelector("#aboutlink").onclick = About;
