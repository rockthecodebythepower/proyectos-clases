// un objeto es como una variable que tiene dentro más variables, es decir parten de una misma variable principal

/* let alumno = "Nuria"; */

let alumno = {
    nombre: "Nuria",
    edad: 36,
    residencia: "Venezuela",
    coche: {
        marca: "Mazda",
        color: "rojo"
    }
}

console.log(alumno.coche.marca);

console.log(typeof alumno);