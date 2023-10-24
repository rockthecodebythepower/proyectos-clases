const coche = {
    ruedas: 4,
    puertas: 5,
    color: "rojo",
    marca: "Mazda",
    precio: 23000,
    modelo: "mx5",
    km: 50000
}

// me devuelve un array con todas las claves del objeto
console.log(Object.keys(coche));
console.log(Object.getOwnPropertyNames(coche));

// pasar a string el coche
console.log(JSON.stringify(coche));