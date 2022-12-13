-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3025
-- Tiempo de generación: 06-12-2022 a las 23:16:30
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
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;

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
  `nombre` varchar(30) NOT NULL,
  `idCategoriasM` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`idCategorias`, `nombre`, `idCategoriasM`) VALUES
(1, 'Desarrollo', NULL),
(2, 'Negocios', NULL),
(3, 'Finanzas y Contabilidad', NULL),
(4, 'Desarrollo personal', NULL),
(5, 'Marketing', NULL),
(6, 'Diseño', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idCursos` varchar(36) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `descripcionQueAprenderas` varchar(500) NOT NULL,
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

INSERT INTO `cursos` (`idCursos`, `titulo`, `descripcion`, `descripcionQueAprenderas`, `precio`, `duracion`, `certificacion`, `valoracion`, `actualizacion`, `idCategorias`, `idtipoDeEnsenianza`, `idUsuarios`, `imagen`) VALUES
('1912f00b-2f81-40cb-8bca-24f9d7968d1b', 'Escuela de Inteligencia Emocional', 'Porque la intensidad de la vida se mide en emociones', 'Adquirir conocimientos en torno a la inteligencia emocional y las competencias que la componen.\r\nDesarrollar las habilidades necesarias para una vida emocional sana e inteligente.\r\nTrabajar las actitudes que llevan a las personas a la excelencia emocional.', 0, '2 semanas', 'No Oficial', NULL, '2021-10-09', 4, 3, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067137486_img.jpg'),
('3429c5cb-4a42-4ec0-a76d-5dc32a5888b1', 'Invierte en la Bolsa Mexicana y de USA', 'Metodo simple y efectivo para invertir en la Bolsa Mexicana y de USA desde México sin tener experiencia', 'Utilizar las herramientas prácticas para empezar a invertir inmediatamente después de terminar este curso.\r\nInvertir en la Bolsa Mexicana de Valores y Acciones de USA desde México sin necesidad de tener experiencia previa en inversiones o conocimientos de finanzas.\r\nEntender por qué existe la Bolsa, de dónde salen las ganancias y el correcto pago de impuestos de los ingresos que se generen.\r\nAbrir una cuenta en una casa de Bolsa, sabrán como depositar y retirar dinero de esta cuenta, cómo maneja', 399, '2 meses', 'No Oficial', NULL, '2022-10-09', 3, 5, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067082958_img.jpg'),
('5c323c88-fc2f-4653-b944-48d40b68db82', 'Aprende a ser Community Manager', 'Aprende a gestionar correctamente comunidades en entornos digitales', 'Conocer las mejores prácticas en el desempeño de las tareas de Community Management\r\nDominar las principales herramientas para publicar y programar contenido en las redes sociales\r\nConocer las principales aplicaciones para la gestión de comunidades en los canales sociales\r\nIntegrar las diferentes herramientas con los diversos canales sociales', 11888, '1 año', 'Oficial', NULL, '2022-07-20', 5, 2, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067171390_img.png'),
('707e747c-6d0e-11ed-9e62-d8cb8a3abc27', 'Cómo provocar cambios positivos en la organiz', 'Formas efectivas para iniciar y facilitar el cambio, la mejora continua y la excelencia organizacional', 'Identificar y desarrollar las cualidades necesarias para iniciar exitósamente un cambio\r\nReconocer dentro de nuestra organización las situaciones que nos indican la necesidad de efectuar cambios\r\nDescubrir y Aplicar el proceso de un cambio planeado, efectivo y exitoso\r\nAprender las diferentes reacciones al cambio, y Cómo minimizar la resistencia al cambio\r\nEstablecer una guía para la mejora continua, la innovación y el crecimiento', 5999, '4 meses', 'No Oficial', NULL, '2022-11-09', 2, 1, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667066944438_img.jpg'),
('a28c4963-b031-4c08-b6ed-0ffca5863212', 'Cómo Diseñar Logos', '¡Aprende todos los secretos del diseño de un logo!', 'Aprenderás a conceptualizar, crear y diseñar logos correctamente.\r\nConocer los principios básicos del diseño.\r\nAprenderás las técnicas para el diseño de logotipos.\r\nEntrevistar y comprender las necesidades del cliente.\r\nAprenderás a explotar tu potencial creativo.', 999, '2 meses', 'No Oficial', NULL, '2022-02-09', 6, 4, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667067323271_img.jpg'),
('e8d1e07f-6d0a-11ed-9e62-d8cb8a3abc27', 'Aprende Javascript, HTML5 y CSS3', 'Aprende los principales lenguajes que dominan internet: JavaScript, HTML5 y CSS3', 'Crear variables de tipo cadena, numérico y booleanos.\r\nCrear estructuras condicionales y ciclos como for, while o do... while\r\nModificarar las cadenas y subcadenas, así como leerá los caracteres de una subcadena, así como crear funciones propias.\r\nCrear, poblar y recorrer objetos y arreglos, así com', 9999, '8 meses', 'Oficial', NULL, '2022-11-01', 1, 3, '1b516343-6cf4-11ed-9e62-d8cb8a3abc27', '1667063313119_img.jpg');

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

--
-- Volcado de datos para la tabla `tipodeensenianza`
--

INSERT INTO `tipodeensenianza` (`idtipoDeEnsenianza`, `nombre`, `descripcion`) VALUES
(1, 'APRENDIZAJE COOPERATIVO', 'Método en el cual los educadores agrupan a los alumnos para realizar sus tareas con éxito e impactar en los estudiantes de forma positiva, asegurando la atención y mejorando el aprendizaje, ya que cad'),
(2, 'CLASES O AULA INVERTIDA', 'Método en el cual los educadores agrupan a los alumnos para realizar sus tareas con éxito e impactar en los estudiantes de forma positiva, asegurando la atención y mejorando el aprendizaje, ya que cad'),
(3, 'APRENDIZAJE BASADO EN EL ', 'El objetivo de este método consiste en otorgar herramientas para contextualizar, relacionar, analizar, entender, argumentar, convertir información en conocimiento y desarrollar el pensamiento, más all'),
(4, 'PENSAMIENTO DE DISEÑO', 'Este método consiste en identificar con mayor exactitud los problemas individuales de los alumnos, generando ideas, resolviendo problemas creativamente y ampliar horizontes para las soluciones.'),
(5, 'GAMIFICACIÓN', 'Consiste en la integración mecánica y dinámica de juegos y videojuegos en entornos no lúdicos, para potenciar la motivación, concentración, esfuerzos y valores positivos. El uso exponencial de los vid');

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
  `password` varchar(60) NOT NULL,
  `email` varchar(25) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `tipoDeUsuario` int(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `nombreYApellido`, `nombreUsuario`, `fechaDeNacimiento`, `domicilio`, `password`, `email`, `imagen`, `descripcion`, `tipoDeUsuario`) VALUES
('1b516343-6cf4-11ed-9e62-d8cb8a3abc27', 'Maria Luisa Fernandez', 'mFernandez', '2022-10-11', 'Llerena 2808', '$2a$10$uKB33bt44lwmcmLqxnPp0.F27.HNnOI9rMiNhSHQp8C6VX6SRqd.O', 'lucioabalos97@gmail.com', '1648466246950_img.jpg', NULL, 1),
('234f3d06-b986-491c-90ab-0f1b294b01ef', 'Lucio Abalos', NULL, '2022-11-09', NULL, '$2a$10$UwadwM03D4Kb2QeL3BjODOiNPQQu5Rqo4tA2/iYi1gsMa6GHmhG5K', 'hola@gmail.com', '1669586750393_img.png', NULL, NULL);

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
