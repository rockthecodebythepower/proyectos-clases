const mongoose = require("mongoose");
const Funko = require("../api/models/funkos");
require("dotenv").config();

const funkos = [
  {
    name: "Funko Pop! Spider-Man",
    price: 14.99,
    img: "https://www.raccoongames.es/img/productos/2022/11/24/67607_POPMarvel_SMNWH_Leaping_SM2_GLAM-WEB.png",
  },
  {
    name: "Funko Pop! Wonder Woman",
    price: 13.25,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91140302/fee_786_587_png", //! OIAHJIOGHSADIKG
  },
  {
    name: "Funko Pop! Superman",
    price: 16.5,
    img: "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw8a6223ec/images/funko/66620-1.png",
  },
  {
    name: "Funko Pop! Iron Man",
    price: 19.99,
    img: "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw2bef9b1f/images/funko/58145-1.png",
  },
  {
    name: "Funko Pop! Captain America",
    price: 15.75,
    img: "https://distritozero.es/32495-large_default/funko-pop-captain-america-stark-tech-sui.jpg",
  },
  {
    name: "Funko Pop! Pikachu",
    price: 11.99,
    img: "https://magicians-circle.com/wp-content/uploads/2023/05/Funko-353-Pikachu.png",
  },
  {
    name: "Funko Pop! Hello Kitty",
    price: 10.5,
    img: "https://reinodejuguetes.com/4193-thickbox_default/figura-funko-pop-sanrio-hello-kitty-hello-kitty-polar-bearmt.jpg",
  },
  {
    name: "Funko Pop! Rick Sanchez",
    price: 18.25,
    img: "https://i5.walmartimages.com/seo/Funko-POP-Animation-Rick-Morty-Rick-w-Crystal-Skull_0d4a2699-754b-4ee2-9790-5bae19f8d398_1.7bfd39a97749ad86175a9d961fb83124.png",
  },
  {
    name: "Funko Pop! Elsa",
    price: 12.99,
    img: "https://bluestarimport.com/wp-content/uploads/2023/01/67973_Disney_Elsa_POP_GLAM-WEB.png",
  },
  {
    name: "Funko Pop! Mickey Mouse",
    price: 14.5,
    img: "https://reinodejuguetes.com/4243-large_default/figura-funko-pop-disney-mickey-mouse-club-mickey.jpg",
  },
  {
    name: "Funko Pop! Spider-Man",
    price: 14.99,
    img: "https://www.raccoongames.es/img/productos/2022/11/24/67607_POPMarvel_SMNWH_Leaping_SM2_GLAM-WEB.png",
  },
  {
    name: "Funko Pop! Wonder Woman",
    price: 13.25,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91140302/fee_786_587_png", //! OIAHJIOGHSADIKG
  },
  {
    name: "Funko Pop! Superman",
    price: 16.5,
    img: "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw8a6223ec/images/funko/66620-1.png",
  },
  {
    name: "Funko Pop! Iron Man",
    price: 19.99,
    img: "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw2bef9b1f/images/funko/58145-1.png",
  },
  {
    name: "Funko Pop! Captain America",
    price: 15.75,
    img: "https://distritozero.es/32495-large_default/funko-pop-captain-america-stark-tech-sui.jpg",
  },
  {
    name: "Funko Pop! Pikachu",
    price: 11.99,
    img: "https://magicians-circle.com/wp-content/uploads/2023/05/Funko-353-Pikachu.png",
  },
  {
    name: "Funko Pop! Hello Kitty",
    price: 10.5,
    img: "https://reinodejuguetes.com/4193-thickbox_default/figura-funko-pop-sanrio-hello-kitty-hello-kitty-polar-bearmt.jpg",
  },
  {
    name: "Funko Pop! Rick Sanchez",
    price: 18.25,
    img: "https://i5.walmartimages.com/seo/Funko-POP-Animation-Rick-Morty-Rick-w-Crystal-Skull_0d4a2699-754b-4ee2-9790-5bae19f8d398_1.7bfd39a97749ad86175a9d961fb83124.png",
  },
  {
    name: "Funko Pop! Elsa",
    price: 12.99,
    img: "https://bluestarimport.com/wp-content/uploads/2023/01/67973_Disney_Elsa_POP_GLAM-WEB.png",
  },
  {
    name: "Funko Pop! Mickey Mouse",
    price: 14.5,
    img: "https://reinodejuguetes.com/4243-large_default/figura-funko-pop-disney-mickey-mouse-club-mickey.jpg",
  },
];

//! generar una serie de datos en nuestra base de datos sin tener que introducir de uno en uno mediante un post los datos

//! limpiar y llevar a un estado incial nuestra BBDD

//? las ejecutaremos fuera de nuestro servidor

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    try {
      await Funko.collection.drop();
      console.log("Se ha limpiado la colección de funkos");
    } catch (error) {
      console.log("No se ha podido limpiar nada");
    }

    try {
      await Funko.insertMany(funkos);
      console.log("Se han insertado de nuevo los funkos");
    } catch (error) {
      console.log("No se han podido insertar los funkos");
    }
  })
  .finally(() => {
    mongoose.disconnect();
  });
