//! mientras que... se cumpla la condición seguiré ejecutando el código de dentro {}

//? siempre y cuando el 4 sea mayor que el 5 ejecutas el código de dentro
while (4 > 5) {
  console.log("Me estoy ejecutando?");
}
// el bucle anterior no ejecuta el código que tiene dentro nunca


//? siempre y cuando el 5 sea mayor que el 4 ejecutas el código de dentro
/* while (5 > 4) {
    console.log("Me estoy ejecutando");
} */



//? siempre y cuando la condición se cumpla ejecutaré el código de dentro
let numero = 0;
let numero2 = 80;
let numero3 = 10;

while (numero < 10 || numero2 > 20 && numero3 === 10) {
    console.log("Me estoy ejecutando");
    numero = numero + 2;
    numero2 = numero2 / 1.1;
    console.log(numero2);
    console.log(numero);
    console.log(numero < 10 || numero2 > 20 && numero3 === 10);
}