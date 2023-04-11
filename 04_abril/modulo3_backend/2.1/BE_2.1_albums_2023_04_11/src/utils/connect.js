//Importaciones
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

//Recuperamos la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI

//Declaramos la función que se conecta con nuestra base de datos en MONGODB
const connect = async () => {
  try {
    //Almacenamos en una constante la información al conectarnos a nuestra MONGO URI
    const db = await mongoose.connect(MONGO_URI, {
      //Esto parsea nuestra URI de MONGO
      useNewUrlParser: true,
      //Esto parsea los caracteres especiales
      useUnifiedTopology: true,
    })
    //Con destructuring, y a modo informativo, vamos a sacar name y host de db.connection
    const {name, host} = db.connection
    console.log(`Connected to DB: ${name} in host: ${host}`)
  } catch (error) {
    console.log("Error connecting to DB", error)
  }
}

module.exports = connect
