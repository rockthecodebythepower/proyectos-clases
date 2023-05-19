//! TENEMOS palabras reservadas para programar, para crear variables tenemos las palabras LET VAR CONST

//* Todas estas palabras "let" "var" "const" guardarán en la memoria una clave con su valor

//? VAR 
//? la palabra reservada var me declara una variable, que puedo reasignar "=", esta variable creada con var, tiene un scope global y se puede acceder a esa variable antes de que sea creada (está un poco en desuso)

console.log(numero);

//! la creo debajo y el console.log() me dará undefined pero NO ERROR
var numero = 0;


//* LET
//* la palabra reservada let me declara una variable, que puedo reasignar "=", esta variable creada con let tiene un scope local y NO se puede acceder a esa variable antes de que sea creada (es la palabra reservada que utilizamos para crear variables que QUERAMOS REASIGNAR);

let numero2 = 0;

numero2 = "pepito";

console.log(numero2);


//! CONST
//! la palabra reservada const me declara una variable, que NO puedo reasignar "=", esta variable creada con const tiene un scope local y NO se puede acceder a esa variable antes de que sea creada (es la palabra reservada que utilizamos para crear variables que queremos que NO SE PUEDAN REASIGNAR);

const numero3 = 4;

//! ESTO DA ERROR
/* numero3 = "pepito"; */

console.log(numero3);