const encriptacion = {
    1: "qo2fw3e",
    2: "qsdapf",
    3: "psdo",
    4: "poasdF",
    5: "pokmvN",
    6: "opi8uI",
    7: "0hdf879",
    8: "0q9iuf",
    9: "d89sf7D"
}


const encrypt = (dni) => {

    let dniEncripted = "";

    for (let i = 0; i < dni.length - 1; i++) {
        const digito = dni[i];

        dniEncripted += encriptacion[digito];
        
    }

    dniEncripted += dni.at(-1)

    return dniEncripted;

}

module.exports = {
    encrypt
}