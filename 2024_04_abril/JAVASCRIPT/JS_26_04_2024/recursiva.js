//! Una función recursiva, es aquella que se ejecuta a si misma

// Proyecto 9

const eliminarElementos = (array, cuantos) => {

    if (cuantos === 0) {
        return;
    } else {
        array.pop();
        eliminarElementos(array, cuantos - 1)
    }

}

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        return;
    }
}


const palabras = ["pepito", "paquito", "menganito", "pedrito", "pizza"];

eliminarElementos(palabras, 3)

console.log(palabras);