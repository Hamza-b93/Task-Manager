const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", function() {
  console.log('DB Connected!');
});

const port = process.env.port || 5000;

app.listen (port, function () {
  console.log('App Running On Port: ' + port);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const RootRoute = require("./Routes/Root.js");
const DashboardRoute = require('./Routes/Dashboard.js');
const SettingsRoute = require("./Routes/Settings.js");
const UserRoute = require('./Routes/User.js');
const SignupRoute = require("./Routes/Signup.js");
const SigninRoute = require("./Routes/Signin.js");

app.use('/', RootRoute);
app.use("/dashboard", DashboardRoute);
app.use('/settings', SettingsRoute);
app.use("/user", UserRoute);
app.use('/user/:_id', UserRoute);
app.use("/signup", SignupRoute);
app.use("/signin", SigninRoute);
