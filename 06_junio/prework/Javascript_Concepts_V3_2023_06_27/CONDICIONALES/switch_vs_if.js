let nombre = "Pepito";

/* comprobación sencilla con if */
if (nombre === "Pepito") {
    console.log("Hola buenos días pepito");
} else if (nombre === "Luis") {
    console.log("Luis llegas tarde");
} else {
    console.log("Tú no eres Pepito");
}

/* comprobación sencilla con switch */
//? lo que recibe el switch será la clave por lo que queremos comparar
switch (nombre) {
    case "Pepito":
        console.log("Hola buenos días pepito");
        break;
    case "Luis": 
        console.log("Luis llegas tarde");
        break;
    default:
        console.log("Tú no eres pepito");
        break;
}

//! un if es mucho más libre, podemos hacer comprobaciones muy complejas
//! un switch sólo puede comparar casos de valores -> en caso de que mi clave sea x devuelvo y

//? el switch te puede mejorar un poco la sintaxis.

//* por norma general siempre vamos a preferir usar un if else