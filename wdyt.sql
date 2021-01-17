-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 17 Jan 2021 pada 05.11
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wdyt`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Articles`
--

CREATE TABLE `Articles` (
  `id` int(11) NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `article` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Articles`
--

INSERT INTO `Articles` (`id`, `authorId`, `title`, `article`, `createdAt`, `updatedAt`) VALUES
(167, 20, 'This Is Article', 'Delectus mollit mag', '2021-01-11 15:45:58', '2021-01-11 15:45:58'),
(168, 20, 'This Is Article', 'Laboriosam consequa', '2021-01-11 15:46:01', '2021-01-11 15:46:01'),
(169, 20, 'This Is Article', 'Illo velit et volupt', '2021-01-11 15:46:03', '2021-01-11 15:46:03'),
(170, 20, 'This Is Article', 'Quia et asperiores v', '2021-01-12 11:09:10', '2021-01-12 11:09:10'),
(171, 20, 'This Is Article', 'Et voluptas cum aliq', '2021-01-12 11:09:24', '2021-01-12 11:09:24'),
(172, 20, 'This Is Article', 'anjing banget', '2021-01-12 11:09:32', '2021-01-12 11:09:32'),
(173, 20, 'This Is Article', 'anjing banget', '2021-01-12 11:09:45', '2021-01-12 11:09:45'),
(174, 20, 'This Is Article', 'anjing', '2021-01-12 11:09:58', '2021-01-12 11:09:58'),
(175, 20, 'This Is Article', 'Est dolorum sapiente', '2021-01-12 11:16:35', '2021-01-12 11:16:35'),
(176, 20, 'This Is Article', 'Quisquam officia duc', '2021-01-12 11:17:26', '2021-01-12 11:17:26'),
(177, 20, 'This Is Article', 'anjing', '2021-01-12 11:23:29', '2021-01-12 11:23:29'),
(178, 20, 'This Is Article', 'Deserunt aut aute in', '2021-01-12 11:24:12', '2021-01-12 11:24:12'),
(179, 20, 'This Is Article', 'Quis labore eu totam', '2021-01-12 11:24:41', '2021-01-12 11:24:41'),
(180, 20, 'This Is Article', 'Rerum ipsa exceptur', '2021-01-12 11:33:33', '2021-01-12 11:33:33'),
(181, 20, 'This Is Article', 'Ut anim aut qui reru', '2021-01-12 11:33:39', '2021-01-12 11:33:39'),
(182, 20, 'This Is Article', 'Numquam et est volup', '2021-01-12 11:42:37', '2021-01-12 11:42:37'),
(183, 20, 'This Is Article', 'Aperiam nisi officii', '2021-01-12 11:42:58', '2021-01-12 11:42:58'),
(184, 20, 'This Is Article', 'Voluptas rerum liber', '2021-01-12 11:43:03', '2021-01-12 11:43:03'),
(185, 20, 'This Is Article', 'Excepturi repellendu', '2021-01-12 11:43:12', '2021-01-12 11:43:12'),
(186, 20, 'This Is Article', 'Blanditiis molestiae', '2021-01-12 11:43:18', '2021-01-12 11:43:18'),
(187, 20, 'This Is Article', 'Placeat quos volupt', '2021-01-12 11:43:29', '2021-01-12 11:43:29'),
(188, 20, 'This Is Article', 'Aliquip magni expedi', '2021-01-12 11:43:40', '2021-01-12 11:43:40'),
(189, 20, 'This Is Article', 'Beatae labore qui ve', '2021-01-12 11:44:02', '2021-01-12 11:44:02'),
(190, 20, 'This Is Article', 'Qui maxime corporis ', '2021-01-12 11:44:09', '2021-01-12 11:44:09'),
(191, 20, 'This Is Article', 'Perferendis quam min', '2021-01-12 11:45:08', '2021-01-12 11:45:08'),
(192, 1, 'This Is Article', 'question', '2021-01-12 11:51:17', '2021-01-12 11:51:17'),
(193, 1, 'This Is Article', 'question', '2021-01-12 11:51:24', '2021-01-12 11:51:24'),
(194, 1, 'This Is Article', 'question', '2021-01-12 11:51:41', '2021-01-12 11:51:41'),
(195, 20, 'This Is Title', 'ayama', '2021-01-12 13:28:51', '2021-01-12 13:28:51'),
(196, 20, 'This Is A Title', 'sd', '2021-01-13 11:44:32', '2021-01-13 11:44:32'),
(197, 20, 'This Is A Title', 's', '2021-01-13 11:45:29', '2021-01-13 11:45:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Authenticateds`
--

CREATE TABLE `Authenticateds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Authenticateds`
--

INSERT INTO `Authenticateds` (`id`, `user_id`, `name`, `username`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(4312, 20, 'muhammad al farizzi', 'mind-blower', 'eyJhbGciOiJIUzI1NiJ9.bWluZC1ibG93ZXI.c8gqSLTkxiV1vfkJWdT4BwD7AULC4xmEjuGTPMfndiI', '2021-01-17 04:05:12', '2021-01-17 04:05:12'),
(4313, 20, 'muhammad al farizzi', 'mind-blower', 'eyJhbGciOiJIUzI1NiJ9.bWluZC1ibG93ZXI.c8gqSLTkxiV1vfkJWdT4BwD7AULC4xmEjuGTPMfndiI', '2021-01-17 04:05:12', '2021-01-17 04:05:12'),
(4314, 20, 'muhammad al farizzi', 'mind-blower', 'eyJhbGciOiJIUzI1NiJ9.bWluZC1ibG93ZXI.c8gqSLTkxiV1vfkJWdT4BwD7AULC4xmEjuGTPMfndiI', '2021-01-17 04:05:12', '2021-01-17 04:05:12'),
(4315, 20, 'muhammad al farizzi', 'mind-blower', 'eyJhbGciOiJIUzI1NiJ9.bWluZC1ibG93ZXI.c8gqSLTkxiV1vfkJWdT4BwD7AULC4xmEjuGTPMfndiI', '2021-01-17 04:05:12', '2021-01-17 04:05:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `FollowingRooms`
--

CREATE TABLE `FollowingRooms` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roomId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `FollowingRooms`
--

INSERT INTO `FollowingRooms` (`id`, `userId`, `roomId`, `createdAt`, `updatedAt`) VALUES
(62, 20, 3, '2021-01-17 03:39:58', '2021-01-17 03:39:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `RoomArticles`
--

CREATE TABLE `RoomArticles` (
  `id` int(11) NOT NULL,
  `roomId` int(11) DEFAULT NULL,
  `authorId` int(11) DEFAULT NULL,
  `article` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `RoomArticles`
--

INSERT INTO `RoomArticles` (`id`, `roomId`, `authorId`, `article`, `createdAt`, `updatedAt`) VALUES
(1, 4, 20, 'ini adalah artikel pertama pada ruangweeb', '2021-01-13 13:40:11', '2021-01-13 13:40:11'),
(2, 4, 20, 'ini adalah artikel pertama pada ruangweeb', '2021-01-13 13:40:38', '2021-01-13 13:40:38'),
(3, 4, 20, 'ini adalah artikel pertama pada ruangweeb', '2021-01-13 13:40:54', '2021-01-13 13:40:54'),
(4, 1, 20, 'asdasd', '2021-01-15 08:32:08', '2021-01-15 08:32:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Rooms`
--

CREATE TABLE `Rooms` (
  `id` int(11) NOT NULL,
  `roomName` varchar(255) DEFAULT NULL,
  `roomOwnerId` int(11) DEFAULT NULL,
  `roomdescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Rooms`
--

INSERT INTO `Rooms` (`id`, `roomName`, `roomOwnerId`, `roomdescription`, `createdAt`, `updatedAt`) VALUES
(1, 'Sed quisquam non ips', 20, 'Voluptas in neque mo', '2021-01-15 08:11:05', '2021-01-15 08:11:05'),
(2, 'Semua Bisa', 20, 'ini adalah ruang untuk berbagi impian kamu', '2021-01-16 01:16:02', '2021-01-16 01:16:02'),
(3, 'ruang programmer', 20, 'ini adalah ruang untuk berbagi kisah kamu selama menjadi programmer', '2021-01-16 01:19:11', '2021-01-16 01:19:11'),
(4, 's', 20, 's', '2021-01-16 14:05:30', '2021-01-16 14:05:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210110070608-create-user.js'),
('20210110070704-create-article.js'),
('20210110070751-create-authenticated.js'),
('20210113123402-create-room.js'),
('20210113133230-create-room-article.js'),
('20210116003719-create-following-room.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Users`
--

INSERT INTO `Users` (`id`, `name`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(20, 'muhammad al farizzi', 'mind-blower', '$2b$10$hQAzPJ39SCzXVY8KNbtti.1DFl64.F5KWYG6nJFCCsRTQXi0V657C', '2021-01-11 07:42:16', '2021-01-11 07:42:16');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Articles`
--
ALTER TABLE `Articles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `Authenticateds`
--
ALTER TABLE `Authenticateds`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `FollowingRooms`
--
ALTER TABLE `FollowingRooms`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `RoomArticles`
--
ALTER TABLE `RoomArticles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `Rooms`
--
ALTER TABLE `Rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Articles`
--
ALTER TABLE `Articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

--
-- AUTO_INCREMENT untuk tabel `Authenticateds`
--
ALTER TABLE `Authenticateds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4316;

--
-- AUTO_INCREMENT untuk tabel `FollowingRooms`
--
ALTER TABLE `FollowingRooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT untuk tabel `RoomArticles`
--
ALTER TABLE `RoomArticles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `Rooms`
--
ALTER TABLE `Rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
