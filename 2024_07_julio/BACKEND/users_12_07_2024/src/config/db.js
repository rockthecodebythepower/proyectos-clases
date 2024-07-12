const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("conectados");
    } catch (error) {
        console.log("NO conectados");
    }
}

module.exports = { connectDB }