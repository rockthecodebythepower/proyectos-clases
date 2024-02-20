//! los elementos más importantes de la programación
// variables
// tipos de datos
// condicionales
// bucles
// funciones

//? es muy importante el tema del naming
//? no hace falta que la variable sea super corta
//? DESCRIPTIVO

// var
// let
// const

//! VAR

//! VAR es de ámbito global
//! VAR es mutable

//! LET

//! LET es de ámbito local
//! LET es mutable

//! CONST

//! CONST es de ámbito local
//! CONST NO es mutable

/* if (2 < 3) {
  let persona = "paquito";
  console.log(persona);
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 6; j++) {
    var element = j;
  }
}

console.log(persona);

console.log(element); */


/* var persona = "paquito";

if (2 < 3) {
    var persona = "Menganito"; //! la variable que se crea en el mismo ámbito de la consulta
    console.log(persona);
}

console.log(persona); */


var persona = "paquito";

console.log(persona);

persona = "menganito";

console.log(persona);


let numero = 5;

console.log(numero);

numero = 9;

console.log(numero);


const alumno = "Nanni";

console.log(alumno);

/* alumno = "Claudia"; */ //! error

// 30987490823759023495234
const objeto = {
    nombre: "María",
    edad: 30
}

/* objeto = "sldfas"; */ //! error

objeto.nombre = "Isabel";

console.log(objeto);

//! CONST - más restrictiva - local - no mutable;
//! LET - menos restrictiva - local - mutable;
//! VAR - nada restrictiva - global - mutable; desuso

