const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_name: String,
    user_email: String,
    user_password: String,
    user_role: String,
    user_points: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
