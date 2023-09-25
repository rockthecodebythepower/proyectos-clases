const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("se ha conseguido conectar con la bbdd");
    } catch (error) {
        console.log("error conectando a la bbdd");
    }

}

module.exports = { connectDB }