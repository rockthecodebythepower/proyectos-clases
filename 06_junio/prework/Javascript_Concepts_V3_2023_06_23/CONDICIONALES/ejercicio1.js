let edad = 18;

// (if) si se cumple una condición haces esto {}, si no (else) esto otro {}
if (edad >= 18) {
    console.log("Eres mayor de edad!");
} else {
    console.log("Eres menor de edad!");
}

//! = // asignación -> NO UTILICÉIS UN IGUAL DENTRO DE LA CONDICIÓN DE UN IF
//! == // comparación normal
//! === // comparación estricta

//? OR -> o -> ||
//? AND -> y -> &&
//? NOT -> lo contrario de -> !

// si la edad es mayor de 18 O la edad es igual a 18
if (edad > 18 || edad === 18) {
    console.log("Eres mayor de edad!");
} else {
    console.log("Eres menor de edad!");
}


if (edad > 18) {
    console.log("Eres mayor de edad!");
} else {
    if (edad === 18) {
        console.log("Eres mayor de edad!");
    } else {
        console.log("Eres menor de edad!");
    }
}


if (edad > 18) {
    console.log("Eres mayor de edad!");
} else if (edad === 18) {
    console.log("Eres mayor de edad!");
} else {
    console.log("Eres menor de edad!");
}