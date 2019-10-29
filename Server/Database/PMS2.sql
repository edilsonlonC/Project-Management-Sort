
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2019 a las 19:55:18
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pms2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id_actividades` int(11) NOT NULL,
  `nombre_actividad` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `responsable` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `Proyecto_id_proyecto` int(11) DEFAULT NULL,
  `Tipo_estado_id_estado` int(11) DEFAULT NULL,
  `Prioridad_id_prioridad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id_actividades`, `nombre_actividad`, `descripcion`, `responsable`, `fecha`, `Proyecto_id_proyecto`, `Tipo_estado_id_estado`, `Prioridad_id_prioridad`) VALUES
(6, 'actividad 99', 'actividad n-99', 'Cristian Patiño', '2019-10-01', 1, 3, 3),
(7, 'Actividad 98', 'Descripción  Actividad n98', 'Cristian Patiño', '2019-10-03', 1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcionalidades`
--

CREATE TABLE `funcionalidades` (
  `id_funcionalidad` int(11) NOT NULL,
  `nombre_funcionalidad` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `responsable` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `Proyecto_id_proyecto` int(11) DEFAULT NULL,
  `Tipo_estado_id_estado` int(11) DEFAULT NULL,
  `Prioridad_id_prioridad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `funcionalidades`
--

INSERT INTO `funcionalidades` (`id_funcionalidad`, `nombre_funcionalidad`, `descripcion`, `responsable`, `fecha`, `Proyecto_id_proyecto`, `Tipo_estado_id_estado`, `Prioridad_id_prioridad`) VALUES
(3, 'funcionalidad 99', 'funcionalidad n-99', 'Cristian Patiño', '2019-10-01', 1, 1, 1),
(4, 'Funcionalidad 98', 'Descripción f 98', 'Cristian Patiño', '2019-10-03', 5, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prioridad`
--

CREATE TABLE `prioridad` (
  `id_prioridad` int(11) NOT NULL,
  `Nombre_prioridad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prioridad`
--

INSERT INTO `prioridad` (`id_prioridad`, `Nombre_prioridad`) VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id_proyecto` int(11) NOT NULL,
  `Nombre_Proyecto` varchar(45) DEFAULT NULL,
  `Tipo_Proyecto_id_Tipo` int(11) DEFAULT NULL,
  `Usuarios_id_usuarios` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id_proyecto`, `Nombre_Proyecto`, `Tipo_Proyecto_id_Tipo`, `Usuarios_id_usuarios`, `fecha`) VALUES
(1, 'proyecto 1', 2, 1, '2019-10-01'),
(4, 'proyecto 2', 1, 2, '2019-10-01'),
(5, 'proyecto 3', 1, 2, '2019-10-01'),
(7, 'proyecto 6', 1, 2, '2019-10-01'),
(10, 'Proyecto 4', 2, 2, '2019-10-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id_recursos` int(11) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Responsable` varchar(45) DEFAULT NULL,
  `Tipo_estado_id_estado` int(11) DEFAULT NULL,
  `Prioridad_id_prioridad` int(11) DEFAULT NULL,
  `Proyecto_id_proyecto` int(11) DEFAULT NULL,
  `nombre_recurso` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id_recursos`, `Descripcion`, `Responsable`, `Tipo_estado_id_estado`, `Prioridad_id_prioridad`, `Proyecto_id_proyecto`, `nombre_recurso`, `fecha`) VALUES
(8, 'recurso 99', 'Cristian Patiño', 1, 1, 1, 'recurso 99', '2019-10-01'),
(9, 'Descripción Recurso 98', 'Cristian Patiño', 4, 3, 4, 'Recurso 98', '2019-10-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_usuario`
--

CREATE TABLE `rol_usuario` (
  `id_Rol_Usuario` int(11) NOT NULL,
  `tipo_Rol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol_usuario`
--

INSERT INTO `rol_usuario` (`id_Rol_Usuario`, `tipo_Rol`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'USUARIO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tareas` int(11) NOT NULL,
  `nombre_tarea` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `responsable` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `Proyecto_id_proyecto` int(11) DEFAULT NULL,
  `Tipo_estado_id_estado` int(11) DEFAULT NULL,
  `Prioridad_id_prioridad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tareas`, `nombre_tarea`, `descripcion`, `responsable`, `fecha`, `Proyecto_id_proyecto`, `Tipo_estado_id_estado`, `Prioridad_id_prioridad`) VALUES
(2, 'tarea 99', 'tarea 99', 'Cristian Patiño', '2019-10-01', 1, 1, 1),
(3, 'Tarea 98', 'Descripción 98', 'Cristian Patiño', '2019-10-03', 5, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_estado`
--

CREATE TABLE `tipo_estado` (
  `id_estado` int(11) NOT NULL,
  `valor_estado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_estado`
--

INSERT INTO `tipo_estado` (`id_estado`, `valor_estado`) VALUES
(1, 'Pendiente'),
(2, 'En progreso'),
(3, 'Retrasado'),
(4, 'Terminado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_proyecto`
--

CREATE TABLE `tipo_proyecto` (
  `id_Tipo` int(11) NOT NULL,
  `Clase_tipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_proyecto`
--

INSERT INTO `tipo_proyecto` (`id_Tipo`, `Clase_tipo`) VALUES
(1, 'Puntos de Caso de Usos'),
(2, 'COCOMO ll');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `Nombre_usuario` varchar(45) DEFAULT NULL,
  `contrasenia` varchar(200) DEFAULT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  `Apellido_usuario` varchar(45) DEFAULT NULL,
  `Rol_Usuario_id_Rol_Usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuarios`, `rol`, `Nombre_usuario`, `contrasenia`, `Correo`, `Apellido_usuario`, `Rol_Usuario_id_Rol_Usuario`) VALUES
(1, NULL, 'Edilson', '$2b$10$Pq4zW/gNOZ.oPk37Vqj2Su5PdDL8qVa5VfgQYSPxCyauUyS1taQJy', 'eddylson.londonio@gmailcom', 'Londoño', 1),
(2, NULL, 'Admin', '$2b$10$mK7/F5fRxmHuJFLkGNpP2udLUGVT9uBHKm.l6VVHkL/6EHqZ.jhGO', 'a@a.co', 'Admin', 1),
(4, NULL, 'Cristian ', '$2b$10$bl5zonQUa6DN7pXH/SfcVORO/PWiAfoVN3sKFBQV.m94b7UduVkQy', 'c@c.co', 'Patiño', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividades`),
  ADD KEY `fk_Actividades_Proyecto1_idx` (`Proyecto_id_proyecto`),
  ADD KEY `fk_Actividades_Tipo_estado1_idx` (`Tipo_estado_id_estado`),
  ADD KEY `fk_Actividades_Prioridad1_idx` (`Prioridad_id_prioridad`);

--
-- Indices de la tabla `funcionalidades`
--
ALTER TABLE `funcionalidades`
  ADD PRIMARY KEY (`id_funcionalidad`),
  ADD KEY `fk_Funcionalidades_Proyecto1_idx` (`Proyecto_id_proyecto`),
  ADD KEY `fk_Funcionalidades_Tipo_estado1_idx` (`Tipo_estado_id_estado`),
  ADD KEY `fk_Funcionalidades_Prioridad1_idx` (`Prioridad_id_prioridad`);

--
-- Indices de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  ADD PRIMARY KEY (`id_prioridad`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `fk_Proyecto_Tipo_Proyecto1_idx` (`Tipo_Proyecto_id_Tipo`),
  ADD KEY `fk_Proyecto_Usuarios1_idx` (`Usuarios_id_usuarios`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id_recursos`),
  ADD KEY `fk_Recursos_Tipo_estado1_idx` (`Tipo_estado_id_estado`),
  ADD KEY `fk_Recursos_Prioridad1_idx` (`Prioridad_id_prioridad`),
  ADD KEY `fk_Recursos_Proyecto1_idx` (`Proyecto_id_proyecto`);

--
-- Indices de la tabla `rol_usuario`
--
ALTER TABLE `rol_usuario`
  ADD PRIMARY KEY (`id_Rol_Usuario`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tareas`),
  ADD KEY `fk_Tareas_Proyecto1_idx` (`Proyecto_id_proyecto`),
  ADD KEY `fk_Tareas_Tipo_estado1_idx` (`Tipo_estado_id_estado`),
  ADD KEY `fk_Tareas_Prioridad1_idx` (`Prioridad_id_prioridad`);

--
-- Indices de la tabla `tipo_estado`
--
ALTER TABLE `tipo_estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `tipo_proyecto`
--
ALTER TABLE `tipo_proyecto`
  ADD PRIMARY KEY (`id_Tipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuarios`),
  ADD KEY `fk_Usuarios_Rol_Usuario_idx` (`Rol_Usuario_id_Rol_Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_actividades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `funcionalidades`
--
ALTER TABLE `funcionalidades`
  MODIFY `id_funcionalidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id_recursos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `rol_usuario`
--
ALTER TABLE `rol_usuario`
  MODIFY `id_Rol_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id_tareas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_estado`
--
ALTER TABLE `tipo_estado`
  MODIFY `id_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `fk_Actividades_Prioridad1` FOREIGN KEY (`Prioridad_id_prioridad`) REFERENCES `prioridad` (`id_prioridad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_Proyecto1` FOREIGN KEY (`Proyecto_id_proyecto`) REFERENCES `proyecto` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_Tipo_estado1` FOREIGN KEY (`Tipo_estado_id_estado`) REFERENCES `tipo_estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `funcionalidades`
--
ALTER TABLE `funcionalidades`
  ADD CONSTRAINT `fk_Funcionalidades_Prioridad1` FOREIGN KEY (`Prioridad_id_prioridad`) REFERENCES `prioridad` (`id_prioridad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Funcionalidades_Proyecto1` FOREIGN KEY (`Proyecto_id_proyecto`) REFERENCES `proyecto` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Funcionalidades_Tipo_estado1` FOREIGN KEY (`Tipo_estado_id_estado`) REFERENCES `tipo_estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_Proyecto_Tipo_Proyecto1` FOREIGN KEY (`Tipo_Proyecto_id_Tipo`) REFERENCES `tipo_proyecto` (`id_Tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Proyecto_Usuarios1` FOREIGN KEY (`Usuarios_id_usuarios`) REFERENCES `usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD CONSTRAINT `fk_Recursos_Prioridad1` FOREIGN KEY (`Prioridad_id_prioridad`) REFERENCES `prioridad` (`id_prioridad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Recursos_Proyecto1` FOREIGN KEY (`Proyecto_id_proyecto`) REFERENCES `proyecto` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Recursos_Tipo_estado1` FOREIGN KEY (`Tipo_estado_id_estado`) REFERENCES `tipo_estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `fk_Tareas_Prioridad1` FOREIGN KEY (`Prioridad_id_prioridad`) REFERENCES `prioridad` (`id_prioridad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tareas_Proyecto1` FOREIGN KEY (`Proyecto_id_proyecto`) REFERENCES `proyecto` (`id_proyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Tareas_Tipo_estado1` FOREIGN KEY (`Tipo_estado_id_estado`) REFERENCES `tipo_estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_Usuarios_Rol_Usuario` FOREIGN KEY (`Rol_Usuario_id_Rol_Usuario`) REFERENCES `rol_usuario` (`id_Rol_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-01 14:40:45
CREATE TABLE Estimacion (

    id_estimacion int(11) NOT NULL AUTO_INCREMENT,
    PM FLOAT , 
    E  FLOAT ,
    TDEV FLOAT,
    F FLOAT,
    proyecto_id_estimacion int(11),
    PRIMARY KEY (id_estimacion),
    FOREIGN KEY (proyecto_id_estimacion) REFERENCES Proyecto(id_proyecto)


)
