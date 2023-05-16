//! DECLARACIÓN DE LA FUNCIÓN
function saludo (nombre, apellido, edad = 32) {

    if (!apellido) {
        console.log("Hola buenos días", nombre);
        return;
    }

    console.log("Hola buenos días", nombre, apellido, edad);
}

//! LLAMADA O EJECUCIÓN A LA FUNCIÓN
saludo("Yeti", "Manchao", 23);