const express = require("express");
const router = express.Router();
const user = require("../Schemas/UserSchema.js");
//
// const CreateUserRoute = router.post('/', async (req,res) => {
//   console.log("CreateUser route working!");
//   console.log(user);
//
// });
//
//

const GetCreateUserRoute = router.get('/', (req, res) => {
  res.send("You can now create a user!");
});

const GetUserByIDRoute = router.get('/:_id', async (req, res) => {
  res.send("id path working!");

  try {
    const userID = req.params._id;
    const userDocument = await user.find({_id: userID}).exec();
    console.log("searching for " + userID);
    console.log('Document Found: ' + await user.exists({_id: userID}));
    console.log(userDocument);
    console.log(userID.toString());
  }
  catch (err) {
    console.log(err);
  }
});

const PostCreateUserRoute = router.post('/', async (req, res, next) => {
  console.log('working!');
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.emailAddress;
  console.log(username);
  console.log(password);
  console.log(email);
  res.write( username);
  res.write('\n');
  res.write(password);
  res.write('\n');
  res.write(email);
  res.send();
  next();

});

 module.exports = router;
