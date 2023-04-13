//! me guardo en mi memoria que tenemos una función suma que existe y que no tiene parámetros, es decir, no espera recibir nada
//* DECLARACIÓN DE LA FUNCIÓN
const suma = (num1, num2) => {
    console.log("hola desde la línea 4 dentro de mi función suma");
    console.log(num1 + num2);
}


console.log("hola desde la línea 8");

//! vete a mi función suma y haz lo que tengas que hacer
//* EJECUCIÓN DE LA FUNCIÓN
suma(4, 8);
suma(5, 9);

console.log("hola desde la línea 15");