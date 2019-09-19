-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema PMS
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PMS
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PMS` DEFAULT CHARACTER SET utf8 ;
USE `PMS` ;

-- -----------------------------------------------------
-- Table `PMS`.`Rol_Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Rol_Usuario` (
  `id_Rol_Usuario` INT NOT NULL AUTO_INCREMENT,
  `tipo_Rol` VARCHAR(45) NULL,
  PRIMARY KEY (`id_Rol_Usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Tipo_Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Tipo_Proyecto` (
  `id_Tipo` INT NOT NULL,
  `Clase_tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`id_Tipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Tipo_estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Tipo_estado` (
  `id_estado` INT NOT NULL AUTO_INCREMENT,
  `valor_estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Prioridad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Prioridad` (
  `id_prioridad` INT NOT NULL,
  `Nombre_prioridad` VARCHAR(45) NULL,
  PRIMARY KEY (`id_prioridad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Recursos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Recursos` (
  `id_recursos` INT NOT NULL,
  `Nombre_actividad` VARCHAR(45) NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Responsable` VARCHAR(45) NULL,
  `Tipo_estado_id_estado` INT NOT NULL,
  `Prioridad_id_prioridad` INT NOT NULL,
  PRIMARY KEY (`id_recursos`),
  INDEX `fk_Recursos_Tipo_estado1_idx` (`Tipo_estado_id_estado` ASC),
  INDEX `fk_Recursos_Prioridad1_idx` (`Prioridad_id_prioridad` ASC),
  CONSTRAINT `fk_Recursos_Tipo_estado1`
    FOREIGN KEY (`Tipo_estado_id_estado`)
    REFERENCES `PMS`.`Tipo_estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recursos_Prioridad1`
    FOREIGN KEY (`Prioridad_id_prioridad`)
    REFERENCES `PMS`.`Prioridad` (`id_prioridad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Proyecto` (
  `id_proyecto` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Proyecto` VARCHAR(45) NULL,
  `Tipo_Proyecto_id_Tipo` INT NOT NULL,
  `Recursos_id_recursos` INT NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  INDEX `fk_Proyecto_Tipo_Proyecto1_idx` (`Tipo_Proyecto_id_Tipo` ASC),
  INDEX `fk_Proyecto_Recursos1_idx` (`Recursos_id_recursos` ASC),
  CONSTRAINT `fk_Proyecto_Tipo_Proyecto1`
    FOREIGN KEY (`Tipo_Proyecto_id_Tipo`)
    REFERENCES `PMS`.`Tipo_Proyecto` (`id_Tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proyecto_Recursos1`
    FOREIGN KEY (`Recursos_id_recursos`)
    REFERENCES `PMS`.`Recursos` (`id_recursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PMS`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PMS`.`Usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NULL,
  `Nombre_usuario` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NULL,
  `Correo` VARCHAR(45) NULL,
  `Apellido_usuario` VARCHAR(45) NULL,
  `Rol_Usuario_id_Rol_Usuario` INT NOT NULL,
  `Proyecto_id_proyecto` INT NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  INDEX `fk_Usuarios_Rol_Usuario_idx` (`Rol_Usuario_id_Rol_Usuario` ASC),
  INDEX `fk_Usuarios_Proyecto1_idx` (`Proyecto_id_proyecto` ASC),
  CONSTRAINT `fk_Usuarios_Rol_Usuario`
    FOREIGN KEY (`Rol_Usuario_id_Rol_Usuario`)
    REFERENCES `PMS`.`Rol_Usuario` (`id_Rol_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Proyecto1`
    FOREIGN KEY (`Proyecto_id_proyecto`)
    REFERENCES `PMS`.`Proyecto` (`id_proyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
