const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Me he conectado a la bbdd");
    } catch (error) {
        console.log("Fallo conectando a la bbdd");
    }
}

module.exports = { connectDB }