const mongoose = require("mongoose");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const datos = [
  {
    nombre: "pepin",
  },
  {
    nombre: "adri",
  },
];

rl.question("¿Dime la url a la bbdd que te quieras conectar?", async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Conectado con éxito");
  } catch (error) {
    console.log("error");
  }

  const Schema = new mongoose.Schema({
    nombre: { type: String },
  });

  const Coleccion = mongoose.model("listingsAndReviews", Schema, "listingsAndReviews");

  const datos2 = await Coleccion.insertMany(datos);

  const resultado = await Coleccion.findOne();

  console.log(resultado);
});

//! mongodb+srv://root:root@cluster0.rpfklh1.mongodb.net/sample_airbnb?retryWrites=true&w=majority
