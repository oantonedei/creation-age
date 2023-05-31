const usersModel = require("../models/usersModel");
const mediaModel = require("../models/mediaModel");
const lineageModel = require("../models/lineageModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config.json");

module.exports.login = async (req, res, next) => {
  try {
    const user_client = req.body;
    const user_db = await usersModel.findOne({
      user_email: user_client.user_email,
    });
    if (user_db) {
      const match = await bcrypt.compare(
        user_client.user_password,
        user_db.user_password
      );
      if (!match) {
        return next({
          status: 401,
          success: false,
          results: null,
          message: "User Authentication Failed. Wrong Password",
        });
      }
      const token = jwt.sign(
        {
          _id: user_db._id,
          user_name: user_db.user_name,
          user_email: user_db.user_email,
          user_role: user_db.user_role,
        },
        SECRET
      );
      res.json({
        status: 200,
        success: true,
        results: token,
        message: "User Authenticated",
      });
    } else {
      return next({
        status: 404,
        success: false,
        results: null,
        message: "User Not Found",
      });
    }
  } catch (err) {
    next(err);
  }
};
module.exports.signup = async (req, res, next) => {
  try {
    const new_user = req.body;
    const hashed_password = await bcrypt.hash(new_user.user_password, 10);
    const results = await usersModel.create({
      ...new_user,
      user_name: new_user.firstname + " " + new_user.lastname,
      user_password: hashed_password,
    });
    res.json({status: 200, success: true, results, message: "User Created" });
  } catch (err) {
    next(err);
  }
};

module.exports.createProject = async (req, res, next) => {
  try {
    const user_id = req.jwt_token._id;
    const new_project = req.body;
    const results = await mediaModel.create({ ...new_project, user_id });
    const lineage = await lineageModel.create({
      user_id,
      project_id: results._id,
      parent_id: null,
      root_id: null,
      num_children: 0,
    });
    res.json({ success: true, results, lineage });
  } catch (err) {
    next(err);
  }
};
