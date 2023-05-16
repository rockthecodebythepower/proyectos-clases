function suma (num1, num2) {
    return num1 + num2;
}

console.log(suma(1, 4));
console.log(suma(2, 8));

/* const resta = (num1, num2) => { //! = >

    let resultado = num1 - num2;

    return resultado;

} */

//! AL NO PONER LAS LLAVES ESTOY RETORNANDO POR DEFECTO
const resta = (num1, num2) => num1 - num2;

//* declarar clase
//? construyo mi variable nombre

/* function pepito () {
    //* me va a dejar
    this.nombre = "pepito"
} */

/* const pepito = () => {
    //* error
    this.nombre = "pepito"
} */

console.log(resta(5, 2));
console.log(resta(53, 21));