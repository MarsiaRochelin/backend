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

const newProject = async (project) => {
  try {
    const newProject = await db.one(
      "INSERT INTO projects (project_name, project_description, technology_utilized, start_date, due_date , email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        project.project_name,
        project.project_description,
        project.technology_utilized,
        project.start_date,
        project.due_date,
        project.email,
      ]
    );
    return newProject;
  } catch (error) {
    return error;
  }
};

const deleteProject = async (id) => {
  try {
    const deletedProject = await db.one(
      "DELETE FROM projects WHERE id=$1 RETURNING *",
      id
    );
    return deletedProject;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProjects,
  getSingleProject,
  newProject,
  deleteProject,
};
