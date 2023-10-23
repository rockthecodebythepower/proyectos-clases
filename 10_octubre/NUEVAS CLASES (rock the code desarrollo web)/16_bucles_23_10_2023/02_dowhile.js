//! las condiciones pueden ser todo lo complejas que queramos

//? con el while, la condición se evalúa antes de hacer nada, mientras que 4 sea mayor que 5... ejecuto
while (4 > 5) {
  console.log("Me estoy ejecutando? soy el while");
}

//? hacer algo primero y luego preguntar si debe continuar
do {
  console.log("Me estoy ejecutando? soy el doWhile");
} while (4 > 5);
//! 4 nunca es mayor que 5, la condición no se cumple NUNCA

//! mismo que en while

let numero = 1;

do {
  numero = numero * 2;
  /* numero = numero + 1; === numero++ */
  console.log(numero);
} while (numero < 20);

console.log("salimos del bucle");