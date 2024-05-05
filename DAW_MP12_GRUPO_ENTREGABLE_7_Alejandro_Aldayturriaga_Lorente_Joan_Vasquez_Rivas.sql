-- Creamos la base de datos 
CREATE DATABASE IF NOT EXISTS gymproyecto;
USE gymproyecto;

-- Creamos la tabla "usuarios"
CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_completo VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

-- Creamos la tabla "entrenadores"
CREATE TABLE IF NOT EXISTS entrenadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_completo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    especialidad VARCHAR(100)
);

-- Creamos la tabla "equipos_y_maquinas"
CREATE TABLE IF NOT EXISTS equipos_y_maquinas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    estado VARCHAR(50) DEFAULT 'Disponible'
);


CREATE TABLE IF NOT EXISTS eventos_especiales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha DATE
);