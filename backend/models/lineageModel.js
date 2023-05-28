const mongoose = require("mongoose");

const LineageSchema = new mongoose.Schema(
  {
    user_id: String,
    project_id: String,
    parent_id: String,
    root_id: String,
    num_children: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("lineage", LineageSchema);
