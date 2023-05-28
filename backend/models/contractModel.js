const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema(
  {
    user_id: String,
    project_id: String,
    contract_type: String,
    participant_id: String,
    participant_name: String,
    skill: String,
    percentage_offered: Number,
    contract_status: String,
    contract_start_date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("contract", ContractSchema);
