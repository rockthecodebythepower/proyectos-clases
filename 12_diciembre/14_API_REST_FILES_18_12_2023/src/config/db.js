const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected!");
  } catch (error) {
    console.log("Cannot connect to DB");
  }
};

module.exports = connect;
