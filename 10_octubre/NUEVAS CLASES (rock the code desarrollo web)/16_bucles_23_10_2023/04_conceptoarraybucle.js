let i = 0; // i = index = índice

const array = ["🎅", "🤶", "👼", "🕵️‍♂️", "👷‍♀️", "👩‍🌾"]; // 6
// posiciones    0     1      2     3     4      5

/* while (i < 7) {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
    i++;
} */

/* do {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
    i++;
} while (i < 7); */

/* for (let i = 0; i < 7; i++) {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
} */

//! esto es lo más común a la hora de trabajar con bucles
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === "👷‍♀️") {
        console.log("Se incluye en nuestra lista el emoji que estaba buscando 👷‍♀️");
    }
}