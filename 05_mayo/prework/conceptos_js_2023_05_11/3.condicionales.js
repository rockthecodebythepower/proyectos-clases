//Y -> &&
//O -> ||
//Igual que -> ==
//Estricamente igual que -> ===
//Mayor que >
//Menor que <
//Mayor o igual que >=
//Menor o igual que <=
//NO -> !

/* if(CONDICION){
    BLOQUE A EJECUTAR
} */

const firstName = "Peter Porker";

if (firstName === "Peter Parker") {
	console.log("Hola Peter!");
} else {
	console.log("No eres Peter!");
}

//Igual que coincide valor y no tipo
//Estrictamente igual que coincide valor y tipo
const numero = "2";

if (numero === 2) {
	console.log("Se cumple la condición!");
}

//

const edad = 20;
const tengoCarnet = true;

//Tened en cuenta que poner tengoCarnet y tengoCarnet === true es lo mismo
if (edad >= 18 && tengoCarnet === true) {
	console.log("Puedes conducir!");
} else {
	console.log("No puedes conducir");
}

//

const habitacionLimpia = false;
const basuraBajada = true;

if (habitacionLimpia || basuraBajada) {
	console.log("Puedes ir a jugar");
} else {
	console.log("Chanclazo!");
}

//Ternario
habitacionLimpia || basuraBajada
	? console.log("Puedes ir a jugar")
	: console.log("Chanclazo!");
