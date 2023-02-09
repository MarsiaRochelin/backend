const db = require("../db/dbConfig");

const getAllProjects = async () => {
  try {
    const allProjects = await db.any("SELECT * FROM projects");
    return allProjects;
  } catch (error) {
    return error;
  }
};

const getSingleProject = async (id) => {
  try {
    const singleProject = await db.one(
      "SELECT * FROM projects WHERE id=$1",
      id
    );
    return singleProject;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProjects,
  getSingleProject,
};
