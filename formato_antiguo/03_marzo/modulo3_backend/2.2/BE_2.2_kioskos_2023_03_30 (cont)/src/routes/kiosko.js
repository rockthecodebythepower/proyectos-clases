const { getAllKioskos, postNewKiosko, updateKiosko, deleteKiosko, getKioskoByName, filterByCity } = require("../controllers/kiosko");

const KioskoRouter = require("express").Router();

KioskoRouter.get("/", getAllKioskos);
KioskoRouter.get("/:name", getKioskoByName);
KioskoRouter.get("/filterByCity/:ciudad", filterByCity);
KioskoRouter.post("/", postNewKiosko);
KioskoRouter.put("/:id", updateKiosko);
KioskoRouter.delete("/:id", deleteKiosko);

module.exports = KioskoRouter