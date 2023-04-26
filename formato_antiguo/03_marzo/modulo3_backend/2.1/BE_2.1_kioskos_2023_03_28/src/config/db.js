//! conectar con mi bbdd ~ mongoose
const mongoose = require("mongoose");

const urlDb = process.env.DB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(urlDb);
        console.log("Conectado con éxito a la bbdd");
    } catch (error) {
        console.error(`Error conectando con la base de datos ${error}`)
    }
}

module.exports = { connectDb }