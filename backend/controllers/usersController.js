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
        return next(new Error("User Authentication Failed"));
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
      res.json({ success: true, results: token });
    } else {
      return next(new Error("User Not Found"));
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
      user_password: hashed_password,
    });
    res.json({ success: true, results });
  } catch (err) {
    next(err);
  }
};

module.exports.createProject = async (req, res, next) => {
  try {
    const user_id = req.jwt_token._id;
    const new_project = req.body;
    const results = await mediaModel.create({...new_project, user_id});
    const lineage = await lineageModel.create({
      user_id,
      project_id: results._id,
      parent_id: null,
      root_id: null,
      num_children: 0
    });
    res.json({ success: true, results, lineage });
  } catch (err) {
    next(err);
  }
};

// module.exports.requestPropertyById = async (req, res, next) => {
//   try {
//     console.log("request property by id");
//     console.log(req.body);
//     const { prop_id } = req.params;
//     const user_id = req.jwt_token._id;
//     const result = await Property.updateOne(
//       { _id: prop_id },
//       {
//         $set: {
//           request: {
//             user_id,
//             number_of_months: req.body.duration,
//             start_date: req.body.startDate,
//           },
//           available: false,
//         },
//       }
//     );
//     res.json({ success: true, result });
//   } catch (err) {
//     next(err);
//   }
// };
