const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { ValidateToken } = require("../middleware/AuthMiddleware");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("User Add Successfully");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong username and password combination" });
    } else {
      const jwt = sign({ username: user.username, id: user.id }, "hasan");

      res.json(jwt);
    }
  });
});
router.get("/authCheck", ValidateToken, (req, res) => {
  res.json(req.user);
});
module.exports = router;
