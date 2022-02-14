const express = require("express");
const router = express.Router();
const { User } = require("../models");

const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { ValidationToken } = require("../authMiddleware/AuthMiddleware");
const { json } = require("express/lib/response");

//create User
router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      username: username,
      password: hash,
      email: email,
    });
    res.json("User Add Successfully");
  });
});
//End create User

/// get Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong username and password combination" });
    } else {
      const jwt = sign({ username: user.username, id: user.id }, "softwarebd");
      res.json({ token: jwt, username: user.username, id: user.id });
    }
  });
});
/// End Login

//Start checking auth
router.get("/authcheck", ValidationToken, (req, res) => {
  res.json(req.user);
});
//ENd Chaecking auth

// Get Profile
router.get("/profile/:id", ValidationToken, async (req, res) => {
  const id = req.params.id;

  const basicInfo = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  res.json(basicInfo);
});
// End Get Profile

// Put Password
router.put("forgetpassword", ValidationToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findOne({ where: { username: req.user.username } });
  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong password input!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      User.update(
        {
          password: hash,
        },
        { where: { username: req.user.username } }
      );
      res.json("Success");
    });
  });
});
// ENd Put Password
module.exports = router;
