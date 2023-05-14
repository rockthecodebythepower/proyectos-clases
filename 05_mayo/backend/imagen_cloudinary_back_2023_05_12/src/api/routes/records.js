const recordRoutes = require("express").Router();

const upload = require("../../middlewares/file");
const { getAllRecords, postRecord } = require("../controllers/records");

recordRoutes.get("/", getAllRecords);
recordRoutes.post("/", upload.single("record", {resource_type: "auto"}), postRecord);

module.exports = recordRoutes;