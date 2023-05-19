//! requiere mongoose para funcionar puesto que tenemos que realizar la conexión con mongo
const mongoose = require("mongoose");

//! creamos una función asíncrona (conectarme con la bbdd tarda un tiempo)
const connectDB = async () => {

    //! Haremos trycatch -> estamos haciendo cosas que puede que fallen y que no dependen de nosotros 
    try {
        
        //? await -> para esperar el tiempo que haga falta antes de pasar a la siguiente línea, por lo tanto si pasamos al console.log() significará que nos hemos conectado con éxito
        //! mongoose.connect sólo necesita la url a una bbdd 
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la bbdd 😍");

    } catch (error) {
        //! este log aparecerá cuando falle la conexión con la bbdd
        console.log("Error conectando con la bbdd 🙈");

    }

}

//! exportamos la función (las funciones se exportan con las llaves)
module.exports = { connectDB }