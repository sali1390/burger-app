CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
date TIMESTAMP,
PRIMARY KEY (id)
);