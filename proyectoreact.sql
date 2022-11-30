-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2022 a las 19:29:44
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoreact`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Programación 2022', 'Java y Python son los lenguajes de programación más demandados en el mercado laboral', 'Java, Python y SQL lideran la lista de lenguajes de programación más demandados en el mundo laboral, según un informe publicado este mes por la empresa de desarrollo HackerRank. La demanda de otros lenguajes, como Go y TypeScript, también está creciendo, pero va muy a la zaga.\r\n\r\nLos cinco primeros lenguajes por volumen fueron Java, Python, SQL, C++ y JavaScript. Muy por detrás de estos lenguajes, pero clasificados del sexto al décimo lugar respectivamente, se encontraban Bash, C#, Go, TypeScript y R. Entre los líderes, la demanda de TypeScript y Go fue la que más creció en 2022, al igual que la de PHP. Las evaluaciones de Go aumentaron un 301% en 2022, mientras que las de TypeScript aumentaron un 392%. La demanda de Swift y Ruby se desplomó, según la compañía. El volumen de evaluaciones de Swift fue solo el 80% del volumen en 2021, mientras que el volumen de evaluaciones de Ruby fue el 66% de lo que fue en 2021.', 'rldlplgge6y7uuclvjmr'),
(2, 'Curso', 'Un curso para comenzar a dar los primeros pasos en el mundo de la programación sin temores', 'Entre las propuestas formativas del plan “Argentina Programa” se destaca el curso online “Introducción a la programación”, que, con 60 horas de duración y organizado en cinco módulos que pueden cursarse según los tiempos, las necesidades y expectativas de cada persona, permite la incorporación progresiva de las temáticas relacionadas con los fundamentos de la programación, para pasar luego al diseño de un desarrollo web que pueda ejecutarse en Chorme o en cualquier otro navegador.', 'm3t6oqc4gu8d07buzinm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Root', 'fa03eb688ad8aa1db593d33dabd89bad'),
(2, 'Cristian', '1f6edc5c1681e87e6fa8b912c94183cc');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
