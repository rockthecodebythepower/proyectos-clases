const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la bbdd");
    } catch (error) {
        console.log(error);
        console.log("Error conectando con la bbdd");
    }
}

module.exports = { connectDB }