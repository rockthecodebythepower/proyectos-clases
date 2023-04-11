const mongoose = require("mongoose");

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conected with database 🚀🚀");
    } catch (error) {
        console.log("Error connecting with database 🌪", error);
    }

}

module.exports = { connectDb }