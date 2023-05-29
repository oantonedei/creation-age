const contractModel = require('../models/contractModel');
const mediaModel = require("../models/mediaModel");

module.exports.signContract = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user_id = req.jwt_token._id;
        const skill = req.jwt_token.role;
        // const updatedContract = await contractModel.updateOne({ _id: id, participant.skill: skill }, { $set: { contract_status: "signed" } });
    } catch (err) {
        next(err);
    }
};