const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { ValidateToken } = require("../middleware/AuthMiddleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { postId: postId } });
  res.json(comments);
});

router.post("/", ValidateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;

  await Comments.create(comment);
  res.json(comment);
});

router.delete("/:commitId", ValidateToken, async (req, res) => {
  const commitId = req.params.commitId;
  await Comments.destroy({ where: { id: commitId } });
});
module.exports = router;
