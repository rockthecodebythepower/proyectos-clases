const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("guay");
    } catch (error) {
        console.log("no guay");
    }
}
 
module.exports = { connectDB }