const { postRegister, getRegisters } = require("../controller/register");
const { updateWork } = require("../controller/work");
const { updateWorker } = require("../controller/worker");

const registerRouter = require("express").Router();

// crear registros
registerRouter.post("/", postRegister, updateWorker, updateWork);
// consultar registros con filtros -> obra -> fecha
registerRouter.get("/:date", getRegisters);

module.exports = registerRouter;