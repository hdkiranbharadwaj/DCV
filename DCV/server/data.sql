-- To create database
CREATE DATABASE DCV;

-- To use
USE DCV;

-- To create the users table 
CREATE OR REPLACE FUNCTION generate_unique_userid()
RETURNS TRIGGER AS $$
BEGIN
    NEW.userid := LEFT(MD5(random()::text), 5);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userid CHAR(5) UNIQUE NOT NULL,
    fname VARCHAR(100),
    lname VARCHAR(100),
    phno VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER generate_userid_trigger
BEFORE INSERT ON users
FOR EACH ROW
EXECUTE FUNCTION generate_unique_userid();


-- To create the files table
CREATE TABLE files (
    fileid INT SERIAL PRIMARY KEY,
    userid VARCHAR(10),
    filename VARCHAR(255),
    FOREIGN KEY(userid) REFERENCES users(userid)
);
