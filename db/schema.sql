\c postgres
DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

\c employee_tracker_db

CREATE TABLE department (
    department_name VARCHAR(100)
);

CREATE TABLE role ()