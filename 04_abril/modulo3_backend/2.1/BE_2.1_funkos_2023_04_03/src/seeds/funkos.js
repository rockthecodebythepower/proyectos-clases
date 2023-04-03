//! conectarnos con la bbdd
//! necesitaremos el modelo de los funkos para que cumpla con los requisitos
require("dotenv").config();
const mongoose = require("mongoose");
const Funko = require("../models/funkos");
const { setError } = require("../config/error");

const funkos = [

    {
        nombre: "Iron-Man",
        imagen: "https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_286.png",
        pelicula: "End-Game",
        peso: 23,
        altura: 20,
        poder: 1340,
        vida: 1000000
    },
    {
        nombre: "Spider-Man",
        imagen: "https://frikipolis.com/wp-content/uploads/2022/11/funko-pop-spiderman-no-way-home-spiderman-leaping1.png",
        pelicula: "End-Game",
        peso: 20,
        altura: 30,
        poder: 1540,
        vida: 1000000
    },
    {
        nombre: "Vecna",
        imagen: "https://figurasdeseries.es/40657-large_default/funko-pop-vecna-pointing-de-stranger-things-temporada-4.webp",
        pelicula: "Stranger Things",
        peso: 20,
        altura: 30,
        poder: 2040,
        vida: 2000000
    },
    {
        nombre: "Capitán América",
        imagen: "https://www.tuvecinofriki.com/6280-tm_thickbox_default/figura-funko-pop-vinyl-avengers-game-captain-america-stark-tech-suit.jpg",
        pelicula: "End-Game",
        peso: 24,
        altura: 25,
        poder: 1040,
        vida: 1200000
    },
    {
        nombre: "Aang",
        imagen: "https://funkilandia.com/wp-content/uploads/2022/09/funkilandia_img_328.png",
        pelicula: "Avatar",
        peso: 26,
        altura: 20,
        poder: 1940,
        vida: 1400000
    },
    {
        nombre: "Goku",
        imagen: "https://www.frikimasters.es/17359-thickbox_default/funko-pop-dragon-ball-super-goku-ultra-instinct-sign-metallic.jpg",
        pelicula: "Dragon-ball",
        peso: 30,
        altura: 26,
        poder: 1840,
        vida: 1000000
    },
    {
        nombre: "Julieta",
        imagen: "https://figurasdeseries.es/22575-large_default/funko-pop-julieta-madrigal-de-encanto.webp",
        pelicula: "Julieta Madrigal",
        peso: 20,
        altura: 23,
        poder: 140,
        vida: 10000
    },
    {
        nombre: "Infinite Deku 10",
        imagen: "https://www.raccoongames.es/img/productos/pop-animation-my-hero-academia-infinite-deku-10/51901_MHA_DekuInfinite10in_POP_GLAM-1-WEB.png",
        pelicula: "My Hero Academia",
        peso: 20,
        altura: 33,
        poder: 1841,
        vida: 1000000
    },
    {
        nombre: "Ryan Howard",
        imagen: "https://i5.walmartimages.com/asr/4c586a1a-5e11-493e-83c3-0c3cec0d402a.9e0c65464af5152973ab341acf183209.png",
        pelicula: "The Office",
        peso: 23,
        altura: 25,
        poder: 841,
        vida: 10000
    },
    {
        nombre: "Mr. Mime",
        imagen: "https://garhis.es/8730-large_default/funko-pop-vulpix-580-pokemon.jpg",
        pelicula: "Pokemon",
        peso: 20,
        altura: 25,
        poder: 1641,
        vida: 1000000
    },
    {
        nombre: "Raptor",
        imagen: "https://musgomania.com/shop/1757-medium_default/funko-pop-blue-beta-jurassic-world-3-dominion.jpg",
        pelicula: "Jurassic World 3",
        peso: 30,
        altura: 35,
        poder: 1141,
        vida: 1000000
    },
    {
        nombre: "Dr. Octopus",
        imagen: "https://garhis.es/8282-large_default/funko-pop-doctor-octopus-957-special-edition.jpg",
        pelicula: "Spider-Man 3",
        peso: 20,
        altura: 35,
        poder: 1440,
        vida: 1000000
    },
    {
        nombre: "The mandalorian",
        imagen: "https://bellascositas.es/12973-superlarge_default/funko-pop-the-mandalorian-with-jetpack-408-special-edition-the-mandalorian-star-wars.jpg",
        pelicula: "Star wars",
        peso: 20,
        altura: 34,
        poder: 1500,
        vida: 1000000
    },
    {
        nombre: "David el gnomo",
        imagen: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617TZmn81ZL._AC_SX450_.jpg",
        pelicula: "David el gnomo",
        peso: 2,
        altura: 4,
        poder: 1000000000000000,
        vida: 1000000000000000
    },
    {
        nombre: "Groot",
        imagen: "https://m-arian.com/wp-content/uploads/2023/03/7886d4b2eea24d9f8b0c8739e8c0acc3xl-removebg-preview.png",
        pelicula: "Guardianes de la galaxia",
        peso: 20,
        altura: 29,
        poder: 1,
        vida: 1000000000000000
    }       
    
    
];

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allFunkos = await Funko.find();

    if (allFunkos.length) {
      await Funko.collection.drop();
      console.log("Nos cargamos todos los funkos");
    }
  })
  .catch((error) =>
    console.log("error eliminado los funkos", setError(400, error))
  )
  .then(async () => {
    await Funko.insertMany(funkos);
    console.log("Semilla plantada -> creamos de nuevo los funkos");
  })
  .catch((error) =>
    console.log("error eliminado los funkos", setError(400, error))
  )
  .finally(() => mongoose.disconnect());
