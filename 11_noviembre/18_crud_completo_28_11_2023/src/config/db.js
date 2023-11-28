// sólo tenemos que utilizar mongoose con su método connect para conectarnos a la base de datos mediante la ruta que hemos obtenido previamente

// me traigo el módulo mongoose
const mongoose = require("mongoose");

// creando la función connectDB y le digo que va a ser asíncrona
const connectDB = async () => {
    // metemos un bloque trycatch, lo haremos bastante porque cualquier acción que tenga que ver con la BBDD puede dar errores que no esté contemplando en mi código
    try {
        // el código que se ejecuta mientras todo vaya bien
        // conectamos con la BBDD
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la bbdd 😎");
    } catch (error) {
        // si algo falla del bloque try pasamos por este bloque
        console.log("Error conectando con la bbdd 😴");
    }
}

// exporto la función para poder utilizarla en otros archivos del proyecto
module.exports = { connectDB };