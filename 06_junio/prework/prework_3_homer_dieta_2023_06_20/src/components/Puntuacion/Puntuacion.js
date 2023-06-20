import "./Puntuacion.css";

let PUNTUACION = 0;

export const pintarPuntuacion = () => {

    const elemento$$ = document.querySelector("#puntuacion");

    elemento$$.innerHTML = `<h3>puntuacion: ${PUNTUACION}</h3>`

}

export const sumarPuntuacion = () => {
    PUNTUACION++;
    pintarPuntuacion();
}

export const restarPuntuacion = () => {
    PUNTUACION = PUNTUACION - 5;
    pintarPuntuacion();
}
