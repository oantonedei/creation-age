const express = require("express");
const { divergeMedia } = require("../controllers/mediaController");
const { checkToken } = require("../middlewares/checkToken");
const mediaRouter = express.Router();

//posters & patchers
// audioRouter.post("/add", addAudio);
mediaRouter.post("/diverge/:id", checkToken, divergeMedia);

module.exports = mediaRouter;
