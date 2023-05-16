let numero = 2 * 3;
const objeto = {
    nombre: "pepe"
}

if (numero === 6) {
    console.log("Esto es lo que muestro:", numero, objeto.nombre);
    console.log("Esto es lo que muestro: " + numero + " " + objeto.nombre);
    console.log(`Esto es lo que muestro: ${numero} ${objeto.nombre}`);
}