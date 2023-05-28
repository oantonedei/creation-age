const express = require("express");
const {
  divergeMedia,
  addParticipant,
  getAllMedia,
  getAllOpenMedia,
  getAllCloseMedia,
  getAllParticipatorMedia,
} = require("../controllers/mediaController");
const { checkToken } = require("../middlewares/checkToken");
const mediaRouter = express.Router();

//posters & patchers
// audioRouter.post("/add", addAudio);
mediaRouter.get("/", checkToken, getAllMedia);
mediaRouter.get("/open", checkToken, getAllOpenMedia);
mediaRouter.get("/close", checkToken, getAllCloseMedia);
mediaRouter.get("/participator", checkToken, getAllParticipatorMedia);

mediaRouter.post("/diverge/:id", checkToken, divergeMedia);
mediaRouter.post("/addteam/:id", checkToken, addParticipant);

module.exports = mediaRouter;
