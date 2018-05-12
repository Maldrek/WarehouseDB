DROP DATABASE IF EXISTS people_db;
CREATE DATABASE people_db;

USE people_db;

CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT,
    box_number INT NOT NULL,
    contact_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);