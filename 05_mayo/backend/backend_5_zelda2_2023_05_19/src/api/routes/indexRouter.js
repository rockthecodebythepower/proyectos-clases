//* HASTA ESTE ARCHIVO LLEGAREMOS ÚNICAMENTE CUANDO ALGUIEN HAGA UNA PETICIÓN QUE EMPIECE POR LA RUTA 
//* /API/V1 (VEASE EL INDEX.JS)

//! creamos un enrutado con express.
const indexRouter = require("express").Router();

//? nos importamos cada ruta de cada colección que tengamos
const characterRoutes = require("./characters");
/* const itemsRoutes = require("./items"); */

//! http://localhost:3000/api/v1/characters
//! mi servidor utiliza la ruta /characters para seguir concatenando rutas mediante el enrutado de express
indexRouter.use("/characters", characterRoutes);

//! la ruta / la tendremos que poner al final porque si no pisará a las otras, tendrá más importancia
indexRouter.use("/", (req, res, next) => {
    return res.status(200).json("Esto funciona nikel 🤑");
})

//? exportamos nuestro enrutado
module.exports = indexRouter;