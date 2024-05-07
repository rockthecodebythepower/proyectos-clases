const suma = (a, b) => {
    let sumado = a + b;

    return sumado;
    //! si no utilizo return JAMÁS puede el valor resultante SALIR de la función
}


const resultado = suma(3, 5);

console.log(resultado);


const array = ["paquito", "pepito", "menganito"];

const resultadoOperacion = array.splice(1, 1);

console.log(array);
console.log(resultadoOperacion);