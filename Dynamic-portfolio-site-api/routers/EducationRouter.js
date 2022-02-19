const express = require("express");
const router = express.Router();
const { ValidationToken } = require("../authMiddleware/AuthMiddleware");

const { Education } = require("../models");

//
router.get("/", async (req, res) => {
  // const id = req.params.projectId;
  const education = await Education.findAll({ where: { UserId: 1 } });
  res.json(education);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const education = await Education.findAll({ where: { id: id } });
  res.json(education);
});

router.post("/", async (req, res) => {
  const education = req.body;
  // project.UserId = req.user.id;
  education.UserId = 1;
  console.log(education);
  await Education.create(education);
  res.json(education);
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { degree, institute, cgpa, passyear } = req.body;

  const updateEducation = await Experiance.update(
    {
      degree: degree,
      institute: institute,
      cgpa: cgpa,
      passyear: passyear,
    },
    { where: { id: id } }
  );
  res.json(updateEducation);
});

module.exports = router;
