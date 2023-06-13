const frutas = ["naranja", "pomelo", "manzana"];

function forEachCasero (array, funcion) {

    for (const elemento of array) {
        funcion(elemento);
    }

}

forEachCasero(frutas, (elemento) => {
    console.log(elemento);
});