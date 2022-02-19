const express = require("express");
const router = express.Router();
// const { ValidationToken } = require("../authMiddleware/AuthMiddleware");
const { PersonalProject } = require("../models");
const { User } = require("../models");

//
router.get("/", async (req, res) => {
  // const id = req.params.projectId;
  const project = await PersonalProject.findAll({ where: { UserId: 1 } });
  res.json(project);
});
router.get("/getworkbyuser", async (req, res) => {
  const listPfProject = await PersonalProject.findAll({ where: { UserId: 1 } });
  res.json(listPfProject);
});
router.get("/:projectId", async (req, res) => {
  const id = req.params.projectId;
  const project = await PersonalProject.findAll({ where: { id: id } });
  res.json(project);
});

router.post("/", async (req, res) => {
  const project = req.body;
  // project.UserId = req.user.id;
  project.UserId = 1;
  await PersonalProject.create(project);
  res.json(project);
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { projectName, technology, projectLink } = req.body;

  const updateProject = await PersonalProject.update(
    {
      projectName: projectName,
      technology: technology,
      projectLink: projectLink,
    },
    { where: { id: id } }
  );
  res.json(updateProject);
});

module.exports = router;
