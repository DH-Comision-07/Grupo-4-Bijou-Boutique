CREATE DATABASE base_de_datos;

USE base_de_datos;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(95) NOT NULL,
    surname VARCHAR(95) NOT NULL,
    password VARCHAR(95) NOT NULL,
    email VARCHAR(95) NOT NULL
);

