/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: shroompedia
-- ------------------------------------------------------
-- Server version	11.8.3-MariaDB-0+deb13u1 from Debian

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `Shroom`
--

DROP TABLE IF EXISTS `Shroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Shroom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `sprite` varchar(191) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shroom`
--

LOCK TABLES `Shroom` WRITE;
/*!40000 ALTER TABLE `Shroom` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Shroom` VALUES
(4,'Classic Shroom','/images/towers/classic_shroom1.png','Le Classic Shroom est le champignon de base de ShroomTD, simpliste, mais efficace ! À l\'aide des ses projectiles rouges à points blancs ainsi que de sa bouche ultra extensible, il déraille les ennemis un à un sans aucun scrupule.'),
(5,'Stun Shroom','/images/towers/stun_shroom.png','Le Stun Shroom est un vicieux dans l\'âme, il hypnotise ses adversaires à l\'aide de ses trois yeux ensorcelants. Ses ennemis, complètement accablés se retrouvent dans l\'impossibilité de se mouvoir. Un vrai traquenard !'),
(6,'Boom Shroom','/images/towers/boom_shroom.png','Le Boom Shroom est un Shroom au tempérament explosif (littéralement)'),
(7,'Algae Shroom','/images/towers/algae_shroom_not_placed.png','Le Algae Shroom est une sous-espèce du LilyPad Shroom qui est apparu dans les marécages, il possède des algues à la place d\'un nénuphar afin de mieux se camoufler dans son environnement'),
(8,'Gangsta Shroom','/images/towers/gangsta_shroom1.png','Le Gangsta Shroom est un véritable bandit, c\'est le Shroom le plus stylé du quartier, il ne se sépare jamais de son fédora fétiche'),
(9,'LilyPad Shroom','/images/towers/lilypad_shroom_not_placed.png','Le LilyPad Shroom est la première espèce de Shroom aquatique, il s\'est entraînement longuement avec le Wizard Shroom afin de pouvoir manipuler l\'eau pour s\'en servir d\'arme contre ses adversaires'),
(10,'Random Shroom','/images/towers/random_shroom.png','Le Random Shroom est une espèce très mystérieuse, apparu très peu de fois au cours de l\'histoire, ses apparitions semblent n\'avoir aucun facteur en commun les unes avec les autres'),
(11,'Sniper Shroom','/images/towers/sniper_shroom.png','Le Sniper Shroom est doté d\'un acuité visuelle hors de commun, équipé de son Dragunov SVD, il enchaîne les headshots collatéraux avec une aise sans égale.'),
(12,'Spirit Shroom','/images/towers/spirit_shroom2.png','Le Spirit Shroom a toujours vécu seul, lors de sa mort, son regret de ne pas avoir d\'amis a retenu son âme sur le plan matériel. Dans son malheur, il trouva ce qu\'il lui manqua toute sa vie, un ami...'),
(13,'Urchin Shroom','/images/towers/urchin_shroom_not_placed.png','\"Qui s\'y frotte s\'y pique\" est la meilleure manière de décrire la personnalité du Urchin Shroom, en effet, d\'un naturel aigri et facilement vexable, les malheureux qui osent passer sur son territoire n\'en ressortent jamais entier'),
(14,'Water Strider Shroom','/images/towers/water_strider_shroom_not_placed.png','Si vous pensiez avoir aperçu quelque chose de très rapide sur l\'eau, n\'ayez crainte, il ne s\'agit la que du Water Strider Shroom, en effet, il est capable d\'atteindre des pointes de vitesse à 300km/h tant qu\'il ne brise pas la tension de surface'),
(15,'Wizard Shroom','/images/towers/wizard_shroom.png','Maître de tous les éléments, gardien des savoirs, le Wizard Shroom est une des entités les plus connues, puissantes et importantes de ce monde. Cependant, il se fait un plaisir à enseigner à ceux qui n\'ont pas peur de connaître les secrets du monde');
/*!40000 ALTER TABLE `Shroom` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `User` VALUES
(14,'admin','admin@admin.com','admin'),
(15,'user','user@user.com','password123'),
(16,'WorKai','vandewalle.j@etu.univ-littoral.fr','motdepasse');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `_prisma_migrations` VALUES
('1db8da42-5932-4af5-9d3e-25b437e983b8','49b3f2994c492507d9e8789b1dd60352d0adb8d7c2624b3c40942669cf143d09','2026-01-18 14:22:06.900','20260118142206_add_shrooms',NULL,NULL,'2026-01-18 14:22:06.896',1),
('4869ad9c-4924-4e35-b948-38ecd81b42ba','7624661173345efe73ab1a5136953866fabf284f3c1adf63d577b22bc28a9850','2026-01-18 14:34:55.941','20260118143455_change_shroom_desc_type',NULL,NULL,'2026-01-18 14:34:55.934',1),
('561fb67c-c035-4aad-98c4-d254f40bd16a','86960b3dfd0cf03ea9f49408cc215539294cf2fd50c739ffd4244864abf8b8fe','2026-01-18 12:43:48.268','20260118124348_init',NULL,NULL,'2026-01-18 12:43:48.264',1),
('b8f88e8e-0753-418b-8c3e-f9e1930d94b9','6e3508852885b94bffb538042cd5f1c1570289ec41140fd794c50bdc5f1ae694','2026-01-18 15:38:17.319','20260118153817_add_password',NULL,NULL,'2026-01-18 15:38:17.307',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-01-19  9:33:49
