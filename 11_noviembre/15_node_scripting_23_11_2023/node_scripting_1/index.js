const fs = require("fs");

fs.readFile("coches.json", "utf-8", (err, data) => {
    const coches = JSON.parse(data);

    let stringToCsv = "";

    for (const key in coches[0]) {
        stringToCsv += `${key},`;
    }

    stringToCsv = stringToCsv.slice(0, stringToCsv.length - 1);

    stringToCsv += "\n";


    for (const coche of coches) {
        stringToCsv += `${coche.marca},${coche.precio ? coche.precio : "no hay stock"},${coche.color}\n`
    }


    fs.writeFile("concesionario.csv", stringToCsv, (err, data) => {
        console.log("Procesado correctamente");
    })

});


// como puedo obtener las claves de un objeto
// forin
// Object.Keys