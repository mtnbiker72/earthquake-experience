-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (arm64)
--
-- Host: localhost    Database: earthquake_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `earthquake`
--

DROP TABLE IF EXISTS `earthquake`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `earthquake` (
  `id` int NOT NULL AUTO_INCREMENT,
  `magnitude` int NOT NULL,
  `place` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  `tsunami` int NOT NULL,
  `lat` int NOT NULL,
  `long` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `earthquake`
--

LOCK TABLES `earthquake` WRITE;
/*!40000 ALTER TABLE `earthquake` DISABLE KEYS */;
INSERT INTO `earthquake` VALUES (1,10,'6km NNW of Heather\'s House CA','1970-01-01 00:00:05',5000,-121,36),(2,9,'6km NNW of Charlie\'s House ','1970-01-01 00:00:05',5000,-123,39),(3,8,'6km NNW of Chris\'s House ','1970-01-01 00:00:05',5000,-143,49);
/*!40000 ALTER TABLE `earthquake` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eq_id` text NOT NULL,
  `feel_it` text NOT NULL,
  `description` text,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (1,'us6000h5lb','Yes','Holy crap, did you feel it!?!??!',3,'2022-04-09 19:08:21','2022-04-09 19:08:21');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('-KSUUp8zwwfTqkiYF8ZiZc_xAaj1VnS5','2022-04-10 19:27:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":3,\"logged_in\":true,\"eq\":\"{\\\"__OBJECTID\\\":\\\"us6000h5lb\\\",\\\"mag\\\":5.2,\\\"place\\\":\\\"western Indian-Antarctic Ridge\\\",\\\"time\\\":1647571965607,\\\"tsunami\\\":0}\"}','2022-04-09 19:07:05','2022-04-09 19:27:22'),('1fuHcRiDuPBKfSRm_48EgNFYTVhnKkoT','2022-04-10 19:06:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"eq\":\"{\\\"__OBJECTID\\\":\\\"us7000gxkt\\\",\\\"mag\\\":5.8,\\\"place\\\":\\\"Mid-Indian Ridge\\\",\\\"time\\\":1648342244354,\\\"tsunami\\\":0}\"}','2022-04-09 17:57:50','2022-04-09 19:06:44'),('5OqPyCS3aHVQfa7YDRAKCgbAIfh1SJn6','2022-04-10 15:28:54','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-04-09 15:28:54','2022-04-09 15:28:54'),('bjEMT9tftCO6Uwn5XNwTghH1_SbW3kO4','2022-04-10 17:57:50','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2022-04-09 17:57:50','2022-04-09 17:57:50'),('P2JBjvZSZDtKW67scE1tX6HCTzQx_9Gy','2022-04-10 17:38:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":1,\"logged_in\":true,\"eq\":\"{\\\"__OBJECTID\\\":\\\"us6000h5sk\\\",\\\"mag\\\":4.6,\\\"place\\\":\\\"Macquarie Island region\\\",\\\"time\\\":1647307655425,\\\"tsunami\\\":0}\"}','2022-04-09 17:23:19','2022-04-09 17:38:02');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'charlie','charlie@charlie.com','$2b$10$ES/tAim0gfYQX3x55gpS5.zhY3SstKnwovFgsGlzDkq1dnZtq1tra'),(2,'chris','chris@chris.com','$2b$10$qMM2Xcifz3vfRuWEVxAmOu8z/TmjMaQTVQkEnVes80pYj9tmzKhry'),(3,'heather','heather@heather.com','$2b$10$On4JM1FHOKvHlfv.r9LRUue3iPP/vo/Rzwdx8OuZGZTfOv9DtbOjm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-09 13:56:40
