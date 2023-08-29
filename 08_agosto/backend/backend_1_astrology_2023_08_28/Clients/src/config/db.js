//! archivo donde realizaré la conexión con mi bbdd
// url - para conectarme con la bbdd
// url va a tener el texto de mi usuario y mi contraseña de la bbdd -> un dato sensible
// al ser un dato sensible yo no debería mostrarlo en mi código
// lo voy a ocultar en un archivo llamado .env

//? librería para todo lo que tenga que ver con la bbdd
const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la bbdd");
    } catch (error) {
        console.log("Error");
    }

}

module.exports = { connectDB }