//Bucle tradicional
for (let i = 0; i < 3; i++) {
	console.log("Hola");
}

//Camara lenta
//EMPIEZA EL BUCLE
//1ª: i = 0, 0 es menor que 3, para la siguiente vuelta i++
//"Hola"
//2ª: i = 1, 1 es menor que 3, para la siguiente vuelta i++
//"Hola"
//3ª: i = 2, 2 es menor que 3, para la siguiente vuelta i++
//"Hola"
//4ª: i = 3, 3 NO es menor que 3, rompe el bucle

//RECORREMOS UN ARRAY
const alimentos = ["Patata", "Agua", "Pipas", "Galletas"];

for (let i = 0; i < alimentos.length; i++) {
	const alimento = alimentos[i];
	console.log(alimento, i);
}

//CAMARA LENTA
//1ª: i = 0, 0 es menor que 4, me llevo una ++
//alimento = "Patata";
//2ª: i = 1, 1 es menor que 4, me llevo una ++
//alimento = "Agua"
//3ª: i = 2, 2 es menor que 4, me llevo una ++
//alimento = "Pipas"
//4ª: i = 3, 3 es menor que 4, me llevo una ++
//alimento = "Galletas"
//5ª: i = 4, 4 NO ES menor que 4, SE ROMPE EL BUCLE

//FOROF
for (const alimento of alimentos) {
	console.log(alimento);
}

//FOREACH
alimentos.forEach((alimento, i) => {
	console.log(alimento, i);
});

alimentos.forEach((alimento, i) => {
	if (i < alimentos.length - 1) {
		console.log(alimento);
	}
});
