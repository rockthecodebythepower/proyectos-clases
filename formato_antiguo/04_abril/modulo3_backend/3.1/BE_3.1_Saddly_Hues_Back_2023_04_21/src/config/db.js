const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Me he conseguido conectar a la bbdd 🥂");
  } catch (error) {
    console.log("No me he podido conectar con la bbdd");
  }
};

module.exports = {connectDB}