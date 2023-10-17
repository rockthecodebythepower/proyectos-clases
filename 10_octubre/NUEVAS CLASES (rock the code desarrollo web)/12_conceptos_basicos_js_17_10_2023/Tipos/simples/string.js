let frase = 'Hoy hace un mal día';

console.log(typeof frase); // string

let nombre = "Eva";
let edad = 25;

console.log(nombre + " que tiene la edad de: " + edad + " años, es una muy buena alumna de la escuela.");

// con los `` podemos INTERPOLAR variables en nuestro texto con ${}
console.log(`${nombre} que tiene la edad de: ${edad} años, es una muy buena alumna de la escuela`);


//! TIPO DE DATO ITERABLE - STRING Y LOS ARRAYS
let fruta   = "MaNgo"; // 5
// posiciones  01234

console.log(fruta[4]);


//? METODOS DE STRING
console.log(fruta.length); // 5
console.log(fruta.toUpperCase()); // mayúsculas MANGO 
console.log(fruta.toLowerCase()); // minúsculas mango
console.log(fruta.includes("a")); // true

//! el usuario o la contraseña son incorrectos
let email = " maria@thepower.com";
let password = "lksadflaksd";

console.log(email);
console.log(email.trim());