const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        primerApellido: { type: String, required: true },
        segundoApellido: { type: String, required: true },
        fechaNac: { type: String, required: true },
        hora: { type: String, requied: true },
        imagen: { type: String, required: false },
        signo: { type: String, required: true, enum: ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"] },
        edad: { type: Number, required: false },
        correo: { type: String, required: false },
        cartaAstral: { type: String, required: false }
    }, 
    {
        // opciones del schema
        collection: "clients",
        timestamps: true
    }
);

const Client = mongoose.model("clients", clientSchema, "clients");
module.exports = Client;