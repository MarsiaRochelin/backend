DROP DATABASE IF EXISTS projects_dev;
CREATE DATABASE projects_dev;

\c projects_dev

CREATE TABLE projects (
    id SERIAL PRIMARY KEY, 
    project_name VarChar(50), 
    project_description TEXT, 
    start_date DATE, 
    due_date DATE, 
    email VarChar(50)
    );

