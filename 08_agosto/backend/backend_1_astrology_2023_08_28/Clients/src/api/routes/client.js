const { createClient, getClientById, getClients, updateClient, deleteClient } = require("../controllers/client");
const clientsRouter = require("express").Router();

clientsRouter.get("/", getClients);
clientsRouter.get("/:id", getClientById);
clientsRouter.post("/", createClient);
clientsRouter.put("/:id", updateClient);
clientsRouter.delete("/:id", deleteClient);

module.exports = clientsRouter;