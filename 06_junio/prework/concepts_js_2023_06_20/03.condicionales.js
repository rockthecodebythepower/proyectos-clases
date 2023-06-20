//Y -> &&
//O -> ||
//== -> Igual que
//=== -> Estrictamente igual que
//< -> Menor que
//> -> Mayor que
//<= -> Menor o igual que
//>= -> Mayor o igual que
//! -> NO

const superhero = "Daredevil";

if (superhero === "Batman") {
  console.log("Este señor se llama Bruce Wayne");
} else {
  console.log("No se cual su identidad");
}

//

const age = 18;
const carnetDeConducir = false;

if (age >= 18 && carnetDeConducir) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}

//

const habitacionLimpia = true;
const deberesHechos = false;

if (habitacionLimpia || deberesHechos) {
  console.log("Puedes jugar a la consola");
} else {
  console.log("Termina tus tareas primero");
}

//

const x = "10";

if (x == 10) {
  console.log("Se cumple!");
}

//

const edad = 95;

if (edad > 0 && edad < 15) {
  console.log("Eres muy joven");
} else if (edad >= 15 && edad < 25) {
  console.log("Eres un adolescente");
} else if (edad >= 25 && edad < 50) {
  console.log("Eres adulto");
} else {
  console.log("Eres mayor");
}
