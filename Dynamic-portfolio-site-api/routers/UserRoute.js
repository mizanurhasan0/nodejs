const express = require("express");
const router = express.Router();
const { User } = require("../models");
const multer = require("multer");
const path = require("path");

const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

// const { ValidationToken } = require("../authMiddleware/AuthMiddleware");
const { json } = require("express/lib/response");
const { PersonalProject } = require("../models");

/// get Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

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
router.get("/authcheck", (req, res) => {
  res.json(req.user);
});
//ENd Chaecking auth

// Get Profile
router.get("/profile/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await User.findByPk(
    id,
    {
      attributes: { exclude: ["password"] },
    },
    { incliude: [PersonalProject] }
  );
  res.json(basicInfo);
});
// End Get Profile
// Get Profile
router.get("/getuser", async (req, res) => {
  const user = await User.findByPk(1, {
    attributes: { exclude: ["password"] },
  });
  res.json({ user: user });
});
// End Get Profile

// Put Password
router.put("forgetpassword", async (req, res) => {
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

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const UploadImages = multer({
  storage: Storage,
  limits: { fileSize: "100000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

router.post("/", UploadImages, async (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    let userInfo = {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      image: req.file.filename,
    };
    User.create(userInfo);
    res.status(200).send("Add User Successfully");
  });
});

module.exports = router;
