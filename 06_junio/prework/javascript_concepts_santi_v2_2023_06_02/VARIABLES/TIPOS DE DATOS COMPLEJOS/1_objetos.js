//? simples
//! string let pepe = "pepe"
//! number let numero = 4
//! booleano let booleano = true;


//? complejos
//* puedo identificar un objeto porque este tiene llaves {} y porque dentro tiene propiedades que son clave: valor y están separadas por , 
//! object let persona = {
//!     nombre: "Pepe",
//!     edad: 34                  
//! }


const coche = {
    color: "pink",
    ruedas: 9,
    puertas: 5,
    CCVV: 180,
    marca: "BMW",
    camara: false
}

let clave = "ruedas"

console.log("El color de mi coche es: " + coche.color);
console.log("Mi coche tiene " + coche[clave] + " ruedas");

console.log(typeof coche.camara);

//! mi coche tiene ahora 10 ruedas, actualiza el valor de la variable en el coche.
coche.ruedas = 10;

console.log(coche.ruedas);



//! DIFERENCIA ENTRE QUE MI MEMORIA GUARDE EL VALOR DE UNA VARIABLE SIMPLE O LA REFERENCIA DE UNA VARIABLE COMPLEJA

//? DATO SIMPLE
let numero = 5;
let numero2 = numero; //! numero2 va a tener el VALOR de numero

numero2++;

console.log(numero);
console.log(numero2);


//? DATO COMPLEJO
const pepe = {  //! 3409p458702349582
    gafas: true
}

const pepe2 = pepe; //! pepe2 va a tener EL NÚMERO DE REFERENCIA EN MEMORIA de pepe;

const pepe3 = {...pepe}; //! COPIA EXACTA DEL VALOR DEL OBJETO

pepe2.gafas = false;

console.log(pepe);

console.log(Object.keys(pepe));

//! un objeto no es un tipo de dato iterable -> strings y array si lo son y los puedo recorrer con un bucle... acceder a las posiciones...

