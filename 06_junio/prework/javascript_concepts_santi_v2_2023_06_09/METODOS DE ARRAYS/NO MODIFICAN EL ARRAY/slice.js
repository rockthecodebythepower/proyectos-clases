const colores = ["rojo", "naranja", "azul", "verde", "magenta"];

//! el método slice QUE NO splice no modificará la matriz.
//* El primer parámetro es como el splice, es decir, es la posición del array desde donde empecemos a querer mirar. // 3
//* el segundo parámetro no es CUANTOS elementos miramos si no la POSICIÓN HASTA la que miramos NO INCLUIDA
//? al contrario que el splice este no recibe tercer parámetro

console.log(colores.slice(3));

console.log(colores.slice(2, 4));

console.log(colores);