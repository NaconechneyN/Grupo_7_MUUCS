-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2022 a las 17:02:55
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
-- Estructura de tabla para la tabla `baul`
--

CREATE TABLE `baul` (
  `idBaul` int(11) NOT NULL,
  `Usuarios_idUsuarios` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `idCarrito` int(11) NOT NULL,
  `total` double DEFAULT NULL,
  `Usuarios_idUsuarios` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `idCategorias` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `idCategoriasM` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `certificacion` tinyint(4) NOT NULL,
  `valoracion` double DEFAULT NULL,
  `actualizacion` date NOT NULL,
  `idCategorias` int(11) NOT NULL,
  `idtipoDeEnsenianza` int(11) NOT NULL,
  `idUsuarios` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos_baul`
--

CREATE TABLE `cursos_baul` (
  `Cursos_idCursos` varchar(36) NOT NULL,
  `Baul_idBaul` int(11) NOT NULL,
  `idCursos_Baul` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos_carrito`
--

CREATE TABLE `cursos_carrito` (
  `Cursos_idCursos` varchar(36) NOT NULL,
  `Carrito_idCarrito` int(11) NOT NULL,
  `idCursos_Carrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrados`
--

CREATE TABLE `registrados` (
  `Cursos_idCursos` varchar(36) NOT NULL,
  `Usuarios_idUsuarios` char(36) NOT NULL,
  `idRegistrados` int(11) NOT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodeensenianza`
--

CREATE TABLE `tipodeensenianza` (
  `idtipoDeEnsenianza` int(11) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` varchar(36) NOT NULL,
  `nombreYApellido` varchar(25) NOT NULL,
  `nombreUsuario` varchar(25) DEFAULT NULL,
  `fechaDeNacimiento` date NOT NULL,
  `domicilio` varchar(25) DEFAULT NULL,
  `contraseña` varchar(60) NOT NULL,
  `email` varchar(25) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `tipoDeUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `idVotos` int(11) NOT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `idCursos` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `baul`
--
ALTER TABLE `baul`
  ADD PRIMARY KEY (`idBaul`),
  ADD KEY `fk_Baul_Usuarios1_idx` (`Usuarios_idUsuarios`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`idCarrito`),
  ADD KEY `fk_Carrito_Usuarios1_idx` (`Usuarios_idUsuarios`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idCategorias`),
  ADD KEY `fk_Categorias_Categorias_idx` (`idCategoriasM`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCursos`),
  ADD KEY `fk_Cursos_Categorias1_idx` (`idCategorias`),
  ADD KEY `fk_Cursos_tipoDeEnsenianza1_idx` (`idtipoDeEnsenianza`),
  ADD KEY `fk_Cursos_Usuarios1_idx` (`idUsuarios`);

--
-- Indices de la tabla `cursos_baul`
--
ALTER TABLE `cursos_baul`
  ADD PRIMARY KEY (`idCursos_Baul`),
  ADD KEY `fk_Cursos_has_Baul_Baul1_idx` (`Baul_idBaul`),
  ADD KEY `fk_Cursos_has_Baul_Cursos1_idx` (`Cursos_idCursos`);

--
-- Indices de la tabla `cursos_carrito`
--
ALTER TABLE `cursos_carrito`
  ADD PRIMARY KEY (`idCursos_Carrito`),
  ADD KEY `fk_Cursos_has_Carrito_Carrito1_idx` (`Carrito_idCarrito`),
  ADD KEY `fk_Cursos_has_Carrito_Cursos1_idx` (`Cursos_idCursos`);

--
-- Indices de la tabla `registrados`
--
ALTER TABLE `registrados`
  ADD PRIMARY KEY (`idRegistrados`),
  ADD KEY `fk_Cursos_has_Usuarios_Usuarios1_idx` (`Usuarios_idUsuarios`),
  ADD KEY `fk_Cursos_has_Usuarios_Cursos1_idx` (`Cursos_idCursos`);

--
-- Indices de la tabla `tipodeensenianza`
--
ALTER TABLE `tipodeensenianza`
  ADD PRIMARY KEY (`idtipoDeEnsenianza`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`);

--
-- Indices de la tabla `votos`
--
ALTER TABLE `votos`
  ADD PRIMARY KEY (`idVotos`),
  ADD KEY `fk_Votos_Cursos1_idx` (`idCursos`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `baul`
--
ALTER TABLE `baul`
  ADD CONSTRAINT `fk_Baul_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_Carrito_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `fk_Categorias_Categorias` FOREIGN KEY (`idCategoriasM`) REFERENCES `categorias` (`idCategorias`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `fk_Cursos_Categorias1` FOREIGN KEY (`idCategorias`) REFERENCES `categorias` (`idCategorias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_Usuarios1` FOREIGN KEY (`idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_tipoDeEnsenianza1` FOREIGN KEY (`idtipoDeEnsenianza`) REFERENCES `tipodeensenianza` (`idtipoDeEnsenianza`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cursos_baul`
--
ALTER TABLE `cursos_baul`
  ADD CONSTRAINT `fk_Cursos_has_Baul_Baul1` FOREIGN KEY (`Baul_idBaul`) REFERENCES `baul` (`idBaul`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_has_Baul_Cursos1` FOREIGN KEY (`Cursos_idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cursos_carrito`
--
ALTER TABLE `cursos_carrito`
  ADD CONSTRAINT `fk_Cursos_has_Carrito_Carrito1` FOREIGN KEY (`Carrito_idCarrito`) REFERENCES `carrito` (`idCarrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_has_Carrito_Cursos1` FOREIGN KEY (`Cursos_idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `registrados`
--
ALTER TABLE `registrados`
  ADD CONSTRAINT `fk_Cursos_has_Usuarios_Cursos1` FOREIGN KEY (`Cursos_idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Cursos_has_Usuarios_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `votos`
--
ALTER TABLE `votos`
  ADD CONSTRAINT `fk_Votos_Cursos1` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
