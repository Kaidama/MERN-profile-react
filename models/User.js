const mongoose = require("mongoose");
const moment = require("moment");
const now = moment()
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  timestamp: {
    type: String,
    default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
  }
});
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users Route");
});

module.exports = User = mongoose.model("user", UserSchema);
