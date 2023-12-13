const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("conectado");
    } catch (error) {
        console.log("errorrrrrrrrr");
    }
}

module.exports = { connectDB }