const upload = require("../../middlewares/file");
const { getTeams, getTeamById, postTeam, deleteTeam } = require("../controllers/team");

const teamsRouter = require("express").Router();

teamsRouter.get("/:id", getTeamById);
teamsRouter.get("/", getTeams);
teamsRouter.post("/", upload.single("shield"), postTeam);
teamsRouter.delete("/:id", deleteTeam);

module.exports = teamsRouter;