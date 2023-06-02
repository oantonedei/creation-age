const express = require("express");
const {
  divergeMedia,
  addParticipant,
  getAllMedia,
  getMediaById,
  getAllOpenMedia,
  getAllCloseMedia,
  getAllParticipatorMedia,
  getUserMedia,
  getLineageFromLeaf,
} = require("../controllers/mediaController");
const { checkToken } = require("../middlewares/checkToken");
const mediaRouter = express.Router();

//posters & patchers
// audioRouter.post("/add", addAudio);
mediaRouter.get("/", checkToken, getAllMedia);
mediaRouter.get("/:id", checkToken, getMediaById);
// mediaRouter.get("/open", checkToken, getAllOpenMedia);
// mediaRouter.get("/close", checkToken, getAllCloseMedia);
mediaRouter.get("/user/:userid", checkToken, getUserMedia);
mediaRouter.get("/participator", checkToken, getAllParticipatorMedia);
mediaRouter.get("/getlineage/:id", checkToken, getLineageFromLeaf);

mediaRouter.post("/diverge/:id", checkToken, divergeMedia);
mediaRouter.post("/addteam/:id", checkToken, addParticipant);

module.exports = mediaRouter;
