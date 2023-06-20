import { empezar, initMenu } from './src/components/Menu/Menu';
import { pintarPuntuacion } from './src/components/Puntuacion/Puntuacion';
import { initToggle } from './src/components/Toggle/Toggle';
import './style.css';

const initMain = () => {

    const app$$ = document.querySelector("#app");

    app$$.innerHTML = `
        <div id="toggle"></div>
        ${initMenu()}
        <div id="gameBoard">
            <div id="puntuacion"></div>
        </div>
    `

    initToggle(document.querySelector("#toggle"));
    empezar();
    pintarPuntuacion();

}

initMain();


// cualquier función puede retornar algo -> return 5 -> cuando yo ejecuto la función esa función me va a devolver un número que es 5.