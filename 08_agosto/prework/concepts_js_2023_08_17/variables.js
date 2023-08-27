// let var const
// palabras reservadas -> una palabra reservada es una palabra que se utiliza por el propio lenguaje de programación para realizar ciertas acciones, está literalmente reservada para esas acciones y no las puedes usar para cualquier otra cosa

// declara una variable de tipo string que contenga el valor "PEPE";

// declaración = valor
let alumno = "PEPE"
// guardando en la memoria de mi programa un espacio para guardar un valor y asignarlo a un nombre


// anteriormente sólo se usaba var

//! var -> crea una variable con scope GLOBAL que puede ser reasignada
var alumna = "Nadia";

console.log(alumna);

//* reasignamos la variable
alumna = "Eva";

console.log(alumna);

// para temas del scope ver el archivo scope.js


//! let -> crea una variable con scope LOCAL que puede ser reasignada -> un poco más restrictiva que var

let alumna2 = "Jennifer";

alumna2 = "Rocío"

// para temas del scope ver el archivo scope.js

//! const -> crea una variable con scope LOCAL que NO puede ser reasignada -> la más restrictiva

const alumna3 = "Marcela";

//NO PUEDO -> alumna3 = "María";

// para temas del scope ver el archivo scope.js


// conclusión de variables nivel 1: 

// cuanto más podáis ser restrictivos mejor -> no quiere decir que SIEMPRE usemos const -> siempre que PODAMOS usemos const
// utilizar let o var no está mal -> lo que más se utiliza suele ser let 
// var últimamente casi no se utiliza

// así que de aquí en adelante usaremos CONST y LET dependiendo de lo que necesitemos