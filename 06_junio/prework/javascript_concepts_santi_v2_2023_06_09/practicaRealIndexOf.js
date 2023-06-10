const colores = ["azul", "amarilla", "púrpura"];

//! sigo una serie de procesos, me muevo entre componentes, pierdo el conocimiento con tanto cambio del array de lo que este tiene y sus posiciones

//? imaginémonos que ese array de colores realmente es en mi página un lista de colores que puedo copiar o no pero lo estoy pintanto en mi página;

const color = colores[2];

const posicion = colores.indexOf(color);

colores.splice(posicion, 1, "Magenta");