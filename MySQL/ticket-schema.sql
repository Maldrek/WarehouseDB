DROP DATABASE IF EXISTS ticket_db;
CREATE DATABASE ticket_db;

USE ticket_db;

CREATE TABLE ticket (
    incident_id INT NOT NULL auto_increment,
    title VARCHAR(200) NOT NULL,
    created DATETIME NOT NULL,
    due_date DATE NOT NULL,
    summary TEXT NOT NULL,
    requestor VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    active BOOLEAN DEFAULT false,
    completed BOOLEAN DEFAULT false,
    closed BOOLEAN DEFAULT false,
    image_pathway TEXT,
    PRIMARY KEY (incident_id);
);