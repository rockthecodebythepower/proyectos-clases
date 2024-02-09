// voy a generar una iteración (bucle) que repita x veces x líneas de código

const listaDeComidas = ["naranja", "platano", "bollito", "gofre"];
// posiciones               0          1          2         3

// listaDeComidas[num]

/* for (let num = 0; num < 4; num++) {

    let comida = listaDeComidas[num];

    console.log(num);
    console.log();
}
console.log("he acabado"); */

/* for (let i = 0; i < 10; i++) {
  console.log("ESTO ES LA I: " + i);

  for (let j = 0; j < 5; j++) {
    console.log("ESTO ES LA J: " + j);
  }
}
 */

// objetos - forin (falsificando una iteración que no existe)
// arrays - forof foreach for forin

for (const comida of listaDeComidas) {
    console.log(comida);
}

listaDeComidas.forEach((comida) => console.log(comida));


const persona = {
    edad: 23,
    nombre: "Paquito",
    mascota: {
        nombre: "Paquito 2",
        especie: "Perro"
    }
}

/* for (const propiedad of persona) {
    console.log(propiedad);
} */

const arrayClaves = Object.keys(persona);

console.log(arrayClaves);

for (const key in persona) {
    console.log(persona[key]);
    if (key === "mascota") {
        for (const clave in persona[key]) {
            console.log(persona[key][clave]);
        }
    }
}