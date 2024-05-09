const adoptionsRouter = require("./adoption");
const catsRouter = require("./cat");
const usersRouter = require("./user");
const router = require("express").Router();

router.use("/cats", catsRouter);
router.use("/users", usersRouter);
router.use("/adoptions", adoptionsRouter);

module.exports = router;