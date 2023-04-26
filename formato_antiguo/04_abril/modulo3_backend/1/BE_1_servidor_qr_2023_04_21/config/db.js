const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL

const connectDb = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("conectado a la bbdd");
    } catch (error) {
        console.log("error conectando con la bbdd");
    }
}

module.exports = {
    connectDb
}