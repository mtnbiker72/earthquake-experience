DROP DATABASE IF EXISTS earthquake_db;
-- delete line 1 when we are ready to push this to production

CREATE DATABASE earthquake_db;

USE earthquake_db;

CREATE TABLE earthquake (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    place VARCHAR(100) NOT NULL
);

CREATE TABLE stories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    earthquake_id INT,
    story TEXT NOT NULL,
    FOREIGN KEY (earthquake_id)
    REFERENCES earthquake(id)
    ON DELETE SET NULL,
    -- may have to set up another foreign key to reference a user database, so we can attach stories to the users that post them
);
