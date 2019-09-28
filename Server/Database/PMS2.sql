-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: PMS2
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Prioridad`
--

DROP TABLE IF EXISTS `Prioridad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Prioridad` (
  `id_prioridad` int(11) NOT NULL,
  `Nombre_prioridad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_prioridad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prioridad`
--

LOCK TABLES `Prioridad` WRITE;
/*!40000 ALTER TABLE `Prioridad` DISABLE KEYS */;
/*!40000 ALTER TABLE `Prioridad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proyecto`
--

DROP TABLE IF EXISTS `Proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Proyecto` (
  `id_proyecto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Proyecto` varchar(45) DEFAULT NULL,
  `Tipo_Proyecto_id_Tipo` int(11) DEFAULT NULL,
  `Recursos_id_recursos` int(11) DEFAULT NULL,
  `Usuarios_id_usuarios` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  KEY `fk_Proyecto_Tipo_Proyecto1_idx` (`Tipo_Proyecto_id_Tipo`),
  KEY `fk_Proyecto_Recursos1_idx` (`Recursos_id_recursos`),
  KEY `fk_Proyecto_Usuarios1_idx` (`Usuarios_id_usuarios`),
  CONSTRAINT `fk_Proyecto_Recursos1` FOREIGN KEY (`Recursos_id_recursos`) REFERENCES `Recursos` (`id_recursos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proyecto_Tipo_Proyecto1` FOREIGN KEY (`Tipo_Proyecto_id_Tipo`) REFERENCES `Tipo_Proyecto` (`id_Tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proyecto_Usuarios1` FOREIGN KEY (`Usuarios_id_usuarios`) REFERENCES `Usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proyecto`
--

LOCK TABLES `Proyecto` WRITE;
/*!40000 ALTER TABLE `Proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `Proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Recursos`
--

DROP TABLE IF EXISTS `Recursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Recursos` (
  `id_recursos` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_actividad` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Responsable` varchar(45) DEFAULT NULL,
  `Tipo_estado_id_estado` int(11) DEFAULT NULL,
  `Prioridad_id_prioridad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_recursos`),
  KEY `fk_Recursos_Tipo_estado1_idx` (`Tipo_estado_id_estado`),
  KEY `fk_Recursos_Prioridad1_idx` (`Prioridad_id_prioridad`),
  CONSTRAINT `fk_Recursos_Prioridad1` FOREIGN KEY (`Prioridad_id_prioridad`) REFERENCES `Prioridad` (`id_prioridad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recursos_Tipo_estado1` FOREIGN KEY (`Tipo_estado_id_estado`) REFERENCES `Tipo_estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recursos`
--

LOCK TABLES `Recursos` WRITE;
/*!40000 ALTER TABLE `Recursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Recursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rol_Usuario`
--

DROP TABLE IF EXISTS `Rol_Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Rol_Usuario` (
  `id_Rol_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_Rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_Rol_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rol_Usuario`
--

LOCK TABLES `Rol_Usuario` WRITE;
/*!40000 ALTER TABLE `Rol_Usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `Rol_Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tipo_Proyecto`
--

DROP TABLE IF EXISTS `Tipo_Proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tipo_Proyecto` (
  `id_Tipo` int(11) NOT NULL,
  `Clase_tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_Tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tipo_Proyecto`
--

LOCK TABLES `Tipo_Proyecto` WRITE;
/*!40000 ALTER TABLE `Tipo_Proyecto` DISABLE KEYS */;
INSERT INTO `Tipo_Proyecto` VALUES (1,'Tipo 1');
/*!40000 ALTER TABLE `Tipo_Proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tipo_estado`
--

DROP TABLE IF EXISTS `Tipo_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tipo_estado` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `valor_estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tipo_estado`
--

LOCK TABLES `Tipo_estado` WRITE;
/*!40000 ALTER TABLE `Tipo_estado` DISABLE KEYS */;
/*!40000 ALTER TABLE `Tipo_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) DEFAULT NULL,
  `Nombre_usuario` varchar(45) NOT NULL,
  `contrasenia` varchar(200) DEFAULT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  `Apellido_usuario` varchar(45) DEFAULT NULL,
  `Rol_Usuario_id_Rol_Usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  KEY `fk_Usuarios_Rol_Usuario_idx` (`Rol_Usuario_id_Rol_Usuario`),
  CONSTRAINT `fk_Usuarios_Rol_Usuario` FOREIGN KEY (`Rol_Usuario_id_Rol_Usuario`) REFERENCES `Rol_Usuario` (`id_Rol_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,NULL,'Edilson','$2b$10$2FNQseGCJuz.HIchh8UUIOhFMCxoYb9edcGSXzcdjRPS1WmuO.Ygq','eddylson.londonio@gmail.com','Londoño Castañeda',NULL);
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-28  1:34:33
