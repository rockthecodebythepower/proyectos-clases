const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Todo ha ido bien");
  } catch (error) {
    console.log("Algo ha fallado");
  }
};

module.exports = { connectDB }