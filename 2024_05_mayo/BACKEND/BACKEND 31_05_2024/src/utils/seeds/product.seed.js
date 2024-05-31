require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../../api/models/product");

const products = [
    {

        name: "Papel multicolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas! Veniam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 10.50,
        nSales: 340,
        nSearch: 10,
        category: "Papel",
        colorCategory: "rgb(255, 183, 155)",
        img: "https://www.geocities.ws/micadesa/papel/papeles.gif",
    },
    {
        name: "Bicho de Stranger Things",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate",
        price: 50.10,
        nSales: 20,
        nSearch: 50,
        category: "Papel",
        colorCategory: "rgb(255, 183, 155)",
        img: "https://www.javahe.eu/assets/images/a/Origami_logo-0ff1f9bc.png"
    },
    {
        name: "Pajarillo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas",
        price: 10,
        nSales: 10,
        nSearch: 3,
        category: "Papel",
        colorCategory: "rgb(255, 183, 155)",
        img: "https://www.c-ch.com/files/modules/products/6e799a752dd4d7978f260251f7b4b4e99e70b521.png"
    },
    {
        name: "Mariposa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas! Veniam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 5.98,
        nSales: 0,
        nSearch: 0,
        category: "Papel",
        colorCategory: "rgb(255, 183, 155)",
        img: "https://static.vecteezy.com/system/resources/previews/014/341/290/original/red-butterfly-origami-png.png"
    },
    {
        name: "Telar rojo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas! Veniam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 40,
        nSales: 0,
        nSearch: 0,
        category: "Tela",
        colorCategory: "rgb(255, 155, 218)",
        img: "https://ventadetelasonline.com/8152-medium_default/retal-080m-algodon-100-organico-adornos-navidad.jpg"
    },
    {
        name: "Telar rojo v2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eo?",
        price: 20,
        nSales: 0,
        nSearch: 0,
        category: "Tela",
        colorCategory: "rgb(255, 155, 218)",
        img: "https://ventadetelasonline.com/8752-home_default/retal-060m-vaquero-suave-organico-granate.jpg"
    },
    {
        name: "Telar rosita",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupidiam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 10,
        nSales: 0,
        nSearch: 0,
        category: "Tela",
        colorCategory: "rgb(255, 155, 218)",
        img: "https://ventadetelasonline.com/8344-home_default/retal-075m-algodon-100-arcoiris-tonos-tierra.jpg"
    },
    {
        name: "Telar estampado",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas! Veniam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 50,
        nSales: 0,
        nSearch: 0,
        category: "Tela",
        colorCategory: "rgb(255, 155, 218)",
        img: "https://ventadetelasonline.com/8441-medium_default/retal-060m-algodon-mini-peces.jpg"
    },
    {
        name: "Retales del mundo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate excepturi animi! Quo officiis impedit ex, culpa praesentium quas! Veniam neque eum culpa eaque quaerat eveniet quod nostrum, aperiam explicabo?",
        price: 100,
        nSales: 0,
        nSearch: 0,
        category: "Logotipo",
        colorCategory: "rgb(225, 255, 155)",
        img: "https://retalesdelmundo.com/wp-content/uploads/2020/01/transparent-e1583740698142.png"
    }
];

mongoose.connect(process.env.DB_URL).then(async () => {
    try {
        await Product.collection.drop();
        console.log("Colección limpia");
    } catch (error) {
        console.log("No se ha podido limpiar la colección de los productos");
    }

    try {
        await Product.insertMany(products);
        console.log("Todos los productos se han plantado");
    } catch (error) {
        console.log("No se han podido insertar los productos");
    }
}).finally(() => mongoose.disconnect());