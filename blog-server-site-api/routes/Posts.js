const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { Likes } = require("../models");
const { ValidateToken } = require("../middleware/AuthMiddleware");

router.get("/", ValidateToken, async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });
  const likePost = await Likes.findAll({ where: { UserId: req.user.id } });
  res.json({ listOfPosts: listOfPosts, likedPosts: likePost });
});

router.get("/byId/:id", ValidateToken, async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});
router.post("/", ValidateToken, async (req, res) => {
  const post = req.body;
  post.UserId = req.user.id;
  post.username = req.user.username;
  await Posts.create(post);
  res.json(post);
});

router.get("/byUserId/:id", ValidateToken, async (req, res) => {
  const id = req.params.id;
  const listOfPosts = await Posts.findAll({
    where: { UserId: id },
    include: [Likes],
  });
  res.json(listOfPosts);
});
router.delete("/:id", ValidateToken, async (req, res) => {
  const postId = req.params.id;
  await Posts.destroy({ where: { id: postId } });
  res.json("Delete Post");
});
module.exports = router;
