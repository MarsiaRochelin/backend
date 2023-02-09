// IMPORTS //
const express = require("express");
const project = express.Router();
const { getAllProjects, getSingleProject } = require("../queries/projects");

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

// DELETE

// UPDATE

// EXPORTS //
module.exports = project;
