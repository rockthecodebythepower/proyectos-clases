const animales = {
    cat: {
        nombre: "asldf"
    }
}

console.log(animales.cat.nombre);

console.log(animales.dog?.nombre);


animales.cat.nombre ??= undefined;

console.log(animales);