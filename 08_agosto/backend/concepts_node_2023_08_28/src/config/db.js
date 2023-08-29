const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("url");
    console.log("asdfasfd");
  } catch (error) {
    console.log("asdlkfjalskd");
  }
};

module.exports = { connectDB };