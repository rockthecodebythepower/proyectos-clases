//! tipo de dato complejo
// en memoria se reserva un espacio para ese objeto y nos aporta una dirección para poder acceder a el

// 435895023475092
const coche = {
    ruedas: 4,
    puertas: 5,
    color: "rojo",
    marca: "Mazda",
    precio: 23000,
    modelo: "mx5",
    km: 50000
}

//    coche2 = 435895023475092
/* const coche2 = coche;


coche2.puertas = 3;

console.log(coche);
console.log(coche2); */

// creando un objeto - creando un espacio en memoria - linkeandolo con esa direccion de memoria 23490854723904
let objeto = {};

// creando un objeto - creando un espacio en memoria - linkeandolo con esa direccion de memoria 23908420423489
let objeto2 = {};

console.log(23490854723904 == 23908420423489);