const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const MONGO_URI = process.env.MONGO_URI

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to database ✅')
  } catch (error) {
    console.log('Error connecting to database ❌', error)
  }
}

module.exports = connect
