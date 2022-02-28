const express = require("express");
const router = express.Router();
const { Carts } = require("../models");
const { Users, Products } = require("../models");
const { ValidateToken } = require("../middleware/ValidateToken");

router.post("/", ValidateToken, async (req, res) => {
  const carts = {
    UserId: req.User.id,
    ProductId: req.body.ProductId,
    qty: req.body.qty,
    order: "true",
  };
  const orders = await Carts.findAll({
    where: { UserId: carts.UserId, ProductId: carts.ProductId, order: "true" },
  });
  if (orders[0]) {
    res.json({ message: "Already Add Product" });
  } else {
    Carts.create(carts);
    res.json({ error: "Add to cart" });
  }
});

router.get("/length", ValidateToken, async (req, res) => {
  const id = req.Users.id;
  const cartlength = await Carts.findAll({
    where: { UserId: id, order: "true" },
  });
  res.json(cartlength);
});
module.exports = router;
