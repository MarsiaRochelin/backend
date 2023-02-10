// MIDDLEWEAR //
const checkProjectName = (req, res, next) => {
  if (req.body.project_name) {
    next();
  } else {
    res.status(400).json({ error: "A project name is required" });
  }
};

// EXPORT //
module.exports = { checkProjectName };
