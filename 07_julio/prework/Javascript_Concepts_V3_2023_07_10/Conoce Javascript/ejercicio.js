//! tenemos una lista de elementos o array y quiero encontrar la posición donde se encuentra el dato "lechuga"

const comidas = ["pepino", "lechuga", "martillo"]; // lechuga es 1

for (let i = 0; i < comidas.length; i++) {
    
    if (comidas[i] === "lechuga") {
        console.log("la lechuga está en la posición " + i); //! hemos conseguido el resultado con nuestros conocimientos
    }
    
}

/* console.log("la lechuga está en la posición " + comidas.indexOf("lechuga")); */