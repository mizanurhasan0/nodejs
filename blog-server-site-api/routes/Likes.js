const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const { ValidateToken } = require("../middleware/AuthMiddleware");

router.post("/", ValidateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const checkLiking = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });
  if (!checkLiking) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.json({ liked: true });
  } else {
    await Likes.destroy({ where: { PostId: PostId, UserId: UserId } });
    res.json({ liked: false });
  }
});
module.exports = router;
