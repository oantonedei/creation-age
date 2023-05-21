const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    description: String,
    industry: String,
    phase: String,
    numberOfRequiredParticipants: Number,
    participants: [
      {
        participant_id: String,
        skill: String,
        percentage_offered: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", MediaSchema);
