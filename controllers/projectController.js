// IMPORTS //
const express = require("express");
const project = express.Router();

// ROUTES //

// INDEX
project.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// SHOW

// CREATE

// DELETE

// UPDATE

// EXPORTS //
module.exports = project;
