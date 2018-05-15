DROP DATABASE IF EXISTS ticket_db;
CREATE DATABASE ticket_db;

USE ticket_db;

CREATE TABLE ticket (
    incident_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    company VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    item INT NOT NULL,
    building VARCHAR(4) NOT NULL,
    room_number VARCHAR(4) NOT NULL,
    email VARCHAR(50) NOT NULL,
    descript VARCHAR(255) NOT NULL,
    delivery_option INT NOT NULL,
    due_date DATE NOT NULL,
    initials VARCHAR(3) NOT NULL,
    active BOOLEAN default FALSE,
    completed BOOLEAN default FALSE,
    closed BOOLEAN default FALSE
);