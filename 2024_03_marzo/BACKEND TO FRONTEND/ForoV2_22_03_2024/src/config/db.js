const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Todo ha ido guay");
    } catch (error) {
        console.log("Error conectando con la BBDD");
    }
}

module.exports = { connectDB }