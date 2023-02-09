// IMPORTS //
const express = require("express");
const project = express.Router();
const { getAllProjects } = require("../queries/projects");

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

// CREATE

// DELETE

// UPDATE

// EXPORTS //
module.exports = project;
