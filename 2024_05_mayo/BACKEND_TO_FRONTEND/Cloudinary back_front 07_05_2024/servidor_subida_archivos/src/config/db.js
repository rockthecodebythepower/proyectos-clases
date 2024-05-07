const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Estamos conectados a la BBDD 😎");
    } catch (error) {
        console.log("No hemos conseguido conectar con la BBDD 😣");
    }
}

module.exports = { connectDB }