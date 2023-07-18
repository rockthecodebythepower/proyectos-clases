/* quiero simular un método reverse pero en nativo */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* quiero darle la vuelta y que sea 11, 10, 9... */

/* crearemos un nuevo array para guardar la respuesta */


const numerosReverse = [];

for (let i = numeros.length - 1; i >= 0; i--) {
    
    numerosReverse[numeros.length - 1 - i] = numeros[i];
    
}


console.log(numerosReverse);