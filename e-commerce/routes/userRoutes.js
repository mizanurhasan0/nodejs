const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { ValidateToken } = require("../middleware/ValidateToken");

// Get Request

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email: email } });

  if (!user) res.json({ error: "User Doesn't exist" });
  try {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong username and password combination" });
      } else {
        const jwt = sign({ email: user.email, id: user.id }, "hasan");
        res.json({ token: jwt, email: user.email, id: user.id });
      }
    });
  } catch (error) {
    res.json({ error: error });
  }
});

// Post Request
router.post("/", async (req, res) => {
  const { email, password, mobile, address } = req.body;

  const userChecking = await Users.findOne({
    where: { email: email },
  });

  if (!userChecking) {
    bcrypt.hash(password, 10).then((hash) => {
      try {
        if (email && password && mobile && address) {
          Users.create({
            email: email,
            mobile: mobile,
            address: address,
            password: hash,
          });
          res.json({ message: "User Add successFully" });
        } else {
          res.json({ error: "Complete your Form" });
        }
      } catch (error) {
        res.json({ error: error });
      }
    });
  } else {
    res.json({ error: "User Already Exist" });
  }
});

router.get("/", ValidateToken, (req, res) => {
  res.json(req.User);
});

module.exports = router;
