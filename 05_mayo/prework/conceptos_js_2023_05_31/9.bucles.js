//Bucle tradicional
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

const list = ["🎬", "🧡", "🦾", "🏹", "🐌"];

for (let i = 0; i < list.length; i++) {
	const item = list[i];
	console.log(item);
}

//CAMARA LENTA
//ARRANCA EL BUCLE
//1ª VUELTA
//i = 0 -> i es menor 5 -> Entonces sumamos 1 a la i al final de la vuelta -> item = list[0] -> 🎬
//2ª VUELTA
//i = 1 -> i es menor 5 -> Sumamos 1 a la i -> item = list[1] -> 🧡
//3ª VUELTA
//i = 2 -> i es menor 5 -> Sumamos 1 a la i -> item = list[2] -> 🦾
//4ª VUELTA
//i = 3 -> i es menor 5 -> Sumamos 1 a la i -> item = list[3] -> 🏹
//5ª VUELTA
//i = 4 -> i es menor 5 -> Sumamos 1 a la i -> item = list[4] -> 🐌
//6ª VUELTA
//i = 5 -> i NO es menor que 5 -> ROMPE EL BUCLE Y ESTA VUELTA NO SE REALIZA

for (const item of list) {
	console.log(item);
}

const emojis = ["😀", "😁", "😡", "😅"];

for (const emoji of emojis) {
	if (emoji !== "😡") {
		console.log(emoji);
	} else {
		console.log("Aqui iría el enfadado");
	}
}

emojis.forEach((emoji, i) => {
	if (i !== 2) {
		console.log(emoji, i);
	}
});

//While
let contador = 0;

while (contador < 5) {
	console.log(contador);
	contador++;
}

//Piramide de astericos
//Crea una función que dado un numero por argumento te cree una piramide de astericos con el numero de pisos indicado
//5
/*
    *       -> 4 espacios -> 1 "* "
   * *      -> 3 espacios -> 2 "* "
  * * *     -> 2 espacios -> 3 "* "
 * * * *    -> 1 espacio ->  4 "* "
* * * * *   -> 0 espacios -> 5 "* "

*/

const crearPiramide = (num) => {
	let espacios = num - 1;
	let asteriscos = 1;

	for (let i = 1; i <= num; i++) {
		console.log(" ".repeat(espacios) + "* ".repeat(asteriscos));
		espacios--;
		asteriscos++;
	}
};

crearPiramide(10);
