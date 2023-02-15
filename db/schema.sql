DROP DATABASE IF EXISTS projects_dev;
CREATE DATABASE projects_dev;

\c projects_dev

DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY, 
    project_name VARCHAR(50), 
    project_description TEXT, 
    technology_utilized TEXT, 
    start_date NUMERIC, 
    due_date NUMERIC, 
    email VARCHAR(50)
    );


