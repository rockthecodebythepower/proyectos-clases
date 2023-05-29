const { getAllMenus, postMenu } = require("../controllers/menu");

const menusRoutes = require("express").Router();

menusRoutes.get("/", getAllMenus);
menusRoutes.post("/", postMenu);

module.exports = menusRoutes;