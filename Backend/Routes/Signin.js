const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const signinValidationSchema = require("../Schemas/JoiSigninSchema.js");
const user = require('../Schemas/UserSchema.js');
const DashboardRoute = require('../Routes/Dashboard.js');
const cors = require("cors");

const UserSigninGetRoute = router.get("/", cors(), async function (req, res, next) {

  console.log("Signup Get Route Active!");
  console.log(jwt);
  next();
  res.end();
  });

const UserSigninPostRoute = router.post('/', cors(), async (req, res) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  const _id = emailAddress;
  const {error} = signinValidationSchema(req.body);
  console.log(res.header);
  if (error) {
    return res.status(400).write(error.details[0].message);
    console.log(error.details[0].message);
  }
  else {
    try {
      const userDocument = await user.findById(_id).exec();
      const userDocumentExists = await user.exists({_id});
      const storedPassword = await userDocument.settings[0].password;
      console.log(userDocumentExists);
      if (!userDocumentExists) {
        res.status(409).write("Account does not exist!");

        console.log("Account does not exist!");
      }
      else {
        console.log(storedPassword);
        if (await bcrypt.compare(password, storedPassword)) {
          const user = {name: _id};
          console.log(`User Value: ${_id}`);
          const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
          //res.json({accessToken: accessToken});
          res.header("ACCESS-TOKEN", accessToken).send(accessToken);
          //res.write('Signin successful!'); => This line is causing problems. Check this later.
        }
        else {
          res.write("failed!");
        }
      }
    }
    catch (err) {
      const error = res.json(err);
      //const error = res.json(err);
      console.log(err);
    }
  }

  res.send();
  res.end();
});

module.exports = router;
