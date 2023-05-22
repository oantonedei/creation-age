const lineageModel = require("../models/lineageModel");
const mediaModel = require("../models/mediaModel");
const contractModel = require("../models/contractModel");

//Here, the audio file will be converted to text using 3rd-party API, and will be saved in the public folder, and the path will be saved in the database. The path will be used to access the file from the frontend.
module.exports.divergeMedia = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.jwt_token._id;
    const project = await mediaModel.findById(id);
    if (!project) return next(new Error("Project Not Found"));
    const results = await mediaModel.create({
      name: project.name,
      description: project.description,
      industry: project.industry,
      phase: project.phase,
      numberOfRequiredParticipants: project.numberOfRequiredParticipants,
      participants: project.participants,
      user_id: user_id,
    });
    const parent_lineage = await lineageModel.findOne({ project_id: id });
    let lineage;
    if (parent_lineage.root_id === null && parent_lineage.parent_id === null) {
      lineage = await lineageModel.create({
        user_id: user_id,
        project_id: results._id,
        parent_id: id,
        root_id: id,
        num_children: 0,
      });
      await lineageModel.updateOne(
        { _id: parent_lineage._id },
        { $inc: { num_children: 1 } }
      );
    } else {
      lineage = await lineageModel.create({
        user_id: user_id,
        project_id: results._id,
        parent_id: id,
        root_id: parent_lineage.root_id,
        num_children: 0,
      });
      await lineageModel.updateOne(
        { _id: parent_lineage._id },
        { $inc: { num_children: 1 } }
      );
    }
    res.json({ success: true, results, lineage });
  } catch (err) {
    next(err);
  }
};

module.exports.createContract = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.jwt_token._id;
    const new_contract = req.body;
    const contract = await contractModel.create({
      contract_type: new_contract.contract_type,
      contract_status: new_contract.contract_status,
      participants: new_contract.participants,
      user_id,
      project_id: id,
    });
    const results = await mediaModel.updateOne(
      { _id: id },
      { $set: { participants: new_contract.participants, contract_id: contract._id } }
    );
    res.json({ success: true, results, contract });
  } catch (err) {
    next(err);
  }
};
