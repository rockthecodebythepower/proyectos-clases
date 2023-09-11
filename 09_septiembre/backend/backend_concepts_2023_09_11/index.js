//! librería que nos permite crear y jugar con servidores de manera muy sencillita
const express = require("express");

// importación del array de viajes para usarlos en la petición
const viajes = require("./viajes");

//? guardamos la ejecución de express que me permitirá acceder a todas las propiedades que necesito para crear un servidor en la variable app
const app = express();

//* utilizamos la ruta / de nuestro servidor para ejecutar el siguiente controlador
app.use("/api/v1/vuelos", async (req, res, next) => {
    try {

        // recogemos todas las propiedades que me pueden llegar a interesar de la petición guardadas en req.query
        const { origen, destino, fechaSalida, horaSalida, precio } = req.query;

        // comprobando si estos datos los he recogido correctamente
        /* console.log("origen: " + origen);
        console.log("destino: " + destino);
        console.log("fechaSalida: " + fechaSalida);
        console.log("horaSalida: " + horaSalida); */

        // cojo los viajes y los filtro
        const viajesFiltrados = viajes.filter((viaje) => {
            if (viaje.origen.includes(origen || "") && viaje.destino.includes(destino || "") && viaje.precio <= (precio || 0)) {
                return viaje;
            }
        });

        // compruebo si he conseguido viajes si no los encuentro muestro un error;
        if (!viajesFiltrados.length) {
            return res.status(400).json("no se han encontrado vuelos con tus indicaciones");
        }

        // retornamos los vuelos encontrados
        return res.status(200).json(viajesFiltrados);

    } catch (error) {
        return res.status(400).json("Ha habido un error");
    }
});

app.use("*", (req, res, next) => {
    return res.status(404).json("ruta no encontrada");
});


//* utilizamos el método listen de app para poner el servidor a escuchar en el puerto que deseemos
app.listen(3000, () => {
    console.log("El servidor está levantado en http://localhost:3000");
})