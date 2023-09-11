const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("conectado con éxito a la bbdd");
    } catch (error) {
        console.log("error conectando con la bbdd");
    }

}

module.exports = { connectDB }