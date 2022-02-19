const multer = require("multer");
const path = require("path");

const { Ouser } = require("../models");

const addOUser = async (req, res) => {
  let info = {
    image: req.file.path,
    title: req.body.title,
  };
  const oUser = await Ouser.create(info);
  res.status(200).send(oUser);
  console.log(oUser);
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, callback) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimieType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimieType && extname) {
      return callback(null, true);
    }
    callback("Give proper files formate to upload");
  },
}).single("image");
module.exports = { addOUser, upload };
