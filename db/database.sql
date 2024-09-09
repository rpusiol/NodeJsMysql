CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

CREATE table employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(6) DEFAULT NULL,
  PRIMARY KEY (id)
);

SHOW TABLES;

DESCRIBE employee;

INSERT INTO employee values 
( 1, 'Roberto', 1500),
( 2, 'Jose', 1200),
( 3, 'Raul', 1600),
( 4, 'Francisco', 1560);

