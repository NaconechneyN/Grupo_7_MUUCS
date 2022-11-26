-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3025
-- Tiempo de generación: 26-11-2022 a las 02:07:46
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idCursos` varchar(36) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` double NOT NULL,
  `duracion` varchar(45) NOT NULL,
  `certificacion` varchar(10) NOT NULL,
  `valoracion` double DEFAULT NULL,
  `actualizacion` date NOT NULL,
  `idCategorias` int(11) NOT NULL,
  `idtipoDeEnsenianza` int(11) NOT NULL,
  `idUsuarios` char(36) NOT NULL,
  `imagen` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`idCursos`, `titulo`, `descripcion`, `precio`, `duracion`, `certificacion`, `valoracion`, `actualizacion`, `idCategorias`, `idtipoDeEnsenianza`, `idUsuarios`, `imagen`) VALUES
('1912f00b-2f81-40cb-8bca-24f9d7968d1b', 'Escuela de Inteligencia Emocional', 'Porque la intensidad de la vida se mide en emociones', 0, '2 semanas', 'No Oficial', NULL, '2021-10-09', 4, 3, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067137486_img.jpg'),
('3429c5cb-4a42-4ec0-a76d-5dc32a5888b1', 'Invierte en la Bolsa Mexicana y de USA', 'Metodo simple y efectivo para invertir en la Bolsa Mexicana y de USA desde México sin tener experiencia', 399, '2 meses', 'No Oficial', NULL, '2022-10-09', 3, 5, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067082958_img.jpg'),
('5c323c88-fc2f-4653-b944-48d40b68db82', 'Aprende a ser Community Manager', 'Aprende a gestionar correctamente comunidades en entornos digitales', 11888, '1 año', 'Oficial', NULL, '2022-07-20', 5, 2, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067171390_img.png'),
('707e747c-6d0e-11ed-9e62-d8cb8a3abc27', 'Cómo provocar cambios positivos en la organiz', 'Formas efectivas para iniciar y facilitar el cambio, la mejora continua y la excelencia organizacional', 5999, '4 meses', 'No Oficial', NULL, '2022-11-09', 2, 1, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667066944438_img.jpg'),
('a28c4963-b031-4c08-b6ed-0ffca5863212', 'Cómo Diseñar Logos', '¡Aprende todos los secretos del diseño de un logo!', 999, '2 meses', 'No Oficial', NULL, '2022-02-09', 6, 4, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067323271_img.jpg'),
('e8d1e07f-6d0a-11ed-9e62-d8cb8a3abc27', 'Aprende Javascript, HTML5 y CSS3', 'Aprende los principales lenguajes que dominan internet: JavaScript, HTML5 y CSS3', 9999, '8 meses', 'Oficial', NULL, '2022-11-01', 1, 3, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667063313119_img.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCursos`),
  ADD KEY `fk_Cursos_Categorias1_idx` (`idCategorias`),
  ADD KEY `fk_Cursos_tipoDeEnsenianza1_idx` (`idtipoDeEnsenianza`),
  ADD KEY `fk_Cursos_Usuarios1_idx` (`idUsuarios`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `fk_Cursos_Categorias1` FOREIGN KEY (`idCategorias`) REFERENCES `categorias` (`idCategorias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_Usuarios1` FOREIGN KEY (`idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_tipoDeEnsenianza1` FOREIGN KEY (`idtipoDeEnsenianza`) REFERENCES `tipodeensenianza` (`idtipoDeEnsenianza`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
