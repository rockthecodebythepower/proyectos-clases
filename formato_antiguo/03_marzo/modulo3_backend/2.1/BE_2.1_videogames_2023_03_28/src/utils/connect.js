const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_DB = process.env.MONGO_DB;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected to DB: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

module.exports = connect;
