const express = require("express");
const { divergeMedia, createContract } = require("../controllers/mediaController");
const { checkToken } = require("../middlewares/checkToken");
const mediaRouter = express.Router();

//posters & patchers
// audioRouter.post("/add", addAudio);
mediaRouter.post("/diverge/:id", checkToken, divergeMedia);
mediaRouter.post("/contracts/:id", checkToken, createContract);

module.exports = mediaRouter;
