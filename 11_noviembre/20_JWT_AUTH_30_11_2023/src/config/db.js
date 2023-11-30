const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("La base de datos se conectó 😍");
    } catch (error) {
        console.log("La base de datos explotó 😨");
    }
}

module.exports = { connectDB }