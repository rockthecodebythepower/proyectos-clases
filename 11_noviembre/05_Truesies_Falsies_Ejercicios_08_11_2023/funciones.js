const frutas = ["mango", "fresa", "naranja", "pomelo"];
const bebidas = ["agua", "leche", "coca-cola"];

const funcion = (array) => {

    if (!array) {
        console.log("debes aportarme un array para poder cumplir mi funcionalidad");
        return;
    }

    console.log("La longitud del array aportado es: " + array.length);

}

funcion(frutas);
funcion(bebidas);
funcion();