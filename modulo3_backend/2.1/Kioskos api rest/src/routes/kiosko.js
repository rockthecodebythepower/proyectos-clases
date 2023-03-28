const { getAllKioskos, postNewKiosko } = require("../controllers/kiosko");

const KioskoRouter = require("express").Router();

KioskoRouter.get("/", getAllKioskos);
KioskoRouter.post("/", postNewKiosko);

module.exports = KioskoRouter