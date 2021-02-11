CREATE DATABASE nutribd;

CREATE TABLE `nutribd`.`grupoalimenticio` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(200) NULL,
  `calorias` VARCHAR(45) NULL,
  `hdc` VARCHAR(45) NULL,
  `lipidos` VARCHAR(45) NULL,
  `proteinas` VARCHAR(45) NULL,
  `imagen_url` VARCHAR(45) NULL,
  `fecha_creacion` VARCHAR(45) NULL,
  `estado` TINYINT NULL,
  PRIMARY KEY (`id`));
  
DESCRIBE grupoalimenticio;