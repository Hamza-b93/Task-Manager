const express = require("express");
const router = express.Router();
const user = require('../Schemas/UserSchema.js');

// const SettingsRoute = router.get('/', function (req,res) {
//   console.log("Settings route working!");
//   res.send(
//     {
//       route: "Settings",
//       year: currentYear
//     }
//   );
// });
//
// module.exports = SettingsRoute;


//const express = require("express");
//const router = express.Router();

const SettingsRoute = router.get('/:userID', async function (req,res) {
  console.log("Settings Route Rorking!");
  try {
    const userID = req.params._id;
    const userDocument = await user.find({_id: userID}).exec();
    console.log(userDocument);
    res.status(200).json(userDocument);
  }
  catch(err) {
    res.status(404).json({ message: err.message });
  }
});

// const DashboardPostRoute = router.post('/', async (req,res, next) => {
//   console.log('Dashboard post route working!');
//   try {
//     await task.create({
//       _id: req.body.id,
//       task: req.body.task,
//       isPending: req.body.pending,
//       isComplete: req.body.complete,
//       startDate: req.body.startDate
//     });
//     console.log(req.body);
//   }
//   catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
//module.exports = DashboardRoute;
