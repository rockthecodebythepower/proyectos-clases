const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("😎🤗");
    } catch (error) {
        console.log("🥱😫");
    }
}

module.exports = { connectDB }