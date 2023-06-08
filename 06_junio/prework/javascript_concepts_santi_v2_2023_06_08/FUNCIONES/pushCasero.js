//! quiero meter un nuevo dato en un array

const frutas = ["naranja", "piña", "pomelo"]

//? método push
frutas.push("manzana");

console.log(frutas);


//? push casero

//! con esta función queremos añadir elementos dentro de un array, para ello, necesitaremos un array y un elemento
function pushCasero (array, addElemento) {

    // ["naranja", "piña", "pomelo", "manzana"].length = 4
    //      0         1        2         3

    // array[array.length] = "pepito"

    // ["naranja", "piña", "pomelo", "manzana", "pepito"].length = 5
    //      0         1        2         3          4

    array[array.length] = addElemento;

    console.log(array);

}

pushCasero(frutas, "mandarina");
pushCasero(frutas, "pera");