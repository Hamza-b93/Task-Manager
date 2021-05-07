const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: {
    //required: true,
    type: String
  },
  task: {
    //required: true,
    type: String
  },
  startDate: {
    //required: false,
    type: Date
  },
  endDate: {
    //required: false,
    //type: Array
  },
  isPending: {
    type: Boolean
  },
  isComplete: {
    type: Boolean
  }
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;
