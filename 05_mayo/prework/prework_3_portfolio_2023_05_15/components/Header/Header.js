//Importamos los estilos para que se sumen al resto
import "./Header.css";

//Creamos una función llamada template que retornará el html que va ir dentro de header
const template = () => {
	return `
    <h1>Peter Parker</h1>
    <nav>
        <ul>
            <li>
                <a href="#about">About</a> 
            </li>
            <li>
                <a href="#education">Education</a> 
            </li>
            <li>
                <a href="#projects">Projects</a> 
            </li>
        </ul>
    </nav>
    `;
};
//Exportamos una función que posteriormente lanzaremos en main.js que inyecte en la etiqueta header de HTML todo el template
export const Header = () => {
	document.querySelector("header").innerHTML = template();
};
