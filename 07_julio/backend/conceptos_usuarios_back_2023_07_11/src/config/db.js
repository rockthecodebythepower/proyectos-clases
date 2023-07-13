const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado a la bbdd");

    } catch (error) {
        console.log("Error conectando a la bbdd");
    }

}

module.exports = { connectDB }