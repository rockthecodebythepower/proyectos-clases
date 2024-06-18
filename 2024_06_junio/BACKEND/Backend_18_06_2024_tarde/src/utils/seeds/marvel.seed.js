require("dotenv").config();
const mongoose = require("mongoose");
const Marvel = require("../../api/models/marvel");

const marvels = [
  {
    name: "Thanos",
    power: 23023,
    age: 223,
    img: "ejemplo",
  },
  {
    name: "Doctor Strange",
    power: 2323232,
    age: 34,
    img: "ejemplo",
  },
  {
    name: "Iron-man",
    power: 43443,
    age: 34,
    img: "ejemplo",
  },
  {
    name: "Ant-man",
    power: 3434,
    age: 43,
    img: "ejemplo",
  },
  {
    name: "Spiderman",
    power: 3234,
    age: 23,
    img: "ejemplo",
  },
];

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    try {
      await Marvel.collection.drop();
      console.log("Colección eliminada");
      await Marvel.insertMany(marvels);
      console.log("Datos introducidos");
    } catch (error) {
      console.log("Algo ha salido mal en la semilla");
    }
  })
  .finally(() => {
    mongoose.disconnect();
  });
