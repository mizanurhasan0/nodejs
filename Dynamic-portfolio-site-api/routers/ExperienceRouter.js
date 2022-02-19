const express = require("express");
const router = express.Router();
const { ValidationToken } = require("../authMiddleware/AuthMiddleware");

const { Experiance } = require("../models");

//
router.get("/", async (req, res) => {
  // const id = req.params.projectId;
  const project = await Experiance.findAll();
  res.json(project);
});
router.get("/:id", ValidationToken, async (req, res) => {
  const id = req.params.projectId;
  const experinece = await Experiance.findAll({ where: { id: id } });
  res.json(experinece);
});

router.post("/", async (req, res) => {
  const experience = req.body;
  // project.UserId = req.user.id;
  experience.UserId = 1;
  console.log(experience);
  await Experiance.create(experience);
  res.json(experience);
});

router.put("/update/:id", ValidationToken, async (req, res) => {
  const id = req.params.id;
  const { companyName, position, jobResponsible, year } = req.body;

  const updateExperience = await Experiance.update(
    {
      companyName: companyName,
      position: position,
      jobResponsible: jobResponsible,
    },
    { where: { id: id } }
  );
  res.json(updateExperience);
});

module.exports = router;
