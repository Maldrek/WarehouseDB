DROP DATABASE IF EXISTS buildings_db;
CREATE DATABASE buildings_db;

USE buildings_db;

CREATE TABLE buildings (
    id INT NOT NULL AUTO_INCREMENT,
    building_name VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);