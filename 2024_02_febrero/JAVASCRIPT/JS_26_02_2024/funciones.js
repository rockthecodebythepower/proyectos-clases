const funcion = (a, b, c, d) => {

    if (Object.keys(a).length > 0) {
        console.log("a es una referencia a un objeto");
        a.meLoInvento = "cacahuete";
    } else {
        console.log("a es otra cosa que no es objeto");
    }

}

const objeto = {
    prop1: 349235,
    prop2: 23942384,
}

funcion(2, 4, 5, 6);
// objeto: 23489705238974y2347y2348724
funcion(objeto, 23, 23, 23);

console.log(objeto);