const mongoose = require("mongoose")
const Product = require("./products.schema");

const crearSemilla = async (products) => {

    await mongoose.connect("mongodb+srv://root:root@cluster0.xncm78l.mongodb.net/?retryWrites=true&w=majority")
    .then(async () => {
        const productos = await Product.find();

        if (productos.length) {
            await Product.collection.drop();
            console.log("bbdd limpia");
        }

    })
    .then(async () => {

        await Product.insertMany(products);
        console.log("pagina insertada en la bbdd");
        
    }).finally(() => mongoose.disconnect());

}

module.exports = {crearSemilla}