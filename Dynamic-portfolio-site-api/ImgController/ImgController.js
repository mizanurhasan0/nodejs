const multer = require("multer");

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    var imageName = `image-${Date.now()}.${ext}`;
    callback(null, imageName);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image/")) {
    callback(null, true);
  } else {
    callback(new Error("only image is allowed"));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage,
});
exports.uploadImage = upload.single("photo");
exports.upload = (req, res) => {
  return res.status(200).json({
    imaData: req.file,
    url: req.file.filename,
  });
};
