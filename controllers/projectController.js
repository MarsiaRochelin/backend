// IMPORTS //
const express = require("express");
const project = express.Router();
const {
  getAllProjects,
  getSingleProject,
  newProject,
  deleteProject,
  updateProject,
} = require("../queries/projects");
const { checkProjectName } = require("../validations/checkProjects");

// ROUTES //

// INDEX
project.get("/", async (req, res) => {
  const allProjects = await getAllProjects();
  if (allProjects[0]) {
    res.status(200).json(allProjects);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
project.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await getSingleProject(id);
  if (!project.message) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ error: "not-found" });
  }
});

// CREATE
project.post("/", checkProjectName, async (req, res) => {
  try {
    const project = await newProject(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
project.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await deleteProject(id);
    res.status(200).json(deletedProject);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
project.put("/:id", checkProjectName, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await updateProject(id, req.body);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({ error: "project not found" });
  }
});

// EXPORTS //
module.exports = project;
