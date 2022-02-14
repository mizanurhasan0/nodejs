const express = require("express");
const router = express.Router();
const { ValidationToken } = require("../authMiddleware/AuthMiddleware");
const { PersonalProject } = require("../models");

router.get("/", ValidationToken, async (req, res) => {
  const id = req.params.projectId;
  const project = await PersonalProject.findAll();
  res.json(project);
});
router.get("/:projectId", ValidationToken, async (req, res) => {
  const id = req.params.projectId;
  const project = await PersonalProject.findAll({ where: { id: id } });
  res.json(project);
});

router.post("/", ValidationToken, async (req, res) => {
  const project = req.body;
  project.UserId = req.user.id;
  await PersonalProject.create(project);
  res.json(project);
});

router.put("/update/:id", ValidationToken, async (req, res) => {
  const id = req.params.id;
  const updateProject = await PersonalProject.update({});
});
