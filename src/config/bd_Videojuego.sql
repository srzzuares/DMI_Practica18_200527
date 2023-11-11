CREATE DATABASE  IF NOT EXISTS `db_videogames_200527` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_videogames_200527`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_videogames_200527
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbb_players`
--

DROP TABLE IF EXISTS `tbb_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_players` (
  `idPlayer` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT 'Anonimo',
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `bithday` datetime NOT NULL,
  `portrait_img` varchar(255) DEFAULT NULL,
  `Estatus` tinyint(1) DEFAULT '1',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idPlayer`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_players`
--

LOCK TABLES `tbb_players` WRITE;
/*!40000 ALTER TABLE `tbb_players` DISABLE KEYS */;
INSERT INTO `tbb_players` VALUES (1,'Crystian','crys@gmail.com','12345','crystiann','2002-07-24 00:00:00','asdfasdwq',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(2,'Enrique','enrique@gmail.com','8765','enriqueee','2002-07-24 00:00:00','asdfasdwq',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(3,'Uri','uriesdf@gmail.com','urie234','uri','2002-07-24 00:00:00','asdasdasasfsdgddasd',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(4,'marco','cmarco@gmail.com','12dfgree34','marco','2002-07-24 00:00:00','35235v42dfsdf',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(5,'gabo','gabo@gmail.com','12dfgfh34','gab','2002-07-24 00:00:00','sdfsdfewerewrwe',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(6,'daniela','daniela@gmail.com','1wer234','danisss','2002-07-24 00:00:00','sdf43fwfs',1,'2023-11-10 00:00:00','2023-11-10 00:00:00'),(7,'fabi','fabi@gmail.com','1asd234','fabiss','2002-07-24 00:00:00','ewer423r4343',1,'2023-11-10 00:00:00','2023-11-10 00:00:00');
/*!40000 ALTER TABLE `tbb_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_videogames_200527'
--

--
-- Dumping routines for database 'db_videogames_200527'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 22:09:38
