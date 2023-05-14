const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.URL_DB);
        console.log("Conectado con éxito a la bbdd 😎");

    } catch (error) {
        console.log("Imposible conectar con la bbdd 😩", error);
    }
}

module.exports = { connectDB }