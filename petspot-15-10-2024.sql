-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 15-Out-2024 às 04:21
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `petspot`
--
create database petspot;
use petspot;
-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro_pet`
--

DROP TABLE IF EXISTS `cadastro_pet`;
CREATE TABLE IF NOT EXISTS `cadastro_pet` (
  `id_pet` int(11) NOT NULL AUTO_INCREMENT,
  `nome_pet` varchar(100) NOT NULL,
  `id_especie` int(11) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `peso` varchar(20) NOT NULL,
  `imagem` text NOT NULL,
  `data_nascimento` date NOT NULL,
  `castrado` varchar(3) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `raca` text NOT NULL,
  `idade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pet`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_especie` (`id_especie`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadastro_pet`
--

INSERT INTO `cadastro_pet` (`id_pet`, `nome_pet`, `id_especie`, `genero`, `peso`, `imagem`, `data_nascimento`, `castrado`, `id_usuario`, `mensagem`, `raca`, `idade`) VALUES
(114, 'Amora', 1, 'Fêmea', '0-11kg', 'imagens/pets/_1728953138695.png', '2020-02-13', 'Sim', 9, '🐾 Conheça a Amora! 🐾\r\n\r\nEssa linda cachorrinha está à procura de um lar cheio de amor e carinho. Amora é alegre, brincalhona e adora um colo! Com seu olhar doce e seu jeito brincalhão, ela vai conquistar o seu coração. \r\n\r\nSe você está buscando uma companheira leal e cheia de energia, venha conhecer a Amora! Ela promete alegrar seus dias e fazer parte da sua família. Não perca a chance de dar a essa fofura uma nova vida! ❤️🏡\r\n\r\nEntre em contato e venha se apaixonar!             ', '', NULL),
(115, 'Billie', 2, 'Macho', '0-11kg', 'imagens/pets/_1728953335131.png', '2018-01-30', 'Não', 9, '🐾 **Conheça a Billie!** 🐾\r\n\r\nEssa fofura de pelagem macia é a Billie, uma gata adorável em busca de um lar amoroso! Com seu olhar cativante e personalidade brincalhona, ela promete alegrar seus dias. Billie adora brincar com bolinhas e receber carinho. \r\n\r\nSe você está procurando uma companheira leal e cheia de amor para dar, venha conhecer a Billie! Ela está pronta para encontrar uma família que a acolha e a faça feliz. 🏡❤️', '', NULL),
(116, 'Charlie', 3, 'Macho', '0-11kg', 'imagens/pets/_1728953725529.png', '2021-07-22', 'Não', 9, '🌟 Conheça o Charlie! 🐰\r\n\r\nEste adorável coelhinho está em busca de um lar cheio de amor e carinho. Charlie é brincalhão, curioso e adora explorar seu ambiente. Ele também ama receber carinho e é super sociável. Se você está procurando um companheiro peludo para alegrar seus dias, o Charlie é a escolha perfeita!\r\n\r\nAdote o Charlie e traga alegria e fofura para a sua vida! 🏡💖               ', '', NULL),
(117, 'Duda', 9, 'Fêmea', '0-11kg', 'imagens/pets/_1728953956693.png', '2022-08-24', 'Não', 9, '🌟 **Adoção Especial: Papagaio Duda** 🌟\r\n\r\nConheça a Duda, uma adorável papagaio cheia de personalidade! Com penas coloridas e um canto alegre, ela traz alegria a qualquer ambiente. Duda é sociável, curiosa e adora interagir com pessoas. Ideal para quem busca um companheiro alegre e divertido!\r\n\r\nSe você está pronto para oferecer amor e um lar seguro, venha conhecer a Duda! Ela promete encher seus dias de sorrisos e muito papo. 🦜❤️\r\n\r\nEntre em contato e dê uma chance para esse amor de ave!                    ', '', NULL),
(118, 'Edu e Dudu', 10, 'Macho', '0-11kg', 'imagens/pets/_1728954079132.png', '2024-03-08', 'Sim', 9, ' 🌟 **Conheça Edu e Dudu!** 🌟\r\n\r\nEstes adoráveis hamsters estão em busca de um lar cheio de amor! 🐹💕\r\n\r\n✨ **Edu** é o mais curioso, sempre explorando seu espaço e fazendo novas amizades. Ele adora correr na roda e é super brincalhão!\r\n\r\n✨ **Dudu** é um pouquinho mais tímido, mas assim que se sente confortável, é puro charme! Ele ama momentos tranquilos e adora ser mimado com petiscos.\r\n\r\nJuntos, eles trazem alegria e diversão! Se você está pronto para abrir seu coração e sua casa para esses dois gatinhos peludos, entre em contato! 🏠❤️\r\n\r\nNão perca a chance de ter Edu e Dudu como parte da sua família!                   ', '', NULL),
(119, 'Flor', 1, 'Fêmea', '0-11kg', 'imagens/pets/_1728954201252.png', '2023-03-23', 'Sim', 9, '🌸 **Adote a Flor!** 🌸\r\n\r\nConheça a Flor, uma adorável cachorrinha que está em busca de um lar cheio de amor! Ela é cheia de energia, brincalhona e adora correr atrás de bolinhas. Com seu olhar meigo e seu jeito carinhoso, a Flor vai conquistar seu coração em um instante!\r\n\r\nSe você está procurando uma companheira leal para alegrar seus dias, a Flor é a escolha perfeita. Ela merece uma família que a trate com carinho e a leve para passear. Vamos dar uma nova chance à Flor? Entre em contato e venha conhecê-la! 🐾❤️                   ', '', NULL),
(120, 'Garold', 2, 'Macho', '0-11kg', 'imagens/pets/_1728954312283.png', '2024-07-12', 'Sim', 9, '🐾 Conheça o Garold! 🐾\r\n\r\nEste adorável felino de olhos brilhantes e pelagem macia está à procura de um lar amoroso. Garold é um gato carinhoso e brincalhão, que adora um bom colo e momentos de carinho. Ele é curioso e sempre pronto para explorar novos lugares, trazendo alegria e diversão para o seu dia a dia.\r\n\r\nSe você está buscando um companheiro leal e cheio de personalidade, o Garold é a escolha perfeita! Venha conhecê-lo e deixe-se encantar por esse gatinho especial. 💖\r\n\r\nEntre em contato e dê ao Garold a chance de ser parte da sua família! 🏡✨                    ', '', NULL),
(121, 'Hallo', 3, 'Fêmea', '0-11kg', 'imagens/pets/_1728954467251.png', '2024-09-12', 'Sim', 9, '**Adoção do Coelhinho Hallo! 🐰❤️**\r\n\r\nOlá, sou o Hallo, um coelhinho fofo e cheio de energia! Com meu pelo macio e orelhas longas, estou à procura de um lar cheio de amor e carinho. Adoro brincar, explorar e receber carinho. Se você está procurando um companheiro leal e divertido, eu sou o coelhinho perfeito para você! Venha me conhecer e me leve para casa. Juntos, podemos criar memórias incríveis! 🏡✨\r\n\r\nEntre em contato para saber mais sobre mim!                    ', '', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `chat`
--

DROP TABLE IF EXISTS `chat`;
CREATE TABLE IF NOT EXISTS `chat` (
  `id_mensagem` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `mensagem` varchar(200) NOT NULL,
  `data_mensagem` datetime DEFAULT NULL,
  `imagem` text NOT NULL,
  `sala` text,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_mensagem`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `chat`
--

INSERT INTO `chat` (`id_mensagem`, `id_usuario`, `mensagem`, `data_mensagem`, `imagem`, `sala`, `nome`) VALUES
(66, 7, 'Ola', NULL, 'imagem/1728342115734.png', 'Teste', 'Fabio'),
(67, 1, 'oi', NULL, 'imagens/1728341950748.png', 'Teste', 'Thamiris');

-- --------------------------------------------------------

--
-- Estrutura da tabela `especies`
--

DROP TABLE IF EXISTS `especies`;
CREATE TABLE IF NOT EXISTS `especies` (
  `id_especie` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_especie` varchar(20) NOT NULL,
  PRIMARY KEY (`id_especie`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `especies`
--

INSERT INTO `especies` (`id_especie`, `tipo_especie`) VALUES
(1, 'Cachorros'),
(2, 'Gatos'),
(3, 'Coelhos'),
(9, 'Aves'),
(10, 'Hamsters');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lista_pet`
--

DROP TABLE IF EXISTS `lista_pet`;
CREATE TABLE IF NOT EXISTS `lista_pet` (
  `id_lista` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_pet` int(11) NOT NULL,
  `id_especie` int(11) NOT NULL,
  `data_hora` datetime NOT NULL,
  PRIMARY KEY (`id_lista`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_pet` (`id_pet`),
  KEY `id_especie` (`id_especie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_online`
--

DROP TABLE IF EXISTS `user_online`;
CREATE TABLE IF NOT EXISTS `user_online` (
  `nome` varchar(100) DEFAULT NULL,
  `id_usuario` text,
  `imagem` text,
  `sessao` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user_online`
--

INSERT INTO `user_online` (`nome`, `id_usuario`, `imagem`, `sessao`) VALUES
('Teste', '-TVZSJ4C16NaMWL2AAAv', 'imagens/user.svg', '-TVZSJ4C16NaMWL2AAAv'),
('Teste', 'dPoQXVcYCYmO6xWYAAAB', 'imagens/user.svg', 'dPoQXVcYCYmO6xWYAAAB'),
('Teste', 'S4BmUVBQ-0FI9A-NAAAC', 'imagens/user.svg', 'S4BmUVBQ-0FI9A-NAAAC'),
('Teste', '_73i1gZHYDgu5YwiAAAD', 'imagens/user.svg', '_73i1gZHYDgu5YwiAAAD'),
('Teste', 'wwduCMZblgHmBe-pAAAB', 'imagens/user.svg', 'wwduCMZblgHmBe-pAAAB');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(12) NOT NULL,
  `imagem` text NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `email`, `senha`, `imagem`) VALUES
(9, 'Teste', 'teste@mail.com.br', '123456', 'imagens/user.svg');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cadastro_pet`
--
ALTER TABLE `cadastro_pet`
  ADD CONSTRAINT `cadastro_pet_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `cadastro_pet_ibfk_2` FOREIGN KEY (`id_especie`) REFERENCES `especies` (`id_especie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
