//! un array es un listado de cosas, esas cosas, pueden ser: otros arrays, objetos, numeros, strings, booleans...

//? el tipo array no existe;

const listadoDeComidas = new Array("naranja", "pomelo", "lechuga", "filete", "pescado");

/* console.log(listadoDeComidas); */

// ["naranja", "pomelo", "lechuga", "filete", "pescado"];

const arrayDeCosas = [[[0, 1], [2, 3]], 4, 5, 6, 7];
//                    ________________  _  _  _  _
//                            0         1  2  3  4

// arrayDeCosas[0]

//                      [[0, 1], [2, 3]]
//                       ______  ______
//                         0       1

// arrayDeCosas[0][1]

//                           [2, 3]
//                            _  _
//                            0  1

// arrayDeCosas[0][1][0] -> 2

/* acceder al número 2 */

console.log(arrayDeCosas[0][1][0]);

