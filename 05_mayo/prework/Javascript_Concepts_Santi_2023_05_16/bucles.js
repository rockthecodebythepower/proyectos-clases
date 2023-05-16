const comidas = ["naranjas", "manzanas", "lechuga", "hamburguesa", "donuts", "pepsis", "pipsas"]; //* .length 7
//! posiciones       0           1           2            3            4         5         6

//* coger un elemento del array, en este caso el primero
console.log(comidas[0]);

//! declaración variable; condición; acumulador
for (let numero = 0; numero <= 50; numero++) {
  console.log(numero);
}

//! mirar todas las comidas sin bucle INTENTAR EVITAR ESTO
/* 
comidas[0];
comidas[1];
comidas[2];
comidas[3];
comidas[4];
comidas[5];
*/

console.log("BUCLE FOR");

for (let posicion = 0; posicion < comidas.length; posicion++) {

    let comida = comidas[posicion];

  console.log("ESTO ES LO QUE VALE MI VARIABLE POSICION:", posicion);

  console.log(
    "ESTA ES LA COMIDA QUE HAY DENTRO DEL ARRAY DE COMIDAS EN LA POSIÓN QUE HEMOS VISTO ARRIBA: ",
    comida
  );
}

console.log();
console.log("BUCLE FOROF");

for (let comida of comidas) {
    // let i = 0; i < comidas.length; i++;
    // let comida = comidas[i];

    //? por dentro el bucle forof, recibe el array comidas despues del "of" define el límite del bucle utilizando la longitud de nuestro array comidas EXACTAMENTE IGUAL QUE EL BUCLE FOR;
    //* Luego, crea la variable comida que será el valor de comidas[i] en esa vuelta del bucle;
    //! la i que no la vemos va subiendo de 1 en 1 SIEMPRE Y NO ES MODIFICABLE;

  console.log(
    "ESTA ES LA COMIDA QUE HAY DENTRO DEL ARRAY DE COMIDAS EN ESTA VUELTA DEL BUCLE: ",
    comida
  );
}

console.log();
console.log("BUCLE FOREACH");

const funcionCallback = (comida) => {

    // let i = 0; i < comidas.length; i++;
    // let comida = comidas[i];

    //? por dentro el bucle forof, recibe el array comidas despues del "of" define el límite del bucle utilizando la longitud de nuestro array comidas EXACTAMENTE IGUAL QUE EL BUCLE FOR;
    //* Luego, crea la variable comida que será el valor de comidas[i] en esa vuelta del bucle;
    //! la i que no la vemos va subiendo de 1 en 1 SIEMPRE Y NO ES MODIFICABLE;

    console.log(
        "ESTA ES LA COMIDA QUE HAY DENTRO DEL ARRAY DE COMIDAS EN ESTA VUELTA DEL BUCLE: ",
        comida
    );
}

comidas.forEach(funcionCallback);


console.log(comidas.indexOf("pepsis"));
console.log(comidas.lastIndexOf("pepsis"));
console.log(comidas.some((comida) => comida === "pepsis"));
console.log(comidas.find((comida) => comida === "pepsis"));

/* let encontrar = "pepsis";
let encontrada = "";
let indiceEncontrada = -1;

for (let i = 0; i < comidas.length; i++) {

    const comida = comidas[i];

    if (comida === encontrar) {
        encontrada = comida;
        indiceEncontrada = i;
        break;
    }
    
}

console.log(encontrada);
console.log(indiceEncontrada); */