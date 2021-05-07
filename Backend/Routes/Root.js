const express = require("express");
const router = express.Router();

const RootRoute = router.get('/', (req,res) => {
  console.log("Home route working!");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  res.send(
    {
      name: "Hamza",
      dob: "19-06-1993",
      year: currentYear
    }
  );
  res.end();
});

module.exports = RootRoute;

//Can Also Be:

/*

const express = require("express");

const router = express.Router();

router.get('/', (req,res) => {
  console.log("Home route working!");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  res.send(
    {
      name: "Hamza",
      dob: "19-06-1993",
      year: currentYear
    }
  );
});

module.exports = router;

*/
