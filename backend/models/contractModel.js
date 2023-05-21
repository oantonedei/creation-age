const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
    
}, { timestamps: true });

module.exports = mongoose.model("contract", ContractSchema);