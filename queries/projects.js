// CONFIGURATION //
const db = require("../db/dbConfig");

//INDEX
const getAllProjects = async () => {
  try {
    const allProjects = await db.any("SELECT * FROM projects");
    return allProjects;
  } catch (error) {
    return error;
  }
};

//SHOW
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

//CREATE
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

//DELETE
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

//UPDATE
const updateProject = async (id, project) => {
  try {
    const updatedProject = await db.one(
      "UPDATE projects SET project_name=$1, project_description=$2, technology_utilized=$3, start_date=$4, due_date=$5, email=$6 WHERE id=$7 Returning *",
      [
        project.project_name,
        project.project_description,
        project.technology_utilized,
        project.start_date,
        project.due_date,
        project.email,
        id,
      ]
    );
    return updatedProject;
  } catch (error) {
    return error;
  }
};

// EXPORT //
module.exports = {
  getAllProjects,
  getSingleProject,
  newProject,
  deleteProject,
  updateProject,
};
