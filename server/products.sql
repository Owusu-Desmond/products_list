-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 04:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- Database: `ProductList`
--

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `SKU` varchar(50) NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Price` decimal(20,0) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Size` decimal(10,0) DEFAULT NULL,
  `Height` decimal(10,0) DEFAULT NULL,
  `Width` decimal(10,0) DEFAULT NULL,
  `Length` decimal(10,0) DEFAULT NULL,
  `Weight` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

ALTER TABLE `Products`
  ADD PRIMARY KEY (`SKU`);
COMMIT;
