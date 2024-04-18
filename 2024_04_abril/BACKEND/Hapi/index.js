require("dotenv").config();
const Hapi = require("@hapi/hapi");
const { connectDB } = require("./src/config/db");
const mainRoutes = require("./src/api/routes/mainRouter");
const file = require("./src/plugins/file");
const cloudinary = require("cloudinary").v2;

connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const init = async () => {

    const server = Hapi.server({
        port: "3000",
        host: "localhost"
    });

    await server.register({
        plugin: file
    });

    server.ext("onRequest", function (request, h) {
        console.log("Este console sale cuando realizas una petición");
        return h.continue;
    })

    server.route(mainRoutes);

    await server.start();
    console.log("Servidor furrulando en: http://localhost:3000");
}

init();