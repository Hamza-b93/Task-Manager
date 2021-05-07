const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({

  username: {
    //required: true,
    type: String
  },
  emailAddress: {
    //required: false,
    //type: Date
  },
  password: {
    required: false,
    type: String
  },
  createdOn: {
    //required: false,
    //type: Array
  },
  dob: {
    //type: Boolean
  }
});

const userSchema = new mongoose.Schema({
  _id: {
    //required: true,
    type: String
  },
  tasks: {
    //required: false,
    type: Array
  },
  //children: [settings],
  settings: [settingsSchema]
});

const user = mongoose.model("User", userSchema);

module.exports = user;
