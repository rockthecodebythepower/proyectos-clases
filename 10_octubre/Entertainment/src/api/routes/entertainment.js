const { postEntertainment, getEntertainments, getEntertainmentById, getEntertainmentsReleaseYear, updateEntertainment, deleteEntertainment } = require("../controllers/entertainment");
const entertainmentsRouter = require("express").Router();

entertainmentsRouter.post("/", postEntertainment);
entertainmentsRouter.get("/", getEntertainments);
entertainmentsRouter.get("/getById/:id", getEntertainmentById);
entertainmentsRouter.get("/getRelease/:year", getEntertainmentsReleaseYear);
entertainmentsRouter.put("/:id", updateEntertainment);
entertainmentsRouter.delete("/:id", deleteEntertainment);

module.exports = entertainmentsRouter;