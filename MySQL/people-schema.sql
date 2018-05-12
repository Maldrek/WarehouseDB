DROP DATABASE IF EXISTS people_db;
CREATE DATABASE people_db;

USE people_db;

CREATE TABLE people_db (
    box_number INT NOT NULL,
    department VARCHAR(100) NOT NULL,
    contact_name VARCHAR(50) NOT NULL,
    building_location VARCHAR(10) NOT NULL,
    room_number INT NOT NULL,
    PRIMARY KEY (box_number)
);