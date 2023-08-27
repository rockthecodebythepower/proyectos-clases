let user = {
    edad: 23,
    gafas: true
}

let propiedad = "nombre";

user = {...user, [propiedad]: "Paquito"}

console.log(user);