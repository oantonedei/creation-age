const express = require("express");
const contractRouter = express.Router();
const { checkToken } = require("../middlewares/checkToken");
const { signContract } = require("../controllers/contractController");

contractRouter.post("/sign/:id", checkToken, signContract);

module.exports = contractRouter;
