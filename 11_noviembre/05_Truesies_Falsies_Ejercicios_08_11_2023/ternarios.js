//! los ternarios serán una versión acortada sintácticamente de los if

let interruptor;

let persona = "Clara";

if (persona) {
  interruptor = true;
} else {
  interruptor = false;
}

if (interruptor) {
  console.log("La luz está encendida");
} else {
  console.log("La luz está apagada");
}

//! ternario
/* condicion ? respuesta true : respuesta false */
persona ? interruptor = true : interruptor = false;