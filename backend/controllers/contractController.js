const contractModel = require("../models/contractModel");
const mediaModel = require("../models/mediaModel");

module.exports.getAllContracts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await contractModel.find({ project_id: id});
    res.json({ success: true, results });
  } catch (err) {
    next(err);
  }
}

module.exports.signContract = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id, user_name } = req.jwt_token;
    const updatedContract = await contractModel.updateOne(
      { _id: id },
      {
        $set: {
          contract_status: "signed",
          participant_id: _id,
          participant_name: user_name,
          contract_start_date: new Date(),
        },
      }
    );
    const updatedMedia = await mediaModel.updateOne(
      { participants: { $elemMatch: { contract_id: id } } },
      {
        $set: {
          "participants.$.participant_id": _id,
          "participants.$.participant_name": user_name,
        },
      }
    );
    res.json({ success: true, updatedContract, updatedMedia });
  } catch (err) {
    next(err);
  }
};
