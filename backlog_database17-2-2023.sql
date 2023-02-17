-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2023 at 08:25 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backlog_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `login_id` int(11) DEFAULT NULL,
  `detail_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `login_id`, `detail_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `approvals`
--

CREATE TABLE `approvals` (
  `id` int(11) NOT NULL,
  `Requirements_id` int(11) NOT NULL,
  `approver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approvals`
--

INSERT INTO `approvals` (`id`, `Requirements_id`, `approver_id`) VALUES
(16, 228, 2),
(17, 230, 2),
(20, 229, 2),
(21, 231, 2);

-- --------------------------------------------------------

--
-- Table structure for table `approver`
--

CREATE TABLE `approver` (
  `id` int(11) NOT NULL,
  `login_id` int(11) DEFAULT NULL,
  `detail_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approver`
--

INSERT INTO `approver` (`id`, `login_id`, `detail_id`) VALUES
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `asis`
--

CREATE TABLE `asis` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `asis`
--

INSERT INTO `asis` (`id`, `name`) VALUES
(0, 'ยังไม่ระบุ'),
(1, 'Manual Process : ยังไม่มีระบบ'),
(2, 'Digitization : ยกระดับระบบ');

-- --------------------------------------------------------

--
-- Table structure for table `budget`
--

CREATE TABLE `budget` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `budget`
--

INSERT INTO `budget` (`id`, `name`) VALUES
(0, 'ยังไม่ระบุ'),
(1, 'มีงบจ้าง Outsource'),
(2, 'ไม่มีงบขอใช้ IT Develop');

-- --------------------------------------------------------

--
-- Table structure for table `coding`
--

CREATE TABLE `coding` (
  `id` int(11) NOT NULL,
  `link` varchar(200) DEFAULT NULL,
  `excute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coding`
--

INSERT INTO `coding` (`id`, `link`, `excute_id`) VALUES
(2, 'testcode.com', 4),
(3, '888888888', 5);

-- --------------------------------------------------------

--
-- Table structure for table `confirmprototype`
--

CREATE TABLE `confirmprototype` (
  `id` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `deploy`
--

CREATE TABLE `deploy` (
  `id` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(45) DEFAULT NULL,
  `Architect_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `codeuser` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `detail`
--

INSERT INTO `detail` (`id`, `codeuser`, `firstname`, `lastname`, `nickname`, `email`) VALUES
(1, 'A123456', 'sakeezt', 'admin', 'a', 'a@gmail.com'),
(2, 'A456789', 'Sakeezt', 'approver', 'b', 'b@gmail.com'),
(3, 'A7894', 'Sakeezt', 'user', 'c', 'c@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `doingby`
--

CREATE TABLE `doingby` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doingby`
--

INSERT INTO `doingby` (`id`, `name`) VALUES
(0, 'ยังไม่ระบุ'),
(1, 'Self Development'),
(2, 'ID4 Develop'),
(3, 'IT Develop'),
(4, ' Outsource'),
(5, 'Student Internship'),
(6, 'other');

-- --------------------------------------------------------

--
-- Table structure for table `emailreqtoapprover`
--

CREATE TABLE `emailreqtoapprover` (
  `id` int(11) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(200) DEFAULT NULL,
  `approver_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `excute`
--

CREATE TABLE `excute` (
  `id` int(11) NOT NULL,
  `Approvals_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `excute`
--

INSERT INTO `excute` (`id`, `Approvals_id`) VALUES
(5, 16),
(4, 17),
(7, 20),
(8, 21);

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `reason` varchar(200) DEFAULT NULL,
  `deletetime` datetime DEFAULT NULL,
  `processname` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `painpoint` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `results_benefit` varchar(200) DEFAULT NULL,
  `exclusion_constraints` varchar(200) DEFAULT NULL,
  `work_flow` varchar(45) DEFAULT NULL,
  `extract_file` varchar(45) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tobe_id` int(11) DEFAULT NULL,
  `asis_id` int(11) DEFAULT NULL,
  `doingby_id` int(11) DEFAULT NULL,
  `budget_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `reason`, `deletetime`, `processname`, `startdate`, `enddate`, `painpoint`, `description`, `results_benefit`, `exclusion_constraints`, `work_flow`, `extract_file`, `admin_id`, `approver_id`, `user_id`, `tobe_id`, `asis_id`, `doingby_id`, `budget_id`) VALUES
(36, 'sssssssssssssssssssssssssssssssssss', '2023-02-06 15:30:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, NULL, NULL, 'testtime 4', '2023-02-06', '2023-02-08', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 1, 1, 1, 1),
(38, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2023-02-07 10:40:02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'testtttttttttttttttttttttttttt', '2023-02-07 15:25:48', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, '999999999999999999999999999', '2023-02-09 14:55:43', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'sadsadsadsadasdsadsad', '2023-02-10 09:56:08', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 'wwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-13 09:50:18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'wwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-13 09:50:23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'sasssssssssssssssssssssss', '2023-02-13 10:13:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(45, '9999999999999999999999999999', '2023-02-15 15:44:07', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, '99999999999999999999999999999', '2023-02-15 15:44:10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(47, '99999999999999999999999999999', '2023-02-15 15:44:13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, '99999999999999999999999999', '2023-02-15 15:44:16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(49, '999999999999999999999999999999', '2023-02-15 15:44:20', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(50, '9999999999999999999999999999999999999', '2023-02-15 15:44:26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 'testtttttttttttttttttttt', '2023-02-16 08:45:42', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 'eeeeeeeeeeeeeeeeeeeeeeeee', '2023-02-16 08:45:46', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'eeeeeeeeeeeeeeeeeeeeeeeeeee', '2023-02-16 08:45:49', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'testttttttttttttttttttttttt', '2023-02-16 08:47:14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, NULL, NULL, 'approver1', '0000-00-00', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1, 1, 1, 1),
(56, 'testttttttttttttttttttttttt', '2023-02-16 08:47:16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(57, NULL, NULL, 'approver1', '0000-00-00', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1, 1, 1, 1),
(58, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:47:57', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 'wwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:48:01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(60, NULL, NULL, 'approver2', '0000-00-00', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1, 1, 1, 1),
(61, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:48:58', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'wwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:49:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:49:03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'wwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-16 08:55:56', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(65, NULL, NULL, 'testttt', '2023-02-16', '2023-04-20', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 1, 1, 1, 1),
(66, 'tttttttttttttttttttttttttttttttttttttttttttttttttt', '2023-02-16 10:15:08', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 'wwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:02:35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'wwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:03:51', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(69, 'wwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:26:40', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 'wwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:26:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(71, NULL, NULL, 'ssssssssssssssssssss', '2023-02-23', '2023-02-18', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 2, 1, 2, 1),
(72, 'wwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:26:49', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwww', '2023-02-17 13:26:53', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 'testtttttttttttttttttttttttttt', '2023-02-17 13:28:16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(75, NULL, NULL, 'testtt', '2023-02-23', '2023-02-21', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 0, 0, 0, 0),
(76, 'tttttttttttttttttttttttttttttt', '2023-02-17 13:28:22', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(77, 'ttttttttttttttttttttttttttttt', '2023-02-17 13:28:25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(78, 'ttttttttttttttttttttttttttttt', '2023-02-17 13:28:29', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(79, NULL, NULL, 'testtt', '2023-02-17', '2023-02-17', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 0, 0, 0, 0),
(80, 'tttttttttttttttttttttttttttt', '2023-02-17 13:28:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(81, NULL, NULL, 'radasdasd', '2023-02-17', '2023-02-17', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 0, 0, 0, 0),
(82, 'tttttttttttttttttttttttttttttttttt', '2023-02-17 13:28:35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(83, NULL, NULL, 'asdasdasd', '2023-02-17', '2023-02-17', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `historyreject`
--

CREATE TABLE `historyreject` (
  `id` int(11) NOT NULL,
  `rejecttime` date DEFAULT NULL,
  `reason` varchar(200) DEFAULT NULL,
  `processname` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `painpoint` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `results_benefit` varchar(200) DEFAULT NULL,
  `exclusion_constraints` varchar(200) DEFAULT NULL,
  `work_flow` varchar(45) DEFAULT NULL,
  `extract_file` varchar(45) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tobe_id` int(11) DEFAULT NULL,
  `asis_id` int(11) DEFAULT NULL,
  `doingby_id` int(11) DEFAULT NULL,
  `budget_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `role_id`) VALUES
(1, 'admin', '123456789', 1),
(2, 'approver', '123456789', 2),
(3, 'user', '123456789', 3);

-- --------------------------------------------------------

--
-- Table structure for table `plancoding`
--

CREATE TABLE `plancoding` (
  `id` int(11) NOT NULL,
  `startcoding` date DEFAULT NULL,
  `endcoding` date DEFAULT NULL,
  `format` varchar(100) DEFAULT NULL,
  `name_university` varchar(100) DEFAULT NULL,
  `languages` varchar(100) DEFAULT NULL,
  `databasecoding` varchar(100) DEFAULT NULL,
  `excute_id` int(11) DEFAULT NULL,
  `statusplan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plancoding`
--

INSERT INTO `plancoding` (`id`, `startcoding`, `endcoding`, `format`, `name_university`, `languages`, `databasecoding`, `excute_id`, `statusplan`) VALUES
(7, '0000-00-00', '0000-00-00', 'wwwwwwww', 'wwwwwwwwwwwww', 'wwwwwwwwwwwww', 'wwwwwwww', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `preparedata`
--

CREATE TABLE `preparedata` (
  `id` int(11) NOT NULL,
  `excute_id` int(11) DEFAULT NULL,
  `projectpurpose` varchar(100) DEFAULT NULL,
  `businessflow` varchar(45) DEFAULT NULL,
  `scopeofwork` varchar(45) DEFAULT NULL,
  `swimlanediargram` varchar(45) DEFAULT NULL,
  `uxuiprototype` varchar(45) DEFAULT NULL,
  `sitemap` varchar(45) DEFAULT NULL,
  `systemflowchart_status` int(11) DEFAULT NULL,
  `dataflowdiagram_status` int(11) DEFAULT NULL,
  `erdiargram_status` int(11) DEFAULT NULL,
  `datadic_status` int(11) DEFAULT NULL,
  `usecasediagram_status` int(11) DEFAULT NULL,
  `linkprepare` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `preparedata`
--

INSERT INTO `preparedata` (`id`, `excute_id`, `projectpurpose`, `businessflow`, `scopeofwork`, `swimlanediargram`, `uxuiprototype`, `sitemap`, `systemflowchart_status`, `dataflowdiagram_status`, `erdiargram_status`, `datadic_status`, `usecasediagram_status`, `linkprepare`) VALUES
(13, 2, '1', '1', '1', '1', '1', '1', 0, 1, 1, 0, 0, '9999wwwwwwwwttttttt'),
(14, 4, '1', '1', '1', '1', '1', '1', 1, 1, 1, 1, 0, 'testlickprepare.io'),
(15, 5, '1', '1', '1', '1', '1', '1', 1, 1, 1, 1, 1, 'null'),
(16, 6, '1', '1', '1', '1', '1', '1', 1, 1, 1, NULL, NULL, '999'),
(17, 7, '1', '1', '1', '1', '1', '1', 0, 0, 0, 1, 1, '99dfsad');

-- --------------------------------------------------------

--
-- Table structure for table `projectmanagement`
--

CREATE TABLE `projectmanagement` (
  `id` int(11) NOT NULL,
  `datestart` date DEFAULT NULL,
  `dateend` date DEFAULT NULL,
  `requirements_id` int(11) DEFAULT NULL,
  `emailreqtoapprover_id` int(11) DEFAULT NULL,
  `approvals_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projectmanagement`
--

INSERT INTO `projectmanagement` (`id`, `datestart`, `dateend`, `requirements_id`, `emailreqtoapprover_id`, `approvals_id`) VALUES
(93, '2023-02-09', '2023-04-20', 228, NULL, NULL),
(94, '2023-02-16', '2023-02-17', 229, NULL, NULL),
(95, '2024-01-10', '2024-06-13', 230, NULL, NULL),
(96, '2024-02-07', '2024-05-15', 231, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `prototype`
--

CREATE TABLE `prototype` (
  `id` int(11) NOT NULL,
  `file` varchar(200) DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  `confirmprototype_id` int(11) DEFAULT NULL,
  `excute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `prototype`
--

INSERT INTO `prototype` (`id`, `file`, `link`, `confirmprototype_id`, `excute_id`) VALUES
(13, '', 'testlink.com', NULL, 4),
(14, '', 'testttw1111888999', NULL, 5),
(16, '', '9999999999999', NULL, 7);

-- --------------------------------------------------------

--
-- Table structure for table `requirements`
--

CREATE TABLE `requirements` (
  `id` int(11) NOT NULL,
  `processname` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `painpoint` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `results_benefit` varchar(45) DEFAULT NULL,
  `exclusion_constraints` varchar(45) DEFAULT NULL,
  `work_flow` varchar(45) DEFAULT NULL,
  `extract_file` varchar(45) DEFAULT NULL,
  `riskmanagement` varchar(45) DEFAULT NULL,
  `scopeofwork` varchar(45) DEFAULT NULL,
  `bussinessflow` varchar(45) DEFAULT NULL,
  `statusforprocess` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `tobe_id` int(11) DEFAULT NULL,
  `asis_id` int(11) DEFAULT NULL,
  `doingby_id` int(11) DEFAULT NULL,
  `budget_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `requirements`
--

INSERT INTO `requirements` (`id`, `processname`, `startdate`, `enddate`, `painpoint`, `description`, `results_benefit`, `exclusion_constraints`, `work_flow`, `extract_file`, `riskmanagement`, `scopeofwork`, `bussinessflow`, `statusforprocess`, `admin_id`, `user_id`, `approver_id`, `tobe_id`, `asis_id`, `doingby_id`, `budget_id`, `status`, `status_id`) VALUES
(228, 'admin1', '2023-02-16', '2023-02-28', '', '', NULL, '', '', '', '', '', '', 8, 1, NULL, NULL, 1, 1, 1, 1, 2, 1),
(229, 'admin2', '2023-03-22', '2023-04-19', '', '', NULL, '', '', '', '', '', '', 6, 1, NULL, NULL, 1, 1, 1, 1, 2, 1),
(230, 'approver1', '2023-02-17', '2023-03-22', '', '', NULL, '', '', '', '', '', '', 8, NULL, NULL, 2, 1, 1, 1, 1, 2, 1),
(231, 'approver2', '2023-02-17', '2023-04-13', '', '', NULL, '', '', '', '', '', '', 3, NULL, NULL, 2, 1, 1, 1, 1, 2, 1),
(233, 'user2', '2023-02-17', '2023-02-25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 3, NULL, 1, 1, 1, 1, 0, 4),
(253, 'testtttttt', '2023-02-17', '2023-02-17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, 0, 0, 0, 0, 0, 4),
(254, 'wwwwwwrrrrrrrrrrrrrrrrr', '2023-02-17', '2023-02-17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, 0, 0, 0, 0, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'approver'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Approve'),
(2, 'Waiting for Approve'),
(3, 'Reject'),
(4, 'Waiting Send Approve');

-- --------------------------------------------------------

--
-- Table structure for table `testing`
--

CREATE TABLE `testing` (
  `id` int(11) NOT NULL,
  `link` varchar(200) DEFAULT NULL,
  `excute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `testing`
--

INSERT INTO `testing` (`id`, `link`, `excute_id`) VALUES
(2, 'testcode.com', 4),
(3, '88888888', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tobe`
--

CREATE TABLE `tobe` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tobe`
--

INSERT INTO `tobe` (`id`, `name`) VALUES
(0, 'ยังไม่ระบุ'),
(1, 'Digitization : ยกระดับระบบ'),
(2, 'Digitalization : เปลี่ยนกระบวนการทำงาน'),
(3, 'Digital Transformation : ส่งมอบลูกค้า');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `detail_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login_id`, `detail_id`) VALUES
(3, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `valuerelease`
--

CREATE TABLE `valuerelease` (
  `id` int(11) NOT NULL,
  `mandays` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `wage` varchar(20) DEFAULT NULL,
  `estimate` varchar(20) DEFAULT NULL,
  `valuerelease` varchar(45) DEFAULT NULL,
  `benefitpeople` varchar(45) DEFAULT NULL,
  `benefitmoney` varchar(45) DEFAULT NULL,
  `benefitpeoplemandays` varchar(45) DEFAULT NULL,
  `filebefore` varchar(100) DEFAULT NULL,
  `fileafter` varchar(100) DEFAULT NULL,
  `excute_id` int(11) DEFAULT NULL,
  `statusvaluerelease` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `valuerelease`
--

INSERT INTO `valuerelease` (`id`, `mandays`, `startdate`, `enddate`, `wage`, `estimate`, `valuerelease`, `benefitpeople`, `benefitmoney`, `benefitpeoplemandays`, `filebefore`, `fileafter`, `excute_id`, `statusvaluerelease`) VALUES
(1, 'sssssssssssss', '2024-10-02', '2024-10-02', 'ssssssssss', 'ssssssss', NULL, 'ssssssss', 'ssssssssss', 'ssssssssssssss', 'ssssssss', 'ssssssssssssssss', NULL, 1),
(2, 'sssssss', '2024-11-02', '2024-10-02', 'sssssssssss', 'ssssssss', NULL, 'ssssssss', 'sssssssss', 'sssssssss', 'sssssssssss', 'sssssssss', NULL, 1),
(3, 'ssssssss', '2024-03-02', '2024-02-02', 'sssssssss', 'ssssssssss', NULL, 'ssssssssssss', 'sssssssss', 'sssssssssss', 'ssssssss', 'sssssssssssssssss', 8, 1),
(4, 'ssssssssss', '2024-03-02', '2024-09-02', 'sssssssssss', 'sssssssss', 'ssssssssssss999999999', 'ssssssss', 'sssssss', 'sssssssssss', 'ssssssssssssss', 'nullsssssssssssssssss', 7, 1),
(5, 'testtttttttttttttttt', '2023-02-17', '2023-02-17', 'testtttttttttttttttt', 'testtttttttttttttttt', 'sssssssssssssssssssssssssss', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 4, 1),
(6, 'testtttttttttttttttt', '2023-02-17', '2023-02-17', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 'testtttttttttttttttt', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_admin_login1_idx` (`login_id`),
  ADD KEY `fk_admin_detail1_idx` (`detail_id`);

--
-- Indexes for table `approvals`
--
ALTER TABLE `approvals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Approvals_Requirements1_idx` (`Requirements_id`),
  ADD KEY `fk_approvals_approver1_idx` (`approver_id`);

--
-- Indexes for table `approver`
--
ALTER TABLE `approver`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_approver_login1_idx` (`login_id`),
  ADD KEY `fk_approver_detail1_idx` (`detail_id`);

--
-- Indexes for table `asis`
--
ALTER TABLE `asis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `budget`
--
ALTER TABLE `budget`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `coding`
--
ALTER TABLE `coding`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `link_UNIQUE` (`link`),
  ADD KEY `fk_excute_coding_idx` (`excute_id`);

--
-- Indexes for table `confirmprototype`
--
ALTER TABLE `confirmprototype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deploy`
--
ALTER TABLE `deploy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_delivered_Architect1_idx` (`Architect_id`);

--
-- Indexes for table `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `doingby`
--
ALTER TABLE `doingby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_emailreqtoapprover_approver1_idx` (`approver_id`);

--
-- Indexes for table `excute`
--
ALTER TABLE `excute`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Architect_Approvals1_idx` (`Approvals_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_admin_idx` (`admin_id`),
  ADD KEY `fk_approver_idx` (`approver_id`),
  ADD KEY `fk_user_idx` (`user_id`),
  ADD KEY `fk_doingby_idx` (`doingby_id`),
  ADD KEY `fk_asis_idx` (`asis_id`),
  ADD KEY `fk_budget_idx` (`budget_id`),
  ADD KEY `fk_tobe_idx` (`tobe_id`);

--
-- Indexes for table `historyreject`
--
ALTER TABLE `historyreject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_admin_idx` (`admin_id`),
  ADD KEY `fk_approver_idx` (`approver_id`),
  ADD KEY `fk_user_idx` (`user_id`),
  ADD KEY `fk_doingby_idx` (`doingby_id`),
  ADD KEY `fk_tobe_idx` (`tobe_id`),
  ADD KEY `fk_budjet_idx` (`budget_id`),
  ADD KEY `fk_asis_idx` (`asis_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD KEY `fk_login_role1_idx` (`role_id`);

--
-- Indexes for table `plancoding`
--
ALTER TABLE `plancoding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_plancode_excute_idx` (`excute_id`);

--
-- Indexes for table `preparedata`
--
ALTER TABLE `preparedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_projectmanagement_requirements1_idx` (`requirements_id`),
  ADD KEY `fk_projectmanagement_emailreqtoapprover1_idx` (`emailreqtoapprover_id`),
  ADD KEY `fk_projectmanagement_approvals1_idx` (`approvals_id`);

--
-- Indexes for table `prototype`
--
ALTER TABLE `prototype`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prototype_confirmprototype1_idx` (`confirmprototype_id`),
  ADD KEY `fk_excute_prototype_idx` (`excute_id`);

--
-- Indexes for table `requirements`
--
ALTER TABLE `requirements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_requirements_admin1_idx` (`admin_id`),
  ADD KEY `fk_requirements_user1_idx` (`user_id`),
  ADD KEY `fk_requirements_approver1_idx` (`approver_id`),
  ADD KEY `fk_requirements_tobe1_idx` (`tobe_id`),
  ADD KEY `fk_requirements_asis1_idx` (`asis_id`),
  ADD KEY `fk_requirements_doingby1_idx` (`doingby_id`),
  ADD KEY `fk_requirements_budget1_idx` (`budget_id`),
  ADD KEY `fk_requirements_status_idx` (`status_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testing`
--
ALTER TABLE `testing`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `link_UNIQUE` (`link`),
  ADD KEY `fk_excute_testing_idx` (`excute_id`);

--
-- Indexes for table `tobe`
--
ALTER TABLE `tobe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_login1_idx` (`login_id`),
  ADD KEY `fk_user_detail1_idx` (`detail_id`);

--
-- Indexes for table `valuerelease`
--
ALTER TABLE `valuerelease`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_excute_value_idx` (`excute_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `approvals`
--
ALTER TABLE `approvals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `coding`
--
ALTER TABLE `coding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `deploy`
--
ALTER TABLE `deploy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail`
--
ALTER TABLE `detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `excute`
--
ALTER TABLE `excute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `plancoding`
--
ALTER TABLE `plancoding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `preparedata`
--
ALTER TABLE `preparedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `prototype`
--
ALTER TABLE `prototype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `requirements`
--
ALTER TABLE `requirements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testing`
--
ALTER TABLE `testing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `valuerelease`
--
ALTER TABLE `valuerelease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `fk_admin_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_admin_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `approvals`
--
ALTER TABLE `approvals`
  ADD CONSTRAINT `fk_Approvals_Requirements1` FOREIGN KEY (`Requirements_id`) REFERENCES `requirements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_approvals_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `approver`
--
ALTER TABLE `approver`
  ADD CONSTRAINT `fk_approver_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_approver_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `coding`
--
ALTER TABLE `coding`
  ADD CONSTRAINT `fk_excute_coding` FOREIGN KEY (`excute_id`) REFERENCES `excute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `deploy`
--
ALTER TABLE `deploy`
  ADD CONSTRAINT `fk_delivered_Architect1` FOREIGN KEY (`Architect_id`) REFERENCES `excute` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  ADD CONSTRAINT `fk_emailreqtoapprover_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `excute`
--
ALTER TABLE `excute`
  ADD CONSTRAINT `fk_Architect_Approvals1` FOREIGN KEY (`Approvals_id`) REFERENCES `approvals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `fk_admin` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_approver` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_asis` FOREIGN KEY (`asis_id`) REFERENCES `asis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_budget` FOREIGN KEY (`budget_id`) REFERENCES `budget` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_doingby` FOREIGN KEY (`doingby_id`) REFERENCES `doingby` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tobe` FOREIGN KEY (`tobe_id`) REFERENCES `tobe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `historyreject`
--
ALTER TABLE `historyreject`
  ADD CONSTRAINT `fk_admin_r` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_approver_r` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_asis_r` FOREIGN KEY (`asis_id`) REFERENCES `asis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_budget_r` FOREIGN KEY (`budget_id`) REFERENCES `budget` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_doingby_r` FOREIGN KEY (`doingby_id`) REFERENCES `doingby` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tobe_r` FOREIGN KEY (`tobe_id`) REFERENCES `tobe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_r` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_login_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `plancoding`
--
ALTER TABLE `plancoding`
  ADD CONSTRAINT `fk_plancode_excute` FOREIGN KEY (`excute_id`) REFERENCES `excute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  ADD CONSTRAINT `fk_projectmanagement_approvals1` FOREIGN KEY (`approvals_id`) REFERENCES `approvals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_projectmanagement_emailreqtoapprover1` FOREIGN KEY (`emailreqtoapprover_id`) REFERENCES `emailreqtoapprover` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_projectmanagement_requirements1` FOREIGN KEY (`requirements_id`) REFERENCES `requirements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `prototype`
--
ALTER TABLE `prototype`
  ADD CONSTRAINT `fk_excute_prototype` FOREIGN KEY (`excute_id`) REFERENCES `excute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_prototype_confirmprototype1` FOREIGN KEY (`confirmprototype_id`) REFERENCES `confirmprototype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `requirements`
--
ALTER TABLE `requirements`
  ADD CONSTRAINT `fk_requirements_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_requirements_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_requirements_asis1` FOREIGN KEY (`asis_id`) REFERENCES `asis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_budget1` FOREIGN KEY (`budget_id`) REFERENCES `budget` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_doingby1` FOREIGN KEY (`doingby_id`) REFERENCES `doingby` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_tobe1` FOREIGN KEY (`tobe_id`) REFERENCES `tobe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `testing`
--
ALTER TABLE `testing`
  ADD CONSTRAINT `fk_excute_testing` FOREIGN KEY (`excute_id`) REFERENCES `excute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `valuerelease`
--
ALTER TABLE `valuerelease`
  ADD CONSTRAINT `fk_excute_value` FOREIGN KEY (`excute_id`) REFERENCES `excute` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
