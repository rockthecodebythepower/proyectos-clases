//! VARIABLES Y LOS TIPOS DE DATOS

// const
// var
// let


// var - deprecado -> de ámbito global - su valor se puede reasignar


if (5 > 4) {
    var nombre = "Santi"; 
    nombre = "Paquito";
    nombre = 809;
}

console.log(nombre);

// let -> de ámbito local - su valor se puede reasignar

if (5 > 3) {
    let nombre = "Santi";
    nombre = 792348;
    console.log(nombre);
}

// const -> de ámbito local - su valor no puede ser reasignado.

if (5 > 3) {
    const nombre = "Santi"; // siempre que puedo utilizo const
    nombre = 792348;
    console.log(nombre);
}



