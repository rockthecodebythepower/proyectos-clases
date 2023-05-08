//! IGUALES
//* = -> asignación
//* == -> comparación
//* === -> comparación estricta

//! CONDICONALES una condición se cumple o no, por lo tanto, siempre todo lo que ponga dentro de la condición tiene que poder COMPARARSE

const persona1 = {
    nombre: "sdokfpaoasfdfasdfsd",
    edad: 17
}

if (persona1.nombre.length > 14) {
    console.log("TIENE UN NOMBRE MUY LARGO");
} else {
    console.log("NO TIENE UN NOMBRE MUY LARGO");
}