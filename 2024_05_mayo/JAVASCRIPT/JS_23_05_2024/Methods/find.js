//! LOS MÉTODOS NO HACEN COSAS QUE NO PODAMOS HACER SIN ELLOS, PERO NOS SIRVEN PARA HACERLO MÁS RÁPIDO Y SIN TANTA LÓGICA
//! SON FUNCIONES QUE HAN HECHO OTRAS PERSONAS

//? saber que le tengo que enviar a ese método para que funcione - función callback

//? saber que provoca / para que sirve este método - para encontrar un elemento dentro de un array

//? saber que me duelve este método - EL PRIMER elemento encontrado o en su defecto el valor undefined

const alumns = [
  {
    nombre: "Paquito",
    notaFinal: 6.9,
  },
  {
    nombre: "Aurora",
    notaFinal: 3,
  },
  {
    nombre: "Javier",
    notaFinal: 9,
  },
  {
    nombre: "David",
    notaFinal: 1,
  },
  {
    nombre: "Aitor",
    notaFinal: 1,
  },
  {
    nombre: "Francisco",
    notaFinal: 7,
  },
  {
    nombre: "Santi",
    notaFinal: 0,
  },
  {
    nombre: "Manolo",
    notaFinal: 8,
  },
  {
    nombre: "Eva",
    notaFinal: 3.5,
  },
];

console.log(alumns.find((element) => element.notaFinal >= 2.5));


// 10000000000 length
// 200 posición