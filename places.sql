-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 25 Janvier 2017 à 16:17
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `proj`
--

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

CREATE TABLE `places` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `placeid` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `places`
--

INSERT INTO `places` (`id`, `name`, `placeid`) VALUES
(1, 'Machu Picchu', 'ChIJVVVViV-abZERJxqgpA43EDo'),
(2, 'Structure de Richat', 'ChIJXadvgRAfgQ4RbUhPstpEk60'),
(3, 'Trolltunga', 'ChIJUSFzG3uZPkYR2I4m3L-SfJs'),
(4, 'Kjeragbolten', 'ChIJXVCyer92OUYRwrtashIqbZc'),
(5, 'Preikestolen', 'ChIJqTEYChzVO0YRTLup34Q0MF0');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
