DROP DATABASE IF EXISTS restaurant_db;

CREATE DATABASE reservation_db;

USE reservation_db;

CREATE TABLE reservation_db (
id INT NOT NULL auto_increment,
res_id INT(30) NOT NULL,
res_name VARCHAR (30) NOT NULL,
res_phone INT (30) NOT NULL,
res_email VARCHAR (30) NOT NULL
);

