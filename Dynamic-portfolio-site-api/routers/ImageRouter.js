const express = require("express");
const { upload, uploadImage } = require("../ImgController/ImgController");
const router = express.Router();

router.post("/upload", uploadImage, upload);

module.exports = router;
