DROP DATABASE IF EXISTS location_db;
CREATE DATABASE location_db;

USE location_db;

CREATE TABLE locations (
    id INT NOT NULL AUTO_INCREMENT,
    box_number INT NOT NULL,
    building_location VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);