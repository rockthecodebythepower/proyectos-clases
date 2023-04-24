const { encrypt } = require("../config/encrypt");
const Entrada = require("./entradas.model")
const bcrypt = require("bcrypt");

const newEntrada = async (req, res, next) => {

    try {
        
        const { dni } = req.params;

        /* let newDNI = encrypt(dni); */
        let newDNI = bcrypt.hashSync(dni, 10).replaceAll("/", "");

        const newEntrada = new Entrada({
            url: `https://qr-codes-xi.vercel.app/entradas/${newDNI}`
        });

        await newEntrada.save();

        return res.json(newEntrada);

    } catch (error) {
        
    }

}

const getEntrada = async (req, res, next) => {
    try {

        const { dni } = req.params;
        const myEntrada = await Entrada.findOne({url: `https://qr-codes-xi.vercel.app/entradas/${dni}`})

        if (myEntrada) {
            await Entrada.findByIdAndDelete(myEntrada._id);
            return res.json("puedes pasar")
        } else {
            return res.json("no puedes pasar")
        }

    } catch (error) {
        
    }
}

module.exports = {
    newEntrada,
    getEntrada
}