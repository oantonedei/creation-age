const express = require("express");
const contractRouter = express.Router();
const { checkToken } = require("../middlewares/checkToken");
const { getAllContracts, signContract } = require("../controllers/contractController");

contractRouter.get("/:id", checkToken, getAllContracts);
contractRouter.post("/sign/:id", checkToken, signContract);

module.exports = contractRouter;
