// DEPENDENCIES //
const cors = require("cors");
const express = require("express");
const projectController = require("./controllers/projectController.js");

// CONFIGURATION //
const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());

app.use("/project", projectController);

// ROUTES //
app.get("/", (req, res) => {
  res.send("Welcome to the To Code or Not Code App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT //
module.exports = app;
