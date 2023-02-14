// DEPENDENCIES //
const cors = require("cors");
const express = require("express");
const projectsController = require("./controllers/projectController");

// CONFIGURATION //
const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());
//projects ROUTES
app.use("/projects", projectsController);

// ROUTES //
app.get("/", (req, res) => {
  res.send("Welcome to the To Code or Not To Code App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT //
module.exports = app;
