const express = require("express");
const router = express.Router();
const { Products } = require("../models");
const { ValidateToken } = require("../middleware/ValidateToken");

const UploadImages = require("../middleware/UploadImage");
// Post Product

router.post("/", UploadImages, ValidateToken, async (req, res) => {
  let productInfo = {
    title: req.body.title,
    brand: req.body.brand,
    specification: req.body.specification,
    description: req.body.description,
    reg_price: req.body.reg_price,
    dis_price: req.body.dis_price,
    p_image: req.file.filename,
    qty: req.body.qty,
    code: Date.now(),
    UserId: req.User.id,
  };
  // res.json(productInfo);
  // console.log(res.json(productInfo));
  try {
    Products.create(productInfo);

    // productInfo.id = product.id;

    res.status(200).send({ data: productInfo, message: "Product add" });
  } catch (error) {
    res.status(200).send({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    res.json({ error: error });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Products.findOne({ where: { id: id } });
    res.json(products);
  } catch (error) {
    res.json({ error: error });
  }
});
module.exports = router;
