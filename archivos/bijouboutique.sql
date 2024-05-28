-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: productos_bijouboutique
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `color` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Anillo de Diamantes','Hermoso anillo de diamantes','Blanco',20000.00,'anillo-oro.jpg'),(2,'Collar de Perlas','Collar perlado de excelente calidad','Perlas',40000.00,'collar-perlas.png'),(3,'Pulsera de Zafiros','Pulsera con piedras preciosas de zafiros','Azul',38000.00,'pulsera-zafiros.jpg'),(4,'Aros de Oro Rosa','Elegantes aros de oro rosa con detalles en filigrana','Oro Rosa',20000.00,'aros-oro-rosa.jpg'),(5,'Collar de Rubíes','Collar brillante con rubíes intensos','Rojo',50000.00,'collar-rubies.jpg'),(6,'Aros de Esmeraldas','Aros colgantes con esmeraldas de calidad','Verde',15000.00,'aros-esmeralda.jpg'),(7,'Anillo de Plata de Ley','Anillo clásico de plata de ley','Plateado',20000.00,'anillo-ley.jpg'),(8,'Collar de Diamantes y Zafiros','Collar lujoso con diamantes y zafiros','Plateado y azul',55000.00,'collar-diam-zafiros.jpg'),(9,'Collar de Perlas y Zafiros','Collar elegante con perlas y zafiros','Blanco y azul',48000.00,'collar-perlas-zafiro.jpg'),(10,'Aros de Diamantes','Aros brillantes con diamantes incrustados','Blanco',20000.00,'aros-diamantes.jpg'),(11,'Anillo de Topacio Azul','Anillo con topacio azul vibrante','Azul claro',15000.00,'anillo-topacio.jpg'),(12,'Aros de Amatista','Aros con piedras preciosas de amatista','Púrpura',25000.00,'aros-amatista.jpg'),(13,'Anillo de Oro Blanco','Anillo elegante de oro blanco con detalles intrincados','Oro Blanco',50000.00,'anillo-blanco.jpg'),(14,'Anillo de Rubí Birmano','Anillo exclusivo con rubí birmano auténtico','Rojo',48000.00,'anillo-birmano.jpg'),(15,'Collar de Oro Rosa con Diamantes','Collar elegante de oro rosa con diamantes incrustados','Oro Rosa y Transparente',48000.00,'collar-rosa-diamantes.jpg'),(16,'Anillo de Diamante Negro','Anillo elegante con diamante negro central','Negro',40000.00,'anillo-diamante-negro.jpg'),(18,'Anillo de Oro Negro','Anillo de oro negro pulido','Negro',40000.00,'products-1716907694770.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'Danilo','Palermo','$2a$10$suHHYxENenpnj50XWQq7eOJKKoUDd6M8xHXBBgzD7uPIxmfXwX1qa','palermodanilo01@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-28 20:22:41
