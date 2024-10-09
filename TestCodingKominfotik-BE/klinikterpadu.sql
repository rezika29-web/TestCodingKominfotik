-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2024 at 07:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `klinikterpadu`
--

-- --------------------------------------------------------

--
-- Table structure for table `kesehatan`
--

CREATE TABLE `kesehatan` (
  `id` bigint(20) NOT NULL,
  `id_pasien` varchar(50) DEFAULT NULL,
  `rincian_gejala` text DEFAULT NULL,
  `diagnosa` varchar(255) DEFAULT NULL,
  `test_yg_dilakukan` varchar(50) NOT NULL,
  `status_diagnosa` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kesehatan`
--

INSERT INTO `kesehatan` (`id`, `id_pasien`, `rincian_gejala`, `diagnosa`, `test_yg_dilakukan`, `status_diagnosa`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'pusing, mual, muntah', 'covid19', 'rapit test', 'menunggu test', '2024-10-09 03:25:34', '2024-10-09 03:25:34');

-- --------------------------------------------------------

--
-- Table structure for table `kunjungan`
--

CREATE TABLE `kunjungan` (
  `id` bigint(20) NOT NULL,
  `id_pasien` varchar(50) DEFAULT NULL,
  `tgl_kunjungan` text DEFAULT NULL,
  `tgl_kunjung_kembali` varchar(255) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kunjungan`
--

INSERT INTO `kunjungan` (`id`, `id_pasien`, `tgl_kunjungan`, `tgl_kunjung_kembali`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '1', '2024-10-09T10:23:21+07:00', NULL, 'BPJS', '2024-10-09 03:23:21', '2024-10-09 03:23:21');

-- --------------------------------------------------------

--
-- Table structure for table `pasien`
--

CREATE TABLE `pasien` (
  `id` bigint(20) NOT NULL,
  `nik` varchar(50) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `tempatlahir` varchar(50) DEFAULT NULL,
  `tgllahir` varchar(50) NOT NULL,
  `provinsi` varchar(50) DEFAULT NULL,
  `kabkot` varchar(50) DEFAULT NULL,
  `kec` varchar(50) DEFAULT NULL,
  `kel` varchar(50) DEFAULT NULL,
  `alamat` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien`
--

INSERT INTO `pasien` (`id`, `nik`, `nama`, `tempatlahir`, `tgllahir`, `provinsi`, `kabkot`, `kec`, `kel`, `alamat`, `createdAt`, `updatedAt`) VALUES
(2, '0987654432', 'Rezika', 'Painan', '2024-10-01', 'Sumatera Barat', 'Agam', 'IV Koto', 'Balingka', 'kampung tangah jorong pahambatan', '2024-10-09 04:30:41', '2024-10-09 04:53:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kesehatan`
--
ALTER TABLE `kesehatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kunjungan`
--
ALTER TABLE `kunjungan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pasien`
--
ALTER TABLE `pasien`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kesehatan`
--
ALTER TABLE `kesehatan`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kunjungan`
--
ALTER TABLE `kunjungan`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pasien`
--
ALTER TABLE `pasien`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
