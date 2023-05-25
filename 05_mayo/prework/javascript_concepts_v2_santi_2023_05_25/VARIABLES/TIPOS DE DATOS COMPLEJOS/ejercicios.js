/* Define un objeto llamado "estudiante" con las siguientes propiedades: nombre, edad, ciudad y calificaciones. Las calificaciones serán un objeto con las siguientes propiedades: matemáticas, ciencias y literatura, cada una con un valor numérico.✅

Crea tres instancias del objeto "estudiante" con diferentes valores para las propiedades. Puedes inventar los datos.✅ 

Agrega una nueva propiedad al objeto "estudiante" llamado "promedioCalificaciones" que calcule el promedio de las calificaciones del estudiante.

Imprime en la consola el nombre, edad, ciudad y promedio de calificaciones de cada estudiante utilizando la función "console.log". */

const estudiante = {
    nombre: "Jeniffer",
    edad: 47,
    ciudad: "Guayana",
    calificaciones: {
        matematicas: 8,
        ciencias: 8,
        literaturas: 8,
    }
}

const estudiante1 = {
    nombre: "Pedro",
    edad: 25,
    ciudad: "Corea del norte",
    calificaciones: {
        matematicas: 10,
        ciencias: 7,
        literaturas: 5,
    }
}
const estudiante2 = {
    nombre: "Brisna",
    edad: 30,
    ciudad: "Barcelona",
    calificaciones: {
        matematicas: 6,
        ciencias: 7,
        literaturas: 4,
    }
}


//! Agrega una nueva PROPIEDAD al objeto "estudiante" llamado "promedioCalificaciones" que calcule el promedio de las calificaciones del estudiante.

estudiante.promedio = (estudiante.calificaciones.matematicas + estudiante.calificaciones.ciencias + estudiante.calificaciones.literaturas) / Object.keys(estudiante.calificaciones).length;

console.log(estudiante);

//! NaN -> NOT a NUMBER