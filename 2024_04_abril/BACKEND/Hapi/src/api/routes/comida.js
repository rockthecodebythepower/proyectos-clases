const BASE_ROUTE = require("../../utils/base_route");
const { getComidas, postComida, getComidaById } = require("../controllers/comida");

const comidasRouter = [
  {
    method: "GET",
    path: `${BASE_ROUTE}/comidas`,
    handler: getComidas,
  },
  {
    method: "POST",
    path: `${BASE_ROUTE}/comidas`,
    handler: postComida,
  },
  {
    method: "GET",
    path: `${BASE_ROUTE}/comidas/{id}`,
    handler: getComidaById,
  },
];

module.exports = { comidasRouter };
