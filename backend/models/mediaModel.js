const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    description: String,
    industry: String,
    phase: String,
    status: String,
    participants: [
      {
        participant_id: String,
        participant_name: String,
        skill: String,
        percentage_offered: Number,
        contract_id: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", MediaSchema);
