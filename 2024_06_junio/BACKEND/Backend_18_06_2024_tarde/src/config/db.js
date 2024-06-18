const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito");
    } catch (error) {
        console.log("No se ha podido conectar");
    }
}

module.exports = { connectDb }