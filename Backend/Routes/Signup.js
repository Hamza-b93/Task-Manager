const express = require("express");
const bcrypt = require('bcrypt');
const Joi = require('joi');
const router = express.Router();
const signupValidationSchema = require("../Schemas/JoiSignupSchema.js");
const user = require('../Schemas/UserSchema.js');
const cors = require("cors");

const UserSignupGetRoute = router.get('/', async function (req, res, next) {

  console.log("Signup Get Route Active!");
  next();
  res.end();
  });

const UserSignupPostRoute = router.post('/', cors(), async (req, res) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  const _id = emailAddress;
  const createdOn = new Date();
  const {error} = signupValidationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
    console.log(error.details[0].message);
  }
  else {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const userDocument = await user.findById(_id).exec();
      const userDocumentExists = await user.exists({_id});
      console.log(userDocumentExists);
      if (userDocumentExists) {
        res.status(409).write("An account is already registered with this email address!");
        console.log("An account is already registered with this email address!");
      }
      else {
        await user.create(
          {
            _id: _id,
            settings: {
            username: _id,
            emailAddress: emailAddress,
            password: hashedPassword,
            createdOn: createdOn
          }
        });
        console.log("User created sccessfully!");
        res.write('User created sccessfully!');
      }
    }
    catch (err) {
      const error = res.json(err);
      console.log(err);
    }
  }
  res.send();
  res.end();
});

module.exports = router;
