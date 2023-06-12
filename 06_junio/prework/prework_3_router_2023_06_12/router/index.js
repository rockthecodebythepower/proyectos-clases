//Importamos los componentes pages
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

//Vamos a crear un array de objetos que incluya la ruta y el componente de cada una de las páginas
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/gallery",
		component: Gallery,
	},
	{
		path: "/about",
		component: About,
	},
];

//Creamos la función que se encarga de actualizar el contenido del main según la ruta del navegador, teniendo como referencia nuestro array de rutas
export const router = () => {
	//Recuperamos el path del navegador
	const path = window.location.pathname;

	//Sacar cada uno de los componentes de mi array si existe la coincidencia entre el path y lo que tenemos en el array de objetos
	const {component} = routes.find((route) => route.path === path) || {};
	//Vamos a renderizar el componente si existe en la etiqueta main y si no pintamos la ruta NotFound
	if (component) {
		document.querySelector("main").innerHTML = component();
	} else {
		document.querySelector("main").innerHTML = NotFound();
	}
};

//Vamos a añadirle un evento popstate a window para que lance la función router cada vez que vayamos hacia adelante o hacia atrás en el navegador
window.addEventListener("popstate", router);

//Vamos a añadirle un evento DomContentLoaded al documento para cargar la página cada vez que se actualice el contenido del main
document.addEventListener("DOMContentLoaded", router);

//Vamos a encapsular los listeners en una función para que se lancen después del router y le de tiempo a encontrar los anchors
export const addListeners = () => {
	//Vamos a añadirle un evento click a todos los links del nav
	const navLinks = document.querySelectorAll("nav a");
	navLinks.forEach((link) => {
		//Le añadimos un evento click a cada uno
		link.addEventListener("click", (ev) => {
			//Le quitamos el comportamiento por defecto que hace que se recargue la página
			ev.preventDefault();
			//Vamos a recuperar el href de cada uno de los links
			const href = link.getAttribute("href");
			//Vamos a controlar el historial de navegación empujando un nuevo estado al cambiar la URL pero sin recargar la página
			history.pushState(null, null, href);
			//Disparamos de nuevo el router para que en cada uno de los clicks vuelva a detectar la ruta, detecte cual es y renderice el componente correspondiente
			router();
		});
	});
};
