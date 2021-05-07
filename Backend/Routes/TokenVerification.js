const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('ACCESS_TOKEN');
  if (!token) {
    res.status(401).send("Access Denied!");
  }
  else {
    try {
      const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      rres.status(400).send("Invalid Token Detected!");
    }
  }
};
