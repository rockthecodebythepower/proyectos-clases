//! tenemos este array: const frutas = ["naranja", "pomelo"] y queremos añadir al final de este array una nueva fruta llamada "manzana";

const frutas = ["naranja", "pomelo"];

//! solución buena
/* frutas.push("manzana");

console.log(frutas); */

//* PROS DE LAS FUNCIONES
//? TIENES EL CÓDIGO MEJOR ESTRUCTURADO
//? REUTILIZACIÓN

//* como esta función la quiero reutilizar es MUY importante que le lleguen las variables necesarias
function calcularDescuento (precio, descuento) {

    //! el código que pongamos dentro de las llaves será lo que haga la función
    //? para calcular el descuento de un producto necesitaremos el precio del producto y el descuento a aplicar

    const resultado = precio * descuento / 100;

    console.log(precio);

    console.log(precio - resultado);

}

//! producto 1
calcularDescuento(5, 10);

//! producto 2
calcularDescuento(98, 15);



//! ESTO NO SE HACE

//! producto 1 

/* const precio = 5;
const descuento = 10;

const resultado = precio * descuento / 100;

console.log(resultado); */

//! producto 2 

/* const precio2 = 98;
const descuento2 = 15;

const resultado2 = precio2 * descuento2 / 100;

console.log(resultado2); */