const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    const {name} = db.connection;
    console.log(`Connected to DB: ${name}`);
  } catch (error) {
    console.log("Error connecting to DB");
  }
};

module.exports = connect