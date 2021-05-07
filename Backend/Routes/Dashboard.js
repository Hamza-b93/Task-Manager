const express = require("express");
const router = express.Router();
const user = require("../Schemas/UserSchema.js");
const task = require("../Schemas/TaskSchema.js");
const tokenVerification = require("./TokenVerification");
const cors = require("cors");

const DashboardRoute = router.get('/',tokenVerification, cors(), async function (req,res) {
  console.log("Dashboard route working!");
  console.log(req.headers.accessToken);
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  try {
    const document = await user.findById('hamza').exec();
    console.log(document);
    res.status(200).json(document);
  }
  catch(err) {
    res.status(404).json({ message: err.message });
  }
});

const DashboardPostRoute = router.post('/', cors(), async (req,res, next) => {
  console.log('Dashboard post route working!');
  try {
    await task.create({
      _id: req.body.id,
      task: req.body.task,
      isPending: req.body.pending,
      isComplete: req.body.complete,
      startDate: req.body.startDate
    });
    console.log(req.body);
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;
//module.exports = DashboardRoute;
