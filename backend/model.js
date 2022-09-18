const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  fName: {
    type: String,
    require: true,
  },
  lName: String,
  phNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  cPassword: {
    type: String,
    require: true,
    unique: true,
  },
});

const Data = mongoose.model("userData", userData);

module.exports = Data;