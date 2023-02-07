// DEPENDENCIES //
const cors = require("cors");
const express = require("express");

// CONFIGURATION //
const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());

// ROUTES //
app.get("/", (req, res) => {
  res.send("Welcome to Code or Not Code App");
});

// EXPORT //
module.exports = app;
