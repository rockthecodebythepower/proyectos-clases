const mongoose = require("mongoose");
const Cat = require("../api/models/cat");
require("dotenv").config();

const cats = [
    {
        img: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267",
        name: "Paquito",
        description: "Paquito es un mítico de cualquier casa, siempre querrás contar con el",
        favoriteToy: "JavaScript",
        favoriteFood: "Arrays",
        age: 1
    },
    {
        img: "https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/98.jpg?crop=4156,2338,x0,y219&width=1900&height=1069&optimize=high&format=webply",
        name: "Begoña",
        description: "Begoña es un gato glamuroso que siempre te mirará de reojo y no se fiará mucho de ti",
        favoriteToy: "Manos",
        favoriteFood: "Eau du miao",
        age: 3
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Zuri.jpg",
        name: "Emilio",
        description: "Emilio te mandará un email cada mañana",
        favoriteToy: "Ratón",
        favoriteFood: "Ratón",
        age: 2
    },
];

mongoose.connect(process.env.DB_URL).then(async () => {

    try {
        await Cat.collection.drop();
        console.log("Nos hemos cargado a los gatos");
    } catch (error) {
        console.log("Los gatos nos han superado en número");
    }

    try {
        await Cat.insertMany(cats);
        console.log("Los gatos se han insertado correctamente");
    } catch (error) {
        console.log("Los gatos no han podido entrar");
    }

}).finally(async () => {
    await mongoose.disconnect();
})