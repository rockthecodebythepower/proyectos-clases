const mongoose = require("mongoose");

const connectDB = /* async */ () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Conectado 😛"))
    .catch((error) => {
      console.log("Fallo al conectarme con la bbdd 🤔");
    });

  /* await mongoose.connect(process.env.DB_URL);
        console.log("Conectado 😛"); */
};

module.exports = { connectDB };
