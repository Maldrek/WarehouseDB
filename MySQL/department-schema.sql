DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    box_number INT NOT NULL,
    department VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);