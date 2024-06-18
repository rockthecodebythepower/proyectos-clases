const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado");
    } catch (error) {
        console.log("Error al conectar con la BBDD");
    }
}

module.exports = { connectDB }