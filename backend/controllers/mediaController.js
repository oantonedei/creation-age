const lineageModel = require("../models/lineageModel");
const mediaModel = require("../models/mediaModel");
const contractModel = require("../models/contractModel");

//Here, the audio file will be converted to text using 3rd-party API, and will be saved in the public folder, and the path will be saved in the database. The path will be used to access the file from the frontend.
module.exports.getAllMedia = async (req, res, next) => {
  try {
    const results = await mediaModel.find().sort({ createdAt: -1 });
    res.json({ success: true, results });
  } catch (err) {
    next(err);
  }
};

module.exports.getMediaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await mediaModel.findById(id);
    const contracts = [];
    for (let participant of results.participants) {
      const contract = await contractModel.findById(participant.contract_id);
      contracts.push(contract);
    }
    res.json({ success: true, results, contracts });
  } catch (err) {
    next(err);
  }
};

// module.exports.getAllOpenMedia = async (req, res, next) => {
//   try {
//     const results = await mediaModel.find({ status: "open" });
//     res.json({ success: true, results });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports.getAllCloseMedia = async (req, res, next) => {
//   try {
//     const results = await mediaModel.find({ status: "close" });
//     res.json({ success: true, results });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports.getAllParticipatorMedia = async (req, res, next) => {
  try {
    const id = req.jwt_token._id;
    const results = await mediaModel.find({
      participants: { $elemMatch: { participant_id: id } },
    });
    res.json({ success: true, results });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserMedia = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const results = await mediaModel.find({ user_id: userid });
    res.json({ success: true, results });
  } catch (err) {
    next(err);
  }
};

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
      status: project.status,
      participants: [],
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

module.exports.addParticipant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.jwt_token._id;
    const new_participant = req.body;
    const contract = await contractModel.create({
      contract_type: new_participant.contract_type,
      contract_status: "pending",
      skill: new_participant.skill,
      percentage_offered: new_participant.percentage_offered,
      user_id,
      project_id: id,
    });
    const results = await mediaModel.updateOne(
      { _id: id },
      {
        $push: {
          participants: {
            skill: new_participant.skill,
            percentage_offered: new_participant.percentage_offered,
            contract_id: contract._id,
          },
        },
      }
    );
    res.json({ success: true, results, contract });
  } catch (err) {
    next(err);
  }
};

module.exports.getLineageFromLeaf = async (req, res, next) => {
  try {
    let { id } = req.params;
    let lineage = [];
    lineage.push(await mediaModel.findById(id));
    let result = await lineageModel.findOne({ project_id: id });
    while (true) {
      if (result.root_id !== null && result.parent_id !== null) {
        id = result.parent_id;
        lineage.push(await mediaModel.findById(id));
        result = await lineageModel.findOne({ project_id: id });
      } else {
        break;
      }
    }
    res.json({ success: true, lineage });
  } catch (err) {
    next(err);
  }
};
