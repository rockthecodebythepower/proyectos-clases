const mongoose = require("mongoose");
const { setError } = require("./error");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Éxito conectando con la base de datos 🛰🛰");
    } catch (error) {
        console.log("Error conectando con la base de datos 💔", setError(500, error));
    }
}

module.exports = { connectDb }