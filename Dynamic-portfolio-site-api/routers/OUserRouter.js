// import controllers review, products
const OUserController = require("../Controller/OUserController");

// router
const router = require("express").Router();

// use routers
router.post("/add", OUserController.upload, OUserController.addOUser);

module.exports = router;
