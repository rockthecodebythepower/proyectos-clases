const comidas = ["naranja", "pomelo", "lechuga", "filete", "pescado", "otro"]; // .length -> 5    .length - 1
//                        0          1         2          3         4

/* mostrar siempre la primera comida del array */
/* console.log(comidas[0]); */


/* mostrar siempre la última comida del array */
/* console.log(comidas[comidas.length - 1]); */


// métodos de arrays -> un método de array es una función que ya ha sido creada por otros desarrolladores que contribuyen a javascript para realizar ciertas funcionalidades con mis listas sin tener que crear la funcionalidad desde 0;

// por ejemplo, yo puedo coger la última posición de un array de esta manera: 
// comidas[comidas.length - 1]

// crearon un método para hacer esto mismo más sencillo
// .at(-1)

/* console.log(comidas.at(-1)); */


/* const at = (numero, array) => {

    //numero = numero * -1;

    if (numero < 0) {
        return array[array.length - Math.abs(numero)]
    } else {
        return array[numero]
    }

}


console.log(at(-2, comidas)); */

// el límite del bucle tiene que ser un número más que la última posición de mi array
for (let i = 0; i < comidas.length; i++) {

    const comida = comidas[i];

    console.log(comida);

}

for (const comida of comidas) {
    console.log(comida);
}